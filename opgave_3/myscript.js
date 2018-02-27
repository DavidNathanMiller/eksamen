function prisMedMoms(pris) {
    let div = document.createElement('div');
    let pris_m_moms = pris * 1.25;
    let textnode = document.createTextNode(`${pris_m_moms}`);
    div.appendChild(textnode);
    document.body.appendChild(div);
}

prisMedMoms(200);
prisMedMoms(800);