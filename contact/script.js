const toggle = document.querySelector('.toggle');
const body = document.querySelector('body');

toggle.addEventListener('click', function() {
    body.classList.toggle('menu');
});


const formulaire = document.querySelector('#formulaire');
let prenom = document.querySelector('#prenom');
let email = document.querySelector('#email');
let telephone = document.querySelector('#telephone');
let message = document.querySelector('#message');

var pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;


formulaire.addEventListener('submit', function(e) {


   if(!prenom.value) {
    document.querySelector('#name-error').style.visibility='visible';
    e.preventDefault();
   } else {
        document.querySelector('#name-error').style.visibility='hidden';
   }

   if(!email.value || email.value.match(pattern) == false) {
    document.querySelector('#email-error').style.visibility='visible';
    e.preventDefault();
   }
   else {
        document.querySelector('#email-error').style.visibility='hidden';
   }

   if(!telephone.value) {
    document.querySelector('#telephone-error').style.visibility='visible';
    e.preventDefault();
   } else {
     document.querySelector('#telephone-error').style.visibility='hidden';
   }

   if(!message.value) {
    document.querySelector('#message-error').style.visibility='visible';
    e.preventDefault();
   } else {
    document.querySelector('#message-error').style.visibility='hidden';
   }

   if(!message.value == false && !prenom.value == false && !telephone.value == false && !email.value == false) {
    alert ("Votre message à bien été envoyé")
    
    function sendEmail() {
     Email.send({
         Host : "smtp.mailtrap.io",
         Username : "<Mailtrap username>",
         Password : "<Mailtrap password>",
         To : 'recipient@example.com',
         From : "sender@example.com",
         Subject : "Test email",
         Body : "<html><h2>Header</h2><strong>Bold text</strong><br></br><em>Italic</em></html>"
     })
}
   }
    
})