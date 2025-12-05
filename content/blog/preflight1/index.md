---
title: 🚁 Building a Reliable Preflight Checklist for ArduPilot Missions
summary: Practical ArduPilot preflight workflow to keep warehouse drone sorties predictable.
date: 2023-10-25
authors:
  - admin
image:
  filename: preflight.jpg
  caption: 'Photo: DroneX operations lab'
---

ArduPilot will gladly arm even when an exhausted crew member glances over a skipped step, so a written checklist is still the cheapest insurance policy we have. I treat every warehouse scan like an airline turn-around: confirm the mission objective, verify the firmware profile, then walk the airframe starting at the props and ending at the telemetry link. This ritual keeps me honest when the loading dock is noisy and the clock is unforgiving.

I split the workflow into three blocks—airframe, avionics, and environment—because each failure mode lives in a different place. The **airframe** pass covers structural fasteners, payload balance, battery IR, and prop condition. The **avionics** pass focuses on compass offsets, EKF status, RC calibration, and flight-mode mapping back to my mission computer. Finally, the **environment** pass asks whether the flight volume is still clear, whether new Wi-Fi access points have been installed, and whether emergency landing corridors are marked.

### Inputs that never get skipped

1. Battery lot number logged next to voltage sag readings.
2. ArduPilot parameter diff exported to the SD card before each firmware change.
3. Mission replay in SITL to validate fence boundaries after every map edit.
4. Telemetry heartbeat monitored for a full minute before arming.

Those four lines prevent 90% of my aborted missions. If a reading looks off, I hold the sortie and capture a photo or short clip that explains the anomaly—these artifacts slot neatly into maintenance tickets later.

Coming updates will include a laminated quick-reference card, the YouTube walkthrough of the flow, and copies of the compliance documents we submit to facilities. Until then, consider cloning this checklist into your own ArduPilot parameters, then tailor the thresholds to the batteries, payloads, and GNSS conditions you actually see on the warehouse floor.  