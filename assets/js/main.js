let openForm = document.getElementById('open-form');
let closeForm = document.getElementById('close-form');
let design = document.getElementById('design')
let threeSixFive = document.getElementById('threeSixFive')
let listMouseOver = document.getElementById('list-mouseover')
let standortfreiheit = document.getElementById('standortfreiheit')
let vorfertigung = document.getElementById('vorfertigung')
let material = document.getElementById('material')
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
    listMouseOver.innerHTML = `Alice klare Linien und ihre organische Form verbinden sich zu einem monolithischen Körper und verleihen ihr eine einzigartige Silhouette und zeitlose Ästhetik. Die Architektur und das Design von Alice ist so klar und ehrlich, dass niemand glaubt, dass es sie in Serie gibt. Alice ist Alice.`
})

design.addEventListener('mouseout', () => {
    design.style.color = "black"
})

threeSixFive.addEventListener('mouseover', () => {
    threeSixFive.style.color = "#50FF00"
    listMouseOver.innerHTML = `Design ist nicht nur wie es aussieht, sondern wie es funktioniert. Deshalb stimmen bei Alice auch die Details. Von der elektrischen Fußbodenheizung, über die Lüftungsanlage mit Wärmerückgewinnung, der nachhaltigen Volldämmung, den akustisch optimierten Innenraum, der Dreifachverglasung bis zur Plug & Play-Unit für die Stromversorgen: Alice steht für uneingeschränkte Nutzung an 365 Tagen im Jahr.`
})

threeSixFive.addEventListener('mouseout', () => {
    threeSixFive.style.color = "black"
})

standortfreiheit.addEventListener('mouseover', () => {
    standortfreiheit.style.color = "#3903E4"
    listMouseOver.innerHTML = `Im Garten, auf der Dachterrasse oder direkt am See: Alice steht genau da bereit, wo schöner Raum gebraucht wird. Ob dauerhaft oder temporär. Alice bleibt gerne aber ist auch jederzeit bereit, umzuziehen: unkompliziert und schnell.`
})

standortfreiheit.addEventListener('mouseout', () => {
    standortfreiheit.style.color = "black"
})

vorfertigung.addEventListener('mouseover', () => {
    vorfertigung.style.color = '#F0FF02'
    listMouseOver.innerHTML = `Alice ist vollständig darauf vorbereitet, dass sie gut ankommt. Dank 100%igem Vorfertigungsansatz bleiben Fehler aus. Moderne Technologien und intelligente Prozesse garantieren die hochwertige Qualität. Alice ist durch und durch „Made in Germany“ – sogar bei schlechtem Wetter dank Fertigung in einer geschützten Werkhalle.`
})

vorfertigung.addEventListener('mouseout', () => {
    vorfertigung.style.color = "black"
})

material.addEventListener('mouseover', () => {
    material.style.color = '#F500EF'
    listMouseOver.innerHTML = `Der sorgfältige Umgang mit unserer Welt und ihren Ressourcen ist für Alice existenziell. Aus diesem Grund setzt sich Alice aus wenigen Werkstoffen zusammen, die möglichst häufig Verwendung finden. Holz, Linoleum und Wollfilz. Materalien, die die Natur selbst liefert und die ausschließlich aus Deutschland stammen. Ganz einfach, sehr wertvoll.`
})

material.addEventListener('mouseout', () => {
    material.style.color = "black"
})

kollaborator.addEventListener('mouseover', () => {
    kollaborator.style.color = '#3903E4'
    listMouseOver.innerHTML = `Die Partner von Alice zählen zu den weltweit erfolgreichsten Unternehmen in ihrer Branche. Ihre Komponenten und Systeme fügen sich nahtlos in das bestehende Design von Alice ein und sind stilistisch wie materiell auf Langlebigkeit ausgelegt. Der Zufall spielte hier keine Rolle.`
})

kollaborator.addEventListener('mouseout', () => {
    kollaborator.style.color = "black"
})

service.addEventListener('mouseover', () => {
    service.style.color = '#F0FF02'
    listMouseOver.innerHTML = `Alice ist progressiv und so ist der Service. Und das schon vor der eigentlichen Bestellung. Unser Service-Team übernimmt die Prüfung der baurechtlichen Anforderungen, die Organisation des Transports und die Koordination der Aufstellung von Alice am Wunschort. Und die Anforderungen zur steuerlichen Absetzbarkeit von Alice kennt unser Service-Team ebenfalls.**`
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