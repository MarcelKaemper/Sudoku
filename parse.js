const parse = (evt) => {
    let file = evt.target.files[0];
    let reader = new FileReader();

    reader.readAsText(file);

    reader.onload = () => {
        // console.log(reader.result);
        let res = reader.result;
        res = res.replace(/[\r\n]+/gm, "");
        for(let x = 0; x<res.length; x++){
            console.log(res.charAt(x));
            let ch = res.charAt(x);
        }
    }
}