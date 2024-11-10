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
* fade in 효과를 줄 때 opacity:1 까지 가므로, 객체에 opacity 를 다르게 주었을 경우 깜빡이게 느낄 수 있음.

최하단에 js 로딩
```html
<script src="https://crucifyer.github.io/js/loadingLazy.fadeIn.min.js"></script><!-- fade in 이펙트 있는 버전 -->
<script src="https://crucifyer.github.io/js/loadingLazy.min.js"></script><!-- fade in 이펙트 없는 버전 -->
<!-- 둘 중 하나만 로딩 -->
</body>
```
* vuejs 같은 virtual dom 으로 관리되는 경우 이펙트가 있어도 상관은 없으나 다시 그려질 때 마다 이펙트가 발생하므로 없는편이 깔끔함.

example https://framework.xenosi.de/exams/loadingLazy.html