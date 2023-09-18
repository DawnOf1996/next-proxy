// server.js
const request = require('request');
const express = require('express');


const next = require('next');

const dev = process.env.NODE_ENV !== 'production';
const app = next({dev});
const handle = app.getRequestHandler();
app.prepare().then(() => {
    const server = express();

    // 添加自定义中间件
    server.use((req, res, next) => {
        // 在这里执行你的自定义逻辑
        console.log('Custom middleware executed');
        req.pipe(request(req.url)).pipe(res);
    });

    // 处理所有路由请求
    server.all('*', (req, res) => {
        return handle(req, res);
    });

    server.listen(3000, (err) => {
        if (err) throw err;
        console.log('> Ready on http://localhost:3000');
    });
});
