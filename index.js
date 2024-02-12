const perguntas = [
    {
       pergunta: "Em que ano o Flamengo foi fundado?",
       respostas: [
         "1895",
         "1912",
         "1906",
       ],
       correta: 1
     },
     {
       pergunta: "Quem é considerado o maior artilheiro da história do Flamengo?",
       respostas: [
         "Zico",
         "Adriano Imperador",
         "Romário",
       ],
       correta: 0
     },
     {
       pergunta: "Qual foi o primeiro título internacional conquistado pelo Flamengo?",
       respostas: [
         "Copa Libertadores",
         "Copa Intercontinental",
         "Copa Mercosul",
       ],
       correta: 1
     },
     {
       pergunta: "Qual é o estádio principal do Flamengo?",
       respostas: [
         "Estádio do Maracanã",
         "Estádio Luso-Brasileiro",
         "Estádio São Januário",
       ],
       correta: 0
     },
     {
       pergunta: "Quem é o técnico atual do Flamengo?",
       respostas: [
         "Jorge Jesus",
         "Renato Gaúcho",
         "Tite",
       ],
       correta: 2
     },
     {
       pergunta: "Qual foi o primeiro título brasileiro conquistado pelo Flamengo?",
       respostas: [
         "Campeonato Brasileiro de 1980",
         "Campeonato Brasileiro de 1979",
         "Campeonato Brasileiro de 1982",
       ],
       correta: 1
     },
     {
       pergunta: "Quem é o maior rival do Flamengo?",
       respostas: [
         "Fluminense",
         "Vasco da Gama",
         "Botafogo",
       ],
       correta: 1
     },
     {
       pergunta: "Quantas vezes o Flamengo ganhou a Copa Libertadores da América?",
       respostas: [
         "1 vez",
         "2 vezes",
         "3 vezes",
       ],
       correta: 2
     },
     {
       pergunta: "Qual jogador do Flamengo foi eleito o Rei da América em 2019?",
       respostas: [
         "Gabigol",
         "Bruno Henrique",
         "Everton Ribeiro",
       ],
       correta: 1
     },
     {
       pergunta: "Quem é conhecido como 'O Rei do Rio'?",
       respostas: [
         "Pelé",
         "Zico",
         "Romário",
       ],
       correta: 1
     }
   ];
  
  const quiz = document.querySelector('#quiz')
  const template = document.querySelector('template')
  
  const corretas = new Set()
  const totalDePerguntas = perguntas.length
  const mostrarTotal = document.querySelector('#acertos span')
  
  
   for(const item of perguntas) {
    const quizItem = template.content.cloneNode(true) 
    quizItem.querySelector('h3').textContent = item.pergunta
  
   for(let resposta of item.respostas) {
     const dt = quizItem.querySelector('dl dt').cloneNode(true)
    dt.querySelector('span').textContent = resposta
    dt.querySelector('input').setAttribute('name', 'pergunta-' + perguntas.indexOf(item))
    dt.querySelector('input').value = item.respostas.indexOf(resposta)
  
    dt.querySelector('input').onchange = (event) => {
    const estaCorreta = event.target.value == item.correta
  
      corretas.delete(item)
    if(estaCorreta) {
      corretas.add(item)
     }
     mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas
    }
  
    quizItem.querySelector('dl').appendChild(dt)
   }
  
    quizItem.querySelector('dl dt').remove()
  
    quiz.appendChild(quizItem)
   }
  
  