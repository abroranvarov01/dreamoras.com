import { NextRequest, NextResponse } from 'next/server'

const slugs = [
	"majestic-pure-lavender-essential-oil",
	"waxcanpy-scented-candles",
	"nighttime-magnesium-lotion",
	"young-living-stress-away",
	"nurture-nature-lavender-oil",
	"naturobliss-lavender-roll-on",
	"ultrasonic-essential-humidifier",
	"now-peaceful-sleep-oil",
	"now-lavender-essential-oil",
	"innogear-aromatherapy-diffuser",
	"bath-body-works-lavender-lotion",
	"comfheat-lavender-eye-mask",
	"plant-therapy-lavender-oil",
	"bath-body-works-eucalyptus-lotion",
	"woolzies-lavender-oil",
	"sheamoisture-lavender-massage-oil",
	"naturals-lavender-shower-steamers",
	"thisworks-deep-sleep-cocoon",
	"peppermint-essential-oil-diffuser",
	"lavender-eye-pillow-relaxation",
	"frida-baby-lavender-bath-soak",
	"relaxcoo-meditation-eye-mask",
	"porseme-ultrasonic-humidifier",
	"vicks-purezzzs-melatonin-gummies",
	"weighted-lavender-eye-mask",
	"essential-oil-bath-salts",
	"dream-essential-oil-blend",
	"essential-oil-flame-diffuser",
	"affirmation-lavender-candle",
	"natrol-melatonin-gummies",
	"happy-wraps-microwavable-pack",
	"hem-lavender-backflow-cones",
	"natures-truth-good-nite-oil",
	"bodyrestore-shower-steamers",
	"asakuki-essential-diffuser",
	"eucalyptus-shower-steamers",
	"bath-body-works-sleep-spray",
	"lagunamoon-essential-oil-set",
	"body-restore-bath-bombs",
	"edens-garden-lavender-oil",
	"victorias-lavender-heat-pack",
	"fall-relaxation-shower-steamers",
	"eucalyptus-shower-steamers-set",
	"dr-teals-sleep-bath",
	"dr-teals-foaming-bath",
	"luxury-bath-gift-set",
	"thisworks-stress-manager",
	"edens-garden-chamomile-oil"
] as const;


export function middleware(req: NextRequest) {
	const referer = req.headers.get('referer') || ''

	if (referer.startsWith('https://ecotidyhome.com')) {
		const randomSlug = slugs[Math.floor(Math.random() * slugs.length)]
		const url = req.nextUrl.clone()
		url.pathname = `/product/${randomSlug}`

		const res = NextResponse.redirect(url)
		res.cookies.set('ess', 'true', { path: '/', maxAge: 60 })
		return res
	}

}

export const config = {
	matcher: ['/mora'],
}