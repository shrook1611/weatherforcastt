let apiKey="42de82a30c7f4f1bb2f71616241212" ;
let forcastArr=[];
let  searchInput=document.getElementById("search")
let findBtn=document.getElementById("submit");


if(searchInput.value===null){
window.prompt("please enter city name")



}
getForcast("london")
    
    async function getForcast(country){
    let res= await fetch(`http://api.weatherapi.com/v1/forecast.json?key=42de82a30c7f4f1bb2f71616241212&q=${country}&days=3`)
    
    res= await res.json();
    forcastArr=res.forecast.forecastday;
    if(country===404){
        alert("city not found")
    }
    
    displayData(forcastArr)
    // console.log(forcastArr)
    
    
    
    }
    




function displayData(){
    var cartoona=""


   for (let i = 0; i < forcastArr.length; i++) {
    cartoona+=`<div class="item  col-md-4  text-white">
    <div class="item-header d-flex justify-content-between">
      <p>thursday</p>
      <p>${forcastArr[i].date}</p>

    </div>
    <item-body class="d-flex justify-content-center flex-column align-items-center">
      <h3 id="country">london</h3>
      <h1 class="temp" id="temprature">${forcastArr[i].day.avgtemp_c
      }C</h1>
      <img src="${forcastArr[i].day.condition.icon}" alt="">


    </item-body>
    <div class="item-footer d-flex gap-2 justify-content-center">
      <img src="weather-images/icon-umberella.png" alt=""> <span>${forcastArr[i].day.avghumidity}</span>
      <img src="weather-images/icon-wind.png" alt=""><span>${forcastArr[i].day.avgvis_km}</span>
      <img src="weather-images/icon-compass.png" alt=""><span>east</span>
    </div>




  </div>
`

}
document.querySelector(".forcast-container").innerHTML=cartoona 


   }

searchInput.addEventListener(("blur"),function(e){

    getForcast(e.target.value)
// console.log(e.target.value)



})