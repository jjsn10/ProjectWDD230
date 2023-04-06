const temp = document.getElementById('temp');
const condition = document.getElementById('condition');
const humidity = document.getElementById('humidity');
const weather_icon_1 = document.getElementById('forecast-icon-1');
const weather_icon_2 = document.getElementById('forecast-icon-2');
const weather_icon_3 = document.getElementById('forecast-icon-3');
const day_one = document.getElementById('day-one');
const day_two = document.getElementById('day-two');
const day_three = document.getElementById('day-three');
const temp1 = document.getElementById('temp1');
const temp2 = document.getElementById('temp2');
const temp3 = document.getElementById('temp3');
const desc1 = document.getElementById('desc1');
const desc2 = document.getElementById('desc2');
const desc3 = document.getElementById('desc3');
const humidity1 = document.getElementById('humidity1');
const humidity2 = document.getElementById('humidity2');
const humidity3 = document.getElementById('humidity3');
/*Getting Weather Forecast for Saratoga Springs */
//const url = 'https://api.openweathermap.org/data/2.5/forecast?lat=34&lon=-117&units=imperial&cnt=3&appid=26c0716e28b534ccf5a476a4f00d54b4';
const url = 'https://api.openweathermap.org/data/2.5/forecast?lat=34&lon=-117&units=imperial&appid=26c0716e28b534ccf5a476a4f00d54b4';

async function apiFetch() {
    try {
      const response = await fetch(url);
      if (response.ok) {
        const data = await response.json();
        //console.log(data); // this is for testing the call
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
    //console.log(weatherData.list[0].dt_txt);
    //console.log(weatherData.list[1].dt_txt);
    //console.log(formattDate(weatherData.list[0].dt_txt));
    //console.log(formattDate(weatherData.list[1].dt_txt));

    //console.log("Line 34:",weatherData.list);

    let forecast = weatherData.list.filter(item => item.dt_txt.search('00:00:00')!= -1);
    //console.log("Line 37:",forecast);

    /*Day One*/
    day_one.innerText = formattDate(forecast[0].dt_txt);
    /*console.log("Line 41",forecast[0].dt_txt);*/
    const iconsrc1= `https://openweathermap.org/img/w/${forecast[0].weather[0].icon}.png`;
    //console.log("Line 46", iconsrc1);
    weather_icon_1.setAttribute('src',iconsrc1);
    temp1.innerText = `${forecast[0].main.temp.toFixed(0)} F`;
    desc1.innerText = `${forecast[0].weather[0].description}`;
    humidity1.innerText = `Humidity ${forecast[0].main.humidity} %`;

    /*Day Two*/
    day_two.innerText = formattDate(forecast[1].dt_txt);
    /*console.log("Line 41",forecast[0].dt_txt);*/
    const iconsrc2= `https://openweathermap.org/img/w/${forecast[1].weather[0].icon}.png`;
    /*console.log("Line 53", iconsrc2);*/
    weather_icon_2.setAttribute('src',iconsrc2);
    temp2.innerText = `${forecast[1].main.temp.toFixed(0)} F`;
    desc2.innerText = `${forecast[1].weather[0].description}`;
    humidity2.innerText = `Humidity ${forecast[1].main.humidity} %`;

    /*Day Three*/
    day_three.innerText = formattDate(forecast[2].dt_txt);
    /*console.log("Line 58",forecast[2].dt_txt);*/
    const iconsrc3= `https://openweathermap.org/img/w/${forecast[2].weather[0].icon}.png`;
    /*console.log("Line 60", iconsrc3);*/
    weather_icon_3.setAttribute('src',iconsrc3);
    temp3.innerText = `${forecast[2].main.temp.toFixed(0)} F`;
    desc3.innerText = `${forecast[2].weather[0].description}`;
    humidity3.innerText = `Humidity ${forecast[2].main.humidity} %`;
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