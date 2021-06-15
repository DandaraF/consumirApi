const tabela = document.querySelector(".tabela");

async function main() {
  try {
    const responseAsync = await fetch("https://reqres.in/api/users?page=1");
    const response = await responseAsync.json();
    // const pessoa = resposta.data;

    for (let i = 0; i < (response.data).length; i++) {
      let id = response.data[i].id;
      let email = response.data[i].email;
      let nome = response.data[i].first_name;
      let sobrenome = response.data[i].last_name;
      let avatar = response.data[i].avatar;
      
      const criarTr = document.createElement("tr");
      const textId = document.createElement("td");
      const textEmail = document.createElement("td");
      const textNome = document.createElement("td");
      const textSobrenome = document.createElement("td");
      const textAvatar = document.createElement("td");
      const linkAvatar = document.createElement("img");
   
      linkAvatar.setAttribute("src", avatar);
      textId.textContent= id;
      textEmail.textContent= email;
      textNome.textContent=nome;
      textSobrenome.textContent = sobrenome;
 
      tabela.appendChild(criarTr);
      tabela.appendChild(textId);
      tabela.appendChild(textNome);
      tabela.appendChild(textSobrenome);
      tabela.appendChild(textEmail);
      tabela.appendChild(textAvatar);
      textAvatar.appendChild(linkAvatar);
      

      criarTr.addEventListener("click", () => selecionarLinha(textId,textEmail,textNome,textSobrenome,linkAvatar));
    }

  } catch (error) {
    console.log(error);
  }
}
function  selecionarLinha(idSel,emailSel,nomeSel,sobrenomeSel,avatarSel) {
  const idSelecionado = idSel;
  const nomeSelecionado = nomeSel;
  const sobrenomeSelecionado = sobrenomeSel;
  const emailSelecionado = emailSel;
  const avatarSelecionado = avatarSel;

}


function fechar() {
  document.getElementById("idModal").style.display = "none";
  console.log("aqui");

}

main();