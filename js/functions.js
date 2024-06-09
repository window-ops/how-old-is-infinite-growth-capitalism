var date = new Date();
var currentYear = date.getFullYear();
var theFirstIndustrialRevolution = 1760;
var crashRateinYears = 10;
var baseOvershootYear = 1971;
var numberOfYearsToDoubleGlobalConsumption = 62;
var predictedYearOfCollapse = 2100;

function knowHowOutdatedIsIGC() {
  var outdatedYears = currentYear - theFirstIndustrialRevolution;
  return outdatedYears;
}
function knowHowManyCrashesHaveOccured() {
  var crashes = Math.floor((currentYear - theFirstIndustrialRevolution) / crashRateinYears) - 5;
  return crashes;
}
function calculateEarthOvershoot() {
  var earthsUsed = 1 + ((currentYear - baseOvershootYear) / numberOfYearsToDoubleGlobalConsumption);
  return earthsUsed.toFixed(1);
}
function knowWhenSocietyWillCollapse() {
  var yearsCollapse = predictedYearOfCollapse - currentYear;
  return yearsCollapse;
}
function display() {
  document.getElementById("howOldInYears").textContent = knowHowOutdatedIsIGC();
  document.getElementById("howManyCrashes").textContent = knowHowManyCrashesHaveOccured();
  document.getElementById("earthOvershoot").textContent = calculateEarthOvershoot();
  document.getElementById("societyCollapse").textContent = knowWhenSocietyWillCollapse();
}
document.addEventListener("DOMContentLoaded", function() {
  display()
})