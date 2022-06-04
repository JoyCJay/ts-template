const foo = {
    value: 1
}

const bar = {
    value: 2
}

function todo() {
    console.log(this.value)
} 

todo.apply(foo)
todo.call(bar)
todo.bind(foo)()

with(bar) {
    value = 3
}
todo.call(bar)