## vue-cli3 开发
- 淘宝镜像
https://npm.taobao.org/
- Vue CLI 脚本开发

- vue 快速原型开发
通过 @vue/cli + @vue/cli-service-global 快速开始零配置原型开发。
vue serve 和 vue build使用,命令执行默认入口文件main.js、index.js、App.vue 或 app.vue 中的一个
cli插件命名：@vue/cli-plugin- 或 vue-cli-plugin-

```javascript
npm install -g @vue/cli-service-global
touch App.vue
/**
<template>
  <h1>Hello!</h1>
</template>
**/
vue serve //运行开发环境
vue build //生成dist
//*********安装cli**********//
npm install -g @vue/cli
vue create hello-world
//拉取2.x模板使用命令
npm install -g @vue/cli-init
vue init webpack my-project
//项目中添加插件
vue add router
vue add vuex
//添加官方和社区插件
@vue/eslint//等于vue add @vue/cli-plugin-eslint
vue add @foo/bar//等于vue add @foo/vue-cli-plugin-bar
```

- cli服务
在vuecli项目中有一个@vue/cli-service可以使用vue-cli-service 的命令

```javascript
//开发调试
"serve": "vue-cli-service serve",
//发布，生成dist目录
"build": "vue-cli-service build",
//检查
"lint": "vue-cli-service lint",
//可以看到最终的webpack文档
"inspect": "vue-cli-service inspect"
```
