//1. Создать функцию, генерирующую шахматную доску. Можно использовать любые html-теги.
// Доска должна быть верно разлинована на черные и белые ячейки. 
// Строки должны нумероваться числами от 1 до 8, столбцы — латинскими буквами A, B, C, D, E, F, G, H.


let desk = document.querySelector(".desk")

const chess_field = document.createElement("div")
chess_field.className = "field"

let filed_name = document.createElement("ul")

function chess_desk() {
    let i = 0;
    let count = 0;
    while (count < 8 * 8) {
        let cell = document.createElement('div');
        chess_field.appendChild(cell);

        cell.classList.add('cell');

        if (i && i % 2)
            cell.classList.add('black_cell')

        i += ((i + 2) % 9) ? 1 : 2;
        count++;
    }
}

desk.appendChild(chess_field)

console.log(desk)

chess_desk()