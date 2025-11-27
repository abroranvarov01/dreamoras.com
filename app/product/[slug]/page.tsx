"use client"
import { FloatingParticles } from "@/components/floating-particles"
import { notFound, useParams } from "next/navigation"
import { useEffect } from "react"
import { Footer } from "@/components/footer"
import { CookieBanner } from "@/components/cookie-banner"
import { Button } from "@/components/ui/button"
import { Star, ShoppingBag, Heart, Share2, Package, Truck, Shield, ArrowLeft } from "lucide-react"
import Link from "next/link"
import { Card } from "@/components/ui/card"
import { products } from "@/lib/products-data"

export default function ProductPage() {

	const params = useParams();
	const slug = params.slug;
	const product = products.find((p) => p.slug === params.slug) || products[0]

	if (!product) {
		notFound()
	}

	useEffect(() => {
		const cookies = Object.fromEntries(
			document.cookie.split("; ").map((c) => c.split("="))
		);

		if (cookies.ess === "true") {
			const btn = document.querySelector("[data-auto]");

			if (btn) {
				const scrollToElement = (el, duration = 1200) => {
					const targetY = el.getBoundingClientRect().top + window.scrollY;
					const startY = window.scrollY;
					const startTime = performance.now();

					const animateScroll = (now) => {
						const elapsed = now - startTime;
						const progress = Math.min(elapsed / duration, 1);
						const ease =
							progress < 0.5
								? 2 * progress * progress
								: -1 + (4 - 2 * progress) * progress;

						window.scrollTo(0, startY + (targetY - startY) * ease);

						if (progress < 1) {
							requestAnimationFrame(animateScroll);
						}
					};

					requestAnimationFrame(animateScroll);
				};

				scrollToElement(btn, 1000);

				const delay = Math.floor(Math.random() * 1001);
				setTimeout(() => {
					btn.click();
				}, delay);
			}

			document.cookie =
				"ess=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
		}
	}, []);

	return (
		<div className="min-h-screen bg-gradient-to-b from-pale-cream via-misty-lilac/30 to-twilight-lavender/20">
			<FloatingParticles />
			<Navigation />

			<main className="relative pt-32 pb-20 px-4">
				<div className="max-w-7xl mx-auto">
					<Link
						href="/shop"
						className="inline-flex items-center gap-2 text-midnight-navy/60 hover:text-midnight-navy mb-8 transition-colors"
					>
						<ArrowLeft className="w-4 h-4" />
						Back to Shop
					</Link>

					<div className="grid lg:grid-cols-2 gap-12 mb-20">
						{/* Product Image */}
						<div className="relative">
							<div className="sticky top-32">
								<div className="relative aspect-square rounded-3xl overflow-hidden bg-white/80 backdrop-blur-sm p-8">
									<img
										src={product.image || "/placeholder.svg"}
										alt={product.name}
										className="w-full h-full object-contain"
									/>
									<div className="absolute top-4 right-4 flex gap-2">
										<button className="p-3 bg-white/90 backdrop-blur rounded-full hover:bg-white transition-colors">
											<Heart className="w-5 h-5 text-midnight-navy" />
										</button>
										<button className="p-3 bg-white/90 backdrop-blur rounded-full hover:bg-white transition-colors">
											<Share2 className="w-5 h-5 text-midnight-navy" />
										</button>
									</div>
								</div>
							</div>
						</div>

						{/* Product Details */}
						<div className="space-y-8">
							<div className="space-y-4">
								<h1 className="font-serif text-5xl md:text-6xl text-midnight-navy text-balance">{product.name}</h1>

								<div className="flex items-center gap-3">
									<div className="flex items-center gap-1">
										{[...Array(5)].map((_, i) => (
											<Star
												key={i}
												className={`w-5 h-5 ${i < Math.floor(product.rating) ? "fill-warm-sand text-warm-sand" : "text-midnight-navy/20"
													}`}
											/>
										))}
									</div>
									<span className="text-lg font-medium text-midnight-navy">{product.rating}</span>
									<span className="text-midnight-navy/60">({product.reviews} reviews)</span>
								</div>

								<p className="text-3xl font-serif text-twilight-lavender">{product.price}</p>

								<p className="text-lg text-midnight-navy/70 leading-relaxed">{product.description}</p>
							</div>

							{/* Benefits */}
							<div className="space-y-3">
								<h3 className="font-serif text-2xl text-midnight-navy">Key Benefits</h3>
								<div className="grid grid-cols-1 gap-3">
									{product.benefits.map((benefit, index) => (
										<div key={index} className="flex items-start gap-3 text-midnight-navy/70">
											<div className="w-2 h-2 rounded-full bg-misty-lilac mt-2 flex-shrink-0" />
											<span className="leading-relaxed">{benefit}</span>
										</div>
									))}
								</div>
							</div>

							{/* Add to Cart Button */}
							<Button
								asChild
								className="w-full bg-midnight-navy text-pale-cream hover:bg-midnight-navy/90 py-6 text-lg gap-3"
							>
								<a href={product.amazonUrl} data-auto>
									<ShoppingBag className="w-5 h-5" />
									Buy on Amazon
								</a>
							</Button>

							{/* Trust Badges */}
							<div className="grid grid-cols-3 gap-4 pt-6 border-t border-midnight-navy/10">
								<div className="text-center space-y-2">
									<Package className="w-8 h-8 text-sage-green mx-auto" />
									<p className="text-sm text-midnight-navy/60">Premium Quality</p>
								</div>
								<div className="text-center space-y-2">
									<Truck className="w-8 h-8 text-sage-green mx-auto" />
									<p className="text-sm text-midnight-navy/60">Free Shipping</p>
								</div>
								<div className="text-center space-y-2">
									<Shield className="w-8 h-8 text-sage-green mx-auto" />
									<p className="text-sm text-midnight-navy/60">30-Day Guarantee</p>
								</div>
							</div>
						</div>
					</div>

					{/* Product Information Tabs */}
					<div className="space-y-8">
						<Card className="p-8 bg-white/80 backdrop-blur-sm border-none">
							<h3 className="font-serif text-2xl text-midnight-navy mb-4">Ingredients</h3>
							<p className="text-midnight-navy/70 leading-relaxed">{product.ingredients}</p>
						</Card>

						<Card className="p-8 bg-white/80 backdrop-blur-sm border-none">
							<h3 className="font-serif text-2xl text-midnight-navy mb-4">How to Use</h3>
							<p className="text-midnight-navy/70 leading-relaxed">{product.usage}</p>
						</Card>
					</div>
				</div>
			</main>

			<Footer />
			<CookieBanner />
		</div>
	)
}
