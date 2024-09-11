const http = require("http");
const { getRandomUserData } = require("./apiModule");
// Create a server that listens for requests and responds with the API data

//bruker http fordi vi lager en ny server, den lager en liten webserver for deg. den bruker en async,
// sjekker at vi har en user request og sender en respons.
const server = http.createServer(async (req, res) => {
  if (req.url === "/user" && req.method === "GET") {
    try {
      // Fetch the random user data from the external API
      const user = await getRandomUserData();
      //   user.id = Math.floor(Math.random() * 10000000);
      // bare for å vise at vi kan gjøre noe med obj.
      console.log(user);

      // Set the response headers to serve JSON
      res.writeHead(200, { "Content-Type": "application/json" });
      //vi bruker res objektet, 200 = ok og vi sender JSON.
      // Respond with the user data in JSON format
      res.end(JSON.stringify(user));
      // lag en pakke med json som vi gikk tilbake om de ikke klarer dette hånder vi dette med 500.
    } catch (error) {
      // Handle errors and respond with a 500 error status
      res.writeHead(500, { "Content-Type": "application/json" });
      //serveren er forvirret.
      res.end(JSON.stringify({ error: "Failed to fetch user data" }));
    }
  } else {
    // Handle invalid routes or methods
    // 404 for vi finner ikke serveren.
    res.writeHead(404, { "Content-Type": "application/json" });
    res.end(JSON.stringify({ error: "Route not found" }));
  }
});
// Start the server and listen on port 3000
const PORT = 3000;
server.listen(PORT, () => {
  //   console.log(`Server running on http://localhost:${PORT}`);
  console.log(`Server running the example on http://localhost:${PORT}/user`);
  // gjør at vi kan gå rett til eksemplet vi kan teste
});
// får en rout not finde, med node index js, det er fordi vi har sagt at vi skal ha et end point som heter user og bruker get.
// vi kan endten gå inn via localhost:3000/user.

//alle endiger krever at du starter opp igjen. nodemon fikser dette.
