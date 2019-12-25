let body = document.getElementsByClassName("field")[0];
let tbl = document.createElement('table');
tbl.setAttribute("border", "1");

for(let i = 0; i<9; i++){
    let tr = document.createElement("tr");
    tr.setAttribute("class", "row"+i)
    for(let j = 0; j<9; j++){
        let td = document.createElement("td");
        td.setAttribute("class", "col col"+j)
        let div = document.createElement("div");
        div.setAttribute("class", "cell");
        td.appendChild(div);
        tr.appendChild(td);
    }
    tbl.appendChild(tr);
}
body.appendChild(tbl);