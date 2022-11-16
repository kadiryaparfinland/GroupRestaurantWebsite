var otsikko = document.getElementById('headline')
const myButton = document.getElementById('varausnappi');
const variNappi = document.getElementById('vari');
const tekstikentta = document.getElementsByTagName('input');
const myFooter = document.getElementsByClassName('footer');
const ekaLomake = document.getElementById('ekaLomake');
const container = document.getElementById('container');

var today = new Date();
var dd = today.getDate();
var mm = today.getMonth()+1; //January is 0!
var yyyy = today.getFullYear();
 if(dd<10){
        dd='0'+dd
    } 
    if(mm<10){
        mm='0'+mm
    } 
today = yyyy+'-'+mm+'-'+dd;
document.getElementById("datefield").setAttribute("min", today);

myButton.addEventListener('click', customerDetails)

function customerDetails() {
    document.getElementById("ekaLomake").style.display="none";
    document.getElementById('varausnappi').style.display="none";
    document.getElementById('rules').style.display="none";
    document.getElementById('headline').style.display="none";
    var paiva = document.getElementById('datefield').value;
    var aika = document.getElementById('time').value;
    var hlot = document.getElementById('people').value;

    const varausVahvistus = document.createElement('h1');
    varausVahvistus.setAttribute('id','varausvahvistus');
    const otsikkoTeksti = document.createTextNode('Complete your reservation');
    varausVahvistus.appendChild(otsikkoTeksti);
    container.appendChild(varausVahvistus);

    const varausSection = document.createElement('section');
    varausSection.setAttribute('id','varaussection');
    container.appendChild(varausSection);
    const varausOtsikko = document.createElement('h2');
    const varausTeksti = document.createTextNode('Reservation details');
    varausOtsikko.appendChild(varausTeksti);
    varausSection.appendChild(varausOtsikko);
    varausSection.style.backgroundColor = 'lightgrey';

    const paivamaara = document.createElement('p');
    const calendarIcon = document.createElement('i');
    calendarIcon.setAttribute("class", "fa-regular fa-calendar-days");
    // paivamaara.setAttribute('id', 'pvm');
    // const paivamaaraTeksti = document.createTextNode('Date: ');
    paivamaara.appendChild(calendarIcon);
    varausSection.appendChild(paivamaara);
    paivamaara.append(paiva);

    const time = document.createElement('p');
    const timeIcon = document.createElement('i');
    timeIcon.setAttribute("class", "fa-regular fa-clock");
    // time.setAttribute('id', 'time');
    // const aikaTeksti = document.createTextNode('Time: ');
    // time.appendChild(aikaTeksti);
    time.appendChild(timeIcon);
    varausSection.appendChild(time);
    time.append(aika);
    
    const henkilot = document.createElement('p');
    const peopleIcon = document.createElement('i');
    peopleIcon.setAttribute('class',"fa-solid fa-person");
    // henkilot.setAttribute('id', 'henkilot');
    // const hloTeksti = document.createTextNode('People: ');
    // henkilot.appendChild(hloTeksti);
    henkilot.appendChild(peopleIcon);
    varausSection.append(henkilot);
    henkilot.append(hlot);

    // luodaan yhteystietolomake
    const yhteysSection = document.createElement('section');
    yhteysSection.setAttribute('id','yhteyssection');
    container.appendChild(yhteysSection);
    const yhteysOtsikko = document.createElement('h2');
    const yhteysTeksti = document.createTextNode('Your details');
    yhteysOtsikko.appendChild(yhteysTeksti);
    yhteysSection.appendChild(yhteysOtsikko);

    const yhteystietoLomake = document.createElement('form');
    yhteystietoLomake.setAttribute('id', 'yhteystietolomake');
    yhteysSection.appendChild(yhteystietoLomake);
 

    const etunimiInput = document.createElement('input');
    etunimiInput.setAttribute('type', 'text');
    etunimiInput.setAttribute('id', 'etunimi');
    etunimiInput.setAttribute('placeholder', 'First Name');
    yhteystietoLomake.appendChild(etunimiInput);

    const sukunimiInput = document.createElement('input');
    sukunimiInput.setAttribute('type', 'text');
    sukunimiInput.setAttribute('id', 'sukunimi');
    sukunimiInput.setAttribute('placeholder', 'Last Name');
    yhteystietoLomake.appendChild(sukunimiInput);

    const email = document.createElement('input');
    email.setAttribute('type', 'email');
    email.setAttribute('id', 'email');
    
    email.setAttribute('placeholder', 'E-mail');
    yhteystietoLomake.appendChild(email);

    const puhelin = document.createElement('input');
    puhelin.setAttribute('type', 'tel');
    puhelin.setAttribute('id', 'puhelin');
    puhelin.setAttribute('placeholder', 'Cellphone Number');
    yhteystietoLomake.appendChild(puhelin);  

    // luodaan varausvahvistusnappi
    const confirmButton = document.createElement('button');
    confirmButton.setAttribute('id', 'vahvistusnappi');
    const vahvistusnappiTeksti = document.createTextNode('CONFIRM NOW');
    confirmButton.appendChild(vahvistusnappiTeksti);
    container.appendChild(confirmButton);
    confirmButton.addEventListener('click', done);
    
}
   
function done() {
    document.getElementById('varausvahvistus').textContent = 'Your booking is confirmed';
    document.getElementById('yhteystietolomake').style.display = 'none';
    document.getElementById('vahvistusnappi').style.display = 'none';
    document.getElementById('yhteyssection').style.display = 'none';

    const muutosNappi = document.createElement('button');
    muutosNappi.setAttribute('id','muutosnappi');
    muutosNappi.textContent = 'CHANGE YOUR RESERVATION';
    container.appendChild(muutosNappi);

    const peruutusNappi = document.createElement('button');
    peruutusNappi.setAttribute('id', 'peruutusnappi');
    peruutusNappi.textContent = 'CANCEL YOUR RESERVATION';
    container.appendChild(peruutusNappi);

    const contactRestaurantButton = document.createElement('button');
    contactRestaurantButton.setAttribute('id','sendemail');
    contactRestaurantButton.textContent = 'CONTACT RESTAURANT';
    container.appendChild(contactRestaurantButton);

    contactRestaurantButton.addEventListener('click', openContactPage);
}

function openContactPage() {
    window.open('./contact.html');
}



