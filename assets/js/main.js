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


// openForm.addEventListener('click', () => {
//     document.querySelector('.waitinglist-slider-form').style.right = 0;
//     document.querySelector('.waitinglist-slider-form').style.left = "0";
// })

// closeForm.addEventListener('click', () => {
//     document.querySelector('.waitinglist-slider-form').style.right = "-100%";
//     document.querySelector('.waitinglist-slider-form').style.left = "100%";
// })

// =====================================
//         why alice text hover
//======================================

// #F500EF
// #50FF00
// #3903E4
// #F0FF02


design.addEventListener('mouseover', () => {
    design.style.color = "#F500EF"
    listMouseOver.innerHTML = 'Auch ohne Ecken und Kanten unverwechselbar. Alice ist schlicht, sympathisch und aus jedem Winkel schön.'
})

design.addEventListener('mouseout', () => {
    design.style.color = "black"
})

threeSixFive.addEventListener('mouseover', () => {
    threeSixFive.style.color = "#50FF00"
    listMouseOver.innerHTML = 'Ökologisch nachhaltige Volldämmung, Dreifachverglasung und elektrische Fußbodenheizung. Alice ist auf jede Wettersituation vorbereitet und wird damit zu dem Ort, an dem sich jeder an 365 Tagen im Jahr wohl fühlt. '
})

threeSixFive.addEventListener('mouseout', () => {
    threeSixFive.style.color = "black"
})

standortfreiheit.addEventListener('mouseover', () => {
    standortfreiheit.style.color = "#3903E4"
    listMouseOver.innerHTML = 'Im Garten, auf der Dachterrasse oder deinem Lieblingsort. Alice ist unkompliziert und schnell dort platzierbar, wo Du dich wohl fühlst. Und ändern sich deine Pläne, ist für Alice kein Weg zu weit. With you wherever you’re going.'
})

standortfreiheit.addEventListener('mouseout', () => {
    standortfreiheit.style.color = "black"
})

vorfertigung.addEventListener('mouseover', () => {
    vorfertigung.style.color = '#F0FF02'
    listMouseOver.innerHTML = 'Lorem lorem lorem lorem lorem lorem.'
})

vorfertigung.addEventListener('mouseout', () => {
    vorfertigung.style.color = "black"
})

material.addEventListener('mouseover', () => {
    material.style.color = '#F500EF'
    listMouseOver.innerHTML = 'Less is more und deshalb setzt sich Alice aus sehr wenigen Materialien zusammen, die möglichst häufig Verwendung finden und das Wertvolle im Einfachen betonen. A mindful approach: Alice besteht zu über 80% aus Holz. Dieses beziehen wir ausschließlich aus heimischen Wäldern, die nachweislich ökologisch, ökonomisch und sozial nachhaltig bewirtschaftet werden. Die Materialkomposition von Alice  ist ein sorgfältig ausgesuchtes Zusammenspiel der Naturwerkstoffe Holz, Linoleum und Wollfilz.'
})

material.addEventListener('mouseout', () => {
    material.style.color = "black"
})

herstellung.addEventListener('mouseover', () => {
    herstellung.style.color = '#50FF00'
    listMouseOver.innerHTML = 'Alice ist Made in Germany und vom ersten bis letzten Fertigungsschritt in den besten Händen unseres inhabergeführten Partners. Dieser hebt Alice dank 100-jähriger Erfahrung, Exzellenz und modernstem Technologie-Einsatz auf ein Niveau, welches den Unterschied aus macht.'
})

herstellung.addEventListener('mouseout', () => {
    herstellung.style.color = "black"
})

kollaborator.addEventListener('mouseover', () => {
    kollaborator.style.color = '#3903E4'
    listMouseOver.innerHTML = 'Wir arbeiten mit den weltweit besten Herstellern zusammen, dessen Komponenten und Systeme sich nahtlos in das bestehende Design von Alice einfügen und stilistisch wie materiell auf Langlebigkeit ausgelegt sind. It´s a match. '
})

kollaborator.addEventListener('mouseout', () => {
    kollaborator.style.color = "black"
})

service.addEventListener('mouseover', () => {
    service.style.color = '#F0FF02'
    listMouseOver.innerHTML = 'Lorem Lorem Lorem Lorem'
})

service.addEventListener('mouseout', () => {
    service.style.color = "black"
})

// ========================
//      whyAlice Mobil
// ========================

let category = document.querySelectorAll('.category');
let categoryText = document.querySelectorAll('.category-text');

let hideAll = () => {
    for (let content of categoryText) {
        content.classList.remove('notHidden');
    }
}

for (let boxen of category) {
    boxen.addEventListener('click', (event) => {
        if (event.target === category[0]) {
            hideAll()
            categoryText[0].classList.toggle('notHidden')
        } else if (event.target === category[1]) {
            hideAll()
            categoryText[1].classList.toggle('notHidden')
        } else if (event.target === category[2]) {
            hideAll()
            categoryText[2].classList.toggle('notHidden')
        } else if (event.target === category[3]) {
            hideAll()
            categoryText[3].classList.toggle('notHidden')
        } else if (event.target === category[4]) {
            hideAll()
            categoryText[4].classList.toggle('notHidden')
        } else if (event.target === category[5]) {
            hideAll()
            categoryText[5].classList.toggle('notHidden')
        } else if (event.target === category[6]) {
            hideAll()
            categoryText[6].classList.toggle('notHidden')
        } else if (event.target === category[7]) {
            hideAll()
            categoryText[7].classList.toggle('notHidden')
        }
    })
}

// ========================
//      slider
// ========================

let container = document.getElementById('slider')
let image = ["assets/img/Stage-Studio.png", "assets/img/Stage-One.png", "assets/img/Stage-M.jpeg"]

let index = 0

function forward() {
    index++
    if (index > image.length - 1) {
        index = 0
    }
    container.style.backgroundImage = `url(${image[index]}`
}

function backward() {
    index--
    if (index < 0) {
        index = image.length - 1
    }
    container.style.backgroundImage = `url(${image[index]}`
}

// ========================
//      accordion
// ========================

let acc = document.getElementsByClassName("accordion");
let i;

for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function () {
        this.classList.toggle("active");
        let panel = this.nextElementSibling;
        if (panel.style.maxHeight) {
            panel.style.maxHeight = null;
        } else {
            panel.style.maxHeight = panel.scrollHeight + "px";
        }
    });
}