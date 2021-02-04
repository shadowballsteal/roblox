const selected = document.querySelector(".selected");
const optionsContainer = document.querySelector(".options-container");

const optionsList = document.querySelectorAll(".option");

selected.addEventListener("click", (e) => {
    optionsContainer.classList.toggle("active");
    e.stopPropagation();
});

optionsList.forEach(o => {
    o.addEventListener("click", () => {
        selected.innerHTML = o.querySelector("label").innerHTML;
        optionsContainer.classList.remove("active");

    });
});

function closeSelect() {
    optionsContainer.classList.remove("active");
}
document.addEventListener("click", closeSelect);






// function chatHistory() {
//     setInterval(function() {
//         document.getElementById("chat").innerHTML += "<span style='color: #009900; font-weight:bold;'>Razvsan: </span><span style='font-size:14px;'>sadsd sadas asdasd adsa dsssssssssd adsa dsa dads</span><br>";

//     }, 500);


// }

// chatHistory();

// setInterval(function() {
//     // allow 1px inaccuracy by adding 1
//     const isScrolledToBottom = out.scrollHeight - out.clientHeight <= out.scrollTop + 1;

//     // scroll to bottom if isScrolledToBottom is true
//     if (isScrolledToBottom) {
//         out.scrollTop = out.scrollHeight - out.clientHeight
//     }

// }, 1000);






// setInterval(function() {
//     // allow 1px inaccuracy by adding 1
//     const isScrolledToBottom = out.scrollHeight - out.clientHeight <= out.scrollTop + 1

//     const newElement = document.createElement("div")

//     newElement.textContent += format();

//     out.appendChild(newElement)

//     // scroll to bottom if isScrolledToBottom is true
//     if (isScrolledToBottom) {
//         out.scrollTop = out.scrollHeight - out.clientHeight
//     }
// }, 500)




const chat = document.getElementById("chat");


var i = -1;

function format() {
    let chathistory = ["<span style='color: #009900; font-weight:bold;'>Marcus1222: </span><span style='font-size:14px;'>lol guys it worked idk if u trust but yeah</span><br>",
        "<span style='color: #009900; font-weight:bold;'>Adrian: </span><span style='font-size:14px;'>whattt this really works?</span><br>",
        "<span style='color: #009900; font-weight:bold;'>KaNNedo: </span><span style='font-size:14px;'>tried 2 times but worked!!!</span><br>",
        "<span style='color: #009900; font-weight:bold;'>Akanubara: </span><span style='font-size:14px;'>y Adrian i claimed them 2 days ago</span><br>",
        "<span style='color: #009900; font-weight:bold;'>LetiDo: </span><span style='font-size:14px;'>yes Adrian, it works :)</span><br>",
        "<span style='color: #009900; font-weight:bold;'>Cristiano: </span><span style='font-size:14px;'>I got 20k robux from them haha</span><br>",
        "<span style='color: #009900; font-weight:bold;'>plsSensei: </span><span style='font-size:14px;'>ezzzz got the robux</span><br>",
        "<span style='color: #009900; font-weight:bold;'>Custom007: </span><span style='font-size:14px;'>ohh i put only 5k robux sad:( but at least i got them</span><br>",
        "<span style='color: #009900; font-weight:bold;'>Aderal: </span><span style='font-size:14px;'>I claimed 20k robux every day for 1 week lol now i have 140k robux</span><br>",
        "<span style='color: #009900; font-weight:bold;'>san722: </span><span style='font-size:14px;'>wait a second, is this legit?</span><br>",
        "<span style='color: #009900; font-weight:bold;'>raul21121: </span><span style='font-size:14px;'>yeeeeesss i got the robux after 5 minutess</span><br>",
        "<span style='color: #009900; font-weight:bold;'>credittou: </span><span style='font-size:14px;'>does this work? my friend said yes but i have to try</span><br>",
        "<span style='color: #009900; font-weight:bold;'>PleaSja: </span><span style='font-size:14px;'>What does this website</span><br>",
        "<span style='color: #009900; font-weight:bold;'>Marcela: </span><span style='font-size:14px;'>nice!</span><br>",
        "<span style='color: #009900; font-weight:bold;'>RaluccaG: </span><span style='font-size:14px;'>hi, wassup</span><br>",
        "<span style='color: #009900; font-weight:bold;'>Popppsj: </span><span style='font-size:14px;'>hello guys how r u</span><br>",
        "<span style='color: #009900; font-weight:bold;'>Rarsbbban: </span><span style='font-size:14px;'>yep, 100000% legitt</span><br>",
        "<span style='color: #009900; font-weight:bold;'>Pksjs: </span><span style='font-size:14px;'>Hi, i m fine wbu</span><br>",
        "<span style='color: #009900; font-weight:bold;'>Hhhitried: </span><span style='font-size:14px;'>pretty cool website!!</span><br>",
        "<span style='color: #009900; font-weight:bold;'>p0lly: </span><span style='font-size:14px;'>I will share this website for giving me 20k robux</span><br>",
        "<span style='color: #009900; font-weight:bold;'>onlytherobux: </span><span style='font-size:14px;'>How much robux can I claim?</span><br>",
        "<span style='color: #009900; font-weight:bold;'>testingit: </span><span style='font-size:14px;'>After i claimed robux it let me type in chat</span><br>",
        "<span style='color: #009900; font-weight:bold;'>GIVE NAME: </span><span style='font-size:14px;'>HIGHLY RECOMMENDED</span><br>",
        "<span style='color: #009900; font-weight:bold;'>ahh9722: </span><span style='font-size:14px;'>i just got 5k robux for free</span><br>",
        "<span style='color: #009900; font-weight:bold;'>LetiDo: </span><span style='font-size:14px;'>let me call my friends</span><br>",
        "<span style='color: #009900; font-weight:bold;'>san722: </span><span style='font-size:14px;'>that's interesting</span><br>",
        "<span style='color: #009900; font-weight:bold;'>Crysis3: </span><span style='font-size:14px;'>how years old r u guys</span><br>",
        "<span style='color: #009900; font-weight:bold;'>workingtested: </span><span style='font-size:14px;'>For sure i will try it now</span><br>",
        "<span style='color: #009900; font-weight:bold;'>abbaasss99: </span><span style='font-size:14px;'>ok it rly works nice</span><br>",
        "<span style='color: #009900; font-weight:bold;'>HOAM: </span><span style='font-size:14px;'>i claimed now and it worked</span><br>",
        "<span style='color: #009900; font-weight:bold;'>gameboy590: </span><span style='font-size:14px;'>YOOOOO legit and safe</span><br>",
        "<span style='color: #009900; font-weight:bold;'>emaiee: </span><span style='font-size:14px;'>i'm 14yo</span><br>",
        "<span style='color: #009900; font-weight:bold;'>topYoutube: </span><span style='font-size:14px;'>hello!!</span><br>",
        "<span style='color: #009900; font-weight:bold;'>freeMusicN: </span><span style='font-size:14px;'>Im 16</span><br>",
        "<span style='color: #009900; font-weight:bold;'>TonighTRsa: </span><span style='font-size:14px;'>i m 9 years lol but i love roblox</span><br>",
        "<span style='color: #009900; font-weight:bold;'>Cristiano: </span><span style='font-size:14px;'>wassup?</span><br>",
        "<span style='color: #009900; font-weight:bold;'>Kisses no Blisses: </span><span style='font-size:14px;'>How many times can I claim robux????</span><br>",
        "<span style='color: #009900; font-weight:bold;'>rileyxXO: </span><span style='font-size:14px;'>I HAVE TO SAY IT'S LEGIIIT GUYS</span><br>",
        "<span style='color: #009900; font-weight:bold;'>depressionn: </span><span style='font-size:14px;'>nice this really works</span><br>",
        "<span style='color: #009900; font-weight:bold;'>Loca Taking a place: </span><span style='font-size:14px;'>THANKS GUYS FOR ROBUXX love you</span><br>",
        "<span style='color: #009900; font-weight:bold;'>MOnkaKIng: </span><span style='font-size:14px;'>Ok what's ur tiktok then</span><br>",
        "<span style='color: #009900; font-weight:bold;'>Prince Hormeone: </span><span style='font-size:14px;'>I think the cooldown is 7 days</span><br>",
        "<span style='color: #009900; font-weight:bold;'>doggo: </span><span style='font-size:14px;'>try urself man it's free</span><br>",
        "<span style='color: #009900; font-weight:bold;'>Arba and Abra: </span><span style='font-size:14px;'>idk, i claimed 4 times 20k robux</span><br>",
        "<span style='color: #009900; font-weight:bold;'>ShlMm12/22: </span><span style='font-size:14px;'>How are there so many people</span><br>",
        "<span style='color: #009900; font-weight:bold;'>!Zoey22: </span><span style='font-size:14px;'>all my friends claimed 20k robuxxcx</span><br>",
        "<span style='color: #009900; font-weight:bold;'>AyKonz: </span><span style='font-size:14px;'>LOL i rly got robux for free nice</span><br>",
        "<span style='color: #009900; font-weight:bold;'>Meina: </span><span style='font-size:14px;'>hi Cristiano, i'm fine, how r u?</span><br>",
        "<span style='color: #009900; font-weight:bold;'>bluekid: </span><span style='font-size:14px;'>Interesting generator</span><br>",
        "<span style='color: #009900; font-weight:bold;'>Leslie4Fun: </span><span style='font-size:14px;'>Go watch a youtube tutorial</span><br>",
        "<span style='color: #009900; font-weight:bold;'>LITTLEnandor: </span><span style='font-size:14px;'>How many times can I claim?</span><br>",
        "<span style='color: #009900; font-weight:bold;'>eagirl: </span><span style='font-size:14px;'>nopeee i already got them</span><br>",
        "<span style='color: #009900; font-weight:bold;'>Pausan262: </span><span style='font-size:14px;'>I already claimed one time, tomorrow ill try again</span><br>",
        "<span style='color: #009900; font-weight:bold;'>XPHONE87: </span><span style='font-size:14px;'>I'll try this after 5 minutes</span><br>",
        "<span style='color: #009900; font-weight:bold;'>Aurelia3323: </span><span style='font-size:14px;'>ok, finally i received the robux</span><br>",
        "<span style='color: #009900; font-weight:bold;'>NothingImportant66: </span><span style='font-size:14px;'>WTF I GOT THEM</span><br>"

    ];
    i++;
    if (i <= 55)
        return chathistory[i];
    return "<span style='color:red;'>Error at chat, please reload!</span>";
}


setInterval(function() {
    // allow 1px inaccuracy by adding 1
    const isScrolledToBottom = chat.scrollHeight - chat.clientHeight <= chat.scrollTop + 1


    // scroll to bottom if isScrolledToBottom is true
    if (isScrolledToBottom) {
        chat.scrollTop = chat.scrollHeight - chat.clientHeight
    }
}, 500)







function myFunction() {
    var min = 5,
        max = 10;
    var rand = Math.floor(Math.random() * (max - min + 1) + 1);
    const isScrolledToBottom = chat.scrollHeight - chat.clientHeight <= chat.scrollTop + 1

    const newElement = document.createElement("div")

    var xaxa = format();
    if (xaxa === "<span style='color:red;'>Error at chat, please reload!</span>") {


    } else {
        newElement.innerHTML += xaxa;
        chat.appendChild(newElement);
    }
    // newElement.innerHTML += format();

    // chat.appendChild(newElement);



    if (isScrolledToBottom) {
        chat.scrollTop = chat.scrollHeight - chat.clientHeight
    }
    // console.log('Wait for ' + rand + ' seconds');

    // document.getElementById("chat").innerHTML += "<span style='color: #009900; font-weight:bold;'>Razvsan: </span><span style='font-size:14px;'>sadsd sadas asdasd adsa dsssssssssd adsa dsa dads</span><br>";

    setTimeout(myFunction, rand * 1000);
}

myFunction();








function appear() {
    if (document.getElementById("username").value && (selected.innerHTML === "5000 Robux" || selected.innerHTML === "10000 Robux" || selected.innerHTML === "15000 Robux" || selected.innerHTML === "20000 Robux"))
        window.location = "index2.php";
}