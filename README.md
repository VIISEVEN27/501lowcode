# 501 Low-Code

### 一、项目简介
#### 介绍
使用该平台可以通过拖拽摆放组件生成前端页面，支持修改组件属性、样式、绑定事件，支持页面的实时预览、生成和下载源码等功能
#### 功能
- [x] 提供容器、文本、图片、按钮等基本组件
- [x] 通过拖拽组件库中的组件摆放到画布中实现页面布局
- [x] 可以实时预览页面效果
- [x] 支持修改组件的属性、样式
- [x] 可以通过绑定事件实现组件的基本交互
- [x] 支持生成和下载页面的源工程文件
- [x] 页面将自动保存到后端
- [ ] 实现操作的撤销和重做
#### 架构
![架构设计](https://github.com/VIISEVEN27/501lowcode/blob/master/images/架构设计.png)

### 二、使用方法
将项目 clone 到本地
```
git clone https://github.com/VIISEVEN27/501lowcode
```

使用 docker-compose 启动 MongoDB 的 Docker 容器
```
cd ./501lowcode/back-end/docker
docker-compose up
```

安装后端依赖并运行
```
cd ..
pnpm install
pnpm run start
```

安装前端依赖并运行
```
cd ../front-end
pnpm install
pnpm run dev
```

### 三、运行结果
![前端界面](https://github.com/VIISEVEN27/501lowcode/blob/master/images/前端界面.PNG)
DEMO地址: http://139.224.220.27:5137/