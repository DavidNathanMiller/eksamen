for (let index = 0; index < 31; index++) {
    let select = document.getElementById('numbers')
    let option = document.createElement('option');
    let textnode = document.createTextNode(`${index+1}`);
    option.appendChild(textnode);
    select.appendChild(option)
    document.body.appendChild(select);
};

let months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
for (let index = 0; index < months.length; index++) {
    let select = document.getElementById('months');
    let option = document.createElement('option');
    let textnode = document.createTextNode(`${index+1}: ${months[index]}`);
    option.appendChild(textnode);
    select.appendChild(option);
    document.body.appendChild(select);
};

//kunne ikke få denne her til at virke men i det mindste er jeg blevet usynlig ¯\_(ツ)_/¯
let d = new Date[year];
let now = d.getFullYear();
let year_array = [];
for (let index = 0; index > -30; index--) {
    let back = now - index;
    year_array += back;
};

for (let index = 0; index < year_array.length; index++) {

    let select = document.getElementById('birth_years');
    let option = document.createElement('option');
    let textnode = document.createTextNode(`${year_array[index]}`);
    option.appendChild(textnode);
    select.appendChild(option);
    document.body.appendChild(select);
};

