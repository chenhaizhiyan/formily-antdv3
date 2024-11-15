# formily-antdv3
适配formilyjs antdv3版本，采用vite+vue3+ant-design-vue 3.x版本。

在线预览地址[https://chenhaizhiyan.github.io/formily-antdv3/](https://chenhaizhiyan.github.io/formily-antdv3/)

与官网React版对比：
1. 隐藏了滑动条、树选择、联级选择、穿梭框、上传、自增表格控件
2. 属性配置和官方react版的一样，全部测试过一遍，大部分属性配置都是正常的
3. 配置可选项没支持树形配置
4. 缺少配置响应器功能

![image](https://user-images.githubusercontent.com/10290768/185564545-e0b462eb-3263-4041-a09e-3af2d9681d1b.png)

以下是formily官方信息

<p align="center">
<img src="https://img.alicdn.com/tfs/TB1fHhZu4D1gK0jSZFyXXciOVXa-2500-1200.png">
<img src="https://img.shields.io/npm/dt/@formily/antd"/>
<img src="https://img.shields.io/npm/dm/@formily/core"/>
<a href="https://www.npmjs.com/package/@formily/core"><img src="https://img.shields.io/npm/v/@formily/core.svg"></a>
<a href="https://codecov.io/gh/alibaba/formily">
  <img src="https://codecov.io/gh/alibaba/formily/branch/formily_next/graph/badge.svg?token=3V9RU8Wh9d"/>
</a>
<img alt="PRs Welcome" src="https://img.shields.io/badge/PRs-welcome-brightgreen.svg"/>
<a href="https://github.com/actions-cool/issues-helper">
  <img src="https://img.shields.io/badge/using-issues--helper-blueviolet"/>
</a>
<a href="https://app.netlify.com/sites/formily/deploys"><img src="https://api.netlify.com/api/v1/badges/7145918b-9cb5-47f8-8a42-111969e232ef/deploy-status"/></a>
</p>

---

## 背景

在 Vue 中，在受控模式下，表单的整树渲染问题非常明显。特别是对于数据联动的场景，很容易导致页面卡顿，为了解决这个问题，我们将每个表单字段的状态做了分布式管理，从而大大提升了表单操作性能。同时，我们深度整合了 JSON Schema 协议，可以帮助您快速解决后端驱动表单渲染的问题。

## 特性

- 🖼 可设计，借助 Form Builder 可以快速搭建表单
- 🚀 高性能，字段分布式渲染，大大减轻 React 渲染压力
- 💡 支持 Ant Design/Fusion Next 组件体系
- 🎨 JSX 标签化写法/JSON Schema 数据驱动方案无缝迁移过渡
- 🏅 副作用逻辑独立管理，涵盖各种复杂联动校验逻辑
- 🌯 支持各种表单复杂布局方案

## Form Builder

![https://designable-antd.formilyjs.org/](https://img.alicdn.com/imgextra/i3/O1CN01xAJj1y1wcGzXYc1Uq_!!6000000006328-2-tps-2980-1740.png)

## 官网

2.0

https://formilyjs.org

1.0

https://v1.formilyjs.org

## 生态产品

- [formilyjs](https://github.com/formilyjs)
- [designable](https://github.com/alibaba/designable)
- [icejs](https://github.com/alibaba/ice)

## 如何贡献

- [贡献指南](https://formilyjs.org/zh-CN/guide/contribution)

## 贡献者

This project exists thanks to all the people who contribute.
<a href="https://github.com/chenhaizhiyan/formily-antdv3/graphs/contributors"><img src="https://contrib.rocks/image?repo=alibaba/formily" /></a>

## LICENSE

Formily is open source software licensed as
[MIT.](https://github.com/alibaba/formily/blob/master/LICENSE.md)
