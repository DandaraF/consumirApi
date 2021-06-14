
async function main() {
  try {
    const responseAsync = await fetch("https://reqres.in/api/users?page=2");
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
      <tr>
          <td>${id}</td>
          <td>${email}</td>
          <td>${nome}</td>
          <td>${sobrenome}</td>
          <td>${avatar}</td>
        </tr>
      `;
          
    }
    tabela.innerHTML = tabelaHtml;
    // console.log(response);
  } catch (error) {
    console.log("Erro");
  } 
}
main();


    