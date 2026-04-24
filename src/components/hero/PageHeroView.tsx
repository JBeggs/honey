import Link from 'next/link'
import SafeImage from '@/components/media/SafeImage'
import type { PageHero } from '@/lib/page-hero'

/**
 * Renders the uploaded hero markup for a page. Mirrors the home-page hero
 * styling (full-bleed image + gradient overlay + left-aligned text block) so
 * the admin-uploaded hero drops in seamlessly wherever <PageHero/> is used.
 *
 * `cta_label` / `cta_href` are read from the model but ship unused in the v1
 * editor; they render as a secondary CTA when both are present for forward
 * compatibility.
 */
export default function PageHeroView({ hero }: { hero: PageHero }) {
  const hasCta = Boolean(hero.ctaLabel && hero.ctaHref)

  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0">
        <SafeImage
          src={hero.imageUrl}
          alt=""
          kind="hero"
          fill
          priority
          sizes="100vw"
          className="absolute inset-0"
          imgClassName="object-cover"
        />
        <div className="absolute inset-0 hero-gradient-overlay" aria-hidden />
      </div>

      <div className="relative container-wide py-24 md:py-32 text-on-dark">
        <div className="max-w-2xl">
          {hero.title && (
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-heading mb-4">
              {hero.title}
            </h1>
          )}
          {hero.subtitle && (
            <p className="text-lg md:text-xl text-on-dark-muted mb-8 max-w-xl">
              {hero.subtitle}
            </p>
          )}
          {hasCta && (
            <div className="flex flex-wrap gap-4">
              <Link
                href={hero.ctaHref}
                className="btn btn-accent text-base px-6 py-3"
              >
                {hero.ctaLabel}
              </Link>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
