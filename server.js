const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router('db.json');

// Cấu hình lại để cho phép đọc file tĩnh từ thư mục gốc của project (nơi chứa thư mục images)
const middlewares = jsonServer.defaults({ static: '.' });

const port = process.env.PORT || 3000;

server.use(middlewares);
server.use(router);

server.listen(port, () => {
    console.log('JSON Server is running on port', port);
});
