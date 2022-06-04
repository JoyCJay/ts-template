function throttle(cb: Function, time = 1000) {
    let timer;
    return () => {
        if (!timer) {
            const p = new Promise<void>((res, rej) => {
                timer = setTimeout(() => {
                    cb()
                    res()
                }, time)
            })

            p.then(() => {
                console.log('promise then')
                clearTimeout(timer)
            })
        }
    }
}

function debouncer(cb: Function, time = 1000) {
    let timer;
    return () => {
        clearTimeout(timer)
        timer = setTimeout(cb, time)
    }
}


function show() {
    console.log(123)
}

show()
// throttle(show)()
// throttle(show)()
// throttle(show)()
debouncer(show)()
debouncer(show)()
debouncer(show)()