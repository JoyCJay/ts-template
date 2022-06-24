const EventEmitter = require('events')
const eventEmitter = new EventEmitter()

// subscription
eventEmitter.on('nativeEvent', () => {
    console.log('nativeEvent hitted')
})
// update/next
eventEmitter.emit('nativeEvent')
eventEmitter.emit('nativeEvent')

class myEventEmitter {
    registeredEvent: Map<string, Function[]>
    constructor() {
        this.registeredEvent = new Map()
    }

    on(eventName: string, handler: Function) {
        if (!this.registeredEvent.has(eventName)) {
            this.registeredEvent.set(eventName, [])
        }

        this.registeredEvent.get(eventName).push(handler)
    }

    emit(eventName: string) {
        const handlers = this.registeredEvent.get(eventName)
        handlers.forEach(h => h.call(this))
    }
}

const cjEventEmitter = new myEventEmitter()
cjEventEmitter.on('self impl class', () => {
    console.log('self impl class hitted')
})
// update/next
cjEventEmitter.emit('self impl class')
cjEventEmitter.emit('self impl class')