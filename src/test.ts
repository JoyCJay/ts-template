/**
 * 当前执行栈执行完毕时会立刻先处理所有微任务队列中的事件，然后再去宏任务队列中取出一个事件
 * 同一次事件循环中，微任务永远在宏任务之前执行。
 */
function f1() {
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
}
// f1()

function f2() {
    function debounce(cb: Function, dTime = 1000){
        let timer;

        return (...args) => {
            clearTimeout(timer);
            timer = setTimeout(() => {
                cb(args);
            }, dTime);
        };
    }

    debounce((v) => {
        console.log("cb", v)
    }, 2000)('p1', 'p2');
}
// f2()

function f3() {
    // Example 1
    interface GenericInterface<U> {
        value: U
        getField: () => U
    }
    class GenericClass<T> implements GenericInterface<T> {
        value: T
    
        constructor(value: T) {
            this.value = value
        }
    
        getField(): T {
            return this.value
        }
    }
    // Pick是取， omit是剔除。 下面例子中Pure1 == Pure2
    type Pure1<U> = Pick<GenericInterface<U>, "value">;
    type Pure2<U> = Omit<GenericInterface<U>, "getField">;
    class PurePerson<T> implements Pure1<T> {
        value: T

        constructor(v: T) {
            this.value = v
        }
    }

    const numGCInstance = new GenericClass<Number>(68);
    console.log(numGCInstance.getField()); // 68

    const strGCInstance = new GenericClass<string>("Semlinker!");
    console.log(strGCInstance.getField()); // Semlinker!

    const myPurePerson = new PurePerson<string>("Chengjie ZHANG");
    console.log(myPurePerson)


    // Example 2
    interface IPerson {
        sex: string;
        age: number;
        name: string;
    }
    class Person implements IPerson {
        sex: string;
        age: number;
        name: string;

        constructor(name: string, age: number) {
            this.name = name;
            this.age = age;
        }
    }
    class Male extends Person {
        readonly sex = "male";
        age: number;
        name: string;
    }
    class Female extends Person {
        readonly sex = "female";
        age: number;
        name: string;
    }

    interface PersonConstructor {
        new (name: string, age: number): IPerson;
    }
    function newPersonFactory(
        personConstructor: PersonConstructor,
        name: string, age: number
    ): IPerson {
        return new personConstructor(name, age);
    }

    const p1: IPerson = newPersonFactory(Male, "CJ-guy", 26);
    const p2: IPerson = newPersonFactory(Female, "CJ-guy", 26);
    console.log(p1, p2)
}
f3()


