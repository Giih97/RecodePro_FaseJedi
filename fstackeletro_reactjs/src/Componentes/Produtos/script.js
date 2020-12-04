function exibirCategoria(categoria){
    
    let elementos=document.getElementsByClassName("produto");
    console.log(elementos);
    for(var i=0; i<elementos.length; i++){
        console.log (elementos[i].id);
        if(categoria == elementos [i].id)
            elementos[i].style = "display:block";
        else
            elementos[i].style = "display:none";
    }
}

// para exibir todos produtos
    let exibirTodos =()=> {
    let elementos = document.getElementsByClassName ("produto");
    for (var i=0; i<elementos.length; i++) {
    elementos[i].style = "display:block";
}
};