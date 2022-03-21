/*
    Array; Set; Map;
    String; TypedArray
    函数的 arguments 对象, NodeList 对象

    一个数据结构只要部署了Symbol.iterator属性
    => 就被视为具有 iterator 接口/被视作iterable
    => 那么他也就可以适配解构/spread符号  // [..."hello world"]
    && 就可以被for...of循环消费，从而遍历它的成员

    async/await 本质是用generator实现，而generator本质是一个lazy iterator, 关键字yield

    for ... in 是基于hasOwnProperty
*/

const map=new Map([
    [1, 'x'],
    [2, 'y'],
    [3, 'z']
]);
for (let [k,v] of map.entries()){
    console.log(k,v)
}

// let arr = ['a', 'b', 'c'];
// let iter = arr[Symbol.iterator]();
// iter.next() // { value: 'a', done: false }
// iter.next() // { value: 'b', done: false }
// iter.next() // { value: 'c', done: false }
// iter.next() // { value: undefined, done: true }


// let obj={
//     data:['name:前端小鹿','age:18', 'sex:男'],
//     [Symbol.iterator]: function(){
//       const self=this
//         let index=0;
//         return {
//             next:function(){
//               if (index < self.data.length) {
//                 return {
//                   value: self.data[index++],
//                   done: false
//                 };
//           }
//               return { value: undefined, done: true };
//             }
//         }
//     }
// }
// for (let i of obj){
//     console.log(i) 
// }