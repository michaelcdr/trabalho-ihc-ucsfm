var links = document.querySelectorAll("#troca-de-radio li");
links.forEach(function(link){
    link.addEventListener('click', function(ev){
        ev.preventDefault();
        localStorage.setItem('radio', ev.target.dataset.radio);
        document.location = "radio.html";
    });
});

let svgPlayHtml = `<svg  xmlns="http://www.w3.org/2000/svg" class="btn-play bi bi-play-circle me-4 ms-4" 
width="100" height="100" fill="currentColor"  viewBox="0 0 16 16">
<path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
<path d="M6.271 5.055a.5.5 0 0 1 .52.038l3.5 2.5a.5.5 0 0 1 0 .814l-3.5 2.5A.5.5 0 0 1 6 10.5v-5a.5.5 0 0 1 .271-.445z"/>
</svg>`;

let svgStopHtml = `<svg  xmlns="http://www.w3.org/2000/svg" class="btn-stop bi bi-stop-circle me-4 ms-4" 
    width="100" height="100" fill="currentColor"  viewBox="0 0 16 16">
<path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
<path d="M5 6.5A1.5 1.5 0 0 1 6.5 5h3A1.5 1.5 0 0 1 11 6.5v3A1.5 1.5 0 0 1 9.5 11h-3A1.5 1.5 0 0 1 5 9.5v-3z"/>
</svg>`;

let playStopEl = document.querySelector('#play-stop');
playStopEl.addEventListener('click',function(ev){
    ev.preventDefault();
    let aEl = this; 
    if (!aEl.children[0].classList.contains('btn-stop'))
    {
        aEl.innerHTML = svgStopHtml;
        return;
    } 
    aEl.innerHTML = svgPlayHtml;    
});

let pauseEl = document.querySelector('#pause');
pauseEl.addEventListener('click',function(ev){
    ev.preventDefault();
});

function obterDadosRadioAtual(){
    var itens = [];
    for (let index = 0; index < musicas.length; index++) {
        itens.push(index);
    }

    var indiceRandomicoMusicas = itens.random();

    var musica = musicas[indiceRandomicoMusicas];

    var htmlMusicaAtual = `${musica.banda} - ${musica.titulo}`;
    document.querySelector("#programacao-atual").innerHTML = htmlMusicaAtual;
    
    var radio = localStorage.getItem('radio');
    document.querySelector(`#troca-de-radio li[data-radio='${radio}']`).classList.add('active');
}

listarNoticias();
obterDadosRadioAtual();