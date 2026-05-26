---
title: "Zenoh + PX4 v1.17: Low-latency middleware for constrained drones"
summary: Zenoh reduces network overhead and gives lower-latency pub/sub for edge devices.
date: 2026-05-23
draft: true
image:
  caption: 
cover:
  image: zenoh-thumbnail.png
  position:
    x: 50
    y: 40
  overlay:
    enabled: true
    type: gradient
    opacity: 0.4
    gradient: bottom
  fade:
    enabled: true
    height: 80px
  icon:
    name: ✨
authors:
  - me
tags:
  - Research
  - Data Science
  - PX4
content_meta:
  trending: false
status: review
---
This post summarizes why Zenoh is gaining traction as a low-latency, lightweight
middleware option for constrained UAV platforms (PX4) and how `zenoh-pico` can
bridge microcontrollers and ROS 2 in practice. It draws on the Zenoh project
documentation and reporting on Zenoh's design goals and early adoption.

## TL;DR

- **Problem:** DDS is feature-rich but heavyweight for microcontrollers and
  lossy or constrained wireless links.
- **Solution:** Zenoh unifies pub/sub, storage and query with a compact wire
  protocol and implementations (including `zenoh-pico`) aimed at embedded
  devices.
- **Why it matters for PX4:** small flight controllers and companion nodes can
  exchange `rt` topics (telemetry, IMU, cmd_vel) with lower discovery and
  CPU/network overhead, enabling responsive teleop, offboard control, and
  tighter integration across heterogeneous networks.

## What is Zenoh

Zenoh is a data-centric protocol and middleware family designed to "manage data
at rest and in motion" while working across constrained devices and cloud
backends. Its design goals include low overhead, flexible topology (mesh,
routers, client/server), zero-copy where possible, and the ability to bridge to
DDS for ROS 2 interoperability.

Key takeaways from ZettaScale and coverage in the Robot Report:

- Zenoh removes topology constraints so compute and storage can be placed where
  it makes sense and data can take the shortest path.
- It was born from DDS research but rethought for constrained networks and
  embedded targets where DDS's assumptions (well-dimensioned wired networks,
  low packet loss, multicasting) do not hold.

## Zenoh + PX4: a practical pattern

For PX4-based drones you typically have three classes of devices:

- Real-time flight controller (PX4) with uORB topics.
- A lightweight companion node (ESP32/ARM MCU or SBC) that can run a small
  Zenoh client (`zenoh-pico`) or a Zenoh router.
- Ground-side ROS 2 or cloud services that expect DDS/ROS 2 topics.

Using a `zenoh-bridge-dds` or a Zenoh router (`zenohd`) you can map uORB or
PX4 topics to ROS 2 topics with minimal overhead. The embedded node publishes
sensor or control topics over Zenoh (TCP/UDP) to a router which bridges to DDS
on the Linux/ROS2 side.

Below is a canonical diagram from the Zenoh demo that shows a microcontroller
teleop example connecting through a Zenoh router and a Zenoh↔DDS bridge:

![Zenoh DDS scenario](https://zenoh.io/img/blog-ros2-zenoh-pico/scenario-zenoh-dds.png)

This pattern maps well to PX4: place a tiny Zenoh client next to PX4 (or on the
companion computer), run `zenohd` on a nearby Linux node or aboard an edge
router, and optionally run `zenoh-bridge-dds` to expose ROS 2 topics.

## Zenoh-pico: microcontrollers and teleop

`zenoh-pico` is a compact C implementation targeting microcontrollers (ESP32
example in Zenoh docs). The Zenoh team demonstrated a fun teleop demo where an
ESP32 + MPU6050 sends `Twist` messages to a `turtlesim` over Zenoh and the
Zenoh↔DDS bridge — a good proof-of-concept for constrained flight controllers
sending small control updates.

A few practical notes from the demo and docs:

- `zenoh-pico` uses a client-only mode today (lightweight peer mode is coming).
- You will usually deploy at least one `zenohd` router that embedded clients
  connect to (scouting/discovery or direct TCP connection).
- Discovery and bridge overhead can be much smaller than native DDS discovery;
  Zenoh bridge implementations reduce discovery traffic significantly.

Small code excerpt (conceptual) used in the demo to declare and write a
resource (see the Zenoh blog for full snippets and the demo repository):

```c
// connect, declare resource, serialize Twist, write
zn_session_t *s = zn_open(config);
unsigned long rid = zn_declare_resource(s, zn_rname("/rt/cmd_vel"));
zn_write(s, zn_rid(rid), (const uint8_t *)buf, buf_size);
```

## Why this helps constrained drones

- Lower discovery chatter and smaller protocol footprint free CPU and radio
  cycles on companion hardware.
- Zero-copy and shared-memory optimizations on capable nodes reduce latency for
  bulk data (e.g., image or point cloud transfers) when available.
- Flexible topology makes intermittent links and mobile routers less brittle;
  the same abstractions work from MCU → edge → cloud.

Mid-way architecture sketch for PX4 + Zenoh (conceptual):

![Zenoh in automotive/robotics](https://www.therobotreport.com/wp-content/uploads/2024/11/ZettaScale_Zenoh_cars-768x496.jpg)

## Next steps / how to try it on PX4

1. Pick a companion: ESP32 for a pure MCU proof-of-concept or an ARM SBC for
   faster iteration.
2. Build or use `zenoh-pico` on the board and publish a small telemetry or
   `cmd_vel`-like resource.
3. Run `zenohd` on a Linux node (ground station or companion) and optionally
   enable `zenoh-bridge-dds` to expose ROS 2 topics.
4. Verify with `ros2 topic echo` on the ROS side and iteratively measure
   latency and CPU usage.

For a step-by-step MCU example, see the Zenoh blog post "ROS 2 and
microcontrollers integration via Zenoh-pico" and the demo repo linked below.

## Sources & links

- ZettaScale / Robot Report coverage of Zenoh: https://www.therobotreport.com/zettascale-designs-zenoh-to-transcend-dds-for-automotive-ros-communications/
- Zenoh blog — ROS 2 & microcontrollers (zenoh-pico demo): https://zenoh.io/blog/2021-11-09-ros2-zenoh-pico/
- Zenoh demos & repos: https://github.com/eclipse-zenoh/zenoh-demos
