---
title: 'Home'
date: 2026-01-17
type: landing

design:
  # Default section spacing
  spacing: "6rem"

sections:
  - block: hero
    content:
      title: Redefining Efficiency in the Age of Warehouse Automation 
      text:  Powered by DroneX  
      primary_action:
        text: Explore Solutions
        url: "/solutions/"
        icon: rocket-launch
      secondary_action:
        text: Blog
        url: "/blog/"
    design:
      background:
        color: "navy"
        image:
          # Add your image background to `assets/media/`.
          filename: Background.png
          filters:
            brightness: 0.5
          size: cover
          position: center
          parallax: false

  - block: cta-image-paragraph
    id: about
    content:
      items:
        - title: About DroneX
          text: |
            DroneX is building the next generation of autonomous aerial logistics. We develop intelligent drone systems designed to deliver goods quickly, safely, and cost-effectively — especially in dense urban environments where traditional delivery methods struggle.
            
            We focus on practical, deployable solutions — from autonomous navigation and swarm coordination to cloud-based fleet operations. Whether serving e-commerce platforms, local businesses, or logistics providers, DroneX aims to make aerial delivery a viable, everyday service.
          feature_icon: check
          features:
            - "Autonomous navigation and flight planning"
            - "Real-time fleet coordination and monitoring"
            - "Cloud-based operations and analytics"
          image: UAV_design.jpg
          button:
            text: Explore Solutions
            url: /solutions/
    design:
      background:
        color: "#f5f7fa"
      css_class: "dark:bg-gray-900"     
  - block: features
    id: features
    content:
      title: Features
      text: Revolutionize your warehouse operations with autonomous drone technology 🚁
      items:
        - name: Real-Time Tracking
          icon: magnifying-glass
          description: Monitor inventory levels and drone locations in real-time with our advanced tracking system.
        - name: Ultra-Fast Operations
          icon: bolt
          description: Complete inventory scans up to 10x faster than traditional methods with autonomous drone fleets.
        - name: Easy Integration
          icon: sparkles
          description: Seamlessly integrate with your existing warehouse management system in hours, not weeks!
        - name: AI-Powered Analytics
          icon: code-bracket
          description: Smart algorithms optimize flight paths and provide predictive insights for inventory management.
        - name: Enterprise Ready
          icon: star
          description: Trusted by leading logistics companies for mission-critical warehouse operations.
        - name: Scalable Solution
          icon: rectangle-group
          description: From single warehouse to multi-site operations - scale effortlessly as your business grows!
  - block: markdown
    content:
      title: ""
      text: |
        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 3rem; padding: 4rem 2rem;">
          <div>
            <h3 style="color: #42c6ff; margin-bottom: 1.5rem; font-size: 1.1rem; font-weight: 600;">Quick Links</h3>
            <ul style="list-style: none; padding: 0; margin: 0;">
              <li style="margin-bottom: 0.75rem;"><a href="/" style="color: #ffffff; text-decoration: none; transition: color 0.3s;">Home</a></li>
              <li style="margin-bottom: 0.75rem;"><a href="/solutions/" style="color: #ffffff; text-decoration: none; transition: color 0.3s;">Solutions</a></li>
              <li style="margin-bottom: 0.75rem;"><a href="/blog/" style="color: #ffffff; text-decoration: none; transition: color 0.3s;">Blog</a></li>
              <li><a href="#contact" style="color: #ffffff; text-decoration: none; transition: color 0.3s;">Contact</a></li>
            </ul>
          </div>
          <div>
            <h3 style="color: #42c6ff; margin-bottom: 1.5rem; font-size: 1.1rem; font-weight: 600;">Resources</h3>
            <ul style="list-style: none; padding: 0; margin: 0;">
              <li style="margin-bottom: 0.75rem;"><a href="/blog/" style="color: #ffffff; text-decoration: none; transition: color 0.3s;">Documentation</a></li>
              <li style="margin-bottom: 0.75rem;"><a href="/blog/" style="color: #ffffff; text-decoration: none; transition: color 0.3s;">Case Studies</a></li>
              <li style="margin-bottom: 0.75rem;"><a href="#" style="color: #ffffff; text-decoration: none; transition: color 0.3s;">API Reference</a></li>
              <li><a href="#" style="color: #ffffff; text-decoration: none; transition: color 0.3s;">Support</a></li>
            </ul>
          </div>
          <div>
            <h3 style="color: #42c6ff; margin-bottom: 1.5rem; font-size: 1.1rem; font-weight: 600;">Legal</h3>
            <ul style="list-style: none; padding: 0; margin: 0;">
              <li style="margin-bottom: 0.75rem;"><a href="#" style="color: #ffffff; text-decoration: none; transition: color 0.3s;">Privacy Policy</a></li>
              <li style="margin-bottom: 0.75rem;"><a href="#" style="color: #ffffff; text-decoration: none; transition: color 0.3s;">Terms of Service</a></li>
              <li style="margin-bottom: 0.75rem;"><a href="#" style="color: #ffffff; text-decoration: none; transition: color 0.3s;">Cookie Policy</a></li>
              <li><a href="#" style="color: #ffffff; text-decoration: none; transition: color 0.3s;">Compliance</a></li>
            </ul>
          </div>
        </div>
        <div style="border-top: 1px solid rgba(66, 198, 255, 0.3); margin-top: 3rem; padding-top: 2rem; text-align: center; color: rgba(255, 255, 255, 0.8); font-size: 0.9rem;">
          <p style="margin: 0;">© Copyright 2026, DroneX. All Rights Reserved | <a href="#" style="color: #42c6ff; text-decoration: none;">Privacy</a> | <a href="#" style="color: #42c6ff; text-decoration: none;">Terms</a></p>
        </div>
    design:
      background:
        color: "#0b1f4d"
      spacing:
        padding: ["2rem", "0", "2rem", "0"]

---