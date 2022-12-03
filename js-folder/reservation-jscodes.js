window.onload = reservationPage;
const reservationContainer = document.getElementById('reservationcontainer');

function reservationPage() {
    // Create variables for the reservationPage 
    const reservationHeadline = document.createElement('h2');
    const reservationForm = document.createElement('form');
    const dateWrapper = document.createElement('p');
    const dateLabel = document.createElement('label');
    const dateInput = document.createElement('input');
    const timeWrapper = document.createElement('p');
    const timeLabel = document.createElement('label'); 
    // const timeInput = document.createElement('input');
    const timeList = document.createElement('select');
    const peopleLabel = document.createElement('label');
    const peopleInput = document.createElement('input');
    const peopleWrapper = document.createElement('p');
    const reservationButton = document.createElement('button');
    const rules = document.createElement('p');

    // set attributes to reservationPage-variables
    reservationHeadline.setAttribute('id', 'reservationheadline');
    reservationForm.setAttribute('id','reservationform');
    dateWrapper.setAttribute('id','datewrapper');
    dateLabel.setAttribute('for','datename');
    dateLabel.setAttribute('id','datelabel');
    dateInput.setAttribute('type','date');
    dateInput.setAttribute('name','datename');
    dateInput.setAttribute('id','dateinput');
    dateInput.setAttribute('max','2023-12-31');
    timeWrapper.setAttribute('id','timewrapper');
    timeLabel.setAttribute('for','timelist');
    timeLabel.setAttribute('id','timelabel');
    timeList.setAttribute('id','timelist');
    timeList.setAttribute('name','timelist');
    peopleWrapper.setAttribute('id','peoplewrapper');
    peopleLabel.setAttribute('for','peoplename');
    peopleLabel.setAttribute('id','peoplelabel');
    peopleInput.setAttribute('type','number');
    peopleInput.setAttribute('id','peopleinput');
    peopleInput.setAttribute('min','1');
    peopleInput.setAttribute('max','10');
    peopleInput.setAttribute('name','peoplename');
    reservationButton.setAttribute('id','reservationbutton');
    reservationButton.setAttribute('type','button');
    rules.setAttribute('id','rules');

    // create timeoptions
    const option1 = document.createElement('option');
    option1.setAttribute('value','11:00');
    option1.textContent = '11:00';
    const option2 = document.createElement('option');
    option2.setAttribute('value','11:30');
    option2.textContent = '11:30';
    const option3 = document.createElement('option');
    option3.setAttribute('value','12:00');
    option3.textContent = '12:00';
    const option4 = document.createElement('option');
    option4.setAttribute('value','12:30');
    option4.textContent = '12:30';
    const option5 = document.createElement('option');
    option5.setAttribute('value','13:00');
    option5.textContent = '13:00';
    const option6 = document.createElement('option');
    option6.setAttribute('value','13:30');
    option6.textContent = '13:30';


    // add content to reservationPage variables
    reservationHeadline.textContent = 'Reserve a table';
    dateLabel.textContent = 'Select Date';
    timeLabel.textContent = 'Time';
    peopleLabel.textContent = 'People';
    reservationForm.appendChild(dateWrapper);
    reservationForm.appendChild(timeWrapper);
    reservationForm.appendChild(peopleWrapper);
    dateWrapper.appendChild(dateLabel);
    dateWrapper.appendChild(dateInput);
    timeWrapper.appendChild(timeLabel);
    timeWrapper.appendChild(timeList);
    peopleWrapper.appendChild(peopleLabel);
    peopleWrapper.appendChild(peopleInput);
    reservationForm.appendChild(reservationButton);
    timeList.appendChild(option1);
    timeList.appendChild(option2);
    timeList.appendChild(option3);
    timeList.appendChild(option4);
    timeList.appendChild(option5);
    timeList.appendChild(option6);
    // timeList.appendChild(option2);
    // timeList.appendChild(option2);
    // timeList.appendChild(option2);
    // timeList.appendChild(option2);
    // timeList.appendChild(option2);
    // timeList.appendChild(option2);
    // timeList.appendChild(option2);
    // timeList.appendChild(option2);


    reservationButton.textContent='Reserve';
    rules.textContent = 'If you are booking a table for more than 10 people please <a href="./contact.html">contact</a> our restaurant.';

    //Add variables to reservationcontainer in main
        reservationContainer.appendChild(reservationHeadline);
        reservationContainer.appendChild(reservationForm);
        reservationContainer.appendChild(rules);

    // Events on reservationPage
        dateInput.addEventListener('click',checkDate);
        reservationButton.addEventListener('click',validateForm);
}

function validateForm() {
    const date = document.getElementById('dateinput').value;
    const time = document.getElementById('timelist').value;
    const people = document.getElementById('peopleinput').value;

    if (date == "") {
      alert("Date must be filled out");
      return false;
     }

     if (date < document.getElementById("dateinput").getAttribute("min")) {
        alert('Date can\'t be in the past');
        return false;
     }

    if (people == "") {
        alert('Number of people must be filled out');
        return false;
    }

    if (people < 1) {
        alert('Number of people can\'t be negative');
        return false;
    }

    if (people > 10) {
        alert('Please contact our restaurant to make your reservation');
        return false;
    }
    customerDetails();
  }

function customerDetails() {
    // empty reservationPage
    document.getElementById('reservationheadline').style.display='none';
    document.getElementById("reservationform").style.display="none";
    document.getElementById('rules').style.display="none";

    //get reservation information
    var paiva = document.getElementById('dateinput').value;
    var aika = document.getElementById('timelist').value;
    var hlot = document.getElementById('peopleinput').value;

    // variables for customerDetails
    const customerSection = document.createElement('section');
    const completeReservationHeadLine = document.createElement('h1');
    const completeReservationText = document.createTextNode('Complete your reservation');
    const customerDetailsHeadline = document.createElement('h2');
    const customerDetailsText = document.createTextNode('Reservation details');
    const reservationDetailsWrapper = document.createElement('section');
    const reservationDate = document.createElement('p');
    const calendarIcon = document.createElement('i');
    const reservationTime = document.createElement('p');
    const timeIcon = document.createElement('i');
    const reservationPeople = document.createElement('p');
    const peopleIcon = document.createElement('i');
    const contactSection = document.createElement('section');
    const contactHeadline = document.createElement('h2');
    const contactText = document.createTextNode('Your details');
    const contactForm = document.createElement('form');
    const firstnameInput = document.createElement('input');
    const lastnameInput = document.createElement('input');
    const phoneNumber = document.createElement('input');
    const email = document.createElement('input');
    const confirmButton = document.createElement('button');
    const confirmButtonText = document.createTextNode('Confirm now');

    // attributes
    customerSection.setAttribute('id','customersection');
    completeReservationHeadLine.setAttribute('id','completereservationheadline');
    customerDetailsHeadline.setAttribute('id','customerdetailsheadline');
    reservationDetailsWrapper.setAttribute('id','reservationdetailswrapper');
    calendarIcon.setAttribute("class", "fa-regular fa-calendar-days");
    reservationDate.setAttribute('class', 'icons');
    reservationDate.setAttribute('id', 'reservationdate');
    reservationTime.setAttribute('class', 'icons');
    reservationTime.setAttribute('id', 'reservationtime');
    reservationPeople.setAttribute('class','icons');
    reservationPeople.setAttribute('id','reservationpeople');
    timeIcon.setAttribute("class", "fa-regular fa-clock");
    peopleIcon.setAttribute('class',"fa-solid fa-person");
    contactSection.setAttribute('id','contactsection');
    contactHeadline.setAttribute('id','contactheadline');
    contactForm.setAttribute('id', 'contactform');
    firstnameInput.setAttribute('type', 'text');
    firstnameInput.setAttribute('id', 'firstname');
    firstnameInput.setAttribute('placeholder', 'First Name');
    lastnameInput.setAttribute('type', 'text');
    lastnameInput.setAttribute('id', 'lastname');
    lastnameInput.setAttribute('placeholder', 'Last Name');
    email.setAttribute('type', 'email');
    email.setAttribute('id', 'email');
    email.setAttribute('placeholder', 'E-mail');
    phoneNumber.setAttribute('type', 'tel');
    phoneNumber.setAttribute('id', 'phonenumber');
    phoneNumber.setAttribute('placeholder', 'Cellphone Number');
    confirmButton.setAttribute('id', 'confirmbutton');
    confirmButton.appendChild(confirmButtonText);
    
    //add elements
    reservationContainer.appendChild(completeReservationHeadLine);
    reservationContainer.appendChild(customerSection);
    completeReservationHeadLine.appendChild(completeReservationText);
    customerDetailsHeadline.appendChild(customerDetailsText);
    customerSection.appendChild(customerDetailsHeadline);
    reservationDate.appendChild(calendarIcon);
    customerSection.appendChild(reservationDate);
    reservationDate.append(paiva);
    reservationTime.appendChild(timeIcon);
    customerSection.appendChild(reservationTime);
    reservationTime.append(aika);
    reservationPeople.appendChild(peopleIcon);
    customerSection.append(reservationPeople);
    reservationPeople.append(hlot);
    reservationContainer.appendChild(contactSection);
    contactHeadline.appendChild(contactText);
    contactSection.appendChild(contactHeadline);
    contactSection.appendChild(contactForm);
    contactForm.appendChild(firstnameInput);
    contactForm.appendChild(lastnameInput);
    contactForm.appendChild(email);  
    contactForm.appendChild(phoneNumber); 
    reservationContainer.appendChild(confirmButton);
 

    confirmButton.addEventListener('click', done);
    
}


function checkDate() {
    var today = new Date();
    var dd = today.getDate();
    var mm = today.getMonth()+1; 
    var yyyy = today.getFullYear();
    if(dd<10){
            dd='0'+dd
        } 
        if(mm<10){
            mm='0'+mm
        } 
    today = yyyy+'-'+mm+'-'+dd;
    document.getElementById("dateinput").setAttribute("min", today);
}

function done() {

}

// var otsikko = document.getElementById('headline')
// const myButton = document.getElementById('varausnappi');
// const variNappi = document.getElementById('vari');
// const tekstikentta = document.getElementsByTagName('input');
// const myFooter = document.getElementsByClassName('footer');
// const ekaLomake = document.getElementById('ekaLomake');
// const container = document.getElementById('container');

// var today = new Date();
// var dd = today.getDate();
// var mm = today.getMonth()+1; //January is 0!
// var yyyy = today.getFullYear();
//  if(dd<10){
//         dd='0'+dd
//     } 
//     if(mm<10){
//         mm='0'+mm
//     } 
// today = yyyy+'-'+mm+'-'+dd;
// document.getElementById("datefield").setAttribute("min", today);

// myButton.addEventListener('click', customerDetails)

// function customerDetails() {
//     document.getElementById("ekaLomake").style.display="none";
//     document.getElementById('varausnappi').style.display="none";
//     document.getElementById('rules').style.display="none";
//     document.getElementById('headline').style.display="none";
//     var paiva = document.getElementById('datefield').value;
//     var aika = document.getElementById('time').value;
//     var hlot = document.getElementById('people').value;

//     const varausVahvistus = document.createElement('h1');
//     varausVahvistus.setAttribute('id','varausvahvistus');
//     const otsikkoTeksti = document.createTextNode('Complete your reservation');
//     varausVahvistus.appendChild(otsikkoTeksti);
//     container.appendChild(varausVahvistus);

//     const varausSection = document.createElement('section');
//     varausSection.setAttribute('id','varaussection');
//     container.appendChild(varausSection);
//     const varausOtsikko = document.createElement('h2');
//     const varausTeksti = document.createTextNode('Reservation details');
//     varausOtsikko.appendChild(varausTeksti);
//     varausSection.appendChild(varausOtsikko);
//     varausSection.style.backgroundColor = 'lightgrey';

//     const paivamaara = document.createElement('p');
//     const calendarIcon = document.createElement('i');
//     calendarIcon.setAttribute("class", "fa-regular fa-calendar-days");
//     // paivamaara.setAttribute('id', 'pvm');
//     // const paivamaaraTeksti = document.createTextNode('Date: ');
//     paivamaara.appendChild(calendarIcon);
//     varausSection.appendChild(paivamaara);
//     paivamaara.append(paiva);

//     const time = document.createElement('p');
//     const timeIcon = document.createElement('i');
//     timeIcon.setAttribute("class", "fa-regular fa-clock");
//     // time.setAttribute('id', 'time');
//     // const aikaTeksti = document.createTextNode('Time: ');
//     // time.appendChild(aikaTeksti);
//     time.appendChild(timeIcon);
//     varausSection.appendChild(time);
//     time.append(aika);
    
//     const henkilot = document.createElement('p');
//     const peopleIcon = document.createElement('i');
//     peopleIcon.setAttribute('class',"fa-solid fa-person");
//     // henkilot.setAttribute('id', 'henkilot');
//     // const hloTeksti = document.createTextNode('People: ');
//     // henkilot.appendChild(hloTeksti);
//     henkilot.appendChild(peopleIcon);
//     varausSection.append(henkilot);
//     henkilot.append(hlot);

//     // luodaan yhteystietolomake
//     const yhteysSection = document.createElement('section');
//     yhteysSection.setAttribute('id','yhteyssection');
//     container.appendChild(yhteysSection);
//     const yhteysOtsikko = document.createElement('h2');
//     const yhteysTeksti = document.createTextNode('Your details');
//     yhteysOtsikko.appendChild(yhteysTeksti);
//     yhteysSection.appendChild(yhteysOtsikko);

//     const yhteystietoLomake = document.createElement('form');
//     yhteystietoLomake.setAttribute('id', 'yhteystietolomake');
//     yhteysSection.appendChild(yhteystietoLomake);
 

//     const etunimiInput = document.createElement('input');
//     etunimiInput.setAttribute('type', 'text');
//     etunimiInput.setAttribute('id', 'etunimi');
//     etunimiInput.setAttribute('placeholder', 'First Name');
//     yhteystietoLomake.appendChild(etunimiInput);

//     const sukunimiInput = document.createElement('input');
//     sukunimiInput.setAttribute('type', 'text');
//     sukunimiInput.setAttribute('id', 'sukunimi');
//     sukunimiInput.setAttribute('placeholder', 'Last Name');
//     yhteystietoLomake.appendChild(sukunimiInput);

//     const email = document.createElement('input');
//     email.setAttribute('type', 'email');
//     email.setAttribute('id', 'email');
    
//     email.setAttribute('placeholder', 'E-mail');
//     yhteystietoLomake.appendChild(email);

//     const puhelin = document.createElement('input');
//     puhelin.setAttribute('type', 'tel');
//     puhelin.setAttribute('id', 'puhelin');
//     puhelin.setAttribute('placeholder', 'Cellphone Number');
//     yhteystietoLomake.appendChild(puhelin);  

//     // luodaan varausvahvistusnappi
//     const confirmButton = document.createElement('button');
//     confirmButton.setAttribute('id', 'vahvistusnappi');
//     const vahvistusnappiTeksti = document.createTextNode('CONFIRM NOW');
//     confirmButton.appendChild(vahvistusnappiTeksti);
//     container.appendChild(confirmButton);
//     confirmButton.addEventListener('click', done);
    
// }
   
// function done() {
//     document.getElementById('varausvahvistus').textContent = 'Your booking is confirmed';
//     document.getElementById('yhteystietolomake').style.display = 'none';
//     document.getElementById('vahvistusnappi').style.display = 'none';
//     document.getElementById('yhteyssection').style.display = 'none';

//     const muutosNappi = document.createElement('button');
//     muutosNappi.setAttribute('id','muutosnappi');
//     muutosNappi.textContent = 'CHANGE YOUR RESERVATION';
//     container.appendChild(muutosNappi);

//     const peruutusNappi = document.createElement('button');
//     peruutusNappi.setAttribute('id', 'peruutusnappi');
//     peruutusNappi.textContent = 'CANCEL YOUR RESERVATION';
//     container.appendChild(peruutusNappi);

//     const contactRestaurantButton = document.createElement('button');
//     contactRestaurantButton.setAttribute('id','sendemail');
//     contactRestaurantButton.textContent = 'CONTACT RESTAURANT';
//     container.appendChild(contactRestaurantButton);

//     contactRestaurantButton.addEventListener('click', openContactPage);
// }

// function openContactPage() {
//     window.open('./contact.html');
// }



