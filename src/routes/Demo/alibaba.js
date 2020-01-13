// 1. 使⽤过的koa2中间件
// 2. koa-body原理
// 3. 介绍⾃⼰写过的中间件
// 4. 有没有涉及到Cluster
// 5. 介绍pm2
// 6. master挂了的话pm2怎么处理
// 7. 如何和MySQL进⾏通信
// 8. React声明周期及⾃⼰的理解
// 9. 如何配置React-Router
// 10. 路由的动态加载模块
// 11. 服务端渲染SSR
// 12. 介绍路由的history
// 13. 介绍Redux数据流的流程
// 14. Redux如何实现多个组件之间的通信，多个组件使⽤相同状态如何进⾏管理
// 15. 多个组件之间如何拆分各⾃的state，每块⼩的组件有⾃⼰的状态，它们之间还有⼀些公共的状态需要维护，如何思考这块
// 16. 使⽤过的Redux中间件
// 17. 如何解决跨域的问题
// 18. 常⻅Http请求头
// 19. 移动端适配1px的问题
// 20. 介绍flex布局
// 21. 其他css⽅式设置垂直居中
// 22. 居中为什么要使⽤transform（为什么不使⽤marginLeft/Top）
// 23. 使⽤过webpack⾥⾯哪些plugin和loader
// 24. webpack⾥⾯的插件是怎么实现的
// 25. dev-server是怎么跑起来
// 26. 项⽬优化

// 27. 抽取公共⽂件是怎么配置的


// 28. 项⽬中如何处理安全问题
// xss：4中处理方式
// csrf:

// 29. 怎么实现this对象的深拷⻉
function deepCopy(obj) {
    const result = {};
    for (var key in obj) {
        if(Object.prototype.hasOwnProperty.call(obj, key)) {
            if (typeof obj[key] === 'object') {
                result[key] = deepCopy(obj[key])
            } else {
                result[key] = obj[key];
            }
        }
    }
    return result;
}