// Animation configurations
export const ANIMATION_CONFIG = {
  duration: {
    fast: 0.3,
    medium: 0.6,
    slow: 1.0,
  },
  easing: {
    smooth: "power2.out",
    bounce: "back.out(1.7)",
    elastic: "elastic.out(1, 0.3)",
  },
  stagger: {
    fast: 0.05,
    medium: 0.1,
    slow: 0.2,
  },
};

// Color palette
export const COLORS = {
  primary: {
    yellow: "#F59E0B",
    orange: "#EA580C",
    darkYellow: "#D97706",
  },
  neutral: {
    white: "#FFFFFF",
    gray50: "#F9FAFB",
    gray100: "#F3F4F6",
    gray600: "#4B5563",
    gray900: "#111827",
  },
};

// Responsive breakpoints
export const BREAKPOINTS = {
  sm: "640px",
  md: "768px",
  lg: "1024px",
  xl: "1280px",
  "2xl": "1536px",
};

// Common spacing values
export const SPACING = {
  section: "py-16 md:py-24",
  container: "container mx-auto px-4 max-w-7xl",
  grid: {
    responsive: "grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4",
    gap: "gap-6 md:gap-8",
  },
};

// Component variants
export const VARIANTS = {
  button: {
    primary: "bg-yellow-500 text-white hover:bg-yellow-600",
    outline: "border-2 border-yellow-800 text-yellow-800 hover:bg-yellow-50",
    ghost: "text-yellow-600 hover:text-yellow-700 hover:bg-yellow-50",
  },
  card: {
    default: "bg-white rounded-2xl shadow-lg hover:shadow-2xl",
    elevated: "bg-white rounded-2xl shadow-xl hover:shadow-2xl",
    gradient: "bg-gradient-to-br from-white to-yellow-50 rounded-2xl shadow-lg",
  },
};
