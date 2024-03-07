document.addEventListener("DOMContentLoaded", function() {

    const search = document.getElementById('search');
    const btn = document.querySelector('.btn');
    const photoimg = document.querySelector('.photoimg');
    const temp = document.querySelector('.temp');
    const cityy = document.querySelector('.city');
    const humuu = document.querySelector('.humuu');
    const windd = document.querySelector('.windd');


    const photo = document.querySelector('.photo');
    const weather = document.querySelector('.weather');
    const last = document.querySelector('.last');



    const location_not_found = document.querySelector('.location-not-found');

    const weather_body = document.querySelector('.weather-body');
    

    async function checkWeather(city) {
       const api_key = "379c4ad8d602941ee08d93d560b42c38";
       const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}`;



       
           const response = await fetch(url);
           const weather_data = await response.json();
         

           if(weather_data.cod === `404`){
            location_not_found.style.display = "flex";
            photo.style.display = "none";
            last.style.display = "none";
            weather.style.display = "none";
            cityy.style.display = "none";
            
            console.log("error");
            return;
        }

           

          else{
            photo.style.display = "flex";
            last.style.display = "flex";
            weather.style.display = "flex";
            cityy.style.display = "flex";
           location_not_found.style.display = "none";
           temp.innerHTML = `${Math.round(weather_data.main.temp - 273.15)}`;
           cityy.innerHTML = `${(weather_data.name)}`;
           humuu.innerHTML = `${(weather_data.main.humidity+'%')}`;
           windd.innerHTML = `${(weather_data.wind.speed+'km/h')}`;


          

           console.log(weather_data.weather[0].main);

           switch(weather_data.weather[0].main){
            case 'Clouds':
                photoimg.src = "/images/clouds.png";
                break;
            case 'Clear':
                photoimg.src = "/images/clear.png";
                break;
            case 'Rain':
                photoimg.src = "/images/rain.png";
                break;
            case 'Mist':
                photoimg.src = "/images/mist.png";
                break;
            case 'Snow':
                photoimg.src = "/images/snow.png";
                break;
            case 'Haze':
                photoimg.src = "/images/mist.png";
                break;
            case 'Smoke':
                photoimg.src = "/images/clouds.png";
                break;
        }};
    }

    btn.addEventListener('click', () => {
       checkWeather(search.value);
    });

});

