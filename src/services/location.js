const button = document.getElementById("getLocation");

let lat = 11, long = 12;

function gotLocation(position){
    console.log(position);
    lat = position.coords.latitude;
    long = position.coords.longitude;

    console.log(lat, "->" ,long)

    // Store in localStorage so it persists between pages
    localStorage.setItem('userLat', lat);
    localStorage.setItem('userLong', long);
}

function failedToGet(){
    console.log("There was some issue");
}

button.addEventListener("click", async ()=>{
    const result = await navigator.geolocation.getCurrentPosition(gotLocation, failedToGet);
})


// Instead of exporting fixed values, export functions to get current values
export function getLat() {
    return parseFloat(localStorage.getItem('userLat')) || lat;
}

export function getLong() {
    return parseFloat(localStorage.getItem('userLong')) || long;
}