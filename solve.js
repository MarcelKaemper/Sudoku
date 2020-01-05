const solve = () => {
    let tbl = document.getElementsByTagName("table")[0];
    let rows = tbl.childNodes;

    // Number to insert iteration
    // for(let fillNum = 1; fillNum<10; fillNum++){
    fillNum = 1;
    possibleFills = 0;
    console.log("Trying to fill number "+fillNum);
    for(let i = 0; i<tbl.childElementCount; i++) {
        // Cols
        // tbl.children[i].children[0].bgColor = "red";
        // Rows
        // tbl.children[0].children[i].bgColor = "red";
        // Square
        // Function gets index of row, col
        // Returns index of square (1-9)
    }



        // // Row iteration
        // for(let i = 0; i<tbl.childElementCount; i++){
        //     let row = rows.item(i);
        //     let columns = row.childNodes;
        //     // Column iteration
        //     for(j = 0; j<row.childElementCount; j++){
        //         let column = columns.item(j);
        //         console.log("(Row: "+i+" Col: "+j+" with value "+column.childNodes.item(0).innerText+")");
        //         // Insert code
        //         // to check row, col and square

        //         console.log("Checking row");
        //         // Check row (inside div)
        //         for(let rowI = 0; rowI<9;rowI++){
        //             console.log("Checking cell "+rowI+" of row "+i);
        //             column.className = "red";
        //         }
        //     }
        // }
    // }
}