const apiUrl = "a1e2980c58ade1f51e7f7421b3e02bba"
const urlApi = `https://api.openweathermap.org/data/2.5/weather?units=metric&q=`

const serchInput = document.querySelector(".search-box input")
const serchBtn = document.querySelector(".search-box button")
const weatherIcon = document.querySelector(".weather-image i")
const weather = document.querySelector(".weather")
const error = document.querySelector(".error")

async function apiRespons (city) { 
const response = await fetch(urlApi  + city + `&appid=${apiUrl}`)
if(response.status === 404){
    error.style.display = "block"
    weather.style.display = "none"
}else{
  error.style.display = "none"
  weather.style.display = "block"
}

const data = await response.json()
 document.querySelector(".city").innerHTML = data.name
 const d = document.getElementById("temp").innerHTML = Math.round(data.main.temp) 
 document.getElementById("humidity").innerHTML = data.main.humidity + "%"
 document.getElementById("wind").innerHTML = data.wind.speed + "km/h"

 if (data.weather[0].main == "Clear") {
    weatherIcon.className = "fa-solid fa-sun";
  } else if (data.weather[0].main == "Rain") {
    weatherIcon.className = "fa-solid fa-cloud-rain";
  } else if (data.weather[0].main == "Mist") {
    weatherIcon.className = "fa-solid fa-cloud-mist";
  } else if (data.weather[0].main == "Drizzle") {
    weatherIcon.className = "fa-solid fa-cloud-drizzle";
  }
  weather.style.display = "block"

}

serchBtn.addEventListener("click", () => {
    apiRespons(serchInput.value)
    serchInput.value = ""
})

serchInput.addEventListener("keydown", (event) => {
    if (event.keyCode == 13) {
        apiRespons(serchInput.value)
        serchInput.value = ""
    }
  
})




