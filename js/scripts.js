const form = document.querySelector("#form");
const ievento = document.querySelector("#ievento");
const idata = document.querySelector("#idata");
const iperg1 = document.querySelector("#iperg1");
const iperg2 = document.querySelector("#iperg2");
const iperg3 = document.querySelector("#iperg3");

form.addEventListener("submit", (event)=>) {
   e.preventDefault();
   
function checkInputs(){
    const ieventoValue = ievento.value
    const idataValue = idata.value
    const iperg1Value = iperg1.value
    const iperg2Value = iperg2.value
    const iperg3Value = iperg3.value 
    
    if (ievento ===""){
        setErrorFor (ievento, "O preenchimento é obrigatórios");
    }
}
    function setErrorFor(input, message) {
    const formControl = input.parentElement;
    const small = formControl.querySelector("smal")


    }




   if(ieventoInput.value ===""){
    alert("Por favor, preencha o formulário");
    return;
   }

   if(idataInput.value ===""){
    alert("Por favor, preencha a data");
    return;
   }
   
   if(iperg1Input.value ===""){
    alert("Por favor, preencha a pergunta");
    return;
   }

   if(iperg2Input.value ===""){
    alert("Por favor, preencha a pergunta");
    return;
   }

   if(iperg3Input.value ===""){
    alert("Por favor, preencha a pergunta");
    return;
   }

function setSucessfor (input) {
    const formControl = input.parentElement;
    formControl.className = "form-control sucess";
}

   
}