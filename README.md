JavaScript Webpack Handle Compilation Error in Custom Plugin Demo
=================================================================

在compilation hooks里直接throw Error只能导致webpack失败，但不会显示具体原因。

我们需要使用compilation.errors来处理。

```
npm install
npm run demo
```

将输出:

```
ERROR in Custom error from plugin, with options: {"name":"webpack"}
```
