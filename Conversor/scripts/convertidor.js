// LONGITUD
const optionslongitud1 = document.getElementById("options-longitud-1");
const optionslongitud2 = document.getElementById("options-longitud-2");
const formlongitud = document.getElementById('form-longitud');
const optionnumberlongitud = document.getElementById("option-number-longitud");
const displayResultlongitud = document.getElementById('displayResult-longitud');
//MASA
const optionsmasa1 = document.getElementById("options-masa-1");
const optionsmasa2 = document.getElementById("options-masa-2");
const formmasa = document.getElementById('form-masa');
const optionnumbermasa = document.getElementById("option-number-masa");
const displayResultmasa = document.getElementById('displayResult-masa');
//TIEMPO
const optionstiempo1 = document.getElementById("options-tiempo-1");
const optionstiempo2 = document.getElementById("options-tiempo-2");
const formtiempo = document.getElementById('form-tiempo');
const optionnumbertiempo = document.getElementById("option-number-tiempo");
const displayResulttiempo = document.getElementById('displayResult-tiempo');
//TEMPERATURA
const optionstemperatura1 = document.getElementById("options-temperatura-1");
const optionstemperatura2 = document.getElementById("options-temperatura-2");
const formtemperatura = document.getElementById('form-temperatura');
const optionnumbertemperatura = document.getElementById("option-number-temperatura");
const displayResulttemperatura = document.getElementById('displayResult-temperatura');

formlongitud.addEventListener('submit', e => {
    e.preventDefault()
    const option1 = optionslongitud1.value
    const option2 = optionslongitud2.value
    const number = optionnumberlongitud.value
    const result = convertirResultado(option1, number, option2)
    displayResultlongitud.innerText = result
    displayResultlongitud.style.display = "block"
})
formmasa.addEventListener('submit', e => {
    e.preventDefault()
    const option1 = optionsmasa1.value
    const option2 = optionsmasa2.value
    const number = optionnumbermasa.value
    const result = convertirResultado(option1, number, option2)
    displayResultmasa.innerText = result
    displayResultmasa.style.display = "block"
})
formtiempo.addEventListener('submit', e => {
    e.preventDefault()
    const option1 = optionstiempo1.value
    const option2 = optionstiempo2.value
    const number = optionnumbertiempo.value
    const result = convertirResultado(option1, number, option2)
    displayResulttiempo.innerText = result
    displayResulttiempo.style.display = "block"
})
formtemperatura.addEventListener('submit', e => {
    e.preventDefault()
    const option1 = optionstemperatura1.value
    const option2 = optionstemperatura2.value
    const number = optionnumbertemperatura.value
    const result = convertirResultado(option1, number, option2)
    displayResulttemperatura.innerText = result
    displayResulttemperatura.style.display = "block"
})


function convertirResultado(option1, number, option2) {
    /* Número inválido */
    if(!number) {
        return "Debes proporcionar un número válido."
    }
    /* Unidad de longitud */
    if(option1 == "km") {
        if(option2 == "km") {
            return `${number}km`
        }
        if(option2 == "hm"){
            return `${number*10}hm`
        }
        if(option2 == "dam"){
            return `${number*100}dam`
        }
        if(option2 == "m"){
            return `${number*1000}m`
        }
        if(option2 == "dm"){
            return `${number*10000}dm`
        }
        if(option2 == "cm"){
            return `${number*100000}cm`
        }
        if(option2 == "mm"){
            return `${number*1000000}mm`
        }
    }
    if(option1 == "hm") {
        if(option2 == "km") {
            return `${number/10}km`
        }
        if(option2 == "hm") {
            return `${number}hm`
        }
        if(option2 == "dam") {
            return `${number*10}dam`
        }
        if(option2 == "m") {
            return `${number*100}m`
        }
        if(option2 == "dm") {
            return `${number*1000}dm`
        }
        if(option2 == "cm") {
            return `${number*10000}cm`
        }
        if(option2 == "mm") {
            return `${number*100000}mm`
        }
    }
    if(option1 == "dam") {
        if(option2 == "km") {
            return `${number/100}km`
        }
        if(option2 == "hm") {
            return `${number/10}hm`
        }
        if(option2 == "dam") {
            return `${number}dam`
        }
        if(option2 == "m") {
            return `${number*10}m`
        }
        if(option2 == "dm") {
            return `${number*100}dm`
        }
        if(option2 == "cm") {
            return `${number*1000}cm`
        }
        if(option2 == "mm") {
            return `${number*10000}mm`
        }
    }
    if(option1 == "m") {
        if(option2 == "km") {
            return `${number/1000}km`
        }
        if(option2 == "hm") {
            return `${number/100}hm`
        }
        if(option2 == "dam") {
            return `${number/10}dam`
        }
        if(option2 == "m") {
            return `${number}m`
        }
        if(option2 == "dm") {
            return `${number*10}dm`
        }
        if(option2 == "cm") {
            return `${number*100}cm`
        }
        if(option2 == "mm") {
            return `${number*1000}mm`
        }
    }
    if(option1 == "dm") {
        if(option2 == "km") {
            return `${number/10000}km`
        }
        if(option2 == "hm") {
            return `${number/1000}hm`
        }
        if(option2 == "dam") {
            return `${number/100}dam`
        }
        if(option2 == "m") {
            return `${number/10}m`
        }
        if(option2 == "dm") {
            return `${number}dm`
        }
        if(option2 == "cm") {
            return `${number/10}cm`
        }
        if(option2 == "mm") {
            return `${number/100}mm`
        }
    }
    if(option1 == "cm") {
        if(option2 == "km") {
            return `${number/10}km`
        }
        if(option2 == "hm") {
            return `${number*10000}hm`
        }
        if(option2 == "dam") {
            return `${number*1000}dam`
        }
        if(option2 == "m") {
            return `${number*100}m`
        }
        if(option2 == "dm") {
            return `${number*10}dm`
        }
        if(option2 == "cm") {
            return `${number}cm`
        }
        if(option2 == "mm") {
            return `${number/10}mm`
        }
    }
    if(option1 == "mm") {
        if(option2 == "km") {
            return `${number/1000000}km`
        }
        if(option2 == "hm") {
            return `${number/100000}hm`
        }
        if(option2 == "dam") {
            return `${number/10000}dam`
        }
        if(option2 == "m") {
            return `${number/1000}m`
        }
        if(option2 == "dm") {
            return `${number/100}dm`
        }
        if(option2 == "cm") {
            return `${number/10}cm`
        }
        if(option2 == "mm") {
            return `${number}mm`
        }
    }
    /* Unidad de masa */
    if(option1 == "t") {
        if(option2 == "t") {
            return `${number}t`
        }
        if(option2 == "kg") {
            return `${number*1000}kg`
        }
        if(option2 == "g") {
            return `${number*100000}g`
        }
        if(option2 == "mg") {
            return `${number*1000000000}mg`
        }
        if(option2 == "µg") {
            return `${number*1000000000000}µg`
        }
    }
    if(option1 == "kg") {
        if(option2 == "t") {
            return `${number/1000}t`
        }
        if(option2 == "kg") {
            return `${number}kg`
        }
        if(option2 == "g") {
            return `${number*1000}g`
        }
        if(option2 == "mg") {
            return `${number*1000000}mg`
        }
        if(option2 == "µg") {
            return `${number*1000000000}µg`
        }
    }
    if(option1 == "g") {
        if(option2 == "t") {
            return `${number/1000000}t`
        }
        if(option2 == "kg") {
            return `${number/1000}kg`
        }
        if(option2 == "g") {
            return `${number}g`
        }
        if(option2 == "mg") {
            return `${number*1000}mg`
        }
        if(option2 == "µg") {
            return `${number*1000000}µg`
        }
    }
    if(option1 == "mg") {
        if(option2 == "t") {
            return `${number/1000000000}t`
        }
        if(option2 == "kg") {
            return `${number/1000000}kg`
        }
        if(option2 == "g") {
        return `${number/1000}g`
        }
        if(option2 == "mg") {
            return `${number}mg`
        }
        if(option2 == "µg") {
            return `${number*1000}µg`
        }
    }
    if(option1 == "µg") {
        if(option2 == "t") {
            return `${number/1000000000000}t`
        }
        if(option2 == "kg") {
            return `${number*1000000000}kg`
        }
        if(option2 == "g") {
            return `${number*1000000}g`
        }
        if(option2 == "mg") {
            return `${number/1000}mg`
        }
        if(option2 == "µg") {
            return `${number}µg`
        }
    }
    /* Unidad de tiempo */
    if(option1 == "milenio") {
        if(option2 == "milenio") {
            return `${number} milenio(s)`
        }
        if(option2 == "siglo") {
            return `${number*10} siglo(s)`
        }
        if(option2 == "decada") {
            return `${number*100} década(s)`
        }
        if(option2 == "año") {
            return `${number*1000} año(s)`
        }
        if(option2 == "mes") {
            return `${number*12000} mes(es)`
        }
        if(option2 == "semana") {
            return `${number*52143} semana(s)`
        }
        if(option2 == "d") {
            return `${number*365000}d`
        }
        if(option2 == "h") {
            return `${number*8760000}h`
        }
        if(option2 == "min") {
            return `${number*525600000}min`
        }
        if(option2 == "s") {
            return `${number*31540000000}s`
        }
    }
    if(option1 == "siglo") {
        if(option2 == "milenio") {
            return `${number/10} milenio(s)`
        }
        if(option2 == "siglo") {
            return `${number} siglo(s)`
        }
        if(option2 == "decada") {
            return `${number*10} década(s)`
        }
        if(option2 == "año") {
            return `${number*100} año(s)`
        }
        if(option2 == "mes") {
            return `${number*1200} mes(es)`
        }
        if(option2 == "semana") {
            return `${number*5214} semana(s)`
        }
        if(option2 == "d") {
            return `${number*36500}d`
        }
        if(option2 == "h") {
            return `${number*876000}h`
        }
        if(option2 == "min") {
            return `${number*52560000}min`
        }
        if(option2 == "s") {
            return `${number*3154000000}s`
        }
    }
    if(option1 == "decada") {
        if(option2 == "milenio") {
            return `${number/100} milenio(s)`
        }
        if(option2 == "siglo") {
            return `${number/10} siglo(s)`
        }
        if(option2 == "decada") {
            return `${number} década(s)`
        }
        if(option2 == "año") {
            return `${number*10} año(s)`
        }
        if(option2 == "mes") {
            return `${number*120} mes(es)`
        }
        if(option2 == "semana") {
            return `${number*521} semana(s)`
        }
        if(option2 == "d") {
            return `${number*3650}d`
        }
        if(option2 == "h") {
            return `${number*87600}h`
        }
        if(option2 == "min") {
            return `${number*5256000}min`
        }
        if(option2 == "s") {
            return `${number*315400000}s`
        }
    }
    if(option1 == "año") {
        if(option2 == "milenio") {
            return `${number/1000} milenio(s)`
        }
        if(option2 == "siglo") {
            return `${number/100} siglo(s)`
        }
        if(option2 == "decada") {
            return `${number/10} década(s)`
        }
        if(option2 == "año") {
            return `${number} año(s)`
        }
        if(option2 == "mes") {
            return `${number*12} mes(es)`
        }
        if(option2 == "semana") {
            return `${number*52.143} semana(s)`
        }
        if(option2 == "d") {
            return `${number*365}d`
        }
        if(option2 == "h") {
            return `${number*8760}h`
        }
        if(option2 == "min") {
            return `${number*525600}min`
        }
        if(option2 == "s") {
            return `${number*31540000}s`
        }
    }
    if(option1 == "mes") {
        if(option2 == "milenio") {
            return `${number/12000} milenio(s)`
        }
        if(option2 == "siglo") {
            return `${number/1200} siglo(s)`
        }
        if(option2 == "decada") {
            return `${number/120} década(s)`
        }
        if(option2 == "año") {
            return `${number/12} año(s)`
        }
        if(option2 == "mes") {
            return `${number} mes(es)`
        }
        if(option2 == "semana") {
            return `${number*4.345} semana(s)`
        }
        if(option2 == "d") {
            return `${number*30.417}d`
        }
        if(option2 == "h") {
            return `${number*730}h`
        }
        if(option2 == "min") {
            return `${number*43800}min`
        }
        if(option2 == "s") {
            return `${number*2628000}s`
        }
    }
    if(option1 == "semana") {
        if(option2 == "milenio") {
            return `${number/52143} milenio(s)`
        }
        if(option2 == "siglo") {
            return `${number/5214} siglo(s)`
        }
        if(option2 == "decada") {
            return `${number/521} década(s)`
        }
        if(option2 == "año") {
            return `${number/52.143} año(s)`
        }
        if(option2 == "mes") {
            return `${number/4.345} mes(es)`
        }
        if(option2 == "semana") {
            return `${number} semana(s)`
        }
        if(option2 == "d") {
            return `${number*7}d`
        }
        if(option2 == "h") {
            return `${number*168}h`
        }
        if(option2 == "min") {
            return `${number*10080}min`
        }
        if(option2 == "s") {
            return `${number*604800}s`
        }
    }
    if(option1 == "d") {
        if(option2 == "milenio") {
            return `${number/365000} milenio(s)`
        }
        if(option2 == "siglo") {
            return `${number/36500} siglo(s)`
        }
        if(option2 == "decada") {
            return `${number/3650} década(s)`
        }
        if(option2 == "año") {
            return `${number/365} año(s)`
        }
        if(option2 == "mes") {
            return `${number/30.417} mes(es)`
        }
        if(option2 == "semana") {
            return `${number/7} semana(s)`
        }
        if(option2 == "d") {
            return `${number}d`
        }
        if(option2 == "h") {
            return `${number*24}h`
        }
        if(option2 == "min") {
            return `${number*1440}min`
        }
        if(option2 == "s") {
            return `${number*86400}s`
        }
    }
    if(option1 == "h") {
        if(option2 == "milenio") {
            return `${number/8.76e+6} milenio(s)`
        }
        if(option2 == "siglo") {
            return `${number/876000} siglo(s)`
        }
        if(option2 == "decada") {
            return `${number/87600} década(s)`
        }
        if(option2 == "año") {
            return `${number/8760} año(s)`
        }
        if(option2 == "mes") {
            return `${number/730} mes(es)`
        }
        if(option2 == "semana") {
            return `${number/168} semana(s)`
        }
        if(option2 == "d") {
            return `${number/24}d`
        }
        if(option2 == "h") {
            return `${number}h`
        }
        if(option2 == "min") {
            return `${number*60}min`
        }
        if(option2 == "s") {
            return `${number*3600}s`
        }
    }
    if(option1 == "min") {
        if(option2 == "milenio") {
            return `${number/5.256e+8} milenio(s)`
        }
        if(option2 == "siglo") {
            return `${number/5.256e+7} siglo(s)`
        }
        if(option2 == "decada") {
            return `${number/5.256e+6} década(s)`
        }
        if(option2 == "año") {
            return `${number/525600} año(s)`
        }
        if(option2 == "mes") {
            return `${number/43800} mes(es)`
        }
        if(option2 == "semana") {
            return `${number/10080} semana(s)`
        }
        if(option2 == "d") {
            return `${number/1440}d`
        }
        if(option2 == "h") {
            return `${number/60}h`
        }
        if(option2 == "min") {
            return `${number}min`
        }
        if(option2 == "s") {
            return `${number*60}s`
        }
    }
    if(option1 == "s") {
        if(option2 == "milenio") {
            return `${number/3.154e+10} milenio(s)`
        }
        if(option2 == "siglo") {
            return `${number/3.154e+9} siglo(s)`
        }
        if(option2 == "decada") {
            return `${number/3.154e+8} década(s)`
        }
        if(option2 == "año") {
            return `${number/3.154e+7} año(s)`
        }
        if(option2 == "mes") {
            return `${number/2.628e+6} mes(es)`
        }
        if(option2 == "semana") {
            return `${number/604800} semana(s)`
        }
        if(option2 == "d") {
            return `${number/86400}d`
        }
        if(option2 == "h") {
            return `${number/3600}h`
        }
        if(option2 == "min") {
            return `${number/60}min`
        }
        if(option2 == "s") {
            return `${number}s`
        }
    }   
    /* Unidades de temperatura */
    if(option1 == "K") {
        if(option2 == "K") {
            return `${number} K`
        }
        if(option2 == "°C") {
            return `${number-273.15} °C`
        }
        if(option2 == "°F") {
            return `${(number-273.15)*(9/5)+(32)} °F`
        }
    }
    if(option1 == "°C") {
        if(option2 == "K") {
            const number = int(number)
            return `${number+273.15} K`
        }
        if(option2 == "°C") {
            return `${number} °C`
        }
        if(option2 == "°F") {
            return `${(number)*(9/5)+32} °F`
        }
    }
    if(option1 == "°F") {
        if(option2 == "K") {
            // let answer = (number-32)*(5/9)+(273.15)
            // return `${answer.toFixed(3)} K`
            return `${(number-32)*(5/9)+(273.15)} K`
        }
        if(option2 == "°C") {
            return `${(number-32)*(5/9)} °C`
        }
        if(option2 == "°F") {
            return `${number} °F`
        }
    }
}