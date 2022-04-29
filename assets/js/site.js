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