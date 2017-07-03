# 项目分析
#开源项目/clipboardjs

> [Analyse](file:///Users/charlesxu/Projects/clipboard.js/analyse.md)

### 实现什么功能？
- 通过监听一个元素／一组元素，触发`剪切`或`粘贴`事件，并且可以自定义剪贴板针对的目标（`input 输入框` 或 `textarea 文本域`或`指定的一段文本`）

### 使用了哪些技术？
- 事件代理(event delegation)
- HTML5 data-* 属性（HTML5 data attributes）
- [Selection API](https://developer.mozilla.org/en-US/docs/Web/API/Selection)
- [execCommand()](https://developer.mozilla.org/en-US/docs/Web/API/Document/execCommand)

### 依赖了哪些子项目？
- [good-listener](https://github.com/zenorocha/good-listener)
- [select](https://github.com/zenorocha/select)
- [tiny-emitter](https://github.com/scottcorgan/tiny-emitter)

### 如何处理兼容性的？

### 有哪些性能问题？

### 代码如何编写并测试发布的
