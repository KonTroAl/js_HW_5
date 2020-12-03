//1. Создать функцию, генерирующую шахматную доску. Можно использовать любые html-теги.
// Доска должна быть верно разлинована на черные и белые ячейки. 
// Строки должны нумероваться числами от 1 до 8, столбцы — латинскими буквами A, B, C, D, E, F, G, H.


let desk = document.querySelector(".desk")

let black_cell = document.createElement("div")
black_cell.className = "black_cell"

let white_cell = document.createElement("div")
white_cell.className = "white_cell"

const chess_field = document.createElement("div")
chess_field.className = "field"



desk.appendChild(chess_field)

console.log(desk)