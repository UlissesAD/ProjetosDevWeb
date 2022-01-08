
function adicionar() {
    if(document.getElementById('tarefa').value != '' )
    {
        //save
    var task;
    task = document.getElementById("tarefa").value;
    //create
    var NovaTarefa = document.createElement("p");
    NovaTarefa.classList.add("Item")
    NovaTarefa.innerHTML = '<input type="checkbox" > <div class="ItemText">' + (task) + '</div>';

    document.getElementById("article").appendChild(NovaTarefa);
    document.getElementById("tarefa").value = ''; 
    document.getElementById("warning").innerHTML='';
    }
    else{
        document.getElementById("warning").innerHTML="-> Caixa de texto está vazia! <-";
    }
    
}

function reloadP()
{
    document.location.reload(true);
}