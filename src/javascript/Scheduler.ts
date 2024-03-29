/** 
 * JS实现一个带并发限制的异步调度器Scheduler，保证同时运行的任务最多有两个。完善代码中Scheduler类，使得以下程序能正确输出
*/

// output: 2 3 1 4
// 500ms时，2完成，输出2，任务3进队
// 800ms时，3完成，输出3，任务4进队
// 1000ms时，1完成，输出1
// 1200ms时，4完成，输出4

class Scheduler{
    cache = [] // 缓存任务数据
    ongoingTask = [] // 当前执行任务队列
    _max =  2 // 最大并发任务

    add(promiseCreator) { 
        return new Promise(resolve=>{
            promiseCreator.resolve = resolve; // 保存当前promise的状态
            if(this.ongoingTask.length < this._max) { // 最大并发任务处理
                this.runWork(promiseCreator)
            } else {
                this.cache.push(promiseCreator)
            }
        })
    }

    runWork(promiseCreator) {
        this.ongoingTask.push(promiseCreator)
        promiseCreator().then(() => {
            promiseCreator.resolve()
            this.ongoingTask.splice(this.ongoingTask.indexOf(promiseCreator), 1) // 当前任务执行完成 清除task中的数据
            if(this.cache.length) {
                this.runWork(this.cache.shift()) // 根据执行的缓存顺序执行，保证执行的有序性
            }
        })
    }
}

const timeout = (time) => new Promise(resolve => {
    setTimeout(resolve, time)
})

const scheduler = new Scheduler()

function addTask(time, order) {
    scheduler
        .add(() => timeout(time))
        .then(() => {
            console.log(order)
        }) 
}

addTask(3000, 'order 1, has wait 3000')
addTask(1500, 'order 2, has wait 1500')
addTask(900, 'order 3, has wait 900')
addTask(1200, 'order 4, has wait 1200')

