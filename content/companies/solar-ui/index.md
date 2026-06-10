---
title: "Solar UI"
summary: "Mission dashboard for autonomous solar panel cleaning, focused on fleet awareness, cleaning productivity, asset coverage, and post-mission review."
date: 2026-06-10
weight: 20
image:
  filename: thumbnail.png
tags:
  - Solar Operations
  - Dashboard
  - Fleet Monitoring
content_meta:
  content_type: Project
---

Solar UI is a mission dashboard concept for autonomous solar panel washing operations. It is designed to complement flight-control tools such as QGroundControl, not replace them. Vehicle setup, mission upload, safety actions, and manual operator control remain in the ground control station, while Solar UI focuses on the operational layer around cleaning missions.

## Operational Focus

- **Mission visualization:** Track cleaning progress across solar fields, arrays, rows, and assigned mission zones.
- **Fleet and asset awareness:** Monitor vehicle state, cleaning coverage, water or payload status, and mission readiness.
- **Productivity metrics:** Review cleaned area, missed segments, route efficiency, and time spent per asset.
- **Post-mission review:** Turn mission logs into practical reports for maintenance, billing, and operational planning.

## Integration Direction

The intended vehicle stack can integrate PX4, MAVLink, ROS or ROS 2, and QGroundControl. Solar UI sits above that stack as a focused operations dashboard for teams managing repeatable cleaning missions at scale.

## Delivery Scope

DroneX can help define the dashboard architecture, telemetry model, map-based mission interface, backend services, and review workflows needed to bring autonomous solar cleaning into a production-ready operating process.
