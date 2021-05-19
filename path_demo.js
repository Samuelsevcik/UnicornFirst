/*
const path = require('path');

console.log(path.basename(__filename));

console.log(path.dirname(__filename));

console.log(path.extname(__filename));

console.log(path.parse(__filename));

console.log(path.join(__dirname,'test', 'hello.html'));
*/
const http = require('http');

const server = http.createServer((req,res) => {
    if (req.url === '/') {
        res.write('Hello world!');
        res.end;
    }

    if (req.url === '/api/courses'){
        res.write(JSON.stringify([1, 2, 3]));
        res.end;
    }
});
server.listen(3000);

console.log('Server running...');

