
document.body.innerHTML = "<h1>KEVEN</h1>";
document.body.innerHTML += "<p>Estou aprendendo javascript</p>";
document.body.innerHTML += "<button>CLIQUE AQUI</button>";

var nome = String(prompt(("Qual seu nome")));
var idade = Number(prompt(("Qual sua idade")));
var curso = String(prompt(("Qual seu curso")));

alert(
    'Seu nome é '+ nome + ', sua idade é ' + idade + ' e você estuda ' + curso
);