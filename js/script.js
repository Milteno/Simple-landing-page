var query_string = (document.referrer==""?"direct":document.referrer)+"|:from|otf|to:|"+window.location.href;
var query_string_input = document.getElementById('query_string');
query_string_input.value = query_string;


// Smooth scroll 
const toggleButton = document.getElementsByClassName('toggle-button')[0]
const navbarLinks = document.getElementsByClassName('navbar-links')[0]
const button = document.getElementsByClassName('navbar-button')[0]

toggleButton.addEventListener('click', () => {
  navbarLinks.classList.toggle('active')
  button.classList.toggle('active')
})
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
      e.preventDefault();

      document.querySelector(this.getAttribute('href')).scrollIntoView({
          behavior: 'smooth'
      });
  });
});
//walidacja formularza 
/*
let next = false;
$("#formx").validate({
    rules: {
        name:{
            minlength:2,
            maxlength:30
        },
        lastname:{
            minlength:2,
            maxlength:30
        },
        email:{
            email:true
        },
        phone:{
            number:true,
            minlength:9,
            maxlength:9
        },
    },
    messages: {
        name:{
            required: "Proszę wpisać imię",
            minlength: "Imię powinno zawierać przynajmniej 2 znaki",
        },
        lastname: {
            required: "Proszę wpisać nazwisko",
        },
        email: "Proszę wpisać email",
        phone: "Proszę wpisać numer telefonu",
        localization: "*",
        label1: "*",
    },
    submitHandler: function(form) {
        let next = true;
        form.submit();
    }
   });
*/



// POST RQ + komunikat 
if (next=true) {
const formx = document.getElementById('formx');
function closeMess() {
    document.getElementById("serverResponse").style.display = "none";
}
let imie = document.getElementById("name").value;

    formx.addEventListener('submit', function (e) {
        e.preventDefault();
        const formData = new FormData(this);

        function responseMess(color) {
            document.getElementById("serverResponse").style.display = "block";
            document.getElementById("serverResponse").style.background = color;
        }
        fetch('login.php', {
            method: 'POST',
            body: formData

            }).then(function (response){
                if (!response.ok) {
                    throw Error(response.statusText + " - " + response.url);
                }
                return response.text();
            }).then(function (text){
                console.log("działa :D");
                responseMess("#bcf5bc");
                const serverResponse = document.getElementById("serverResponse");
                serverResponse.innerHTML = "Zgłoszenie zostało wysłane pomyślnie! <a class='close' onClick='closeMess()'></a>";
                /* console.log(text); */ // Zwracana wartosci formularza z pliku wskazanego w fetchu
                document.getElementById("formx").reset();
            }).catch(function (error){
                responseMess("#f8d7da");
                console.log("nie działa :C");
                /*console.error(error); */
                const serverResponse = document.getElementById("serverResponse");
                serverResponse.innerHTML = "Przepraszamy, wygląda na to, że serwer nie odpowiada. Prosimy spróbować za chwilę. <a class='close' onClick='closeMess()'></a>";
            })
        });
}
        //Ukrycie komunikatu stanu POST RQ po 10 sec
        function hideMess(){
            if(document.getElementById('serverResponse').style.display = "block") {
                document.getElementById("serverResponse").style.display = "none";
            }
        }

        $(function(){
    
            var twoToneButton = document.querySelector('.submit-button--loading');
            
            twoToneButton.addEventListener("click", function() {
                twoToneButton.innerHTML = "Wyślij formularz";
                twoToneButton.classList.add('spinning');
                
              setTimeout( 
                    function  (){  
                        twoToneButton.classList.remove('spinning');
                        twoToneButton.innerHTML = "Wyślij formularz";
                        
                    }, 2000);
            }, false);
            
        });
        setInterval(hideMess, 16000);