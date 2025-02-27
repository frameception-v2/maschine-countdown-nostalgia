#### Setup
- [ ] Task 1: Basic Server Setup  
  - Depends on: None  
  ```text
  - Build: Express server with empty GET /api/image endpoint returning plain text
  - Outcome: Server runs on localhost:3000 and shows "OK" at /api/image
  ```

#### Core Features
- [ ] Task 2: Countdown Time Calculation  
  - Depends on: None  
  ```text
  - Build: Logic to calculate time remaining until Friday 17:00 UTC
  - Outcome: Console logs correct "Xd Y:Z:Remaining" or "EVENT TIME!" based on current time
  ```
- [ ] Task 3: Basic Image Generation  
  - Depends on: Task 1, Task 2  
  ```text
  - Build: Node Canvas integration returning PNG with plain countdown text
  - Outcome: /api/image returns image with black background and white time text
  ```
- [ ] Task 4: Event Time Detection  
  - Depends on: Task 2, Task 3  
  ```text
  - Build: Logic to show "EVENT TIME!" when target time passed
  - Outcome: Image displays event message when server time is after Friday 17:00 UTC
  ```

#### API Integration
- [ ] Task 5: Cache-Busting Implementation  
  - Depends on: Task 3  
  ```text
  - Build: Add timestamp parameter handling to image URL
  - Outcome: /api/image?ts=123 shows different cache headers than /api/image?ts=456
  ```

#### UI/UX
- [ ] Task 6: Core Retro Styling  
  - Depends on: Task 3  
  ```text
  - Build: Apply Comic Sans font, neon green text, hot pink border, basic texture background
  - Outcome: Image shows retro-styled text with correct colors and font
  ```
- [ ] Task 7: Refresh Button Functionality  
  - Depends on: Task 3, Task 5  
  ```text
  - Build: Frame definition with image and post_redirect refresh button
  - Outcome: Frame displays image and refresh button triggers image reload
  ```
- [ ] Task 8: Animated Elements Integration  
  - Depends on: Task 6  
  ```text
  - Build: Overlay scanlines texture and static "Under Construction" banner
  - Outcome: Image shows semi-transparent scanlines and banner in header
  ```
- [ ] Task 9: Error Fallback System  
  - Depends on: Task 3  
  ```text
  - Build: SVG fallback when canvas generation fails
  - Outcome: Server returns SVG with same styling when canvas throws error
  ```
- [ ] Task 10: Retro Effects Completion  
  - Depends on: Task 8  
  ```text
  - Build: Add blinking cursor effect, webring footer, and dithering patterns
  - Outcome: Image contains all mandatory 90s elements in specified positions
  ```

---

### Prioritization Rationale  
1. **Immediate Functionality**: Server setup (Task 1) and countdown logic (Task 2) form the backbone.  
2. **User-Facing Priority**: Image generation (Task 3) and retro styling (Task 6) ensure visible progress.  
3. **Critical Enhancements**: Cache-busting (Task 5) and refresh button (Task 7) improve usability.  
4. **Polish Last**: Complex effects (Task 8/10) and error handling (Task 9) follow core features.  

Dependencies are minimized early to parallelize work where possible (e.g., styling and cache-busting can progress after Task 3).