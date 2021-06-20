const tabela = document.querySelector(".tabela");

async function main() {
  try {
    const responseAsync = await fetch("https://reqres.in/api/users?page=1");
    const response = await responseAsync.json();
    const resposta = response.data;
    
    for (let i = 0; i < resposta.length; i++) {
      let id = resposta[i].id;
      let email = resposta[i].email;
      let nome = resposta[i].first_name;
      let sobrenome = resposta[i].last_name;
      let avatar = resposta[i].avatar;
      
      const criarTr = document.createElement("tr");
      const textId = document.createElement("td");
      const textEmail = document.createElement("td");
      const textNome = document.createElement("td");
      const textSobrenome = document.createElement("td");
      const textAvatar = document.createElement("td");
      const linkAvatar = document.createElement("img");


      linkAvatar.setAttribute("src", avatar);
      linkAvatar.setAttribute("class", "imgAvatar");
      textEmail.setAttribute("class", "tdEmail");
      textNome.setAttribute("class", "tdNome");
      textSobrenome.setAttribute("class", "tdSobrenome");
        

      textId.textContent= id;
      textEmail.textContent= email;
      textNome.textContent=`${nome} ${sobrenome}`;
      textSobrenome.textContent = sobrenome;
 
      tabela.appendChild(criarTr);
      criarTr.appendChild(textId);
      criarTr.appendChild(textNome);
      criarTr.appendChild(textSobrenome);
      criarTr.appendChild(textEmail);
      textAvatar.appendChild(linkAvatar);
      criarTr.appendChild(textAvatar);
      
      criarTr.addEventListener("click", (event) => {
        const usuario = event.target.closest("tr");

        const modalBody = document.querySelector(".modalBody");

        
        

        console.log("user =>", modalBody);
        // abrirModal();
      });

    }

   

  } catch (error) {
    console.log(error);
  }
}
function abrirModal() {    
  const modal = document.getElementById("dvModal");
  modal.style.display = "Block";
}
function fecharModal() {
  const modal = document.getElementById("dvModal");
  modal.style.display = "none";
}

main();