const imgPath_grayParrot = chrome.runtime.getURL("parrot.png")
const imgPath_Parrot = chrome.runtime.getURL("parrot.gif")


const fav_actives = document.querySelectorAll(".course-card-fav")
Array.prototype.forEach.call(fav_actives, item => {
    const element = item.childNodes[1].childNodes[0];
    const src = element.getAttribute("src")
    element.setAttribute("width","16px")
    element.setAttribute("height","16px")
    if (src==="/icon_clip_off.png"){
        element.setAttribute("src",imgPath_grayParrot)

    }
    if (src==="/icon_clip_on.png"){
        element.setAttribute("src",imgPath_Parrot)

    }})
console.log(fav_actives.length)
