function attachEvents() {
    const conditionEnum = {
        "Sunny": "&#x2600", // ☀
        "Partly sunny": "&#x26C5", // ⛅
        "Overcast": "&#x2601", // ☁
        "Rain": "&#x2614", // ☂
        "Degrees": "&#176"   // °
    };
    document.getElementById("submit").addEventListener("click", getWeather);


    async function getWeather() {
        try {
            let city = document.getElementById("location").value;
            const response = await fetch(`http://localhost:3030/jsonstore/forecaster/locations`);
            const data = await response.json();
            const info = data.find(c => c.name === city);

            createForecaster(info.code);
        } catch (e) {
            const forecast = document.getElementById("forecast");
            forecast.style.display = "block";
            forecast.textContent = "Error";
        }
    }

    async function createForecaster(code) {
        const responseToday = await fetch(`http://localhost:3030/jsonstore/forecaster/today/${code}`);
        const dataToday = await responseToday.json();

        const responseUpcoming = await fetch(`http://localhost:3030/jsonstore/forecaster/upcoming/${code}`);
        const dateUpcomming = await responseUpcoming.json();

        clearContainer();
        createToday(dataToday);
        createUpcomming(dateUpcomming);

    }

    function createUpcomming(upcoming) {
        const div = document.createElement("div");
        div.classList.add("forecast-info");
        const daysForecast = Object.values(upcoming.forecast);
        for (let dayForecast of daysForecast) {
            const spanUpcoming = document.createElement("span");
            spanUpcoming.classList.add("upcoming");
            const symbol = createElement("span", conditionEnum[dayForecast.condition], "symbol");
            const temp = createElement("span",
                `${dayForecast.low}${conditionEnum["Degrees"]}/${dayForecast.high}${conditionEnum["Degrees"]}`,
                "forecast-data");
            const conditionTxt = createElement("span", dayForecast.condition, "forecast-data");
            spanUpcoming.appendChild(symbol);
            spanUpcoming.appendChild(temp);
            spanUpcoming.appendChild(conditionTxt);
            div.appendChild(spanUpcoming);
        }
        document.getElementById("upcoming").appendChild(div);
    }

    function createToday(today) {
        const div = document.createElement("div");
        div.classList.add("forecasts");
        const symbol = document.createElement("span");
        symbol.setAttribute("class", "condition symbol");
        symbol.innerHTML = conditionEnum[today.forecast.condition];
        div.appendChild(symbol);
        const spanCondition = document.createElement("span");
        spanCondition.classList.add("condition");
        const name = createElement("span", today.name, "forecast-data");
        const temp = createElement("span",
            `${today.forecast.low}${conditionEnum["Degrees"]}/${today.forecast.high}${conditionEnum["Degrees"]}`,
            "forecast-data");
        const conditionTxt = createElement("span", today.forecast.condition, "forecast-data");
        spanCondition.appendChild(name);
        spanCondition.appendChild(temp);
        spanCondition.appendChild(conditionTxt);
        div.appendChild(spanCondition);
        document.getElementById("forecast").style.display = "inline";
        document.getElementById("current").appendChild(div);

    }

    function clearContainer() {
        const todayDiv = document.getElementsByClassName("forecasts")[0];
        const upcomingDiv = document.getElementsByClassName("forecast-info")[0];
        if (todayDiv && upcomingDiv) {
            todayDiv.remove();
            upcomingDiv.remove();
        }
    }

    function createElement(tag, value, clazz) {
        const ele = document.createElement(tag);
        ele.classList.add(clazz);
        ele.innerHTML = value;
        return ele;
    }
}

attachEvents();