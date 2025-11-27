import type React from "react"
import type { Metadata, Viewport } from "next"
// <CHANGE> Import Cormorant Garamond for headings and Lato for body text
import { Cormorant_Garamond, Lato } from "next/font/google"
import "./globals.css"

const cormorant = Cormorant_Garamond({
	subsets: ["latin"],
	weight: ["300", "400", "600", "700"],
	variable: "--font-serif",
})
const lato = Lato({
	subsets: ["latin"],
	weight: ["300", "400", "700"],
	variable: "--font-sans",
})

// <CHANGE> Updated metadata for Dreamoras branding
export const metadata: Metadata = {
	title: "Dreamoras | Sleep Deeper. Relax Faster. Breathe Easier.",
	description:
		"Discover aromatherapy products that help you create nightly rituals for restorative sleep. Natural aromas + mindful design.",
	referrer: 'unsafe-url',
	icons: {
		icon: "/favicon.svg",
	},
}

// <CHANGE> Added viewport configuration for optimal mobile experience
export const viewport: Viewport = {
	themeColor: "#E9E6F8",
	width: "device-width",
	initialScale: 1,
}

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang="en">
			<body className={`${cormorant.variable} ${lato.variable} font-sans antialiased`}>
				{children}
			</body>
		</html>
	)
}
