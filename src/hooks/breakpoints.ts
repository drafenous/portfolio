import { useState, useEffect } from 'react'

export interface BreakpointsSizes {
  XS: 0
  SM: 576
  MD: 768
  LG: 992
  XL: 1200
  XXL: 1400
}

export enum BreakpointsEnum {
  XS,
  SM,
  MD,
  LG,
  XL,
  XXL
}

interface WindowDimensions {
  width?: number
  height?: number
  breakpoint: BreakpointsEnum
}

export function useWindowDimensions() {
  const [windowSize, setWindowSize] = useState<WindowDimensions>({
    width: undefined,
    height: undefined,
    breakpoint: BreakpointsEnum.XS
  })

  useEffect(() => {
    function getBreakpoint(): BreakpointsEnum {
      if (window.innerWidth >= 0 && window.innerWidth < 576) {
        return BreakpointsEnum.XS
      }
      if (window.innerWidth >= 576 && window.innerWidth < 768) {
        return BreakpointsEnum.SM
      }
      if (window.innerWidth >= 768 && window.innerWidth < 992) {
        return BreakpointsEnum.MD
      }
      if (window.innerWidth >= 992 && window.innerWidth < 1200) {
        return BreakpointsEnum.LG
      }
      if (window.innerWidth >= 1200 && window.innerWidth < 1400) {
        return BreakpointsEnum.XL
      }
      return BreakpointsEnum.XXL
    }

    function handleResize() {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
        breakpoint: getBreakpoint()
      })
    }

    if (typeof window !== 'undefined') {
      window.addEventListener('resize', handleResize)
      handleResize()
      return () => window.removeEventListener('resize', handleResize)
    }
  }, [])
  return windowSize
}
