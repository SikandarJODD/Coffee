document.getElementById('header_logo').addEventListener("mouseenter", () => {
    document.getElementById('coffee_logo').src = "imgs/img_logo.png";
    document.getElementById('coffee_logo').style.width = "70px";
    document.getElementById('coffee_logo').style.height = "70px";
    document.getElementById('coffee_logo').style.transform = "scale(1.2)";
    document.getElementById('coffee').style.color = "#c2f8fcf5";
    document.getElementById('img_1').style.transform = "scale(1.2)";
    // document.getElementById('img_1').src = "/imgs/coffee_cup.png";
})
document.getElementById('header_logo').addEventListener("mouseleave", () => {
    // document.getElementById('img_1').src = "/imgs/coffee__cup1_gg.png";
    document.getElementById('coffee').style.color = "#760c00";
    document.getElementById('img_1').style.transform = "scale(1)";
})
// if (e.pageY > 720) {
//     document.getElementById("content_main_p").style.color = "royalblue";
// }
// else {
//     document.getElementById("content_main_p").style.color = "#f8d110f3";
// }
// console.log(e.pageY);
// 

window.onscroll = () => {
    if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 680) {
        document.getElementById("content_main_p").style.color = "#fcfaf7f3";
        document.getElementById("content_main_p").style.fontSize="2.6rem";
        document.getElementById("content_main_p").style.transform="scale(1.06)";
    }
    else {
        document.getElementById("content_main_p").style.transform="scale(1)";
        document.getElementById("content_main_p").style.color = "#f8d110f3";
        document.getElementById("content_main_p").style.fontSize="2.3rem";
    }
    console.log(document.documentElement.scrollTop);
}

