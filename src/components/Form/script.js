import React from 'react'


document.getElementById("botaoEnviar").addEventListener("click",validaFormulario)

function validaFormulario(){
  if(document.getElementById("nome").value != "" && 
    document.getElementById("email").value != "" &&
    document.getElementById("telefone").value != ""){
      alert("Prontinho! Um agente entrar´em contato com você")
  }else{
      alert("Por favor, preencha os campos nome e email.")
  }
}
