# Vue 3 + Vite

## 插件解析
|  类型  | 说明                                 |
| :----: | :----------------------------------- |
| node:path | path 模块提供了一组用于处理文件和目录路径的工具。比如，你可以使用 path.join() 或 path.resolve() 来创建或解析文件路径 |
| node:process | process 模块提供了一个全局变量，用于获取有关当前 Node.js 进程的信息，比如 process.env 可以获取环境变量，process.argv 可以获取命令行参数 |
| node:child_process | child_process 模块允许你在 Node.js 中创建子进程，执行系统命令。exec 方法允许你执行一个命令，并获取其输出 |
| fs-extra | fs-extra 是 Node.js 的 fs 模块的增强版，提供了一些额外的方法来操作文件和目录，如 fs.ensureDir() 可以确保目录存在，fs.copy() 可以复制文件或目录 |
| inquirer | inquirer 是一个常用的 Node.js 库，用于创建交互式的命令行界面。它提供了各种提示类型，如单选、多选、输入框等，帮助用户在命令行中输入数据 |
| esno | 基于 esbuild 的 TS/ESNext node 运行时。该库会针对不同的模块化标准，采用不同的方案 |

## 图标
- 除了可以在 [Iconify](https://github.com/iconify/iconify) 官网上查找搜需要的图标，你还可以在 [Icônes](https://icones.js.org/) 网站 上查找，这是一个基于 Iconify 的在线图标搜索网站，它比 Iconify 官网的操作更直观
- 只需把图标库的前缀加入到 `src/iconify/index.json` 中然后重新执行 `pnpm run generate:icons` 命令
