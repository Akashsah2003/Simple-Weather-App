var city = document.getElementById("city");
var icon = document.getElementById("icon");
var sky = document.getElementById("sky");
var temp = document.getElementById("temp");
var wind = document.getElementById("wind");
var submit = document.getElementById("submit");
var result = document.getElementsByClassName("result")[0];
var key = "8817d8515fb4d71eaa81b8e93ebc0ab0";
function weather() {
    var cityname = document.getElementById("cityname").value;
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityname}&appid=${key}`)
    .then(response => response.json())
    .then(data=>{

        console.log(data);
        if (data["message"] == "city not found")
        {
            alert("city not found");
        }
        else{

            city.innerText = `${data.name}`;
            temp.innerText =`Temperature: ${Math.round((data.main["temp"]-273)*100)/100}`;
            wind.innerText = `Wind speed: ${data.wind["speed"]}`;
            sky.innerText = `Sky condition: ${data.clouds.all}%`;
            icon.innerHTML = `<img src="https://openweathermap.org/img/wn/${data.weather[0].icon}.png" alt=""></img>`;
            result.removeAttribute("class", "res1");
        }
        document.getElementById("cityname").value = "";
    })
    .catch(error => console.error(error));
}
submit.addEventListener("click", weather);
var cityn = document.getElementById("cityname");
cityn.addEventListener("keypress", (e) => {
    if(e.key == "Enter")
    {
        e.preventDefault();
        weather();
    }
});
