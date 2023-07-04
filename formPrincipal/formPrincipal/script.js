const olax = 2;
const forms = document.getElementById("formCreateLogin");
const campos = document.querySelectorAll(".requerido");
const spans = document.querySelectorAll(".spanRequerido");
const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
const btnValidate = document.getElementById("txtValidar");
const ErroAviso = document.getElementById("#LabelBTN");
const ValidandoForm = document.querySelector("msgVld");
const msgCreate= document.getElementById('elmSpan')

const usuario = localStorage.getItem("usuario")
const email = localStorage.getItem("email");
const senha = localStorage.getItem("senha");






forms.addEventListener("submit", (event) => {
  event.preventDefault();
  NameValidate();
  EmailValidate();
  passwordPrimary();
  comparePassword();



  if (teste == true) {
    localStorage.setItem("usuario", JSON.stringify(campos[0].value));
    localStorage.setItem("email", JSON.stringify(campos[1].value));
    localStorage.setItem("senha", JSON.stringify(campos[2].value));
    msgCreate.innerHTML = '<h1>Conta criada!!</h1>'


  }else{
    msgCreate.innerHTML = '<h1 style="color: red;"> Campo incorreto</h1>'
  }


});

teste = Boolean

function setError(index) {
  campos[index].style.border = "1px solid red";
  teste = false;
}

function setOk(index) {
  campos[index].style.border = "none";
  teste = true;
}

function NameValidate() {
  if (campos[0].value.length <= 3 || campos[0].value.length >= 22) {
    setError(0);
  } else {
    setOk(0);
  }
}

function EmailValidate() {
  if (!emailRegex.test(campos[1].value)) {
    setError(1);
  } else {
    setOk(1);
  }
}

function passwordPrimary() {
  if (campos[2].value.length < 8) {
    setError(2);
  } else {
    setOk(2);
    comparePassword();
  }
}

function comparePassword() {
  if (campos[2].value == campos[3].value && campos[3].value.length >= 8) {
    setOk(3);
  } else {
    setError(3);
  }
}



/*validar usuario e senha */



const logarCampos = document.querySelectorAll('logarCampos')
const formLogin = document.getElementById("formLogin");
const senhaLG = document.getElementById('senha')
const usuarioLG = document.getElementById('usuario')






  formLogin.addEventListener("submit", (event) => {
    event.preventDefault();
    validarCamposLogin();

  });


function LogError() {
  usuarioLG.style.border = "1px solid red";
  senhaLG.style.border = "1px solid red";
  logTeste = false
}
function logOK() {
  usuarioLG.style.border = "none";
  senhaLG.style.border = "none";
  logTeste = true
}




function validarCamposLogin() {
  if (usuarioLG.value === JSON.parse(usuario) && (senhaLG.value === JSON.parse(senha))) {
    console.log('ok')
    logOK()
  } else {
    LogError()
  }



}




