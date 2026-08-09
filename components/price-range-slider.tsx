"use client"

import { formatPrice } from "@/lib/products"

type PriceRangeSliderProps = {
  min: number
  max: number
  value: [number, number]
  onChange: (value: [number, number]) => void
}

export function PriceRangeSlider({ min, max, value, onChange }: PriceRangeSliderProps) {
  const [minValue, maxValue] = value
  const range = max - min || 1
  const minPercent = ((minValue - min) / range) * 100
  const maxPercent = ((maxValue - min) / range) * 100

  function handleMinChange(nextMin: number) {
    onChange([Math.min(nextMin, maxValue), maxValue])
  }

  function handleMaxChange(nextMax: number) {
    onChange([minValue, Math.max(nextMax, minValue)])
  }

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between text-sm">
        <span className="text-muted-foreground">가격 범위</span>
        <span className="font-medium text-foreground">
          ₩ {formatPrice(minValue)} - ₩ {formatPrice(maxValue)}
        </span>
      </div>

      <div className="relative h-6">
        <div className="absolute top-1/2 h-1 w-full -translate-y-1/2 rounded-full bg-muted" />
        <div
          className="absolute top-1/2 h-1 -translate-y-1/2 rounded-full bg-primary"
          style={{
            left: `${minPercent}%`,
            width: `${maxPercent - minPercent}%`,
          }}
        />

        <input
          type="range"
          min={min}
          max={max}
          step={1000}
          value={minValue}
          onChange={(e) => handleMinChange(Number(e.target.value))}
          aria-label="최소 가격"
          className="price-range-input pointer-events-none absolute inset-0 z-20 w-full appearance-none bg-transparent"
        />
        <input
          type="range"
          min={min}
          max={max}
          step={1000}
          value={maxValue}
          onChange={(e) => handleMaxChange(Number(e.target.value))}
          aria-label="최대 가격"
          className="price-range-input pointer-events-none absolute inset-0 z-30 w-full appearance-none bg-transparent"
        />
      </div>

      <div className="flex items-center justify-between text-xs text-muted-foreground">
        <span>₩ {formatPrice(min)}</span>
        <span>₩ {formatPrice(max)}</span>
      </div>
    </div>
  )
}
