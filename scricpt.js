const button = document.getElementById("search_button");
const input = document.getElementById("city_input");
const cityname = document.getElementById("city-name");
const weather = document.getElementById("city-temp");
const citytime = document.getElementById("city-time");

async function getData(cityname) {
    const response = await fetch(`https://api.weatherapi.com/v1/current.json?key=6f2746cceddc4bc3b67164555242312&q=${cityname}&aqi=yes`);
    return await response.json();
}

button.addEventListener("click", async () => {
    const value = input.value;
    const result = await getData(value);
    cityname.innerText = `${result.location.name}, ${result.location.region}-${result.location.country}`;
    citytime.innerText = result.location.localtime;
    weather.innerText = `${result.current.temp_c}°C`;
});