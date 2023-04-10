const element = document.querySelector("h1");
console.log(element);

// 更改本文
element.innerText = element.innerText;
// 更改HTML
element.innerHTML = `<li style="color:blue">${element.innerText}</li>`;

//<p class="date">
const deteE1 = document.querySelector("p.date");
console.log(deteE1);

//<h3>下面的<span class="date">
const deteE2 = document.querySelector("span.date"); // 同document.querySelector("h3 .date")
deteE2.innerText = "2023/4/6";
console.log(deteE2);

const dateE1s = document.querySelectorAll(".date");
console.log(dateE1s);
dateE1s.forEach(x => x.innerText = getToday());
// //最上方的日期顯示, 改變為空字串
// dateE1s[0].innerHTML = "";
//最上方的日期顯示, 移除
dateE1s[0].remove();

// 取得今天日期
function getToday() {
    let today = new Date();
    let year = today.getFullYear();
    let month = today.getMonth() + 1;
    let date = today.getDate();

    return `${year}-${month}-${date}`;
}

const startE1 = document.querySelector("#start");
console.log(startE1);
startE1.innerText = ("開獎!");

startE1.addEventListener("click", lottoClick);

function lottoClick() {
    let lottos = [];
    const lottoE1 = document.querySelector(".lotto-number ul");
    lottoE1.innerHTML = "";
    for(let i = 0; i < 5; i++) {
        let lotto = getLotto(start, end);
        lottos.push(lotto);
    }   
    
    for (let i = 0; i < lottos.length; i++) {    
        lottoE1.innerHTML+= `<li style=${i % 2 == 0 ? "color:red" : "color:blue"} > ${lottos[i].join(",")}</li>`;

    }
}

