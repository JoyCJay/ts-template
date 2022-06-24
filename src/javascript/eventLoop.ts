/**
 * 当前执行栈执行完毕时会立刻先处理所有微任务队列中的事件，然后再去宏任务队列中取出一个事件
 * 同一次事件循环中，微任务永远在宏任务之前执行。
 */

console.log(1)

setTimeout(() => {
    console.log(5)
}, 0);

new Promise<void>((res) => {
    console.log(2)
    res();
}).then(v => {
    console.log(4)
    setTimeout(() => {
        console.log(6)
    }, 0);
})

console.log(3)
