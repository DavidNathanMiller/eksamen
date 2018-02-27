//hjerne ude afstand til at fange simpel data check venligst senere om hjerne.exe er blevet fundet
document.addEventListener('DOMContentLoaded', function (event) {
    function sammenlign(form) {

        let answer = document.getElementById('answer');
        if (tekst1 == tekst2) {
            answer = 'de er ens'
            return true
        }
        else {
            answer = 'de er ikke ens'
            return false
        }
    }
});