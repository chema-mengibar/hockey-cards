const style = getComputedStyle(document.body)

export enum CssVars {
  colorNeutral = '--color-neutral',
  colorNeutralRgb = '--color-neutral-rgb'
}

export function getComputedStyleHelp( cssVar: CssVars ): string{
  return style.getPropertyValue(cssVar) 
}