async function main() {
  try {
    const responseAsync = await fetch("https://reqres.in/api/users?page=1");
    const response = await responseAsync.json();
    console.log(response);
  } catch (error) {
    console.log(error);
  } 
}
main();