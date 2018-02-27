function adresselabel(fornavn, efternavn, vej, husnummer, postnummer, bynavn) {
        let div = document.createElement('div');
        document.body.appendChild(div);
        let textnode = document.createTextNode(`navn: ${fornavn} ${efternavn} adresse: ${vej} ${husnummer} ${postnummer} ${bynavn}`);
        div.appendChild(textnode);
    }


adresselabel('D', 'L', 'no', '42', '4000', 'fml');