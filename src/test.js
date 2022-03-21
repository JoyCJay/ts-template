function showMoney( ) {
    return this.money.toString();
};
    
var personA = new Object;
var personB = new Object;
    
personA.money= "100";
personB.money= "150";
    
personA.showMoney= showMoney;
personB.showMoney= showMoney;

console.log(personA.showMoney( )); //"100"
const b = ['a','b','c','d','e'];
const c = b.splice(1,2, 'abc');
const d = b.slice();
console.log(b, c, d);