### Step 1: Basic Server Setup
```text
- Build: Express server with empty GET /api/image endpoint returning plain text
- Outcome: Server runs on localhost:3000 and shows "OK" at /api/image
```

### Step 2: Countdown Time Calculation
```text
- Build: Logic to calculate time remaining until Friday 17:00 UTC
- Outcome: Console logs correct "Xd Y:Z:Remaining" or "EVENT TIME!" based on current time
```

### Step 3: Basic Image Generation
```text
- Build: Node Canvas integration returning PNG with plain countdown text
- Outcome: /api/image returns image with black background and white time text
```

### Step 4: Core Retro Styling
```text
- Build: Apply Comic Sans font, neon green text, hot pink border, basic texture background
- Outcome: Image shows retro-styled text with correct colors and font
```

### Step 5: Cache-Busting Implementation
```text
- Build: Add timestamp parameter handling to image URL
- Outcome: /api/image?ts=123 shows different cache headers than /api/image?ts=456
```

### Step 6: Refresh Button Functionality
```text
- Build: Frame definition with image and post_redirect refresh button
- Outcome: Frame displays image and refresh button triggers image reload
```

### Step 7: Event Time Detection
```text
- Build: Logic to show "EVENT TIME!" when target time passed
- Outcome: Image displays event message when server time is after Friday 17:00 UTC
```

### Step 8: Animated Elements Integration
```text
- Build: Overlay scanlines texture and static "Under Construction" banner
- Outcome: Image shows semi-transparent scanlines and banner in header
```

### Step 9: Error Fallback System
```text
- Build: SVG fallback when canvas generation fails
- Outcome: Server returns SVG with same styling when canvas throws error
```

### Step 10: Retro Effects Completion
```text
- Build: Add blinking cursor effect, webring footer, and dithering patterns
- Outcome: Image contains all mandatory 90s elements in specified positions
```