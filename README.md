Especificações:
- Hiragana e katakana (Completos)
- Mostrar acertos e erros no fim de cada rodada
- Talvez salvar esses dados no local storage
- PWA

O que preciso:
- 2 checkbox para selecionar o que vai querer treinar
- No meio um card mostrando o kana atual, e logo embaixo dele 3 botões com as opções
- No rodapé, algum texto mostrando quantos acertos e quantos erros

Para os dados:
- O que pensei é em um array de objetos, cada objeto sendo um kana, contendo o kana, a resposta correta e as alternativas
- Para o score, um state com objeto também que aumenta os erros e acertos


Parent:
O state do checkbox
O state do score
Import dos kanas

Ele vai passar para o checkbox seu estado (marcado ou não) e vai receber dele qualquer alteração
Ele vai passar para o componente de card, os kanas ativos e a função do score
