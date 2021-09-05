import {css, CSSProp} from "styled-components";

type Dictionary = {
  [key: string] : any
}

type DictionaryNumbers = {
  [key: string] : number
}


export const size = {
  mobile: 320,
  mobileL: 480,
  tablet: 768,
  laptop: 1024,
  desktop: 1200,
} as DictionaryNumbers;


export const mediaStrs = {
  mobile: `(min-width: ${size.mobile}px)`,
  mobile_l: `(min-width: ${size.mobileL + 1}px) and (max-width: ${size.tablet - 1}px)`,
  tablet: `(min-width: ${size.tablet}px)`,
  tablet_h: `(min-width: ${size.tablet}px) and (orientation:landscape)`,
  laptop: `(min-width: ${size.laptop}px)`,
  desktop: `(min-width: ${size.desktop}px)`
} as Dictionary;


export const device = Object.keys(mediaStrs).reduce((acc: Dictionary, key: string) => {
  acc[key] = (style: CSSProp | string) =>css`
    @media ${mediaStrs[key]}{
      ${style}
    }
  `
  return acc
}, {})


/* USAGE:
${device.tablet(css`
  background-color:blue;
`)} 

x-- string waydoesnt work properly and the difference is the editor-colored props for css case
${device.laptop`
  background-color:green;
`} 

*/