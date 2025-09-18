// Escopo global
console.log(this); // No navegador -> Window | No Node → {}
console.log(this === window); // true


function myFunction(){
    this.console.log('Agora sou o ANTEDEGUEMON!')
}
myFunction()

const pessoa = {
  nome: "Irineu",
  falar: function() {
    console.log("Meu nome é " + this.nome);
  }
};

pessoa.falar(); // "Meu nome é Irineu"

//- this.nome pega a propriedade nome do próprio objeto pessoa.

const obj = {
  nome: "Yan",
  normal: function() { console.log(this.nome); },
  arrow: () => console.log(this.nome)
};

obj.normal(); // "Yan"
obj.arrow();  // undefined (no Node) ou undefined (no navegador), pois não pega do obj

