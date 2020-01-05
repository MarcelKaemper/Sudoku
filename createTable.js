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

// for(let i = 0; i<3; i++) {
//     let rows = tbl.children;
//     for(let j = 0; j<3; j++) {
//         for(let k = 0; k<3; k++) {
//             let activeRow = rows[k+(j*3)];
//             for(let l = 0; l<3; l++) {
//                 //console.log(activeRow.children[l].children[0]);
//                 activeRow.children[l+(k*3)].classList.add("square_"+l);
//             }
//         }
//     }
// }

let rows = tbl.children;
let cols = rows[0].children;

for(let i = 0; i<3; i++) {
    for(let j = 0; j<3; j++) {
        let cols = rows[j+(i*3)].children;
        for(let k = 0; k<3; k++) {
            for(let l = 0; l<3; l++) {
                cols[l+(k*3)].classList.add("Square_"+(0+k+(3*i)));
                // console.log(k*l);
                // console.log(cols[l+(k*3)]);
            }
        }
    }
}