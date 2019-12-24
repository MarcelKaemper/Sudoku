const parse = (evt) => {
    let file = evt.target.files[0];
    let reader = new FileReader();

    reader.readAsText(file);

    reader.onload = () => {
        // console.log(reader.result);
        let res = reader.result;
        res = res.replace(/[\r\n]+/gm, "");
        // for(let x = 0; x<res.length; x++){
        //     console.log(res.charAt(x));
            // let ch = res.charAt(x);
        for(let i = 0; i<9; i++){ 
            let row = document.getElementsByClassName("row"+i)[0];
            for(let j = 0; j<9; j++){ 
                console.log(j);
                row.childNodes.item(j).innerHTML = res.charAt((i*9)+j);
            }
        }
        // }
    }
}