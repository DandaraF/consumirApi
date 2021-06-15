
async function main() {
  try {
    const responseAsync = await fetch("https://reqres.in/api/users?page=1");
    const response = await responseAsync.json();
    const tabela = document.querySelector(".tabela");

    let tabelaHtml = `
      <tr>
        <th>ID</th>
        <th>E-mail</th>
        <th>Primeiro nome</th>
        <th>Último nome</th>
        <th>Avatar</th>
      </tr>`;

    for (let i = 0; i < (response.data).length; i++) {
      let id = response.data[i].id;
      let email = response.data[i].email;
      let nome = response.data[i].first_name;
      let sobrenome = response.data[i].last_name;
      let avatar = response.data[i].avatar;
 
      tabelaHtml += `      
      <tr class="${id}">
          <td ">${id}</td>
          <td>${email}</td>
          <td>${nome}</td>
          <td>${sobrenome}</td>
          <td><img src="${avatar}"/></td>
        </tr>
      `;       
    }
    tabela.innerHTML = tabelaHtml;

  } catch (error) {
    console.log("Erro");
  } 
}
var tabela = document.querySelector(".tabela");
let linhas = tabela.getElementsByTagName("tr");

tabela.addEventListener("click", () => {
  
  console.log(linhas);

});
 
  

 


main();





    