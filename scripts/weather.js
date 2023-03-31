const temp = document.getElementById('temp');
const condition = document.getElementById('condition');
const humidity = document.getElementById('humidity');
const weather_icon = document.getElementById('forecast-icon-1');
const day_one = document.getElementById('day-one');
/*Getting Weather Forecast for Saratoga Springs */
const url = 'https://api.openweathermap.org/data/2.5/forecast?lat=34&lon=-117&units=imperial&&appid=26c0716e28b534ccf5a476a4f00d54b4';

async function apiFetch() {
    try {
      const response = await fetch(url);
      if (response.ok) {
        const data = await response.json();
        console.log(data); // this is for testing the call
        displayResults(data);
      } else {
          throw Error(await response.text());
      }
    } catch (error) {
        console.log(error);
    }
  }
  apiFetch();

  /* Showing Weather forecast */
function displayResults(weatherData) {
    /*date_to_format = `${weatherData.list[0].dt_txt}`;*/
    day_one.innerText = formattDate(`${weatherData.list[0].dt_txt}`);
    /*console.log("line 29,",formattDate(`${weatherData.list[0].dt_txt}`));*/
    temp.innerText = `${weatherData.list[0].main.temp.toFixed(0)} F`;
    const iconsrc= `https://openweathermap.org/img/w/${weatherData.list[0].weather[0].icon}.png`;
    weather_icon.setAttribute('src',iconsrc);
    console.log("Line 32,",`${weatherData.list[0].weather[0].icon}`);
    condition.innerText = `${weatherData.list[0].weather[0].description}`;
    humidity.innerText = `${weatherData.list[0].main.humidity}`;


    /*console.log("Line 36:",`${weatherData.list[0].weather[0].description}`);*/
    /*speed.innerText = `${weatherData.list[0].wind.speed.toFixed(0)}`;
    tempcal = weatherData.list[0].wind.speed.toFixed(0);*/
    //console.log("Line 38: ",temp.innerText);
    //console.log("37: ",weatherData.list[0].wind.speed.toFixed(0));
    //console.log("Line 39:",tempcal);
    /*parameters = {
      'tempcalc': temp.innerText,
      'speedcalc':speed.innerText
    }*/
    /*console.log("line 45",parameters);*/
    /*const iconsrc = `https://openweathermap.org/img/w/${weatherData.list[0].weather[0].icon}.png`;
    const desc = weatherData.list[0].weather[0].description;*/

    /*weatherIcon.setAttribute('src', iconsrc);
    weatherIcon.setAttribute('alt', desc);
    captionDesc.textContent = desc;
    calcWindChill(parameters);*/
  }

  function formattDate(date_forecast){
    current_date = new Date(date_forecast);
    const optionLong = {
        weekday:"long"
    };

    const lDay= current_date.toLocaleDateString('en-US', optionLong);
    const nDay= current_date.getDate();

    return `${lDay} - ${nDay}`;

}