let rows = document.querySelector("#big-table").rows;
let i = 0;
let foo = {};

for (let row of rows) {
    foo[row.cells[2].innerText] = row.cells[1].innerText;
    i++;
}

console.table(foo);
console.log(JSON.stringify(foo));