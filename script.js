//Select output vars
const output_year = document.querySelector(".output-year1");
const output_month = document.querySelector(".output-month");
const output_day = document.querySelector(".output-day");
const output_clock = document.querySelector(".output-clock");
const output_year1 = document.querySelector(".output-year2");
const progress = document.querySelector(".js-completed-bar");

const tag = document.querySelector(".tag");

//Select input vars
const input_year = document.querySelector("#year");
const input_month = document.querySelector("#month");
const input_day = document.querySelector("#day");
const submit_button  = document.querySelector(".submit-btn")

//Select error vars
const error_year = document.querySelector(".error-year");
const error_month = document.querySelector(".error-month");
const error_day = document.querySelector(".error-day");

var quotes = [
    "Life is not measured by the number of breaths we take, but by the moments that take our breath away.",
    "Live each day as if it's your last, embracing every moment and savoring each experience.",
    "The purpose of life is to live it, to taste experience to the utmost, and to reach out eagerly and without fear for newer and richer experiences.",
    "Time is precious. Waste it wisely.",
    "Yesterday is history, tomorrow is a mystery, but today is a gift. That's why it's called the present.",
    "Life is about moments: don't wait for them, create them.",
    "Make every moment count, for they add up to the story of your life.",
    "Seize the day, and make it yours.",
    "Life is an adventure. Enjoy the ride and make every moment an unforgettable memory.",
    "Live in the present, remember the past, and fear not the future, for it doesn't exist and never shall. There is only now.",
    "The way to get started is to quit talking and begin doing." 
];

  var isValid = false
//input validations
input_day.addEventListener("input", day =>{
    if(+input_day.value>31){
        error_day.textContent = "Must be a valid DATE"
        isValid =false;
        return;
    } else{
        isValid=true;
        error_day.textContent = "";
    }

    if(+input_day.value===0){
        isValid=false;
        error_day.textContent = "This Fiels is required";
        return;
    } else{
        error_day.textContent = "";
    }
} );

input_month.addEventListener("input", day =>{
    if(+input_month.value>12){
        error_month.textContent = "Must be a valid MONTH";
        isValid =false;
        return;
    } else{
        isValid=true;
        error_month.textContent = "";
    }

    if(+input_month.value===0){
        isValid=false;
        error_month.textContent = "This Fiels is required";
        return;
    } else{
        error_month.textContent = "";
    }
} );

input_year.addEventListener("input", day =>{
    if(+input_year.value>2023){
        error_year.textContent = "Must be a valid DATE";
        isValid =false;
        return;
    } else{
        isValid=true;
        error_year.textContent = "";
    }
    if(+input_year.value===0){
        isValid=false;
        error_year.textContent = "This Fiels is required";
        return;
    } else{
        error_year.textContent = "";

    }
} );


//Sumbmit buttom calculation

submit_button.addEventListener('click', CalculateDate);

var refreshInterval =null;

function CalculateDate(){
    if(isValid){
        let birthday = `${input_month.value}/${input_day.value}/${input_year.value}`;
        console.log(birthday);
        let birthdayObj = new Date(birthday);
        let ageDiffMill = Date.now() - birthdayObj;
        let ageDate = new Date(ageDiffMill);
        let ageYears = ageDate.getUTCFullYear() - 1970;
        let ageMonth = ageDate.getUTCMonth();
        let ageDay = ageDate.getUTCDay();

        progress.style.width = ageYears * (100/80) + "%";

        output_day.textContent = ageDay;
        output_month.textContent = ageMonth;
        output_year.textContent = ageYears;
        
        let clock_sec = (ageDate.getTime()/1000);
        
        if (refreshInterval != null){
        clearInterval(refreshInterval);
        }
        function updateTime(){ 
            clock_sec+=1
            output_year1.textContent = (clock_sec/31556952).toFixed(8) ;
        }
        
        refreshInterval = setInterval(updateTime, 1000);
       // tag.textContent = "Carpe diem, every moment is a precious gift, cherish it to the fullest!"
        tag.textContent = quotes[Math.floor(Math.random() * quotes.length) + 1]
         console.log(quotes[Math.floor(Math.random() * 10) + 1])
    }else{
        alert("Error in Input Date");
    }

}

function stopTimmer() {
    clearInterval(refreshInterval);
    // release our intervalID from the variable
    refreshInterval = null;
}

if (progress) {
    progress.style.width = progress.getAttribute("data-complete") + "%";
    progress.style.opacity = 1;
  }