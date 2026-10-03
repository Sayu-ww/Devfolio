import type { BannerType } from '@widgets/banner'

type Position = {
  x: number
  y: number
}

function isInsideCenter(x: number, y: number) {
  return x > 30 && x < 70 && y > 20 && y < 80
}

function hasNearbyPosition(x: number, y: number, positions: Position[]) {
  return positions.some((position) => Math.abs(position.x - x) < 16 && Math.abs(position.y - y) < 16)
}

export function GetRandomFloatingStats(existingPositions: Position[] = []): BannerType.Utils.Stats {
  let x: number
  let y: number

  do {
    x = Math.round(Math.random() * 90) + 5
    y = Math.round(Math.random() * 90) + 5
  } while (isInsideCenter(x, y) || hasNearbyPosition(x, y, existingPositions))

  return {
    positionX: x,
    positionY: y,
    duration: 5000 + Math.round(Math.random() * 4000),
  }
}
