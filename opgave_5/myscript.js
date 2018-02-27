let ugedage = ['mandag', 'tirsdag', 'onsdag', 'torsdag', 'fredag', 'lørdag', 'søndag'];

for (let index = 0; index < ugedage.length; index++) {
    let div = document.getElementById('for')
    let p = document.createElement('p');
    let textnode = document.createTextNode(`${ugedage[index]}`);
    p.appendChild(textnode);
    div.appendChild(p)
    document.body.appendChild(div);
};

ugedage.forEach((dag, index) => {
    let div = document.getElementById('foreach');
    let p = document.createElement('p');
    let textnode = document.createTextNode(`${dag}`);
    p.appendChild(textnode);
    div.appendChild(p)
    document.body.appendChild(div);
});

ugedage.forEach((dag, index) => {
    let div = document.getElementById('reverse');
    let p = document.createElement('p');
    let textnode = document.createTextNode(`${dag}`);
    p.appendChild(textnode);
    div.insertBefore(p, div.childNodes[0]);
    document.body.appendChild(div);
});

function shuffleArray() {
    for (let i = ugedage.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [ugedage[i], ugedage[j]] = [ugedage[j], ugedage[i]];
    }
    ugedage.forEach((dag, index) => {
        let div = document.getElementById('random');
        let p = document.createElement('p');
        let textnode = document.createTextNode(`${dag}`);
        p.appendChild(textnode);
        div.appendChild(p)
        document.body.appendChild(div);
    });
}
shuffleArray();

function now() {
    let today = new Date();
    let div = document.getElementById('today')
    let p = document.createElement('p');
    let textnode = document.createTextNode(`${today}`);
    p.appendChild(textnode);
    div.appendChild(p)
    document.body.appendChild(div);
}
now();