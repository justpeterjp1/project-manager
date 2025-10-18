/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#3B82F6',
          light: '#60A5FA',
          dark: '#1E3A8A',
        },
        accent: {
          DEFAULT: '#F97316',
          light: '#FB923C',
        },
        background: {
          light: '#F9FAFB',
          dark: '#111827',
        },
        surface: {
          light: '#FFFFFF',
          dark: '#1F2937',
        },
        text: {
          primary: {
            light: '#111827',
            dark: '#F9FAFB',
          },
          secondary: {
            light: '#4B5563',
            dark: '#9CA3AF',
          },
        },
        border: {
          light: '#E5E7EB',
          dark: '#374151',
        },
      },
      boxShadow: {
        soft: '0 1px 2px rgba(0, 0, 0, 0.05)',
        medium: '0 4px 6px rgba(0, 0, 0, 0.1)',
        strong: '0 10px 15px rgba(0, 0, 0, 0.15)',
      },
      borderRadius: {
        xl: '12px',
        '2xl': '16px',
      },
    },
  },
  plugins: [],
};
