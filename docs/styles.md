### Theme
```
import theme from 'styled-theming';

export const themedBg = theme('mode', {
  default: css`
    background: linear-gradient(
      344deg,
      ${props => props.theme.props.color.primary._} 0%,
      ${props => props.theme.props.color.primary.d1} 100%
    );
  ` ,
  kids:  css`
   background: linear-gradient(
      344deg,
      yellow 0%,
      orange 100%
    );
  ` 
});

```

### App layout
```
  #app, #root{
    display: flex;
    flex-direction: column;
    min-height:100%;
    height: 100%;
  }
```