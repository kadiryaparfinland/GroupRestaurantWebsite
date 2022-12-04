window.onload = reservationPage;
const reservationContainer = document.getElementById('reservationcontainer');

function reservationPage() {
    // Create variables for the reservationPage 
    const backgroundPhoto = document.createElement('section');
    const backgroundPhotoText = document.createElement('h1');
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
    const rulesTextBegin = 'If you are booking a table for more than 10 people please ';
    const contactLinkText = 'contact';
    const rulesTextEnd = ' our restaurant.';
 

    // set attributes to reservationPage-variables
    backgroundPhoto.setAttribute('id','backgroundphoto');
    backgroundPhotoText.setAttribute('id','backgroundphototext');
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
    backgroundPhotoText.textContent = 'Reservation';
    reservationHeadline.textContent = 'Reserve a table';
    dateLabel.textContent = 'Select Date';
    timeLabel.textContent = 'Time';
    peopleLabel.textContent = 'People';
    //reservationForm.appendChild(reservationHeadline);
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

    //Add variables to reservationcontainer in main
        reservationContainer.appendChild(backgroundPhoto);
        backgroundPhoto.appendChild(backgroundPhotoText);
        reservationContainer.appendChild(reservationHeadline);
        reservationContainer.appendChild(reservationForm);
        reservationContainer.appendChild(rules);

    result = rulesTextBegin + "<a href='./contact.html'>" + contactLinkText + "</a>" + rulesTextEnd;
    document.getElementById("rules").innerHTML = result;
      

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
    phoneNumber.setAttribute('placeholder', 'Phone Number');
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
    document.getElementById('completereservationheadline').textContent = 'Your booking is now confirmed';
    document.getElementById('contactform').style.display = 'none';
    document.getElementById('confirmbutton').style.display = 'none';
    document.getElementById('contactsection').style.display = 'none';

    const changeButtonsWrapper = document.createElement('section');
    const changeButton = document.createElement('button');
    const cancelButton = document.createElement('button');
    const contactRestaurantButton = document.createElement('button');
    const changes = document.createElement('p');
    const changesText = document.createTextNode('Amendments can be made via the confirmation email that has been sent to you.');

    changeButtonsWrapper.setAttribute('id','changebuttonswrapper');
    changeButton.setAttribute('id','changebutton');
    cancelButton.setAttribute('id', 'cancelbutton');
    contactRestaurantButton.setAttribute('id','contactrestaurantbutton');
    changes.setAttribute('id','changes');
    
    changeButton.textContent = 'change reservation';
    cancelButton.textContent = 'cancel reservation';
    contactRestaurantButton.textContent = 'contact restaurant';

    reservationContainer.appendChild(changeButtonsWrapper);
    changeButtonsWrapper.appendChild(changeButton);
    changeButtonsWrapper.appendChild(cancelButton);
    changeButtonsWrapper.appendChild(contactRestaurantButton);
    changes.appendChild(changesText);
    reservationContainer.appendChild(changes);
    cancelButton.addEventListener('click',cancelReservation);
    contactRestaurantButton.addEventListener('click', openContactPage);

    changeButton.style.display = 'none';
}

function changeReservation() {
    document.getElementById('customersection').style.display = 'none';
    document.getElementById('changebutton').style.display = 'none';
    document.getElementById('cancelbutton').style.display = 'none';
    document.getElementById('contactrestaurantbutton').style.display = 'none';
    document.getElementById('reservationheadline').style.display = 'none';
    document.getElementById('backgroundphoto').style.display = 'none';
    document.getElementById('completereservationheadline').style.display = 'none';  

    
    //document.getElementById('reservationheadline').style.display = 'none';
    reservationHeadline.textContent = "Change your reservation";
    reservationButton.addEventListener('click', openContactPage2);
}

function cancelReservation() {
    document.getElementById('completereservationheadline').textContent = 'Your reservation has been cancelled';
    document.getElementById('customersection').style.display = 'none';
    document.getElementById('changebutton').style.display = 'none';
    document.getElementById('cancelbutton').style.display = 'none';
    document.getElementById('changes').style.display = 'none';
    
}

function openContactPage() {
    window.open('./contact.html');
}

function openContactPage2() {
    window.alert('nappi toimii');
}