
import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				sidebar: {
					DEFAULT: 'hsl(var(--sidebar-background))',
					foreground: 'hsl(var(--sidebar-foreground))',
					primary: 'hsl(var(--sidebar-primary))',
					'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
					accent: 'hsl(var(--sidebar-accent))',
					'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
					border: 'hsl(var(--sidebar-border))',
					ring: 'hsl(var(--sidebar-ring))'
				},
				code: {
					DEFAULT: '#8b5cf6',
					foreground: '#c4b5fd'
				},
				yellow: {
					500: '#EAB308'
				},
				blue: {
					500: '#3B82F6'
				},
				green: {
					500: '#22C55E'
				},
				orange: {
					500: '#F97316'
				},
				purple: {
					500: '#8B5CF6'
				},
				wave: {
					dark: '#1A1F2C',
					medium: '#251c41',
					light: '#2e224f'
				}
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			keyframes: {
				'accordion-down': {
					from: { height: '0' },
					to: { height: 'var(--radix-accordion-content-height)' }
				},
				'accordion-up': {
					from: { height: 'var(--radix-accordion-content-height)' },
					to: { height: '0' }
				},
				'fade-in': {
					from: { opacity: '0' },
					to: { opacity: '1' }
				},
				'slide-up': {
					from: { transform: 'translateY(20px)', opacity: '0' },
					to: { transform: 'translateY(0)', opacity: '1' }
				},
				'typing': {
					from: { width: '0' },
					to: { width: '100%' }
				},
				'blink-caret': {
					'0%, 100%': { borderColor: 'transparent' },
					'50%': { borderColor: 'hsl(var(--accent))' }
				},
				'glow': {
					'0%, 100%': { 
						textShadow: '0 0 5px rgba(139, 92, 246, 0.3), 0 0 20px rgba(139, 92, 246, 0.3)' 
					},
					'50%': { 
						textShadow: '0 0 15px rgba(139, 92, 246, 0.6), 0 0 30px rgba(139, 92, 246, 0.4)' 
					}
				},
				'float': {
					'0%, 100%': { transform: 'translateY(0)' },
					'50%': { transform: 'translateY(-10px)' }
				},
				'pulse-glow': {
					'0%, 100%': { boxShadow: '0 0 5px 2px rgba(139, 92, 246, 0.3)' },
					'50%': { boxShadow: '0 0 15px 5px rgba(139, 92, 246, 0.6)' }
				},
				'wave1': {
					'0%, 100%': { transform: 'translate3d(0,15px,0)' },
					'50%': { transform: 'translate3d(0,0,0)' }
				},
				'wave2': {
					'0%, 100%': { transform: 'translate3d(0,0,0)' },
					'50%': { transform: 'translate3d(0,20px,0)' }
				},
				'wave3': {
					'0%, 100%': { transform: 'translate3d(0,10px,0) scale(1.05)' },
					'50%': { transform: 'translate3d(0,-5px,0) scale(1)' }
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'fade-in': 'fade-in 0.5s ease-out forwards',
				'slide-up': 'slide-up 0.5s ease-out forwards',
				'typing': 'typing 3.5s steps(40, end), blink-caret 1s step-end infinite',
				'glow': 'glow 3s ease-in-out infinite',
				'float': 'float 6s ease-in-out infinite',
				'pulse-glow': 'pulse-glow 3s ease-in-out infinite',
				'wave1': 'wave1 15s ease-in-out infinite',
				'wave2': 'wave2 18s ease-in-out infinite',
				'wave3': 'wave3 20s ease-in-out infinite'
			},
			boxShadow: {
				'glow': '0 0 15px 5px rgba(139, 92, 246, 0.3)'
			}
		}
	},
	safelist: [
		'bg-yellow-500/10', 'text-yellow-500', 'border-yellow-500/30',
		'bg-blue-500/10', 'text-blue-500', 'border-blue-500/30',
		'bg-green-500/10', 'text-green-500', 'border-green-500/30',
		'bg-orange-500/10', 'text-orange-500', 'border-orange-500/30',
		'bg-purple-500/10', 'text-purple-500', 'border-purple-500/30',
		'hover:bg-yellow-500/20', 'hover:bg-blue-500/20', 'hover:bg-green-500/20',
		'hover:bg-orange-500/20', 'hover:bg-purple-500/20',
	],
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
