/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      'white': '#ffffff',
      'black': '#000000',
      // 'gray': {
      //   50:'#f9fafb',
      //   100: '#f9fafb',
      //   200: '#e5e7eb',
      //   300: '#d1d5db',
      //   400: '#9ca3af',
      //   500: '#6b7280',
      //   600: '#4b5563',
      //   700: '#374151',
      //   800: '#374151',
      //   900: '#111827',
      // },
      // 'blue':{
      //   50:'#eff6ff',
      //   100: '#eff6ff',
      //   200: '#bfdbfe',
      //   300: '#bfdbfe',
      //   400: '#60a5fa',
      //   500: '#3b82f6',
      //   600: '#000000',
      //   700: '#1d4ed8',
      //   800: '#1e40af',
      //   900: '#1e3a8a',
      // }
      // ...
    },
  },
  theme: {
    boxShadow: {
      xs: '0 0 0 1px rgba(0, 0, 0, 0.05)',
      sm: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
      default: '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
      md: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
      lg: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
      xl: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
      '2xl': '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
      '3xl': '0 35px 60px -15px rgba(0, 0, 0, 0.3)',
      inner: 'inset 0 2px 4px 0 rgba(0, 0, 0, 0.06)',
      outline: '0 0 0 3px rgba(123, 123, 123, 0.1)',
      focus: '0 0 0 3px rgba(66, 153, 225, 0.5)',
      none: 'none',
    },
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      'white': '#ffffff',
      'black': '#000000',
      'gray': {
        50:'#f9fafb',
        100: '#f9fafb',
        200: '#F6FAFC',
        300: '#d1d5db',
        400: '#9ca3af',
        500: '#6b7280',
        600: '#4b5563',
        700: '#374151',
        800: '#374151',
        900: '#111827',
      },
      'blue':{
        50:'#eff6ff',
        100: '#eff6ff',
        200: '#bfdbfe',
        300: '#bfdbfe',
        400: '#60a5fa',
        500: '#0693C0',
        600: '#1F4283',
        700: '#1d4ed8',
        800: '#1e40af',
        900: '#1e3a8a',
      },
      'red':'#be123c',
      'yellow':"#facc15"
      // ...
    },
 
  },
  plugins: [],
}
