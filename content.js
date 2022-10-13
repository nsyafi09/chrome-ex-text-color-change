console.log("Extension Starts!")
// Getting the element for the trigger button
const triggerBtn = document.getElementById("trigger-btn")

// Get selector for all element (unused)
let paragraphEl = document.getElementsByTagName("p")
// let paragraphEl = document.querySelectorAll("body *")

const importantWords = {
    what: `<span style="color:red">what</span>`,
    who: `<span style="color:red">who</span>`,
    where: `<span style="color:red">where</span>`,
    when: `<span style="color:red">when</span>`,
    how: `<span style="color:red">how</span>`,
    earth: `<span style="color:red">earth</span>`,
    Earth: `<span style="color:red">Earth</span>`
}

for(i = 0; i < paragraphEl.length; i++) {

    paragraphEl[i].style['color'] = "green"

    text = paragraphEl[i].innerHTML;
    // text = text.replace("you",`<span style="color:#0000FF">Hello</span>`)
    
    const reg = new RegExp(Object.keys(importantWords).join("|"), "g")
    text = text.replace(reg, (matched) => importantWords[matched])

    paragraphEl[i].innerHTML = text
}
















// NOT WORKING! (Try to only specific words to change color)
// const colorEl = document.getElementById("styleChange").value
/* 
const importantWords = {
    what: `<span style="color:red">what</span>`,
    who: `<span style="color:red">who</span>`,
    where: `<span style="color:red">where</span>`,
    when: `<span style="color:red">when</span>`,
    how: `<span style="color:red">how</span>`,
    earth: `<span style="color:red">earth</span>`
}

function changeStyle() {
    for(i = 0; i < paragraphEl.length; i++) {

        paragraphEl[i].style['color'] = "maroon"

        text = paragraphEl[i].innerHTML;
        // text = text.replace("you",`<span style="color:#0000FF">Hello</span>`)
        
        const reg = new RegExp(Object.keys(importantWords).join("|"), "g")
        text = text.replace(reg, (matched) => importantWords[matched])

        paragraphEl[i].innerHTML = text
    }
} triggerBtn.addEventListener('click', changeStyle)


// Change p element to a certain color
triggerBtn.addEventListener("click", function() {
    var text;

    chrome.tabs.query({active: true, currentWindow: true}, function() {
        for(i = 0; i < paragraphEl.length; i++) {
            text = paragraphEl[i].innerHTML;
            // text = text.replace("you",`<span style="color:#0000FF">Hello</span>`)
            
            const reg = new RegExp(Object.keys(importantWords).join("|"), "g")
            text = text.replace(reg, (matched) => importantWords[matched])
    
            paragraphEl[i].innerHTML = text
        }
    })

    console.log("Contents Changed")
})
 */