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

const quotes = {
    10: "Life is like a butterfly: You can chase it, or you can let it come to you.",
    20: "Time is what we want most, but what we use worst.",
    25: "Life is not about finding yourself. Life is about creating yourself.",
    30: "The two most powerful warriors are patience and time.",
    35: "The purpose of our lives is to be happy.",
    40: "The only time you should look back is to see how far you've come.",
    45: "Life is like riding a bicycle. To keep your balance, you must keep moving.",
    50: "In the end, it's not the years in your life that count. It's the life in your years.",
    60: "The way I see it, if you want the rainbow, you gotta put up with the rain.",
    70: "Life is 10% what happens to us and 90% how we react to it.",
  };

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
        let ageDay = ageDate.getUTCDay() - 1;

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
        tag.textContent = "Carpe diem, every moment is a precious gift, cherish it to the fullest!"
        //tag.textContent = quotes[ageYears/10 | 0]
        console.log(quotes[ageYears/10 | 0])
    }else{
        alert("Error in Input Date");
    }

}

if (progress) {
    progress.style.width = progress.getAttribute("data-complete") + "%";
    progress.style.opacity = 1;
  }