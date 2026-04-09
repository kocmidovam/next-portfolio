"use client"

// Tile dimensions for the offset hex grid (R=18, pointy-top)
// width = R * sqrt(3) ≈ 31.18,  height = R * 3 = 54
const HEX_W = 31.18
const HEX_H = 54

// 5 hexagon centers that produce a seamless tile when repeated:
// (0,0), (31.18,0), (15.59,27), (0,54), (31.18,54)
// Parts outside the viewBox are clipped and continued by adjacent tiles.
const TILE = [
  `<svg xmlns='http://www.w3.org/2000/svg' width='${HEX_W}' height='${HEX_H}' viewBox='0 0 ${HEX_W} ${HEX_H}'>`,
  `<path fill='none' stroke='%2322d3ee' stroke-width='0.8' d='`,
  `M 0,-18 L 15.59,-9 15.59,9 0,18 -15.59,9 -15.59,-9 Z `,
  `M 31.18,-18 L 46.77,-9 46.77,9 31.18,18 15.59,9 15.59,-9 Z `,
  `M 15.59,9 L 31.18,18 31.18,36 15.59,45 0,36 0,18 Z `,
  `M 0,36 L 15.59,45 15.59,63 0,72 -15.59,63 -15.59,45 Z `,
  `M 31.18,36 L 46.77,45 46.77,63 31.18,72 15.59,63 15.59,45 Z`,
  `'/></svg>`,
].join("")

const DATA_URI = `url("data:image/svg+xml,${TILE}")`
const CSS_MASK =
  "linear-gradient(135deg, rgba(255,255,255,0.02) 0%, rgba(255,255,255,0.1) 50%, rgba(255,255,255,0.4) 90%, rgba(255,255,255,0.6) 100%)"

const HexBackground = () => {
  return (
    <div className="fixed inset-0 z-0 pointer-events-none bg-[#0b0d19]">
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: DATA_URI,
          backgroundRepeat: "repeat",
          backgroundSize: `${HEX_W}px ${HEX_H}px`,
          maskImage: CSS_MASK,
          WebkitMaskImage: CSS_MASK,
        }}
      />
    </div>
  )
}

export default HexBackground
