# 移动端模版

## 插件解析

| 类型                    | 说明                                                                                                                                           |
| :---------------------- | :--------------------------------------------------------------------------------------------------------------------------------------------- |
| node:path               | path 模块提供了一组用于处理文件和目录路径的工具。比如，你可以使用 path.join() 或 path.resolve() 来创建或解析文件路径                           |
| node:process            | process 模块提供了一个全局变量，用于获取有关当前 Node.js 进程的信息，比如 process.env 可以获取环境变量，process.argv 可以获取命令行参数        |
| node:child_process      | child_process 模块允许你在 Node.js 中创建子进程，执行系统命令。exec 方法允许你执行一个命令，并获取其输出                                       |
| fs-extra                | fs-extra 是 Node.js 的 fs 模块的增强版，提供了一些额外的方法来操作文件和目录，如 fs.ensureDir() 可以确保目录存在，fs.copy() 可以复制文件或目录 |
| inquirer                | inquirer 是一个常用的 Node.js 库，用于创建交互式的命令行界面。它提供了各种提示类型，如单选、多选、输入框等，帮助用户在命令行中输入数据         |
| esno                    | 基于 esbuild 的 TS/ESNext node 运行时。该库会针对不同的模块化标准，采用不同的方案                                                              |
| eslint                  | ESLint 是一个用于识别和报告 ECMAScript/JavaScript 代码中的模式的工具，包括 ECMAScript 6+（ES2015+）                                            |
| eslint-define-config    | 这是一个用于定义 ESLint 配置的工具                                                                                                             |
| eslint-config-prettier  | 这是一个 ESLint 配置，它关闭所有可能与 Prettier 冲突的规则。这样可以确保 ESLint 和 Prettier 之间的规则不会互相冲突                             |
| eslint-plugin-prettier  | 这是一个 ESLint 插件，它将 Prettier 作为 ESLint 规则运行。这样可以确保 ESLint 和 Prettier 之间的规则不会互相冲突                               |
| eslint-plugin-vue       | 这是一个 ESLint 插件，它为 Vue.js 项目提供了一些特定的 ESLint 规则                                                                             |
| vite-plugin-fake-server | 提供虚拟的 API 服务器。这个虚拟的 API 服务器可以返回你预先定义的数据，这样你就可以在没有实际后端服务器的情况下进行开发和测试                   |

## 图标

-   除了可以在 [Iconify](https://github.com/iconify/iconify) 官网上查找搜需要的图标，你还可以在 [Icônes](https://icones.js.org/) 网站 上查找，这是一个基于 Iconify 的在线图标搜索网站，它比 Iconify 官网的操作更直观
-   只需把图标库的前缀加入到 `src/iconify/index.json` 中然后重新执行 `pnpm run generate:icons` 命令
