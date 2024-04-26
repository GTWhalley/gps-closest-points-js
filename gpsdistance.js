// ----- Find two closest GPS coordinates -----

let gpsCoords = [];
let latLong = [];
let distanceArray = [];
let closestPair = [];

// Randomly generate GPS coordinates just for this experiment
function createCoords() {
    latLong[0] =
        Math.floor(Math.random() * 181) * (Math.round(Math.random()) ? 1 : -1);
    latLong[1] =
        Math.floor(Math.random() * 91) * (Math.round(Math.random()) ? 1 : -1);
    return latLong;
}

// Put them all into an array
function populateCoords() {
    for (let i = 0; i < 10; i++) {
        createCoords();
        gpsCoords[i] = [...latLong];
    }
    return gpsCoords;
}

// Haversine Function to calculate distance between two different lat and lon coordinates
function haversineDistance(lat1, lon1, lat2, lon2) {
    const R = 6371;
    const radLat1 = (lat1 * Math.PI) / 180;
    const radLat2 = (lat2 * Math.PI) / 180;
    const radLon1 = (lon1 * Math.PI) / 180;
    const radLon2 = (lon2 * Math.PI) / 180;
    const deltaLat = radLat2 - radLat1;
    const deltaLon = radLon2 - radLon1;

    const a =
        Math.sin(deltaLat / 2) ** 2 +
        Math.cos(radLat1) * Math.cos(radLat2) * Math.sin(deltaLon / 2) ** 2;
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

    const distance = R * c;

    return distance;
}

// Iterate through the points, and determine the closest pair
function findClosestPair(gpsCoords) {
    let minDistance = Infinity;

    for (let i = 0; i < gpsCoords.length; i++) {
        for (let j = i + 1; j < gpsCoords.length; j++) {
            let currentDistance = haversineDistance(
                gpsCoords[i][0],
                gpsCoords[i][1],
                gpsCoords[j][0],
                gpsCoords[j][1]
            );

            if (currentDistance < minDistance) {
                minDistance = currentDistance;
                closestPair = [i, j];
            }
        }
    }

    return { closestPair, minDistance };
}

populateCoords();
findClosestPair(gpsCoords);

console.log(gpsCoords);
console.log("---");
console.log(closestPair);
