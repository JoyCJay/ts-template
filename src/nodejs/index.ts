import { ServerResponse } from "http";

const http = require('http')
const fs = require('node:fs');
const readline = require('node:readline');

const cluster = require('cluster');
const numCPUs = require('os').cpus().length;


const dataSourcePath = __dirname + '/sample2.csv'

async function stream_main() {

    const server = http.createServer(async (req, res: ServerResponse) => {
        const stream = fs.createReadStream(dataSourcePath)
        const rl = readline.createInterface({
            input: stream,
        })
        for await (const line of rl) {
            setTimeout(() => {
                console.log(line + ':console')
            }, 3000);
        }
        stream.pipe(res)
    })
    server.listen(3000)
}

function worker_main() {
    if (cluster.isMaster) {
        console.log(`主进程 ${process.pid} 正在运行`);
      
        // 衍生工作进程。
        for (let i = 0; i < numCPUs; i++) {
          cluster.fork();
        }
      
        cluster.on('exit', (worker, code, signal) => {
          console.log(`工作进程 ${worker.process.pid} 已退出`);
        });
      } else {
        // 工作进程可以共享任何 TCP 连接。
        // 在本例子中，共享的是一个 HTTP 服务器。
        http.createServer((req, res: ServerResponse) => {
          res.writeHead(200, {
            'Content-Type': 'text/plain'
          });
          res.end("hello world");
        }).listen(8000);
      
        console.log(`工作进程 ${process.pid} 已启动`);
      }
}

stream_main()
// worker_main()
