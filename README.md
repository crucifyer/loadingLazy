# loadingLazy
loading=lazy for background-image

head 에 선언
```css
[loading="lazy"]:not(img,iframe) { background-image: none !important; }
```
fade in 효과로 부드럽게 나타나게 하려면 추가 선언
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
* fade in 효과를 줄 때 opacity:1 까지 가므로, opacity 를 다르게 주었을 경우 깜빡이게 느낄 수 있음.

최하단에 js 로딩
```html
<script src="https://crucifyer.github.io/js/loadingLazy.min.js"></script>
</body>
```

example https://framework.xenosi.de/exams/loadingLazy.html