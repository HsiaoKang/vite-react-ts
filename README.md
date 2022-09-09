# vite-react-ts

template of vite，react@18+typescript+stylelint+eslint+prettier+pre-commiit+commitizen

## 概述

开发环境配置了统一规则限制，包括代码风格、git commit 格式等，主要目的是在尽可能的范围内降低不同成员阅读代码的成本。值得单独说明的有两点：

1. 在提交代码时会对代码做自动的格式化，但是目前在`vscode` 中样式的格式化还不能完全兼容，特殊情况需手动处理。
2. git commit 格式按照[Anguler commit](https://github.com/angular/angular/blob/main/CONTRIBUTING.md#commit)要求，可以手动输入标准格式，或者使用`pnpm commit`或 `git cz`命令代替 `git commit`（后者需要全局安装`commitizen`） ,然后按提示填写内容。

## 开发

### 环境配置

1. 代码编辑器需安装`ESLint`、`Stylelint`与`Prettier`插件,用于提示编码错误和管理代码风格。
2. 安装 [pnpm](https://pnpm.io/installation)，项目依赖包通过 `pnpm` 管理，使用别的包管理工具可能造成未知错误。

_注意：当前样式文件无法通过编辑器格式化，需手动处理，但在上传代码时会自动格式化，以保证最新的代码不需要额外的处理。_

### 安装依赖

项目根目录执行：

```
pnpm i
```

### 开始开发

```
pnpm dev
```

默认启动在 _http://localhost:5173/_ 页面加载正常及终端为报错即为启动成功。

### 提交代码

代码提交信息“大致”采用比较流行的 Angular 方案。通常只需 Header 部分的 Type & Summary 已经足够描述提交内容，深入了解可见[Anguler commit](https://github.com/angular/angular/blob/main/CONTRIBUTING.md)或阮一峰的这篇文章：[Commit message 和 Change log 编写指南
](http://www.ruanyifeng.com/blog/2016/01/commit_message_change_log.html)

```
Type(可选的Scope): Summary
# e.g
feat: 增加个人主页扫描二维码功能
```

主要的 Header type 如下：

```
docs：      仅文档更改
style：     不影响代码含义的更改（空格、格式、缺少分号等）
refactor：  既不修复错误也不添加功能的代码更改
perf：      提高性能的代码更改
test：      添加缺失的测试或纠正现有的测试
build：     影响构建系统或外部依赖项的更改（示例范围：gulp、broccoli、npm）
ci：        对我们的 CI 配置文件和脚本的更改（示例范围：Travis、Circle、BrowserStack、SauceLabs）
chore：     其他不修改 src 或测试文件的更改
revert：    恢复之前的提交
feat：      新功能
fix：       一个错误修复
```

### 构建生产代码

```
pnpm build
```

代码生成在`dist`文件夹内

## 浏览器版本支持

支持情况如下：

- chrome>=64
- edge>=79
- firefox>=62
- safari>=11

说明：360 浏览器、QQ 浏览器由于提供的版本数据不足，无法精准对应到版本号，理论支持最新版本，如遇问题请尝试升级版本后再查看。（建议采用支持的现代浏览器运行网页）

## 语法校验及错误提示

_语法校验_ 及*错误提示*由`eslint`处理，配置文件为`.eslintrc.json`，为保证代码质量，在解决提示的`error & warn`之前无法提交代码到远程仓库（暂未实现此限制）

## 网络安全措施

项目内包含了基础的安全措施，通过`eslint`给出提示，需严格处理。详见[eslint-plugin-react' rules](https://github.com/jsx-eslint/eslint-plugin-react/tree/master/docs/rules)。

## 尚未增加的特性

- [ ] [发版日志的自动生成](https://github.com/conventional-changelog/conventional-changelog)
- [ ] 编辑器支持的 style format
- [ ] 单元测试与 UI 测试
