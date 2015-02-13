# jQuery CSS Fade
This is a simple jQuery plugin for use css fade animation effects instead javascript animation.
You can use fadeInCSS, fadeOutCSS and fadeToggleCSS effects instead fadeIn, fadeOut and fadeToggle jQuery effects. If your browser do not support css animation, this plugin will use jQuery default animation.
<br/>
## Usage
```js
$('#button').click(function(){
  $('#myBlock').fadeInCSS(slow);
})
```
### Important
Differently from jQuery this plugin use "visibility" property instead "display". So, you should specify `visibility: hidden` instead `display: none` for initially hidden elements:
```css
#myBlock{
  visibility: hidden;
}
```

### TODO
* Add easing functions
* Add callbacks
