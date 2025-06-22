// Return the first two drivers from the array
const returnFirstTwoDrivers = function(drivers) {
  return drivers.slice(0, 2);
};

// Return the last two drivers from the array
const returnLastTwoDrivers = function(drivers) {
  return drivers.slice(-2);
};

// Store the above two functions in an array
const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

// Higher-order function that returns a multiplier function
function createFareMultiplier(multiplier) {
  return function(fare) {
    return fare * multiplier;
  };
}

// Double fare function using createFareMultiplier
const fareDoubler = createFareMultiplier(2);

// Triple fare function using createFareMultiplier
const fareTripler = createFareMultiplier(3);

// Function that applies either returnFirstTwoDrivers or returnLastTwoDrivers
function selectDifferentDrivers(drivers, driverSelector) {
  return driverSelector(drivers);
}

