"use client"
import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

export interface SliderButton {
  label: string
  href?: string
  onClick?: () => void
  /** Text color of the button, e.g. "#9333ea" (used on the primary button) */
  color?: string
}

export interface SliderSlideType {
  image: string
  title: string
  subtitle?: string
  primaryButton?: SliderButton
  secondaryButton?: SliderButton
}

interface MySliderPropsType {
  spaceBetween?: number
  slidesPerView?: number
  slides: SliderSlideType[]
  gradientFrom?: string
  gradientTo?: string
  /** Any CSS gradient direction: "to right", "to bottom", "135deg", ... */
  gradientDirection?: string
}

function SliderButtonItem({
  button,
  variant,
}: {
  button: SliderButton
  variant: 'primary' | 'secondary'
}) {
  const className =
    variant === 'primary'
      ? 'inline-block rounded-md bg-white px-5 py-3 text-sm font-medium'
      : 'inline-block rounded-md border border-white/60 px-5 py-3 text-sm font-medium text-white'

  const style = button.color ? { color: button.color } : undefined

  if (button.href) {
    return (
      <Link href={button.href} className={className} style={style}>
        {button.label}
      </Link>
    )
  }

  return (
    <button type="button" onClick={button.onClick} className={className} style={style}>
      {button.label}
    </button>
  )
}

export default function MySlider({
  spaceBetween = 0,
  slidesPerView = 1,
  slides,
  gradientFrom = '#00C950E5',
  gradientTo = '#05DF7280',
  gradientDirection = 'to right',
}: MySliderPropsType) {
  return (
    <Swiper
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={spaceBetween}
      slidesPerView={slidesPerView}
      loop
      navigation={true}
      pagination={{
        clickable: true,
        bulletActiveClass: 'bg-white! opacity-100! w-[32px]! h-3! rounded-[6px]!',
      }}
    >
      {slides.map((slide, index) => (
        <SwiperSlide key={index} className="relative! w-full! h-96!">
          <Image alt={slide.title} src={slide.image} fill className="object-cover" />

          {/* Gradient overlay */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              backgroundImage: `linear-gradient(${gradientDirection}, ${gradientFrom}, ${gradientTo})`,
            }}
          />

          {/* Content */}
          <div className="relative z-10 flex h-full flex-col justify-center gap-4 px-32 text-white">
            <h2 className="max-w-md text-3xl font-bold">{slide.title}</h2>

            {slide.subtitle && <p className="text-base">{slide.subtitle}</p>}

            {(slide.primaryButton || slide.secondaryButton) && (
              <div className="flex flex-wrap gap-3">
                {slide.primaryButton && (
                  <SliderButtonItem button={slide.primaryButton} variant="primary" />
                )}
                {slide.secondaryButton && (
                  <SliderButtonItem button={slide.secondaryButton} variant="secondary" />
                )}
              </div>
            )}
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  )
}