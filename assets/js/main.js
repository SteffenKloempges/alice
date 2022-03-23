let openForm = document.getElementById('open-form');
let closeForm = document.getElementById('close-form');
let design = document.getElementById('design')
let threeSixFive = document.getElementById('threeSixFive')
let listMouseOver = document.getElementById('list-mouseover')
let standortfreiheit = document.getElementById('standortfreiheit')
let vorfertigung = document.getElementById('vorfertigung')
let material = document.getElementById('material')
let herstellung = document.getElementById('herstellung')
let kollaborator = document.getElementById('kollaborator')
let service = document.getElementById('service')


openForm.addEventListener('click', () => {
    document.querySelector('.waitinglist-slider-form').style.right = 0;
    document.querySelector('.waitinglist-slider-form').style.left = "0";
})

closeForm.addEventListener('click', () => {
    document.querySelector('.waitinglist-slider-form').style.right = "-100%";
    document.querySelector('.waitinglist-slider-form').style.left = "100%";
})

// =====================================
//         why alice text hover
//======================================

design.addEventListener('mouseover', () => {
    design.style.color = "lightgreen"
    listMouseOver.innerHTML = 'Auch ohne Ecken und Kanten unverwechselbar. Alice ist schlicht, sympathisch und aus jedem Winkel schön.'
})

design.addEventListener('mouseout', () => {
    design.style.color = "black"
})

threeSixFive.addEventListener('mouseover', () => {
    threeSixFive.style.color = "lightcoral"
    listMouseOver.innerHTML = 'Ökologisch nachhaltige Volldämmung, Dreifachverglasung und elektrische Fußbodenheizung. Alice ist auf jede Wettersituation vorbereitet und wird damit zu dem Ort, an dem sich jeder an 365 Tagen im Jahr wohl fühlt. '
})

threeSixFive.addEventListener('mouseout', () => {
    threeSixFive.style.color = "black"
})

standortfreiheit.addEventListener('mouseover', () => {
    standortfreiheit.style.color = "lightskyblue"
    listMouseOver.innerHTML = 'Im Garten, auf der Dachterrasse oder deinem Lieblingsort. Alice ist unkompliziert und schnell dort platzierbar, wo Du dich wohl fühlst. Und ändern sich deine Pläne, ist für Alice kein Weg zu weit. With you wherever you’re going.'
})

standortfreiheit.addEventListener('mouseout', () => {
    standortfreiheit.style.color = "black"
})

vorfertigung.addEventListener('mouseover', () => {
    listMouseOver.innerHTML = 'Lorem lorem lorem lorem lorem lorem.'
})

material.addEventListener('mouseover', () => {
    listMouseOver.innerHTML = 'Less is more und deshalb setzt sich Alice aus sehr wenigen Materialien zusammen, die möglichst häufig Verwendung finden und das Wertvolle im Einfachen betonen. A mindful approach: Alice besteht zu über 80% aus Holz. Dieses beziehen wir ausschließlich aus heimischen Wäldern, die nachweislich ökologisch, ökonomisch und sozial nachhaltig bewirtschaftet werden. Die Materialkomposition von Alice  ist ein sorgfältig ausgesuchtes Zusammenspiel der Naturwerkstoffe Holz, Linoleum und Wollfilz.'
})

herstellung.addEventListener('mouseover', () => {
    listMouseOver.innerHTML = 'Alice ist Made in Germany und vom ersten bis letzten Fertigungsschritt in den besten Händen unseres inhabergeführten Partners. Dieser hebt Alice dank 100-jähriger Erfahrung, Exzellenz und modernstem Technologie-Einsatz auf ein Niveau, welches den Unterschied aus macht.'
})

kollaborator.addEventListener('mouseover', () => {
    listMouseOver.innerHTML = 'Wir arbeiten mit den weltweit besten Herstellern zusammen, dessen Komponenten und Systeme sich nahtlos in das bestehende Design von Alice einfügen und stilistisch wie materiell auf Langlebigkeit ausgelegt sind. It´s a match. '
})

// ========================
//      auto slider
// ========================

let container = document.querySelector(".slider")
let image = ["assets/img/Stage-Studio.png", "assets/img/Stage-One.png"]

let index = 0

function slide() {
    index++
    if (index > image.length - 1) {
        index = 0
    }
    container.style.backgroundImage = `url(${image[index]}`
}

setInterval(function () {
    slide()
}, 5000);