
const input = document.querySelector(".input")
const boton = document.querySelector("#boton")
const temp = document.querySelector("#temp")
const nameCity = document.querySelector(".card-info h3")
const cardFooter = document.querySelector(".card-footer")
const spinner = document.querySelector(".spinner")

function getWheater(event) {
    let ciudad = input.value || "venezuela"
    if (event.type === "click") {
        if (input.value === "") return alert("Introduzca una ciudad o pais")
    }
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${ciudad}&appid=31489e2a54491c3e4691bdc1cc943183&units=metric`).then((respuesta) => {
        return respuesta.json()
    }).then((data) => {
        const { name, main, wind } = data
        nameCity.innerHTML = `${name}`
        temp.innerHTML = `${main.temp}°C`
        cardFooter.innerHTML = `
            <div class="info-icon">
                <span class="material-icons">arrow_drop_down</span>
                <span>Min</span>
                <span>${main.temp_min}°C</span>
            </div>
            <div class="info-icon">
                <span class="material-icons">arrow_drop_up</span>
                <span>max</span>
                <span>${main.temp_max}°C</span>
            </div>
            <div class="info-icon">
                <span class="material-icons">cloud</span>
                <span>Humedad</span>
                <span>${main.humidity}%</span>
                </div>
            <div class="info-icon">
                <span class="material-icons">air</span>
                <span>Viento</span>
                <span>${wind.speed}km/h</span>
            </div>
        `
    })
}

window.addEventListener("DOMContentLoaded", getWheater)
boton.addEventListener("click", getWheater)