//Escreva um programa em JS que peça o nome de um turista e então pergunte se ele já visitou alguma cidade. Caso a resposta seja sim, pergunte o nome da cidade e o armazém em uma variável, e então continue perguntando se o turista visitou alguma outra cidade até que a resposta seja não. No fim, o programa deve exibir o nome do turista, quantas e quais cidades ele visitou.
let name = prompt('Qual seu nome turista?')
let visit = prompt('Você visitou alguma cidade? (sim/não)')
let city = []
let numberOfCities = 0
while(visit == 'sim'){
  city[numberOfCities] = prompt('Qual o nome da cidade visitada?')
  numberOfCities += 1

  visit = prompt('Você visitou alguma outra cidade? (sim/não)')

}
alert(`Turista: ${name}
Quantidade de cidades visitadas: ${numberOfCities}
Cidades visitadas:${city}`)
