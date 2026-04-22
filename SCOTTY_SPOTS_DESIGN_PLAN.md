# Scotty Spots - Presentation Website Design Plan

## Design Philosophy
**Theme**: "From Chaos to Clarity" - A visual journey showing the transformation of the study space reservation experience.

**Unique Approach**: Interactive storytelling through a scroll-based narrative with split-screen comparisons, animated transitions, and campus-inspired visual elements.

---

## Visual Identity

### Color Palette
- **Primary**: Deep Carnegie Red (#C41230) - CMU brand color
- **Secondary**: Warm Gold (#FFB81C) - Energy and innovation
- **Accent**: Electric Blue (#00A6D6) - Digital/tech forward
- **Neutrals**: 
  - Dark Charcoal (#2C3539) for text
  - Soft Cream (#F8F6F3) for backgrounds
  - Cool Gray (#E5E5E5) for dividers

### Typography
- **Headings**: Modern geometric sans-serif (e.g., Clash Display, Syne)
- **Body**: Clean readable sans-serif (e.g., Inter, DM Sans)
- **Accent**: Monospace font for tech elements (e.g., JetBrains Mono)

### Visual Style
- Isometric 3D illustrations of study spaces
- Micro-interactions and hover states
- Gradient overlays on images
- Glassmorphism cards for content sections
- Animated QR code patterns as decorative elements

---

## Site Structure

### 1. Hero Section - "The Problem Unfolds"
**Layout**: Full viewport height, split diagonally

**Left Side**: 
- Frustrated student illustration
- Animated phone screen showing confusing old interface
- Text overlay: "Finding a study space shouldn't feel like solving a puzzle"

**Right Side**:
- Clean Scotty Spots interface preview
- Smooth QR scan animation
- Green checkmark showing instant confirmation

**Scroll Indicator**: Animated arrow with "Discover the Solution"

---

### 2. Problem Context - "The Current Reality"
**Layout**: Horizontal scroll cards (mobile-friendly)

Three cards sliding in sequence:
1. **Card 1 - Fragmented System**
   - Icon: Broken puzzle pieces
   - Stats: "Only 23% of students use current system"
   - Visual: Screenshot of old system with red X marks

2. **Card 2 - Limited Coverage**
   - Icon: Map with gaps
   - Stats: "60% of study spaces not included"
   - Visual: Campus map with shaded "unavailable" areas

3. **Card 3 - Frustration**
   - Icon: Clock + stressed emoji
   - Stats: "Average 8+ minutes to find & book space"
   - Visual: Timeline showing wasted time

---

### 3. Solution Overview - "Meet Scotty Spots"
**Layout**: Center-aligned with expanding reveals

**Main Feature**: Interactive phone mockup in center
- Tap/click to cycle through app features
- Each tap reveals new screen with smooth transition

**Surrounding Elements** (appear on interaction):
- Floating feature cards that pop out:
  - QR Code Scanning
  - Live Availability
  - Visual Mapping
  - Expanded Coverage

**Background**: Animated grid pattern suggesting digital transformation

---

### 4. How It Works - "Three Simple Steps"
**Layout**: Vertical timeline with isometric illustrations

```
Step 1: SCAN
┌─────────────────────┐
│  Isometric view of  │
│  study table with   │ ──→  QR code graphic
│  student scanning   │
└─────────────────────┘
    ↓
Step 2: VIEW
┌─────────────────────┐
│  Phone showing map  │
│  with live dots     │ ──→  Green/Red availability indicators
│  (green = free)     │
└─────────────────────┘
    ↓
Step 3: RESERVE
┌─────────────────────┐
│  Confirmation with  │
│  confetti animation │ ──→  Success checkmark
└─────────────────────┘
```

Each step scrolls into view with staggered animation.

---

### 5. Coverage Map - "Every Corner Covered"
**Layout**: Interactive campus map

**Visual**: Illustrated top-down campus map with clickable buildings
- Hunt Library (largest, center-left)
- Sorrells Library
- Tepper School
- Other classroom buildings

**Interaction**: Hover/tap building to see:
- Number of spaces added
- Types (tables, rooms, classrooms)
- Small photo carousel

**Stats Bar Below Map**:
```
[========== 350+ Spaces ==========]
[==== 15 Buildings ====] [=== 3 Libraries ===]
```

---

### 6. Strategic Value - "Beyond Convenience"
**Layout**: Bento grid (asymmetric boxes)

```
┌─────────────┬──────┐
│             │      │
│  VALUE      │  UX  │
│  CREATION   │ EDGE │
│             │      │
├──────┬──────┴──────┤
│ COMP │             │
│ EDGE │  ORG IMPACT │
│      │             │
└──────┴─────────────┘
```

Each box contains:
- Icon
- 2-3 sentence description
- Hover reveals micro-chart or stat

**Content**:
- **Value Creation**: Reduces friction, increases space utilization
- **UX Edge**: Visual-first vs. text-list competitors
- **Competitive Position**: First QR-integrated campus system
- **Organizational Impact**: Data-driven space planning insights

---

### 7. Social Impact - "Community & Equity"
**Layout**: Two-column narrative

**Left**: Illustration of diverse student group
**Right**: Text blocks with icons

Topics:
- **Accessibility**: Easier for students with different abilities
- **Equity**: Fair access to premium study spaces
- **Community**: Reduces conflict over space "ownership"
- **Sustainability**: Data shows underused spaces, informs future planning

**Bottom**: Pull quote from user research in large stylized text

---

### 8. Expected Impact - "The Numbers"
**Layout**: Animated counter dashboard

Three large metrics that count up on scroll:
```
┌──────────────┐  ┌──────────────┐  ┌──────────────┐
│     85%      │  │     10min    │  │    400+      │
│              │  │              │  │              │
│  Adoption    │  │ Time Saved   │  │ New Spaces   │
│  Projected   │  │  per Week    │  │  Accessible  │
└──────────────┘  └──────────────┘  └──────────────┘
```

**Below**: Line graph showing projected adoption over semester

---

### 9. Team & Process - "The Builders"
**Layout**: Circular arrangement (innovative vs. linear grid)

**Center**: Scotty Spots logo
**Around it**: Team member cards in circle

Each card (on hover/tap):
- Photo/avatar
- Name + Role
- Key contribution
- LinkedIn icon

**Below**: Timeline infographic showing:
- Research phase
- Design phase
- Development phase
- Testing phase

---

### 10. Call to Action - "Join the Movement"
**Layout**: Full-width gradient background

**Center Content**:
- Large heading: "Ready to transform your study experience?"
- Two CTAs side by side:
  1. "Try the Demo" (primary button)
  2. "View Documentation" (secondary button)

**Footer**: 
- Simple links (Contact, GitHub, Documentation)
- CMU affiliation
- Copyright

---

## Unique Differentiators

### What Makes This NOT Generic:

1. **Diagonal Split Screens** instead of standard horizontal sections
2. **Isometric 3D Illustrations** instead of stock photos
3. **Interactive Campus Map** instead of static images
4. **Horizontal Scroll Cards** for problem section
5. **Bento Grid Layout** for strategic analysis
6. **Circular Team Layout** instead of standard grid
7. **Animated Counters & Charts** for impact metrics
8. **QR Pattern Motifs** throughout as decorative elements
9. **Glassmorphism & Depth** instead of flat design
10. **Story-Driven Flow** with narrative pacing

---

## Technical Recommendations

### Animations
- Scroll-triggered animations (Intersection Observer API)
- Smooth transitions with Motion/Framer Motion
- Counter animations for stats (CountUp.js pattern)
- Parallax effects on hero section

### Interactivity
- Clickable phone mockup with screen changes
- Hoverable campus map with building details
- Expandable team member cards
- Progress indicator showing scroll position

### Responsive Strategy
- Mobile: Convert horizontal scrolls to vertical
- Mobile: Stack split-screens vertically
- Mobile: Simplify isometric views to 2D
- Tablet: Maintain most interactions, adjust sizing

---

## Content Tone

- **Professional** but conversational
- **Student-focused** language (avoid corporate jargon)
- **Problem-solution** narrative structure
- **Data-backed** claims with clear sources
- **Enthusiastic** about innovation without overselling

---

## Next Steps

1. Review and approve design direction
2. Gather assets (photos, logos, team info)
3. Create high-fidelity mockups for key sections
4. Build interactive prototype
5. User test with small group
6. Refine and launch
