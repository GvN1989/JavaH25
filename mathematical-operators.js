console.log('Zorg dat al jouw uitkomsten één voor één in de terminal worden gelogd! 📖');

// ==========================================
// 1. Declareer een variabele en sla daar de uitkomst van 4 plus 5 in op.                           // geeft 9 wanneer gelogd
// ==========================================

const outcome1 = 4 + 5;
console.log (outcome1);

// ==========================================
// 2. Declareer een variabele en sla daar de uitkomst van 7 maal 52 in op.                          // geeft 364 wanneer gelogd
// ==========================================

const outcome2 = 7 * 52;
console.log (outcome2);

// ==========================================
// 3. Declareer een variabele en sla daar de uitkomst van 4 + 3 in op, vermenigvuldigd met 7.       // geeft 49 wanneer gelogd
// ==========================================

const outcome3 = (4+3) * 7;
console.log (outcome3);


// ==========================================
// 4. Declareer een variabele en sla daar de uitkomst van 36 gedeeld door 6, maal 2 in op.          // geeft 12 wanneer gelogd
// ==========================================

const outcome4 = (36/6) * 2;
console.log (outcome4);

// ==========================================
// 5. Declareer twee variabelen en zet daarin respectievelijk de waardes 'zoet' en 'sappig'.
// Declareer nog een variabele en sla daarin de samenvoeging van bovenstaande variabelen in op.     // geeft 'zoetsappig' wanneer gelogd
// ==========================================

const taste = "zoet";
const feel = "sappig";

const description = taste + feel;
console.log (description);

// ==========================================
// 6. Declareer een variabele voor jouw voornaam en een variabele voor jouw achternaam en zet de waardes erin.
// Declareer vervolgens een variabele voor jouw volledige naam en plak bovenstaande variabelen aan elkaar.
// Zorg dat er een spatie tussen zit zonder iets aan de originele variabelen te veranderen.        // geeft bijv. 'Henk Pieters' wanneer gelogd
// ==========================================

const firstname = "Geesje";
const infix = "van";
const lastname = "Noordenburg";

const fullname = firstname +" "+ infix + " " + lastname;
console.log (fullname);

// ==========================================
// 7. Declareer een variabele voor jouw woonplaats en een variabele voor provincie en zet de waardes erin.
// Declareer vervolgens een variabele voor jouw locatie en plak jouw de woonplaats en provincie aan elkaar.
// Zorg dat er een komma en spatie tussen zit zonder iets aan de originele variabelen te veranderen. // geeft bijv. Maastricht, Limburg wanneer gelogd
// ==========================================

const town = "Hoofddorp"
const province = "Noord-Holland"

const origin = town + ", "+ province;
console.log (origin);

const fruit = "Appels";

switch (fruit) {
    case 'Bananen':
        console.log('Het zijn bananen!');
    case 'Appels':
        console.log('Het zijn appels!');
    case 'Citroenen':
        console.log('Het zijn citroenen!');
    default:
        console.log('Er is geen vrucht gekozen');
}