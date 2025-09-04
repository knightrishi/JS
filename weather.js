const val=document.querySelector("#cityInput");
const btn=document.querySelector("#getWeatherBtn")
const resultBox = document.querySelector("#weatherResult");


btn.addEventListener("click",async()=>{
   let innerval=val.value;

   console.log(innerval)

   if(innerval.length>2){
    try{
        const resp=await fetch(`http://api.weatherapi.com/v1/current.json?key=079be29f065f461a9a7104049250409&q=${innerval}&aqi=yes`)
         if (!resp.ok) {
                    throw new Error('Network response was not ok');
                }
                const data=await resp.json();
                 console.log(data);
                 resultBox.innerText = `Weather in ${data.location.name}: ${data.current.temp_c}°C, ${data.current.condition.text} ,windspeed ${data.current.wind_kph}Km/h `;

    }catch(error){
console.log(error)
    }
   }

   val.value=""
})