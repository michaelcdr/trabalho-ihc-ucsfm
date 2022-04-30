Array.prototype.random = function () {
    return this[Math.floor((Math.random()*this.length))];
  }

var noticias = [
    {
        titulo : "Com Parkinson, Ozzy Osbourne adapta própria mansão",
        data:"28 de abril de 2022",
        descritivo:"Ozzy Osbourne, que revelou sofrer da Doença de Parkinson há 17 anos, afirmou que a mansão, Welders House, que fica em Buckinghamshire, na Inglaterra, foi totalmente adaptada com barras de apoio e superfícies antiderrapantes para atender as necessidades de saúde dele. As informações são do Daily Mail. O cantor, de 73 anos, ressaltou que conta com uma equipe de enfermagem em tempo integral para atendê-lo, além disso, tem um estúdio de exercício e bem-estar.",
        radio : "caxias"
    },
    {
        titulo:"Guns N’ Roses volta às paradas após Thor; entenda",
        data:"28 de abril de 2022",
        radio : "caxias",
        descritivo:"O Guns N’ Roses voltou às paradas da Billboard. A faixa “Sweet Child O’ Mine”, do disco “Appetite for Destruction” (1987), é a trilha sonora do primeiro trailer de “Thor: Amor e Trovão” (2022), e ganhou repercussão em rádios e na internet. Segundo a Billboard, música entrou na Hot Hard Rock Songs em primeiro lugar, e na Hot Rock & Alternative Songs, na nona posição."
    },
    {
        titulo:"The Boys: 3ª temporada ganha teaser eletrizante; veja",
        data:"28 de abril de 2022",
        radio : "bento",
        descritivo:"E vem aí! Nas primeiras horas desta quarta-feira (27), a terceira temporada de “The Boys” ganhou uma prévia eletrizante e instigante. O teaser começa com um anúncio da Vought, que logo se transforma em uma mega cena de ação com explosões em que Butcher reúne todo seu grupo para atacar os “heróis”."
    }
];

var radios = [
    {
        titulo: "Caxias - 106.5"       
    },
    {
        titulo: "Bento - 106.5"        
    }
];

var musicas  = [
    { 
        banda : "Iron Maiden",
        titulo : "The Wickerman"
    },{ 
        banda : "Iron Maiden",
        titulo : "Run To The Hills"
    },{
        banda:"Metallica",
        titulo:"Master of Puppets"
    },{
        banda:"Metallica",
        titulo:"Battery"
    }
];

var playlists = [
    { 
        banda : "Iron Maiden",
        titulo : "The Wickerman"
    },
    { 
        banda : "Iron Maiden",
        titulo : "Run To The Hills"
    },
    {
        banda:"Metallica",
        titulo:"Master of Puppets"
    },
    {
        banda:"Metallica",
        titulo:"Battery"
    }
];

var links = document.querySelectorAll("#escolha-radio li");
links.forEach(function(link){
    link.addEventListener('click', function(ev){
        ev.preventDefault();
        localStorage.setItem('radio', ev.target.dataset.radio);
        document.location = "radio.html";
    });
});

function obterNoticiasPorRadio(radio){
    return noticias.filter(noticia => noticia.radio == radio);
}

function listarItensPlaylists(){
    let playlistsEl = document.querySelector("#playlist");
    let html = '';
    playlists.forEach(playlistItem => {
        html += `<li class="list-group-item d-flex align-items-center mb-2 justify-content-between">
            <div class="me-2">${playlistItem.banda} - ${playlistItem.titulo}</div>
            <button class="btn btn-danger btn-sm ">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash" viewBox="0 0 16 16">
                <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"/>
                <path fill-rule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"/>
                </svg> 
            </button>
            
        </li>`;
    });

    playlistsEl.innerHTML = html;
}