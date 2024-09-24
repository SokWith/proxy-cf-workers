## 代理cf workers 部署 成 pages.dev

### 部署
- git本仓库，建立pages.dev
- 在部署 设置 函数里面 进行 服务绑定，变量名 PROXYWEB ,绑定希望的workers部署；

## 附：将workers部署成pages的三种方式：

- 1、/_workers.js
- 2、/functions/_middleware.js
- 3、本项目的服务绑定

  ### 本项目只需要在这一个Fork仓库，就可以处理已有的workers部署，不需要每个项目单独建立仓库；
  ### 克服workers.dev被污染、域名过长的问题。
