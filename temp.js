
let x = 10;
console.log(Math);
console.log(Math.PI);

x = -7.7;
//絕對值
console.log(Math.abs(x));
//大於等於最接近的整數值
console.log(Math.ceil(x));
//小於等於最近接的整數值
console.log(Math.floor(x));
//回傳四捨五入的值
console.log(Math.round(x));
console.log("=====================================");

for (let i = 0; i < 10; i++) {
    // 0~9
    // 1~10
    // random.randint(0,10)
    // console.log(Math.floor(Math.random() * 10) + 1);
    // 5~20(包含20)
    console.log(Math.floor(Math.random() * 20 - 5 + 1) + 5);
}



let email="jerry@gmail.com";
console.log(email);
console.log(email.length);
console.log(email[0]);
console.log(email[email.length -1]);
console.log("=====================================");

for (let i=0; i< email.length; i++) {
    console.log(email[i]);
}

for (let g=0; g< email.length; g++) {
    document.write(email[g]);
}

// let x = 10;
// let y = "20";

// console.log(x + Number(y));
// // 答案是1020 (下)
// console.log(x + y); 
// console.log(x - y);
// console.log(x * y);
// console.log(x / y);

console.log("=====================================");
let z = 10;
let m = "a";

console.log(z + m); 
console.log(z - m);
console.log(z * m);
console.log(z / m);
console.log("=====================================");

let count = 0;
for (let f = 0; f < 10; f++) {
    // count=count+1 (後置運算，廻圈以"後置運算"為主)
    // console.log(i, count++);     
    // (下)前置運算，自己加完再輸出
    // console.log(i, ++count); 
    console.log(f, --count);
}
console.log("=====================================        ");

x = 10;
y = "10";

console.log(x == y);
console.log("=====================================        ");

// 0,'',Nan,null,undefined --> false
x = '10';
if (x) {
    console.log('yes');
}
/**
 * let/var/const 用法
 * 計算圓面積
 */
        
// 圓周率
const PI=3.1415926;
let radius = 0;
console.log(radius);
// while(true) {
//     radius = prompt("請輸入半徑:");
//     // !=> not
//     if (!isNaN(radius)) {
//         break;
//     }
//     alert("請輸入數值");
// }

let area = radius ** 2 * PI;
console.log(area);
// 區域
if (radius >= 10) {
    let radius = "5";
    let area = radius ** 2 ** PI;
    console.log(typeof (area));
}

const result = "半徑為:" + radius + "面積為:" + area;
// 三種輸出方式
console.log(typeof (result));
document.write("<h3>" + result + "</h3>");
// alert(result);
