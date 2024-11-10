/*
 Project : https://github.com/crucifyer/loadingLazy
 License : MIT
*/
(function(d) {
	observer = new IntersectionObserver(
		(entries) => {
			entries.forEach(entry => {
				if (entry.isIntersecting) {
					const node = entry.target;
					node.removeAttribute('loading'); // 화면내에 들어오면 css 규칙에서 제외
					node.addEventListener('animationend', () => {
						node.classList.remove('__loading_lazy__');
					}, {once:true});
					node.classList.add('__loading_lazy__'); // fade in 효과
					observer.unobserve(node); // 한번 보이면 더이상의 관찰 불필요
				}
			}, {
				root: null,
				rootMargin: "0px",
				threshold: 0, // 1px 라도 보이면 동작. 1 은 다 보여야 동작
			});
		});

	const mutationObserver = new MutationObserver((mutations) => {
		mutations.forEach(mutation => {
			mutation.addedNodes.forEach(node => {
				if (node.nodeType === 1 && node.tagName !== 'IMG' && node.tagName !== 'IFRAME') {
					if(node.getAttribute('loading') === 'lazy') observer.observe(node); // 새로 추가되는 객체도 관찰
					node.querySelectorAll('[loading=lazy]:not(img,iframe)').forEach(node => observer.observe(node));
				}
			});
		});
	});
	mutationObserver.observe(d.body, {
		childList: true,
		subtree: true
	});

	d.querySelectorAll('[loading=lazy]:not(img,iframe)').forEach(node => observer.observe(node)); // 동적 추가되지 않은 객체 한번에 처리를 위해 /body 바로 위에 위치.
})(document);