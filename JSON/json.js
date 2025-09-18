const user = {
    nome:"Rodolfo",
    idade:"31",
    filhos:"null",
    hobbies:["codar", "filmes", "séries", "academia"],
    casado: "true",
   
    
}

console.log(user)
const userJson = JSON.stringify(user)
console.log(userJson)

const userJsonTOJs =JSON.parse(userJson)
console.log(userJsonTOJs)