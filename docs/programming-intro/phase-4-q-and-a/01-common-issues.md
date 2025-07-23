# 问题答疑：各阶段常见问题汇总

这里汇总了我们在开发和部署过程中遇到的具体问题及其解决方案。

## 部署阶段问题

### 问题1：运行 `npm run docs:dev` 时提示 `Missing script`

- **错误信息**：`npm error Missing script: "docs:dev"`
- **问题分析**：这个错误意味着 npm 在 `package.json` 文件中找不到名为 "docs:dev" 的脚本命令。
- **解决方案**：打开项目根目录下的 `package.json` 文件，检查 `"scripts"` 部分，确保其包含了正确的 VitePress 命令。标准的配置如下：
  ```json
  "scripts": {
    "docs:dev": "vitepress dev docs",
    "docs:build": "vitepress build docs",
    "docs:preview": "vitepress preview docs"
  },