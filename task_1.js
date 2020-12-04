//1. Создать функцию, генерирующую шахматную доску. Можно использовать любые html-теги.
// Доска должна быть верно разлинована на черные и белые ячейки. 
// Строки должны нумероваться числами от 1 до 8, столбцы — латинскими буквами A, B, C, D, E, F, G, H.


let desk = document.querySelector(".desk");

const chess_field = document.createElement("div");
chess_field.className = "field";

let filed_name_left = document.createElement("p");
filed_name_left.innerHTML = "8 7 6 5 4 3 2 1";
filed_name_left.className = "field_name_left"

let filed_name_right = document.createElement("p");
filed_name_right.innerHTML = "1 2 3 4 5 6 7 8";
filed_name_right.className = "field_name_right"

let filed_name_top = document.createElement("p");
filed_name_top.innerHTML = "HGFEDCBA";
filed_name_top.className = "field_name_top"

let filed_name_bottom = document.createElement("p");
filed_name_bottom.innerHTML = "ABCDEFGH";
filed_name_bottom.className = "field_name_bottom"


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

desk.appendChild(filed_name_left)
desk.appendChild(filed_name_right)
desk.appendChild(filed_name_top)
desk.appendChild(filed_name_bottom)
desk.appendChild(chess_field)

console.log(desk)

chess_desk()