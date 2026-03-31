"use client"
import { useState, useEffect, useMemo } from "react"

const R = 18
const HEX_W = R * Math.sqrt(3)
const ROW_H = R * 1.5

const CSS_MASK =
  "linear-gradient(135deg, rgba(255,255,255,0.02) 0%, rgba(255,255,255,0.1) 50%, rgba(255,255,255,0.4) 90%, rgba(255,255,255,0.6) 100%)"

const HexBackground = () => {
  const [size, setSize] = useState<{ w: number; h: number } | null>(null)

  useEffect(() => {
    let timer: ReturnType<typeof setTimeout>
    const update = () => {
      clearTimeout(timer)
      timer = setTimeout(() => setSize({ w: window.innerWidth, h: window.innerHeight }), 150)
    }
    setSize({ w: window.innerWidth, h: window.innerHeight })
    window.addEventListener("resize", update)
    return () => {
      clearTimeout(timer)
      window.removeEventListener("resize", update)
    }
  }, [])

  const pathData = useMemo(() => {
    if (!size) return ""
    const cols = Math.ceil(size.w / HEX_W) + 2
    const rows = Math.ceil(size.h / ROW_H) + 2
    const parts: string[] = []
    for (let row = -1; row < rows; row++) {
      for (let col = -1; col < cols; col++) {
        const cx = col * HEX_W + (row % 2 !== 0 ? HEX_W / 2 : 0)
        const cy = row * ROW_H
        let hex = "M"
        for (let i = 0; i < 6; i++) {
          const a = (Math.PI / 3) * i - Math.PI / 2
          hex += ` ${cx + R * Math.cos(a)},${(cy + R * Math.sin(a)).toFixed(1)}`
        }
        parts.push(hex + " Z")
      }
    }
    return parts.join(" ")
  }, [size])

  return (
    <div className='fixed inset-0 z-0 pointer-events-none bg-[#0b0d19]'>
      <svg
        className='w-full h-full'
        aria-hidden='true'
        style={{
          maskImage: CSS_MASK,
          WebkitMaskImage: CSS_MASK,
          willChange: "transform",
        }}>
        <path
          d={pathData}
          fill='#0b0d19'
          stroke='#22d3ee'
          strokeWidth='0.8'
          shapeRendering='optimizeSpeed'
        />
      </svg>
    </div>
  )
}

export default HexBackground
