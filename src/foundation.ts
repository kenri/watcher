export enum Breakpoint {
  sm = 576,
  md = 768,
  lg = 992,
  xl = 1200,
  xxl = 1400,
}

export const BelowBreakpoint = {
  sm: `@media (max-width: ${Breakpoint.sm}px)`,
  md: `@media (max-width: ${Breakpoint.md}px)`,
  lg: `@media (max-width: ${Breakpoint.lg}px)`,
  xl: `@media (max-width: ${Breakpoint.xl}px)`,
  xxl: `@media (max-width: ${Breakpoint.xxl}px)`,
}

export const AboveBreakpoint = {
  sm: `@media (min-width: ${Breakpoint.sm}px)`,
  md: `@media (min-width: ${Breakpoint.md}px)`,
  lg: `@media (min-width: ${Breakpoint.lg}px)`,
  xl: `@media (min-width: ${Breakpoint.xl}px)`,
  xxl: `@media (min-width: ${Breakpoint.xxl}px)`,
}

export const BetweenBreakpoint = (min: Breakpoint, max: Breakpoint) => {
  return `@media (min-width: ${min}px) and (max-width: ${max}px)`
}
