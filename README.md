# 智车商城 - 智能汽车购物平台

基于node+vue3的智能汽车购物平台
**毕业设计所有选题地址： https://github.com/Good-Night-Unicorn?tab=repositories**

**完整代码收费可以加QQ：3042127848 咨询接毕业设计论文**

**作者QQ：3042127848 备用q：2777345948 (支持修改、部署调试、支持代做毕设)**

**接网站建设、小程序、H5、APP、各种系统等**

**选题+开题报告+任务书+程序定制+安装调试+论文+答辩ppt都可以做**
**详细视频演示**

## 🚀 技术栈

- **前端框架**: Vue 3 (Composition API)
- **UI 组件库**: Element Plus
- **构建工具**: Vite
- **状态管理**: Pinia
- **路由管理**: Vue Router
- **HTTP 客户端**: Axios
- **样式**: CSS3 + 响应式设计

## 📋 功能特性

### 🏠 页面功能
- **首页**: 轮播图展示、精选推荐、汽车分类
- **产品列表**: 分类筛选、搜索、排序、分页
- **产品详情**: 详细信息、技术参数、用户评价
- **购物车**: 增删改查、批量操作、结算功能
- **收藏夹**: 收藏管理、批量操作
- **用户系统**: 登录、注册、权限控制
- **关于我们**: 公司介绍、团队信息
- **联系我们**: 联系信息、在线留言
- **使用指南**: 智能汽车使用指南
- **保养指南**: 汽车保养维护指南
- **404页面**: 错误页面处理

### 🔧 技术特性
- **响应式设计**: 完美适配移动端和桌面端
- **状态管理**: 使用 Pinia 进行全局状态管理
- **数据持久化**: 本地存储用户数据、购物车、收藏夹
- **路由守卫**: 权限控制和页面访问控制
- **组件通信**: 父子组件 props/emit 通信
- **Vue 指令**: 全面使用 v-if、v-for、v-on、v-model、v-bind
- **计算属性**: computed 属性优化性能
- **侦听器**: watch 监听数据变化
- **UI 组件**: Element Plus 组件库美化界面
### 🔧 效果图:
<img width="1856" height="3432" alt="540e51d2a2daa5d91b1e5063fc8197d5" src="https://github.com/user-attachments/assets/b5221e16-ec3c-4e9c-96f3-ca2110521e2a" />
<img width="1848" height="1654" alt="b373f0fd302005de112f3343e771581f" src="https://github.com/user-attachments/assets/9e4b9620-789f-4b9a-b7e3-ecea295fd68c" />
<img width="1860" height="897" alt="264b6a20ea018c11ebd82adc07e668c8" src="https://github.com/user-attachments/assets/3f606fa1-39e3-4a0a-aa9d-27814827dd25" />
<img width="1845" height="2779" alt="1e0ee500a22085894730993fe6e5137f" src="https://github.com/user-attachments/assets/db9a2422-5576-421b-9e61-a553e5ed19ec" />
<img width="1857" height="2846" alt="5dc11ba2282aeb20e7d72c4bf25ddf28" src="https://github.com/user-attachments/assets/7819526a-fd36-43a9-add6-c0446f330658" />
<img width="1854" height="890" alt="6eaf5d4d198ebd90dab59bccc0fd0649" src="https://github.com/user-attachments/assets/9e5202c3-5b66-4ee3-9df9-1709aa7502b0" />
<img width="1852" height="890" alt="121abb8b29aa50701af347cc93cd8eea" src="https://github.com/user-attachments/assets/1a6c85bd-a850-43b4-b97f-ba0908071ff8" />
<img width="1800" height="875" alt="f69ef0d94932fa59e8b9b8cfb9b00329" src="https://github.com/user-attachments/assets/af6f9762-5a53-4e1f-aefb-8c3298d3116d" />
<img width="1840" height="858" alt="4c32f6434520299b592fb05a715cc36a" src="https://github.com/user-attachments/assets/8be50eda-e0ec-4f39-8198-97c825d2dbaa" />

## 🛠️ 项目结构

```
src/
├── components/          # 公共组件
│   ├── Header.vue      # 头部导航
│   ├── Footer.vue      # 底部信息
│   └── ProductCard.vue # 产品卡片
├── views/              # 页面组件
│   ├── Home.vue        # 首页
│   ├── Products.vue    # 产品列表
│   ├── ProductDetail.vue # 产品详情
│   ├── Cart.vue        # 购物车
│   ├── Favorites.vue   # 收藏夹
│   ├── Login.vue       # 登录页
│   ├── Register.vue    # 注册页
│   ├── About.vue       # 关于我们
│   ├── Contact.vue     # 联系我们
│   ├── Guide.vue       # 使用指南
│   ├── Maintenance.vue # 保养指南
│   └── NotFound.vue    # 404页面
├── stores/             # 状态管理
│   ├── user.js         # 用户状态
│   ├── cart.js         # 购物车状态
│   └── favorites.js    # 收藏夹状态
├── router/             # 路由配置
│   └── index.js        # 路由定义
├── data/               # 模拟数据
│   └── products.js     # 产品数据
├── style.css           # 全局样式
└── main.js             # 应用入口
```

## 🚀 快速开始

### 安装依赖
```bash
npm install
```

### 启动开发服务器
```bash
npm run dev
```

### 构建生产版本
```bash
npm run build
```

### 预览生产版本
```bash
npm run preview
```

## 📱 功能演示

### 用户功能
- ✅ 用户注册和登录
- ✅ 个人信息管理
- ✅ 权限控制

### 购物功能
- ✅ 产品浏览和搜索
- ✅ 分类筛选和排序
- ✅ 产品详情查看
- ✅ 购物车管理
- ✅ 收藏夹管理

### 内容功能
- ✅ 智能汽车使用指南
- ✅ 汽车保养维护指南
- ✅ 公司介绍和联系方式

## 🎨 设计特色

- **现代化UI**: 使用 Element Plus 组件库，界面美观现代
- **响应式布局**: 完美适配各种设备屏幕
- **用户体验**: 流畅的交互和动画效果
- **数据持久化**: 本地存储确保数据不丢失
- **权限控制**: 完善的用户权限管理

## 🔒 数据存储

项目使用浏览器本地存储 (localStorage) 实现数据持久化：

- **用户信息**: 登录状态、用户数据
- **购物车**: 商品列表、数量、选择状态
- **收藏夹**: 收藏的商品列表

## 📄 许可证

本项目仅供学习和演示使用。

## 🤝 贡献

欢迎提交 Issue 和 Pull Request 来改进项目。

---

**智车商城** - 让智能汽车购物更简单、更便捷！ 
