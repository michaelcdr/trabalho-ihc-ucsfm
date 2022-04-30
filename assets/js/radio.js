var links = document.querySelectorAll("#troca-de-radio li");
links.forEach(function(link){
    link.addEventListener('click', function(ev){
        ev.preventDefault();
        localStorage.setItem('radio', ev.target.dataset.radio);
        document.location = "radio.html";
    });
});

function listarNoticias(){
    const noticias = obterNoticiasPorRadio(localStorage.getItem('radio'));

    let htmlNoticia = '';
    noticias.forEach(noticia => {
        htmlNoticia += `<div class='card p-3 mb-3'>
        <h3>${noticia.titulo}</h3>
        <strong>${noticia.data}</strong>
        <div class='descritivo'>${noticia.descritivo}</div>
        </div>`;
    });

    document.querySelector("#noticias").innerHTML = htmlNoticia;
}

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