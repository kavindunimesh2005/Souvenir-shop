/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        coral: {
          50: '#FFF4F1',
          100: '#FFE6DF',
          200: '#FFD0C2',
          300: '#FFAF98',
          400: '#F77E5E',
          500: '#E85D3F',
          600: '#D14628',
          700: '#AE361D',
          800: '#902F1B',
          900: '#772B1C',
        },
        tropical: {
          50: '#EFFAF6',
          100: '#D8F3E8',
          200: '#B4E6D4',
          300: '#82D2B8',
          400: '#64B3A4', // Vish logo mint-teal accent
          500: '#1D8362',
          600: '#136F50',
          700: '#105941',
          800: '#0F4735',
          900: '#0D3B2C',
        },
        ocean: {
          50: '#F0F8FD',
          100: '#DFEFFA',
          200: '#B8E0F6',
          300: '#7AC8EF',
          400: '#36ACE4',
          500: '#0E87C4',
          600: '#0E6BA8',
          700: '#0B5587',
          800: '#0E4870',
          900: '#113D5E',
        },
        sunshine: {
          50: '#FFFBEB',
          100: '#FEF3C7',
          200: '#FDE58A',
          300: '#FBD24D',
          400: '#F4B41A',
          500: '#DF970B',
          600: '#C07406',
          700: '#995309',
          800: '#7E420E',
          900: '#6B3710',
        },
        cream: {
          50: '#FDFBF8',
          100: '#FBF8F3',
          200: '#F4EFE6',
          300: '#EAE0D0',
          400: '#DCCBB2',
          500: '#C8B191',
        },
        charcoal: {
          50: '#F6F5F4',
          100: '#E7E5E2',
          200: '#D1CDC7',
          300: '#B3ADA4',
          400: '#91897E',
          500: '#756D63',
          600: '#5D564E',
          700: '#4B453F',
          800: '#332F2B',
          900: '#1A1917',
          950: '#0F0E0D',
        },
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'Georgia', 'serif'],
        sans: ['"Plus Jakarta Sans"', 'system-ui', '-apple-system', 'sans-serif'],
        editorial: ['"Cormorant Garamond"', 'Georgia', 'serif'],
      },
      boxShadow: {
        'tropical': '0 12px 32px -8px rgba(26, 25, 23, 0.08), 0 4px 12px -2px rgba(232, 93, 63, 0.06)',
        'tropical-lg': '0 24px 48px -12px rgba(26, 25, 23, 0.14), 0 8px 20px -4px rgba(19, 111, 80, 0.08)',
        'glow-coral': '0 10px 25px -5px rgba(232, 93, 63, 0.4)',
        'glow-tropical': '0 10px 25px -5px rgba(19, 111, 80, 0.35)',
      },
      backgroundImage: {
        'batik-pattern': 'radial-gradient(circle at 20% 20%, rgba(232, 93, 63, 0.06) 0%, transparent 45%), radial-gradient(circle at 80% 30%, rgba(100, 179, 164, 0.08) 0%, transparent 45%), radial-gradient(circle at 50% 80%, rgba(244, 180, 26, 0.06) 0%, transparent 50%)',
      }
    },
  },
  plugins: [],
};

