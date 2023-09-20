const btn_inserir = document.querySelector("#btn-inserir");

btn_inserir.addEventListener("click", cadastrar);

function cadastrar(){
  const tarefa = document.querySelector("#descricaoTarefa");
  const msg_alert = document.querySelector("#msg");
  
  let validacao = validarFomulario(tarefa);
  msg_alert.innerHTML = '';
  tarefa.style.border = '';
  
  if(validacao){
    setTimeout(() => {
      msg_alert.innerHTML = `<aside class="alert alert-success">Tarefa incluída com sucesso!</aside>`
    }, 100);

    tarefa.value = '';
    tarefa.focus();
  }
  else{
    setTimeout(() => {
      msg_alert.innerHTML = `<aside class="alert alert-danger">Por favor, preencha o campo abaixo!
    </aside>`
    }, 200);
  }
}

function validarFomulario(tarefa){
  if(tarefa.value == ''){
    return false;
  }
  else{
    return true;
  }
}