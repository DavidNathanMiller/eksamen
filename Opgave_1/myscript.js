function compare() {    
    let answer = document.getElementById('answer');
    let first = document.forms['form']['text1'].value;
    let second = document.forms['form']['text2'].value;
    if (first == second) {
        answer.innerHTML = 'they are the same'
        return true
    }
    else {
        answer.innerHTML = 'they are not the same'
        return false
    }
}