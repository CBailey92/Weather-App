let weather = {
    apiKey: "API KEY GOES HERE",
    fetchWeather: function (city) {
      fetch(
        "https://api.openweathermap.org/data/2.5/weather?q=" +
          city +
          "&units=metric&appid=" +
          this.apiKey
      )
      .then((response) => {
          if (!response.ok) {  
              alert("No Weather found.");
              throw new Error("No Weather found.");
            }
            return response.json();
        })
        .then((data) => this.displayWeather(data));
    },
    displayWeather: function (data) {
        const { name } = data;
        const { icon, description } = data.weather[0];
        const { temp, humidity } = data.main;
        const { speed } = data.wind;
        document.querySelector(".city").innerText = "Weather in" + name;
        document.querySelector(".icon").src =
        "https://openweathermap.org/img/wn/" + icon + ".png";
        document.querySelector(".desciption").innerText = description;
        document.querySelector(".temp").innerText = temp + "°C";
        document.querySelector(".humidity") = innerText =
          "Humidity: " + humidity + "%";
          document.querySelector(".wind").innerText =
            "Wind speed: " + humidity + "%";
           document.querySelector(".weather").classList.remove("loading");
           document.querySelector.body.style.backgroundImage =
             "url('https://source.unsplash.com/1600x900/?" + name + "')"; 
            },
            search: function () {
                this.fetchWeather(document.querySelector(".search-bar").value);
            },    
        };

        document.querySelector(".search button").addEventListener("click", function () {
            weather.search();
        });
        
        document
        .querySelector(".search-bar")
        .addEventListener("keyup", function (event) {
          if (event.key == "Enter") {
            weather.search();
          }
        });
      
      weather.fetchWeather("Georgia");       