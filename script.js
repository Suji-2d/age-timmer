//Select output vars
const output_year = document.querySelector(".output-year1");
const output_month = document.querySelector(".output-month");
const output_day = document.querySelector(".output-day");
const output_clock = document.querySelector(".output-clock");
const output_year1 = document.querySelector(".output-year2");

//Select input vars
const input_year = document.querySelector("#year");
const input_month = document.querySelector("#month");
const input_day = document.querySelector("#day");
const submit_button  = document.querySelector(".submit-btn")

//Select error vars
const error_year = document.querySelector(".error-year");
const error_month = document.querySelector(".error-month");
const error_day = document.querySelector(".error-day");

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
         
    
    }else{
        alert("Error in Input Date");
    }

}

