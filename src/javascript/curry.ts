/**
 * JavaScript中函数柯里化(currying): f(a,b,c) => f(a)(b)(c)
 * (1) 延迟计算
 * (2) 参数复用
 * (3) 动态生成函数
 */


 function discount(price, discount) {
	return price * (1 - discount);// discount为小数,例如0.1代表优惠10%
}

function discountCurry(discount) {
	return function(price) {
		return price * (1 - discount);
	}
}

const tenOff: Function = discountCurry(0.1)
const twentyOff: Function = discountCurry(0.2)

const price1: Number = tenOff(5000); // 4500
const price2: Number = twentyOff(5000) // 4000

console.log(tenOff, twentyOff, price1, price2)