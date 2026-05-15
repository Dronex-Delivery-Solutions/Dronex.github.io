---
title: Solutions
date: 2026-01-17
type: landing

design:
  spacing: "6rem"

sections:
  - block: hero
    content:
      title: Enterprise Solutions
      text: We do not just identify products. We understand condition, placement, movement, and context across your entire operation.
    design:
      background:
        image:
          filename: solution-header.png
          filters:
            brightness: 0.5
          size: cover
          position: center
          parallax: false
  - block: cta-image-paragraph
    id: solutions
    content:
      items:
        - title: Physical AI Compliance That Works While You Work
          text: Build a living digital twin of warehouse activity and automate compliance checks without slowing operations.
          feature_icon: check
          features:
            - "Digital twin logic maps aisle behavior, dwell time, and risk zones in real time"
            - "Continuous monitoring with zero operational downtime"
            - "Real-time violation detection with instant, actionable alerts"
          button:
            text: Request Demo
            url: "mailto:hello@dronex.dev"
        - title: See Through the Obscured with AI That Reads What Humans Miss
          text: Accurately identify items even when product codes are damaged, obscured, pallet wrapped, or only partially visible.
          feature_icon: check
          features:
            - "Decodes damaged, smudged, or faded labels with 99%+ accuracy"
            - "Reads through pallet wrap, dust, and poor lighting conditions"
            - "Partial code reconstruction using predictive AI models"
          image: solution-item2.png
          button:
            text: Request Demo
            url: "mailto:hello@dronex.dev"

    design:
      css_class: "bg-gray-100 dark:bg-gray-900"

  - block: markdown
    id: digital-twin-video
    content:
      title: Physical AI in Action
      text: |
        <figure>
          <video autoplay loop muted playsinline preload="metadata" src="/media/videos/solution-item1.mp4" aria-label="Physical AI digital twin monitoring warehouse shelf utilization"></video>
          <figcaption class="hidden">Physical AI digital twin visualizes underutilized zones, shelf movement patterns, and optimization opportunities in real time.</figcaption>
        </figure>
        Physical AI and digital twin logic continuously map inventory position, movement, and shelf utilization to surface compliance risks and optimization opportunities.
    design:
      spacing:
        padding: ["2rem", "0", "2rem", "0"]

  - block: cta-card
    content:
      title: Launch Your Autonomous Inventory Sprint
      text: Map a 30-minute strategy session with our engineers—leave with a flight-ready checklist, ROI snapshot, and integration roadmap.
      button:
        text: Schedule a Demo
        url: "mailto:hello@dronex.dev"
    design:
      card:
        css_style: "background: linear-gradient(120deg, #0b1f4d 0%, #1f7a8c 60%, #42c6ff 100%); color: #ffffff;"

---
