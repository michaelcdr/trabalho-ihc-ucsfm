listarItensPlaylists();

let btns = document.querySelectorAll('.btn-danger');
btns.forEach(btn => {
    btn.addEventListener('click', function(){
        deletarItemPlaylist();
    });
});

function deletarItemPlaylist(){
    if (confirm("Deseja excluir o item clicado?"))
        console.log('excluido com sucesso');
}