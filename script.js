let AllMonth = document.querySelectorAll(".month");
let AllDays = document.querySelectorAll(".days");
let AllYear = document.querySelectorAll(".years");

let year = document.querySelector(".year");
let month = document.querySelector(".mon");
let day = document.querySelector(".day");

let btn = document.querySelector(".btn");
let result = document.querySelector(".Result");

let months = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];
let days =  [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31];


// ---- Todays Date ---

let todayDay = new Date();
AllYear[0].value = todayDay.getFullYear();


months.forEach((month,index)=>{
    let query = `<option value="${month}" ${todayDay.getMonth() === index ?"selected":""}>${month}</option>`;
    AllMonth[0].insertAdjacentHTML("beforeend",query);
});

days.forEach((day,index)=>{
    let query = `<option value="${day}" ${(todayDay.getDate()-1) === index?"selected":""}>${day}</option>`;
    AllDays[0].insertAdjacentHTML("beforeend",query);
});

months.forEach((month,index)=>{
    let query = `<option value="${month}" ${todayDay.getMonth() === index ?"selected":""}>${month}</option>`;
    AllMonth[1].insertAdjacentHTML("beforeend",query);
});

days.forEach((day,index)=>{
    let query = `<option value="${day}" ${(todayDay.getDate()-1) === index?"selected":""}>${day}</option>`;
    AllDays[1].insertAdjacentHTML("beforeend",query);
});


btn.addEventListener("click",()=>{
   let birthday = AllDays[0].value; 
   let birthYear = AllYear[0].value;
   let birthMonth ;

   let currentDay = AllDays[1].value;
   let currentYear = AllYear[1].value;
   let currentMonth;

  months.forEach((ele,index)=>{
     if(AllMonth[0].value === ele){
        birthMonth = index+1;
     }

     if(AllMonth[1].value === ele){
        currentMonth = index+1;
     }
  }); 



   day.textContent = Math.abs(Number(currentDay) - Number(birthday));
   year.textContent = Math.abs(Number(currentYear) - Number(birthYear));
   month.innerText = Math.abs(currentMonth - birthMonth);   
  
   result.classList.add("active");

   setTimeout(()=>{
    result.classList.remove("active");
   },3000)

  
});


