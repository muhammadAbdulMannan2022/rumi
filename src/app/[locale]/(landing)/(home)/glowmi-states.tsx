import React from 'react'
import { SiteHeading } from '@/components/shared'
import { getTranslations, getLocale } from 'next-intl/server'

export const GlowmiStates = async () => {
  const t = await getTranslations('home.understands')
  const locale = await getLocale()
  const isAR = locale === 'ar'

  const cardsStates = [
    {
      key: 'scan',
      index: t('cards.scan.index'),
      title: t('cards.scan.title'),
      subtitle: t('cards.scan.subtitle'),
    },
    {
      key: 'personalized',
      index: t('cards.personalized.index'),
      title: t('cards.personalized.title'),
      subtitle: t('cards.personalized.subtitle'),
    },
    {
      key: 'results',
      index: t('cards.results.index'),
      title: t('cards.results.title'),
      subtitle: t('cards.results.subtitle'),
    },
  ]

  const titleFont = isAR
    ? 'var(--font-ibm-plex-arabic), sans-serif'
    : 'var(--font-cormorant-garamond), serif'
  const bodyFont = isAR
    ? 'var(--font-ibm-plex-arabic), sans-serif'
    : 'var(--font-inter), sans-serif'

  return (
    <section className="w-full border-y border-[#E8E4DF]/70 bg-[#FAF9F5] py-20 md:py-24 lg:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <SiteHeading
          heading={t('title')}
          subHeading={t('desc')}
          wrapperClassname="mb-14 lg:mb-20 text-center"
          headingClassName="text-[28px] md:text-[34px] lg:text-[40px] font-light leading-tight text-[#1A2E1A]"
          subHeadingClassname="text-[#66605B] text-[15px] md:text-[17px] leading-[1.7] max-w-xl mt-4 font-light mx-auto"
        />

        <div
          className={`grid grid-cols-1 gap-10 md:grid-cols-3 md:gap-0 ${isAR ? 'md:divide-x-reverse' : ''} md:divide-x md:divide-[#E2DDD7]`}
        >
          {cardsStates.map((data) => (
            <div
              key={data.key}
              className="group flex flex-col items-center px-4 text-center transition-all duration-300 md:px-8 lg:px-12"
            >
              {/* Step Index Number */}
              <span
                className="mb-2 block text-xs font-light tracking-[0.2em] text-[#9E948A] opacity-90 md:text-sm"
                style={{ fontFamily: titleFont }}
              >
                {data.index}
              </span>

              {/* Delicate Horizontal Accent Line */}
              <div className="mb-6 h-[1px] w-8 bg-[#1A2E1A]/20 transition-all duration-300 group-hover:w-12 group-hover:bg-[#1A2E1A]/40" />

              {/* Title */}
              <h3
                className="mb-3.5 text-lg leading-snug font-medium text-[#1A2E1A] md:text-xl"
                style={{ fontFamily: titleFont }}
              >
                {data.title}
              </h3>

              {/* Description */}
              <p
                className="max-w-[300px] text-sm leading-[1.75] font-light text-[#5C5650] md:text-[15px]"
                style={{ fontFamily: bodyFont }}
              >
                {data.subtitle}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
