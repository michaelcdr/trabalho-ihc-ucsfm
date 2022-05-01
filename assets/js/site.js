Array.prototype.random = function () {
    return this[Math.floor((Math.random()*this.length))];
}

var links = document.querySelectorAll("#escolha-radio li");
links.forEach(function(link){
    link.addEventListener('click', function(ev){
        ev.preventDefault();
        localStorage.setItem('radio', parseInt(ev.target.dataset.radio));
        document.location = "radio.html";
    });
});


function obterNoticiasPorRadio(radioId){
    return noticias.filter(noticia => noticia.radioId == radioId);
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


function listarNoticias(){
    const noticias = obterNoticiasPorRadio(localStorage.getItem('radio'));

    let htmlNoticia = '';
    noticias.forEach(noticia => {
        htmlNoticia += obterHtmlNoticia(noticia,false);
    });

    document.querySelector("#noticias").innerHTML = htmlNoticia;

    var btnsDetalhar = document.querySelectorAll('.btn-detalhar-noticia');

    btnsDetalhar.forEach(btn =>{
        btn.addEventListener('click',function(ev){
            ev.preventDefault();
            
            localStorage.setItem('noticia-atual',this.dataset.id);

            document.location = "noticias-detalhes.html"
        })
    })
}

function obterHtmlNoticia(noticia, semVermais){
    return `<div class='card p-3 mb-3'>
    <h3>${noticia.titulo}</h3>
    <strong>${noticia.data}</strong>
    <div class='descritivo'>${noticia.descritivo}</div>
    ${(semVermais ? '': "<a class='btn btn-outline-primary btn-sm mt-2 btn-detalhar-noticia' href='#' data-id='"+noticia.id+"'>Ver mais</a>")}
    </div>`; 
}

function detalharNoticia(id){
    var noticia = noticias.find(e => e.id == id); 
    var html =  obterHtmlNoticia(noticia,true);
    document.querySelector('#detalhes-noticia').innerHTML = html;
}