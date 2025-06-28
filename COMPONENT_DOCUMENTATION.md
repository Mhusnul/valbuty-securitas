# Valbuty Securitas - Component Documentation

## Overview

This documentation covers the enhanced, reusable components created for the Valbuty Securitas landing page with GSAP animations and modern styling.

## Key Features

- ✨ GSAP-powered scroll-triggered animations
- 🎨 Modern, responsive design with Tailwind CSS
- 🔧 Reusable component architecture
- 📱 Mobile-first responsive design
- 🎭 Lucide React icons integration
- ⚡ Performance optimized animations

## Component Architecture

### Core Components

#### 1. Section (`/src/component/Section.jsx`)

**Purpose**: Wrapper component for consistent section styling and animations.

**Props**:

- `children`: React nodes to render inside the section
- `className`: Additional CSS classes
- `background`: Predefined background styles ('transparent', 'white', 'gray', 'yellow', 'gradient')
- `padding`: Padding configuration (default: 'py-16')
- `animate`: Enable/disable scroll animations (default: true)

**Example**:

```jsx
<Section background="gradient" className="min-h-screen">
  <div className="container mx-auto">{/* Your content */}</div>
</Section>
```

#### 2. Button (`/src/component/Button.jsx`)

**Purpose**: Reusable button component with hover animations and variants.

**Props**:

- `children`: Button text/content
- `onClick`: Click handler function
- `variant`: Style variant ('primary', 'outline', 'ghost')
- `size`: Size variant ('sm', 'md', 'lg')
- `icon`: Lucide icon component
- `iconPosition`: Icon position ('left', 'right')
- `className`: Additional CSS classes

**Example**:

```jsx
<Button variant="primary" size="lg" icon={ArrowRight} onClick={handleClick}>
  Get Started
</Button>
```

#### 3. Card (`/src/component/Card.jsx`)

**Purpose**: Reusable card component for displaying content with animations.

**Props**:

- `category`: Category badge text
- `title`: Card title
- `author`: Author name
- `date`: Publication date
- `onSeeDetail`: Click handler for "see detail" action
- `className`: Additional CSS classes
- `animationDelay`: Delay before animation starts

**Example**:

```jsx
<Card
  category="Macro Economic"
  title="Indonesia Macro Update - BI Rate Update 22 May 2025"
  author="Fikri C. Permana"
  date="22 Mei 2024"
  onSeeDetail={() => handleSeeDetail(research.id)}
  animationDelay={0.2}
/>
```

### Enhanced Page Components

#### 1. Research (`/src/component/Research.jsx`)

**Features**:

- Dynamic research data rendering
- Staggered card animations
- Modern gradient backgrounds
- Newsletter subscription CTA
- Responsive grid layout

#### 2. Services (`/src/component/Services.jsx`)

**Features**:

- Service card hover animations with 3D effects
- Icon rotation animations
- Statistical counters
- Background decorative elements
- Professional service descriptions

#### 3. Hero (`/src/component/Hero.jsx`)

**Features**:

- Parallax background effects
- Floating animations
- Feature highlights with icons
- Multiple CTA buttons
- Decorative floating elements

#### 4. Navbar (`/src/component/Navbar.jsx`)

**Features**:

- Scroll-triggered background changes
- Dropdown animations
- Mobile-responsive menu
- Logo entrance animation
- Backdrop blur effects

## Animation System

### Custom Hooks (`/src/hooks/useAnimations.js`)

#### 1. `useFadeIn(delay, direction)`

**Purpose**: Fade in animation from specified direction.

- `delay`: Animation delay in seconds
- `direction`: 'up', 'down', 'left', 'right'

#### 2. `useStaggerAnimation(staggerDelay)`

**Purpose**: Staggered animations for multiple elements.

- `staggerDelay`: Delay between each element animation

#### 3. `useHoverScale(scale)`

**Purpose**: Scale animation on hover.

- `scale`: Scale factor (default: 1.05)

#### 4. `useParallax(speed)`

**Purpose**: Parallax scrolling effect.

- `speed`: Parallax speed multiplier

#### 5. `useTextReveal(delay)`

**Purpose**: Character-by-character text reveal animation.

- `delay`: Animation start delay

### GSAP Integration

All animations use GSAP with ScrollTrigger plugin for:

- Smooth, performant animations
- Scroll-triggered effects
- Advanced easing functions
- Timeline control
- Responsive animations

## Styling System

### Constants (`/src/utils/constants.js`)

Centralized configuration for:

- Animation durations and easing
- Color palette
- Responsive breakpoints
- Spacing values
- Component variants

### Tailwind CSS Integration

- Custom color schemes
- Responsive utilities
- Modern gradient backgrounds
- Shadow and backdrop effects

## Best Practices

### Component Reusability

1. Use props for customization
2. Provide sensible defaults
3. Allow className overrides
4. Export components individually

### Animation Performance

1. Use `transform` properties for animations
2. Avoid animating layout properties
3. Clean up event listeners and ScrollTriggers
4. Use `will-change` CSS property sparingly

### Responsive Design

1. Mobile-first approach
2. Consistent breakpoints
3. Flexible grid systems
4. Touch-friendly interactions

## Usage Examples

### Creating a New Animated Section

```jsx
import { Section, Card, Button } from "./component";
import { useFadeIn, useStaggerAnimation } from "./hooks/useAnimations";

function MySection() {
  const headerRef = useFadeIn(0, "up");
  const cardsRef = useStaggerAnimation(0.1);

  return (
    <Section background="gradient">
      <div ref={headerRef}>
        <h2>Section Title</h2>
      </div>
      <div ref={cardsRef} className="grid grid-cols-3 gap-6">
        {data.map((item, index) => (
          <Card key={item.id} {...item} animationDelay={index * 0.1} />
        ))}
      </div>
    </Section>
  );
}
```

### Adding Custom Animations

```jsx
import { useEffect, useRef } from "react";
import { gsap } from "gsap";

function CustomAnimatedComponent() {
  const elementRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      elementRef.current,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        scrollTrigger: {
          trigger: elementRef.current,
          start: "top 80%",
        },
      }
    );
  }, []);

  return <div ref={elementRef}>Animated content</div>;
}
```

## File Structure

```
src/
├── component/
│   ├── Section.jsx       # Layout wrapper component
│   ├── Button.jsx        # Reusable button component
│   ├── Card.jsx          # Content card component
│   ├── Research.jsx      # Enhanced research section
│   ├── Services.jsx      # Enhanced services section
│   ├── Hero.jsx          # Enhanced hero section
│   └── Navbar.jsx        # Enhanced navigation
├── hooks/
│   └── useAnimations.js  # Custom animation hooks
└── utils/
    └── constants.js      # Shared constants and configs
```

## Dependencies

- `gsap`: Animation library
- `lucide-react`: Icon library
- `react`: UI framework
- `tailwindcss`: CSS framework

## Development Notes

### Performance Considerations

- Animations are GPU-accelerated using transform properties
- ScrollTrigger instances are properly cleaned up
- Components use React.memo for optimization when needed

### Browser Support

- Modern browsers with ES6+ support
- CSS Grid and Flexbox support required
- Transform3d support for hardware acceleration

### Accessibility

- Respect user's motion preferences
- Maintain focus management
- Use semantic HTML elements
- Provide alternative text for icons
