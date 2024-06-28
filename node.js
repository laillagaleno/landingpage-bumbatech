async function cadastrarUsuario() {
    const userData = {
        email: "lai@example.com",
        senha: "senha123",
        nome: "teste",
        idade: 25,
        genero: 1,
        estado: "SP", 
        cidade: "São Paulo",
        trilha: 2,     
        conhece_a_cultura: 1,
        mais_se_interessa: 4 
      };

      console.log(JSON.stringify(userData))

    const url =
      "https://bumbatech-api-production.up.railway.app/users/";

    try {
      const response = await fetch(url, {
        method: "GET",
        // cache: "no-cache",
        // headers: {
        //   "Accept": "application/json",
        //   "Content-Type": "application/json",
        // },
        // body: JSON.stringify(userData)
      });

      const data = await response.json();

      console.log(response)
      console.log(data);
    } catch (error) {
      console.error("Erro ao criar usuário:", error);
    }
  }

  cadastrarUsuario();