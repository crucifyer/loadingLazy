# loadingLazy
loading=lazy for background-image

declare in head
```css
[loading="lazy"]:not(img,iframe) { background-image: none !important; }
```
additional declarations for the fade in effect
```css
@keyframes __lazyFadeIn__ {
    from { opacity: 0; }
    to { opacity: 1; }
}
.__loading_lazy__ {
    opacity: 0;
    animation: __lazyFadeIn__ 1s ease-in-out forwards;
}
```
* Note that it touches opacity, so any tags that use loading=lazy and opacity together will always be 1.


loading js at the bottom
```html
<script src="https://crucifyer.github.io/js/loadingLazy.min.js"></script>
</body>
```

example https://framework.xenosi.de/exams/loadingLazy.html