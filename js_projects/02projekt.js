//Miniaplikace pro kontrolu validity zadaného datumu

const datum = prompt('Zadejte libovolné datum ve formátu DD.MM.YYYY');

const datumDny = datum.slice(0,2);
console.log(datumDny);
const datumMesic = datum.slice(3,5);
console.log(datumMesic);
const datumRok = datum.slice(6);
console.log(datumRok);

const tricetJedna = [1, 3, 5, 7, 8, 10, 12];
const tricet = [4, 6, 9, 11];

function jeValidniDatum () {
    if (Number(datumRok) < 1900 || Number(datumRok) > 2100) {
        return console.error('Zadali jste rok mimo povolenou škálu.');        
    }
    if (Number(datumMesic) < 1 || Number(datumMesic) > 12) {
        return console.error('Zadali jste měsíc, který neexistuje.')
    }
    if (tricetJedna.includes(Number(datumMesic))) {
        if (Number(datumDny) <= 0 || Number(datumDny) > 31);
        return console.error('Zadali jste datum, které neexistuje.')
    }
    if (tricet.includes(Number(datumMesic))) {
        if (Number(datumDny) <= 0 || Number(datumDny) > 30);
        return console.error('Zadali jste datum, které neexistuje.')
    }
    if ((Number(datumRok) % 4 === 0 && Number(datumRok) % 100 !== 0) || (Number(datumRok) % 400 === 0 && Number(datumRok) % 100 === 0)) {
        if (Number(datumDny) <= 0 || Number(datumDny) > 29) {
            return console.error('Zadali jste datum, které neexistuje. Únor v přestupném roce má 29 dní.')
        }
    }
    if (Number(datumDny) <= 0 || Number(datumDny) > 28) {
        return console.error('Zadali jste datum, které neexistuje. Únor v nepřestupném roce má 28 dní.')
    }
    return console.log('Zadané datum je v pořádku.')
}

jeValidniDatum(datum);