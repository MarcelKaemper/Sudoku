const parse = (evt) => {
    let file = evt.target.files[0];
    let reader = new FileReader();

    reader.readAsText(file);

    reader.onload = () => {
        let res = reader.result;
        // Replace newline characters
        res = res.replace(/[\r\n]+/gm, "");
        res = res.replace(/[x]/gm, " ");

        for(let i = 0; i<9; i++){ 
            let row = document.getElementsByClassName("row"+i)[0];
            for(let j = 0; j<9; j++){ 
                let cell = row.childNodes.item(j);
                cell.childNodes.item(0).innerHTML = res.charAt((i*9)+j);
            }
        }
        solve();
    }
}