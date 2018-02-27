function hentareal(lenght, height) {
    let div = document.createElement('div');
    let l = lenght;
    let h = height;
    let arial = l * h;
    let textnode = document.createTextNode(`${arial}`);
    div.appendChild(textnode);
    document.body.appendChild(div);
}

hentareal(3,2);