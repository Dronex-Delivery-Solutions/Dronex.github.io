---
title: 🖼️ ESP8266 Telemetry Bridge for UAV Inspection
summary: Build a dependable Wi-Fi tap on your ArduPilot MAVLink stream using an ESP8266.
date: 2023-10-25
authors:
  - admin
image:
  filename: telem.jpg
  caption: 'Photo: DroneX telemetry bench'
---

I keep running into facilities teams that want to witness telemetry during inventory flights without standing beside Mission Planner. The fix is an ESP8266 configured as a lightweight MAVLink bridge: it listens to the Pixhawk UART, republishes the packets over Wi-Fi, and serves a minimal dashboard that maintenance crews can open on any tablet. No extra modems, no flaky Bluetooth, just a five-dollar module that rides on the drone full-time.

## Architecture snapshot

*Hardware.* An ESP-12F with an AMS1117 regulator, logic shifters, and a removable JST harness. UART2 on the Pixhawk stays at 57600 baud; RTS/CTS are floated because the traffic volume is tiny. The module is velcro-mounted near the telemetry radio to keep RF cables short.

*Firmware.* ESPHome (or Arduino if you prefer) sets the chip to AP+STA mode, opens a UDP socket on port 14550, and relays MAVLink bytes with a simple pass-through loop. I also expose a `/health` endpoint that returns link RSSI, packet rate, and drop counts for quick debugging.

*Client side.* Any Ground Control Station can subscribe, but I also host a small Vue dashboard that displays battery percentage, GPS fix, fence status, and last-heartbeat time stamp. It is intentionally boring so operations teams trust it.

## Bring-up checklist

1. Calibrate the 5V rail under load; brown-outs are the number one failure mode.
2. Use the `SYSID_THISMAV` parameter to label packets when several airframes share the hangar network.
3. Save a tcpdump of a clean flight; it becomes the baseline for future EMI investigations.
4. Document the Wi-Fi channel plan before you walk into a warehouse saturated with scanners.

I will soon add oscilloscope captures, PCB Gerbers, and a narrated YouTube walkthrough of the wiring process. For now, this post captures the end-to-end flow so you can replicate the tap, verify telemetry during acceptance tests, and hand trustworthy data to stakeholders without handing them the pilot laptop.

