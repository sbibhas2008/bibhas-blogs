'use client'

import { useEffect, useState } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { Card } from './card'
import { Badge } from './badge'

type TechCategory = {
  icon: React.ReactNode
  label: string
  items: string[]
}

interface TechCarouselProps {
  categories: TechCategory[]
}

export function TechCarousel({ categories }: TechCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0)

  const handlePrevious = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1)
    }
  }

  const handleNext = () => {
    if (currentIndex < categories.length - 1) {
      setCurrentIndex(currentIndex + 1)
    }
  }

  useEffect(() => {
    // aut-scroll to next component on interval
    const interval = setInterval(() => {
      if (currentIndex < categories.length - 1) {
        setCurrentIndex(currentIndex + 1)
      } else {
        setCurrentIndex(0)
      }
    }, 5000)
    return () => clearInterval(interval)
  }, [currentIndex, categories.length])

  const arrowButtonClass =
    'absolute top-2/5 -translate-y-1/2 z-10 p-2.5 rounded-full bg-fontSecondary shadow-lg hover:bg-gray-10 hover:cursor-pointer transition-colors'

  return (
    <div className="relative">
      {currentIndex > 0 && (
        <button
          onClick={handlePrevious}
          className={`${arrowButtonClass} left-0 -translate-x-5`}
          aria-label="Previous tech category"
        >
          <ChevronLeft size={16} className="text-gray-700" />
        </button>
      )}

      <div className="overflow-hidden">
        <div
          className="flex transition-transform duration-300 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {categories.map((category) => (
            <div key={category.label} className="w-full flex-shrink-0">
              <Card className="p-4 h-full">
                <div className="flex items-center gap-2 text-sm text-muted-foreground mb-6">
                  {category.icon}
                  <span className="text-lg">{category.label}</span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {category.items.map((item) => (
                    <Badge key={item}>{item}</Badge>
                  ))}
                </div>
              </Card>
            </div>
          ))}
        </div>
      </div>

      {currentIndex < categories.length - 1 && (
        <button
          onClick={handleNext}
          className={`${arrowButtonClass} right-0 translate-x-5`}
          aria-label="Next tech category"
        >
          <ChevronRight size={16} className="text-gray-700" />
        </button>
      )}

      <div className="flex justify-center mt-6">
        <div className="flex gap-2">
          {categories.map((_, index) => (
            <button
              key={index}
              className={`w-2 h-2 rounded-full transition-colors ${
                index === currentIndex ? 'bg-primary' : 'bg-gray-300'
              }`}
              onClick={() => setCurrentIndex(index)}
              aria-label={`Go to tech category ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  )
}
