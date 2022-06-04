// @ts-ignore
String.prototype.render = function(obj) {
    const keys = Object.keys(obj).join(',') // keys = 'name, age, job'
    eval(`var { ${keys} } = obj`)
    // this = [String: 'My name is ${name}, age ${age}, I am a ${job.jobName}']
    return eval('`' + this + '`')
}

// 可以，但是不建议用with关键字
// @ts-ignore
String.prototype.render2 = function (obj) {
    // @ts-ignore
    with(obj) {
        return eval('`' + this + '`')
    }
}


/**
 * 思路分两步，一步是把string换成eval(string)，第二步把字符串李的变量给申请赋值出来
 */
var greeting = 'My name is ${name}, age ${age}, I am a ${job.jobName}';
var employee = {
    name: 'XiaoMing',
    age: 11,
    job: {
        jobName: 'designer',
        jobLevel: 'senior'
    }
};

// @ts-ignore
console.log( greeting.render(employee) );
// @ts-ignore
console.log( greeting.render2(employee) );
