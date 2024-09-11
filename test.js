const { getRandomUserData } = require("./apiModule");
// Use the module's function to get and display data
//kan bruke import men denne er lettere å håndere. dette er det samme bare vi bruker require.

//main er hovedfunksjonen.
// siden vi har kontrollert for feil i forje så forvener vi at disse consolene skal gå greit.
async function main() {
  try {
    const user = await getRandomUserData();
    console.log("Random User Data:");
    console.log(`Name: ${user.name}`);
    console.log(`Email: ${user.email}`);
    console.log(`Location: ${user.location}`);
  } catch (error) {
    console.error(error);
  }
  
}
main();
