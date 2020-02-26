const modallOverlay = document.querySelector('.modall-overlay');
const cards = document.querySelectorAll('.card');
const modall = document.querySelector('.modall')

for(let card of cards){
    card.addEventListener("click", function(){
        const videoId = card.getAttribute("id");
        modallOverlay.classList.add('active')
        modallOverlay.querySelector("iframe").src = `https://rocketseat.com.br/${videoId}`;

    })
}

document.querySelector('.close-modall').addEventListener("click", function(){
    modallOverlay.classList.remove('active')
    modallOverlay.querySelector("iframe").src = "";
    modall.classList.remove('maximize')
})

document.querySelector('.maximize-modall').addEventListener("click", function(){
    if(modall.classList.contains('maximize') == false){
        modall.classList.add('maximize')
    }else {
        modall.classList.remove('maximize')
    }
})