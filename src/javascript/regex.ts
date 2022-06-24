/**
 *  # 修饰符
 *      i: 大小写不敏感
 *      g: 全局匹配 (replaceAll)
 *      m: 多行匹配
 * 
 *  # 表达式
 *      ## 方括号范围
 *          [abc], [^0-9] 非数字, (x|y) 或
 * 
 *      ## 量词
 *          x+: 至少一个
 *          x?: 0或1个
 *          x{m,n}: [m,n]个x
 *          x*: 任意个
 */

//用户名正则，4到16位（字母，数字，下划线，减号）
const uPattern = /^[a-zA-Z0-9_-]{4,16}$/;
console.assert(uPattern.test("user_name"), 'pattern incorrect'); 

//密码强度正则，最少6位，包括至少1个大写字母，1个小写字母，1个数字，1个特殊字符
const pPattern = /^.*(?=.{6,})(?=.*\d)(?=.*[A-Z])(?=.*[a-z])(?=.*[!@#$%^&*?_ ]).*$/;
console.assert(pPattern.test("ZheShiMiMa_3366"), 'pattern incorrect'); 

//正整数, 负整数, 整数正则
const posPattern = /^\d+$/; // 如果是小数 pattern = /^\d*\.?\d+$/
console.assert(posPattern.test("42"), 'pattern incorrect'); 

var negPattern = /^-\d+$/;
console.assert(negPattern.test("-42"), 'pattern incorrect'); 

var intPattern = /^-?\d+$/;
console.assert(intPattern.test("-42"), 'pattern incorrect'); 

//Email正则
var ePattern = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
console.assert(ePattern.test("user_name123@163.com"), 'pattern incorrect'); 

//手机号正则
var mPattern = /^1[34578]\d{9}$/;
console.assert(mPattern.test("15507621888"), 'pattern incorrect'); 

//日期正则，简单判定(未做月份及日期的判定)
var dP1 = /^\d{4}(\-)\d{1,2}\1\d{1,2}$/;
console.assert(dP1.test("2017-05-11"), 'pattern incorrect'); 
console.assert(dP1.test("2017-15-11"), 'pattern incorrect'); // but should be false

//包含中文正则
var cnPattern = /[\u4E00-\u9FA5]/; // unicode
console.assert(cnPattern.test("你好"), 'pattern incorrect');