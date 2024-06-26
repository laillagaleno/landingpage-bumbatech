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

  const userData = {
    email: "lailla@example.com",
    senha: "senha123",
    nome: "teste",
    idade: 25,
    genero: 1, // Exemplo: 0 a 3
    estado: "SP", // Deve ser <= 2 caracteres
    cidade: "São Paulo",
    trilha: 2, // Exemplo: 0 a 5
    conhece_a_cultura: 1, // Exemplo: 0 a 2
    mais_se_interessa: 4, // Exemplo: 0 a 7
  };

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

console.log(JSON.stringify(userData))
  cadastrarUsuario(formData);
});

async function cadastrarUsuario(userData) {
  const url =
    "https://bumbatech-api-production.up.railway.app/users/create-user";

  try {
    const response = await fetch(url, {
      method: "POST",
      mode: 'no-cors',
      cache: "no-cache",
      headers: {
        "Content-Type": "multipart/form-data'",
      },
      body: userData,
    });

    if (!response.ok) {
      throw new Error(`Erro na solicitação: ${response.statusText}`);
    }

    const data = await response.json();
    console.log("Usuário criado com sucesso:", data);
    alert("Cadastro realizado com sucesso!");
    window.location.href = "../pesquisa/";
  } catch (error) {
    console.error("Erro ao criar usuário:", error);
  }
}
