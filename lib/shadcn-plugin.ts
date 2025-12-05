import plugin from "tailwindcss/plugin";
import AnimatePlugin from "tailwindcss-animate";

export const shadcnPlugin = plugin(
  function ({ addBase }) {
    addBase({
      ":root": {
        // Royal Deep Blue & Digital Emerald Palette
        "--background": "240 20% 99%", // Very light cool grey
        "--foreground": "240 20% 15%", // Dark Blue-Grey text
        "--card": "0 0% 100%",
        "--card-foreground": "240 20% 15%",
        "--popover": "0 0% 100%",
        "--popover-foreground": "240 20% 15%",
        "--primary": "240 60% 25%", // Deep Royal Blue
        "--primary-foreground": "240 20% 98%",
        "--secondary": "150 50% 45%", // Digital Emerald
        "--secondary-foreground": "150 20% 98%",
        "--muted": "240 15% 95%",
        "--muted-foreground": "240 10% 45%",
        "--accent": "240 15% 92%", // Light Blue-Grey
        "--accent-foreground": "240 20% 20%",
        "--destructive": "0 70% 50%",
        "--destructive-foreground": "0 0% 98%",
        "--border": "240 15% 88%",
        "--input": "240 15% 88%",
        "--ring": "240 60% 25%",
        "--radius": "0.375rem", // Slightly sharp corners
        // Chart colors
        "--chart-1": "240 60% 25%",
        "--chart-2": "150 50% 45%",
        "--chart-3": "240 30% 40%",
        "--chart-4": "150 40% 55%",
        "--chart-5": "240 20% 70%",
      },
      ".dark": {
        // Dark Mode - Digital Fortress look
        "--background": "240 40% 10%", // Deep Navy Background
        "--foreground": "240 10% 95%",
        "--card": "240 35% 15%", // Slightly lighter navy
        "--card-foreground": "240 10% 95%",
        "--popover": "240 35% 15%",
        "--popover-foreground": "240 10% 95%",
        "--primary": "240 50% 40%", // Brighter Royal Blue
        "--primary-foreground": "240 20% 98%",
        "--secondary": "150 50% 45%", // Glowing Emerald
        "--secondary-foreground": "150 30% 10%",
        "--muted": "240 30% 20%",
        "--muted-foreground": "240 15% 60%",
        "--accent": "240 30% 20%",
        "--accent-foreground": "240 10% 95%",
        "--destructive": "0 70% 45%",
        "--destructive-foreground": "0 0% 98%",
        "--border": "240 30% 25%",
        "--input": "240 30% 25%",
        "--ring": "240 50% 40%",
      },
    });

    addBase({
      "*": {
        "@apply border-border": {},
      },
      body: {
        "@apply bg-background text-foreground": {},
      },
    });
  },
  {
    theme: {
      container: {
        center: true,
        padding: "2rem",
        screens: {
          "2xl": "1400px",
        },
      },
      extend: {
        colors: {
          border: "hsl(var(--border))",
          input: "hsl(var(--input))",
          ring: "hsl(var(--ring))",
          background: "hsl(var(--background))",
          foreground: "hsl(var(--foreground))",
          primary: {
            DEFAULT: "hsl(var(--primary))",
            foreground: "hsl(var(--primary-foreground))",
          },
          secondary: {
            DEFAULT: "hsl(var(--secondary))",
            foreground: "hsl(var(--secondary-foreground))",
          },
          destructive: {
            DEFAULT: "hsl(var(--destructive))",
            foreground: "hsl(var(--destructive-foreground))",
          },
          muted: {
            DEFAULT: "hsl(var(--muted))",
            foreground: "hsl(var(--muted-foreground))",
          },
          accent: {
            DEFAULT: "hsl(var(--accent))",
            foreground: "hsl(var(--accent-foreground))",
          },
          popover: {
            DEFAULT: "hsl(var(--popover))",
            foreground: "hsl(var(--popover-foreground))",
          },
          card: {
            DEFAULT: "hsl(var(--card))",
            foreground: "hsl(var(--card-foreground))",
          },
          // add your custom colors here
          "dark-1": "hsl(var(--brown-dark-1))",
          "dark-2": "hsl(var(--magenta-dark-1))",
          "dark-3": "hsl(var(--purple-dark-1))",
          "dark-4": "hsl(var(--dark-green-1))",
        },
        borderRadius: {
          lg: "var(--radius)",
          md: "calc(var(--radius) - 2px)",
          sm: "calc(var(--radius) - 4px)",
        },
        keyframes: {
          "accordion-down": {
            from: { height: "0" },
            to: { height: "var(--radix-accordion-content-height)" },
          },
          "accordion-up": {
            from: { height: "var(--radix-accordion-content-height)" },
            to: { height: "0" },
          },
        },
        animation: {
          "accordion-down": "accordion-down 0.2s ease-out",
          "accordion-up": "accordion-up 0.2s ease-out",
        },
      },
    },
    plugins: [AnimatePlugin],
  }
);
