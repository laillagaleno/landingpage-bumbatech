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

  const isVerificacao = validarCampo();
  if (isVerificacao === false) return;

  const formData = new FormData(formularioCadastro);
  // Recuperar dados do formulario
  const nome = formData.get("nome");
  const email = formData.get("email");
  const senha = formData.get("senha");
  // const confirmarSenha = formData.get("csenha");

  console.log(nome, email, senha);

  formData.append("email", email);
  formData.append("senha", senha);
  formData.append("nome", nome);
  formData.append("idade", 25);
  formData.append("genero", 1);
  formData.append("estado", "SP");
  formData.append("cidade", "São Paulo");
  formData.append("trilha", 2);
  formData.append("conhece_a_cultura", 1);
  formData.append("mais_se_interessa", 4);

  alert(`${nome}, seu cadastro foi realizado com sucesso!`);
  window.location.href = "../pesquisa/";

  // async function cadastrarUsuario() {
  //   const url =
  //     "https://bumbatech-api-production.up.railway.app/users/create-user";

  //   try {
  //     const response = await fetch(url, {
  //       method: "POST",
  //       // cache: "no-cache",
  //       headers: {
  //         "Accept": "application/json",
  //         "Content-Type": "application/json",
  //       },
  //       body: JSON.stringify(userData)
  //     });

  //     const data = await response.json();

  //     console.log(response)
  //     if (response.status === 200) {
  //       console.log("Usuário criado com sucesso:", data);
  //       alert("Cadastro realizado com sucesso!");
  //       window.location.href = "../pesquisa/";
  //     } else {
  //       console.error("Erro ao criar usuário:", data.error);
  //       alert("Erro no cadastro: " + data.error);
  //     }
  //   } catch (error) {
  //     console.error("Erro ao criar usuário:", error);
  //     alert("Erro no cadastro: " + error);
  //   }
  // }

  cadastrarUsuario();
});