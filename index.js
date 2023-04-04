let start = 1;
let end = 49;
let lottos=[];

document.write("<h2>大樂透號碼</h2>");
for(let i = 0; i < 5; i++) {
    let lotto = getLotto(start, end);
    lottos.push(lotto);
    document.write(`<li style="color:red">${lotto.join(",")}</li>`);
}       

console.log(lottos);

//函式宣告
function getLotto(start, end, count = 6) {
    let lotto = [];
    for (let i = 0; i < count; i++) {
        number = Math.floor(Math.random() * (end - start + 1) + start);
        lotto.push(number);
    }
    return lotto;
}