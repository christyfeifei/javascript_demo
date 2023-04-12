const dateE1s = document.querySelectorAll(".date");
console.log(dateE1s);
dateE1s.forEach(x => x.innerText = getToday());
dateE1s[0].setAttribute("style","color:black;fontsize=16");
showTime()

click=false;
function showTime() {
    dateE1s[0].innerText = getTime(); 
    setTimeout(() => {
        showTime();
        if (!click) {
            lottoClick();
        }
    },1000);
}

// 取得今天日期
function getToday() {
    let today = new Date();
    let year = today.getFullYear();
    let month = today.getMonth() + 1;
    let date = today.getDate();

    return `${year}-${month}-${date}`;
}

//取得時、分、秒跟年、月、日
function getTime(fullTime = true) {
    let now = new Date();
    let year = now.getFullYear();
    let month = now.getMonth()+1;
    let date = now.getDate();
    let hours = now.getHours();
    let minutes = now.getMinutes();
    let seconds = String(now.getSeconds()).padStart(2, "0");
    
    if (fullTime) {
        return `${year}/${month}/${date} ${hours}:${minutes}:${seconds}`;
    }
    
    return `${year}/${month}/${date}`;
}
// const startE1 = document.querySelector("#start");
// console.log(startE1);
// startE1.innerText = ("開獎!");

// startE1.addEventListener("click", lottoClick);

function lottoClick() {
    let lottos = [];
    click=true;
    const lottoE1 = document.querySelector(".lotto-number");
    lottoE1.innerHTML = "";
    for(let i = 0; i < 5; i++) {
        let lotto = getLotto(start, end);
        lottos.push(lotto);
    }   
    
    console.log(lottos);
    let htmlText="<table border = 1>";
    for (let i = 0; i < lottos.length; i++) {
        htmlText += "<tr>";
        for(let j = 0; j < lottos[i].length; j++) {
            htmlText += `<td>${[lottos[i][j]]}</td>`;
        }
        htmlText += "</tr>";
    }
    htmlText+="</table>";

    console.log(htmlText);
    lottoE1.innerHTML = htmlText;
    // for (let i = 0; i < lottos.length; i++) {    
    //     lottoE1.innerHTML+= `<li style=${i % 2 == 0 ? "color:black" : "color:blue"} > ${lottos[i].join(",")}</li>`;
    // }
}

