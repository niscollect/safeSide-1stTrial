// let watchId=null;
// document.addEventListener("DOMContentLoaded", () => {

//     const button = document.getElementById("getLocation");

//     let lat = 12, long = 12;

//     function updateLocation(position) {
//         console.log(position);
//         lat = position.coords.latitude;  // Fixed typo in latitude
//         long = position.coords.longitude;

//         // Store latitude and longitude in sessionStorage
//         sessionStorage.setItem('userLat', lat);
//         sessionStorage.setItem('userLong', long);

//         localStorage.setItem('lastUpdate', Date.now());
//     }

//     function failedToGet(error) {
//         console.log("There was some issue:", error);
//         alert("Failed to get location. Please ensure location services are enabled.");
//     }

//     if (button) {
//         button.addEventListener("click", () => {
//            // navigator.geolocation.getCurrentPosition(gotLocation, failedToGet);

//         if (watchId) {
//             navigator.geolocation.clearWatch(watchId);
//         }

//         // Start continuous location watching
//         watchId = navigator.geolocation.watchPosition(
//             updateLocation,
//             failedToGet,
//             {
//                 enableHighAccuracy: true,
//                 timeout: 5000,
//                 maximumAge: 0
//             }
//         );

//         localStorage.setItem('locationWatchId', watchId);

//         });
//     }
// });

// // Function to get latitude from sessionStorage
// export function getLat() {
//     return parseFloat(sessionStorage.getItem('userLat')) || lat;
// }

// // Function to get longitude from sessionStorage
// export function getLong() {
//     return parseFloat(sessionStorage.getItem('userLong')) || long;
// }



// export function getLastUpdate() {
//     return parseInt(localStorage.getItem('lastUpdate')) || Date.now();
// }

// Initialize default coordinates
let lat = 12;
let long = 12;

// Move this function outside so it can be accessed by all functions
async function getLatLongFromServer() { 
    try {
        const response = await fetch('/latLongForMap');
        const data = await response.json();
         
        // Update the coordinates
        lat = data.lat;
        long = data.long;
        
        // Store in localStorage
        localStorage.setItem('userLat', lat);
        localStorage.setItem('userLong', long);
        
        console.log("Coordinates from server:", lat, long);
        return data;
    } catch (error) {
        console.error('Error getting variables:', error);
        return { lat: 12, long: 12 }; // Return defaults on error
    }
}

// Initialize coordinates when page loads
document.addEventListener("DOMContentLoaded", async () => {
    await getLatLongFromServer();
    console.log("Final coordinates:", lat, "  <->  ", long);

    const button = document.getElementById("getLocation");
    if (button) {
        button.addEventListener("click", async () => {
            await getLatLongFromServer();
            console.log("Updated coordinates:", lat, "  <->  ", long);
        });
    }
});

// Export functions that use the shared getLatLongFromServer
export async function getLat() {
    const data = await getLatLongFromServer();
    return data.lat;
}

export async function getLong() {
    const data = await getLatLongFromServer();
    return data.long;
}

window.addEventListener('beforeunload', function() {
    localStorage.clear();
});