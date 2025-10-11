
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
				tech: {
					blue: '#3B82F6',
					purple: '#8B5CF6',
					cyan: '#06B6D4',
					green: '#10B981'
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
				'professional-float': {
					'0%, 100%': { 
						transform: 'translateY(0px) translateX(0px) rotate(0deg) scale(1)' 
					},
					'25%': { 
						transform: 'translateY(-20px) translateX(15px) rotate(3deg) scale(1.05)' 
					},
					'50%': { 
						transform: 'translateY(-35px) translateX(0px) rotate(0deg) scale(1)' 
					},
					'75%': { 
						transform: 'translateY(-20px) translateX(-15px) rotate(-3deg) scale(0.95)' 
					}
				},
				'professional-float-large': {
					'0%, 100%': { 
						transform: 'translateY(0px) translateX(0px) rotate(0deg) scale(1)' 
					},
					'33%': { 
						transform: 'translateY(-25px) translateX(20px) rotate(4deg) scale(1.1)' 
					},
					'66%': { 
						transform: 'translateY(-15px) translateX(-20px) rotate(-4deg) scale(0.9)' 
					}
				},
				'professional-float-small': {
					'0%, 100%': { 
						transform: 'translateY(0px) translateX(0px) rotate(0deg) scale(1)' 
					},
					'50%': { 
						transform: 'translateY(-25px) translateX(12px) rotate(2deg) scale(1.15)' 
					}
				},
				'particle-drift': {
					'0%, 100%': { 
						transform: 'translateY(0px) translateX(0px) scale(1)',
						opacity: '0.6'
					},
					'25%': { 
						transform: 'translateY(-15px) translateX(8px) scale(1.2)',
						opacity: '0.8'
					},
					'50%': { 
						transform: 'translateY(-25px) translateX(0px) scale(0.8)',
						opacity: '0.4'
					},
					'75%': { 
						transform: 'translateY(-15px) translateX(-8px) scale(1.1)',
						opacity: '0.7'
					}
				},
				'gradient-x': {
					'0%, 100%': {
						'background-size': '200% 200%',
						'background-position': 'left center'
					},
					'50%': {
						'background-size': '200% 200%',
						'background-position': 'right center'
					}
				},
				'spin-slow': {
					'from': { transform: 'rotate(0deg)' },
					'to': { transform: 'rotate(360deg)' }
				},
				'glow-pulse': {
					'0%, 100%': { 
						'box-shadow': '0 0 20px rgba(59, 130, 246, 0.3), 0 0 40px rgba(139, 92, 246, 0.2)' 
					},
					'50%': { 
						'box-shadow': '0 0 40px rgba(59, 130, 246, 0.6), 0 0 80px rgba(139, 92, 246, 0.4)' 
					}
				},
				'float': {
					'0%, 100%': { transform: 'translateY(0px)' },
					'50%': { transform: 'translateY(-20px)' }
				},
				'bounce-slow': {
					'0%, 100%': { transform: 'translateY(0)' },
					'50%': { transform: 'translateY(-10px)' }
				},
				'pulse-glow': {
					'0%, 100%': { boxShadow: '0 0 20px rgba(59, 130, 246, 0.3)' },
					'50%': { boxShadow: '0 0 40px rgba(59, 130, 246, 0.6)' }
				},
				'slide-up': {
					'from': { transform: 'translateY(100px)', opacity: '0' },
					'to': { transform: 'translateY(0)', opacity: '1' }
				},
				'slide-down': {
					'from': { transform: 'translateY(-100px)', opacity: '0' },
					'to': { transform: 'translateY(0)', opacity: '1' }
				},
				'fade-in': {
					'from': { opacity: '0' },
					'to': { opacity: '1' }
				},
				'fade-in-up': {
					'from': { opacity: '0', transform: 'translateY(30px)' },
					'to': { opacity: '1', transform: 'translateY(0)' }
				},
				'scale-in': {
					'from': { opacity: '0', transform: 'scale(0.9)' },
					'to': { opacity: '1', transform: 'scale(1)' }
				},
				'wave': {
					'0%': { transform: 'rotate(0deg)' },
					'10%': { transform: 'rotate(14deg)' },
					'20%': { transform: 'rotate(-8deg)' },
					'30%': { transform: 'rotate(14deg)' },
					'40%': { transform: 'rotate(-4deg)' },
					'50%': { transform: 'rotate(10deg)' },
					'60%': { transform: 'rotate(0deg)' },
					'100%': { transform: 'rotate(0deg)' }
				},
				'roadmap-line': {
					'0%': { height: '0%' },
					'100%': { height: '100%' }
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'professional-float': 'professional-float 25s ease-in-out infinite',
				'professional-float-large': 'professional-float-large 30s ease-in-out infinite',
				'professional-float-small': 'professional-float-small 20s ease-in-out infinite',
				'particle-drift': 'particle-drift 22s ease-in-out infinite',
				'gradient-x': 'gradient-x 3s ease infinite',
				'spin-slow': 'spin-slow 3s linear infinite',
				'glow-pulse': 'glow-pulse 2s ease-in-out infinite',
				'float': 'float 6s ease-in-out infinite',
				'bounce-slow': 'bounce-slow 3s ease-in-out infinite',
				'pulse-glow': 'pulse-glow 2s ease-in-out infinite',
				'slide-up': 'slide-up 0.6s ease-out',
				'slide-down': 'slide-down 0.6s ease-out',
				'fade-in': 'fade-in 0.8s ease-out',
				'fade-in-up': 'fade-in-up 0.6s ease-out',
				'scale-in': 'scale-in 0.4s ease-out',
				'wave': 'wave 2.5s ease-in-out infinite',
				'roadmap-line': 'roadmap-line 3s ease-out forwards'
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
