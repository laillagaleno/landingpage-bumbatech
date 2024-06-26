function validarCampo() {
  const nomeValidar = document.getElementById("nome").value;
  const emailValidar = document.getElementById("email").value;
  const senhaValidar = document.getElementById("senha").value;
  const confirmarSenhaValidar = document.getElementById("csenha").value;

  const errorNome = document.getElementById("error_nome");
  const errorEmail = document.getElementById("error_email");
  const errorSenha = document.getElementById("error_senha");
  const errorConfirmarSenha = document.getElementById("error_csenha");

  if (nomeValidar == "") {
    errorNome.innerHTML = "Campo obrigatório";
    return false;
  } else {
    errorNome.innerHTML = "";
  }

  if (emailValidar == "") {
    errorEmail.innerHTML = "Campo obrigatório";
    return false;
  } else {
    errorEmail.innerHTML = "";
  }

  if (senhaValidar == "") {
    errorSenha.innerHTML = "Campo obrigatório";
    return false;
  } else {
    errorSenha.innerHTML = "";
  }

  if (senhaValidar.length < 8) {
    errorSenha.innerHTML = "A senha deve ter no mínimo 8 caracteres!";
    return false;
  } else {
    errorSenha.innerHTML = "";
  }

  if (senhaValidar != confirmarSenhaValidar) {
    errorConfirmarSenha.innerHTML = "As senhas não são iguais!";
    return false;
  } else {
    errorConfirmarSenha.innerHTML = "";
  }

  return true;
}

function mostrarSenha(senhaId) {
  const senha = document.getElementById(senhaId);
  const icone = document.getElementById(`${senhaId}_icone`);

  if (senha.type === "password") {
    senha.type = "text";
    icone.src = "../assets/view-on.svg";
  } else {
    senha.type = "password";
    icone.src = "../assets/view-off.svg";
  }
}

const formularioCadastro = document.getElementById("cadastro_form");

formularioCadastro.addEventListener("submit", function (event) {
  event.preventDefault();

  // const isVerificacao = validarCampo();
  // if (isVerificacao === false) return;

  const formData = new FormData(formularioCadastro);
  // Recuperar dados do formulario
  const nome = formData.get("nome");
  const email = formData.get("email");
  const senha = formData.get("senha");
  const confirmarSenha = formData.get("csenha");

  console.log(nome, email, senha, confirmarSenha);

  const data = {
    nome: nome,
    email: email,
    senha: senha,
  };

  alert("Cadastro realizado com sucesso!");
  window.location.href = "../pesquisa/";

//   fetch("https://bumbatech-api-production.up.railway.app/users/create-user", {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json",
//     },
//     body: JSON.stringify(data),
//   })
//     .then((data) => {
//       console.log(data);
//       alert("Cadastro realizado com sucesso!");
//       window.location.href = "../pesquisa/";
//     })
//     .catch((error) => console.error("Erro:", error));
}
);
