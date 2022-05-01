listarItensPlaylists();

let btns = document.querySelectorAll('.btn-danger');
btns.forEach(btn => {
    btn.addEventListener('click', function(){
        deletarItemPlaylist();
    });
});

function deletarItemPlaylist(){
    console.log('abrir confirmação');
    if (confirm("Deseja excluir o item clicado?")){

    }
}