/**
函数柯里化传参

类装饰器、访问器装饰器、属性装饰器、方法(method)装饰器、参数装饰器，但是没有函数装饰器(function)

装饰器求值
    类中不同声明上的装饰器将按以下规定的顺序应用：

    1. 参数装饰器，然后依次是方法装饰器，访问符装饰器，或属性装饰器应用到每个实例成员。
    2. 参数装饰器，然后依次是方法装饰器，访问符装饰器，或属性装饰器应用到每个静态成员。
    3. 参数装饰器应用到构造函数。
    4. 类装饰器应用到类。

 */

// 1. 类装饰器
function addAge(args: number) {
    // 真正的装饰器
    return function (target: Function) {
        // console.log(target) // [class Hello]
        console.log("class decorator");
        target.prototype.age = args;
    };
}

// 2. 方法装饰器, 可以看到实例成员f2优先f1调用
function methodDecorator(target: any, propertyKey: string, descriptor: PropertyDescriptor) {
    console.log("method decorator");
    console.log(target);
    console.log("prop " + propertyKey);
    console.log("desc " + JSON.stringify(descriptor) + "\n\n");
};

// 3. 参数装饰器
function paramDecorator() {
    return function (target, methodName: string, paramIndex: number) {
        console.log("parameter decorator");
    }
}

// 4. 属性装饰器
function log(target: any, propertyKey: string) {
    console.log("property decorator");

    // 替换属性，先删除原先的属性，再重新定义属性
    let value = target[propertyKey];
    if (delete this[propertyKey]) {
        Object.defineProperty(target, propertyKey, {
            get: function () {
                console.log(`Getter for ${propertyKey} returned ${value}`);
                return value;
            },
            set: function (newVal) {
                console.log(`Set ${propertyKey} to ${newVal}`);
                value = newVal;
            },
            enumerable: true,
            configurable: true
        });
    }
}

@addAge(18)
class Person {
    name: string;
    @log age: number;

    constructor() {
        this.name = 'yugo';
    }

    @methodDecorator
    static f1 () {
        console.log('f1 called')
    }

    @methodDecorator
    f2 (@paramDecorator() param) {
        console.log('f2 called')
    }
}

console.log(Person.prototype.age)
let p1 = new Person();
console.log(p1.age)

