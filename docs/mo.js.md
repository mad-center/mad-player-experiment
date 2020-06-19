# Mo.js

## 入门
- Shape and ShapeSwirl
- Burst：just a main ShapeSwirl that holds a bunch of child ShapeSwirl
  - radius、count、degree、opacity properties
  - two techniques are called Stagger Strings and Property Maps
    - Stagger Strings ：被设计为使用某些已定义的步骤来表示连续的数值（请参阅子级的delay属性）
    - Property Map：旨在表达顺序值。您可以使用它来生成反复重复但映射到子级长度的值。

## 摘要
- 目前mojs可以操纵的元素有html元素，Shape（含自定义Shape），ShapeSwirl，以及Burst
- 元素默认完美居中于父容器。
- Timeline 继承了Tween的所有属性，回调和公共方法，Tween和Timeline之间的唯一区别是
Timeline不具有duration属性-它是根据子项的持续时间/延迟来计算的。Timeline还添加了两个可以接收孩子的公共方法。
  - `.add( tween ) {}`和`.append( tween ) {}`
- 2D 控制原理
```
style="opacity: 0.446563; transform: translate(0px, 0px) rotate(0deg) skew(0deg, 0deg) scale(1, 1);"
```
- duration: 50 选择一个很小的数值表示趋向于时间0，表示瞬间时间点

## recap
- You can create a Shape in any part of the screen, or an HTML element using the parent prop.
- If you want to animate some property — you add a delta object ({'from': to}) that describes the transition of that property.
- You can chain the shape transitions with then calls and tune new properties when you want.
- Tweenable interface allows you to work with Shape in the same way you work with any other Tween.

## codepen 效果参考
- 中间圆向外扩散 https://codepen.io/sol0mka/pen/95a862f1ad8445134466ad7d64213d46
- 点击圆形泡泡，显示详情页 https://codepen.io/sol0mka/pen/yNOage
- Motion for the web https://codepen.io/sol0mka/pen/ogOYJj
- 圆圈+向外的直线 https://codepen.io/sol0mka/pen/6caf96461207a5caa9226fbd2631569d

