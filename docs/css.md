
### Css vars
```
  :root {
    --color-neutral: 0, 29, 166;
    --color-neutral-rgb: rgb(0, 29, 166);
  }
  
  
  body{
   
    background-color: rgba(var(--color-neutral),1);     // no color picker in Browser
     
    background-color: #{'rgb(var(--color-neutral))'};  // Sass
     
    background-color: var(--color-neutral-rgb);  // with color picker in Browser
  }
```
  
  
### Acces Css vars in Js
```  
  document.documentElement.setAttribute('data-theme', 'dark');
  //document.documentElement.setAttribute('data-theme', 'light');

  const style = getComputedStyle(document.body)
  console.log( style.getPropertyValue('--color-neutral')  )

```
  
  
