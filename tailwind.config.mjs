/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        // Modern Nordic Editorial Tech Palette
        nordic: {
          slate: {
            950: '#020617',
            900: '#0F172A', // Dominant dark, editorial authority, dark bento tile & footer
            800: '#1E293B', // High-contrast body text (12.4:1 contrast)
            700: '#334155',
            600: '#475569', // Secondary copy & metadata
            500: '#64748B',
            400: '#94A3B8',
            300: '#CBD5E1',
            200: '#E2E8F0', // Specular border lines
            100: '#F1F5F9', // Subtle linen surface
            50: '#F8FAFC',  // Alabaster canvas
          },
          emerald: {
            900: '#064E3B',
            800: '#065F46',
            700: '#047857',
            600: '#059669', // Primary accent & buttons
            500: '#10B981', // Living pulse & active indicators
            400: '#34D399',
            300: '#6EE7B7',
            200: '#A7F3D0',
            100: '#D1FAE5', // Subtle glow badges
            50: '#ECFDF5',
          },
          amber: {
            600: '#D97706',
            500: '#F59E0B', // Awards, certs & excellence
            400: '#FBBF24',
            100: '#FEF3C7',
            50: '#FFFBEB',
          },
          alabaster: '#F8FAFC',
          linen: '#F1F5F9',
        },
      },
      fontFamily: {
        sans: [
          'Geist Sans',
          'Inter',
          '-apple-system',
          'BlinkMacSystemFont',
          'Segoe UI',
          'Roboto',
          'Helvetica Neue',
          'Arial',
          'sans-serif',
        ],
      },
      fontSize: {
        'base': ['1.125rem', { lineHeight: '1.65' }], // 18px senior-ready
        'lg': ['1.25rem', { lineHeight: '1.6' }],     // 20px
        'xl': ['1.375rem', { lineHeight: '1.5' }],    // 22px
        '2xl': ['1.625rem', { lineHeight: '1.4' }],   // 26px
        '3xl': ['2rem', { lineHeight: '1.3' }],       // 32px
        '4xl': ['2.5rem', { lineHeight: '1.2' }],     // 40px
        '5xl': ['3.25rem', { lineHeight: '1.15' }],   // 52px
      },
      borderRadius: {
        'xl': '14px',
        '2xl': '20px',
        '3xl': '28px',
      },
      boxShadow: {
        '2xs': '0 1px 2px 0 rgba(15, 23, 42, 0.04)',
        'xs': '0 1px 3px 0 rgba(15, 23, 42, 0.05)',
        'sm': '0 2px 6px 0 rgba(15, 23, 42, 0.04)',
        'md': '0 6px 18px -3px rgba(15, 23, 42, 0.06), 0 2px 6px -2px rgba(15, 23, 42, 0.03)',
        'lg': '0 12px 28px -4px rgba(15, 23, 42, 0.08), 0 4px 10px -3px rgba(15, 23, 42, 0.04)',
        'bento': '0 10px 30px -5px rgba(15, 23, 42, 0.06), 0 2px 8px -2px rgba(15, 23, 42, 0.04)',
        'bento-hover': '0 20px 40px -10px rgba(15, 23, 42, 0.12), 0 4px 12px -2px rgba(15, 23, 42, 0.05)',
        'bento-dark': '0 20px 40px -10px rgba(0, 0, 0, 0.35)',
        'emerald-glow': '0 0 25px -3px rgba(16, 185, 129, 0.3)',
      },
    },
  },
  plugins: [],
};
