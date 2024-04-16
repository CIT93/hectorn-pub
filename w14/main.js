// function getData(){
//     return new Promise(resolve =>{
//         setTimeout(() => {
//             resolve(46)
//         }, 1)
//     })
// }

// async function start(){
// const result = await getData()
// console.log(result)
// }

// async function start2(){
//     getData()
//     .then(result =>{
//     console.log(result)
//     })
//

/* async function start(){
const data = await fetch('https://api.weather.gov/gridpoints/OKX/35,35/forecast')
const result = await data.json()
console.log(result.properties.periods[1].shortForecast)
}

async function start2() {
    fetch('https://api.weather.gov/gridpoints/OKX/35,35/forecast')
        .then(data => data.json())
        .then(result => {
    console.log(result.properties.periods[1].shortForecast)
    })
}

start2() */

//function getData() {
    //return new Promise(function(resolve, reject) {
        //setTimeout(() => {
            // resolve('here is your data')
            //reject('something went wrong')
        //}, 1)
    //})
//}

//function onSuccess() {
//}

//function onFailure() {
//}

//async function start() {
    //try {
    //const result = await getData()
    //console.log(`Success: ${result}`)
    //onSuccess()
    //SUCCESS
//} catch (error) {
    //onFailure()
    //console.log(`ERROR: ${error}`)
    //FAILURE
    //}
//}

/* async function start2() {
    const result = await getData()
    .catch(error => {
        console.log(`ERROR: ${error}`)
    })
    console.log(result)
} */

//start()

async function start() {
    try {
        const data = await fetch('https://api.weather.gov/gridpoints/HNX/52,100/forecast')
        const result = await data.json();
        onSuccess(result.properties.periods[1].temperature)
    } catch(e){
        onError(e);
    }
    
}

function onSuccess(result) {
    console.log(`Success: ${result}`)
}

function onError(result) {
    console.log(`Error: ${err}`)
}

start()