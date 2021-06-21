import express from "express";

const app = express();

app.get("/teste", (request, response) => {
  return response.send("Ola NLW")
})

app.post("/teste-post", (request, response) => {
  return response.send("teste post")
})

app.listen(3000, () => console.log('Server is running'))

// codigo aula 1 = #together