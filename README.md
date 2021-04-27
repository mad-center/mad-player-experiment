# Implementation of MAD based on mo.js
> 封存：这个项目是实验性项目，旨在探索web制作简易MAD的可行性。结论：可以实现，但是请不要使用例如mo.js这种不够成熟和强大的动画引擎库，请考虑使用原生Animation API封装。这样，就能避免很多奇怪的BUG。

## online demo
使用 Chrome browser 访问 [这里](https://mad-center.github.io/mad-player-experiment/index.html)，遇到诡异的播放效果时，请刷新页面并重头开始播放。

## 实现
- [mo.js 缓动函数API](docs/base-easing-func.md)
- [mo.js 概述](docs/base-easing-func.md)
- [应该存在的言语 MAD 镜头拆解](docs/应该存在的言语.md)

## Known weird bugs
- moj.js player 诡异的中间预览
- 背景图片偶尔不显示，无法稳定重现该bug
