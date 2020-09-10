// variable to store and loop through day planner
var toDay = [
  {
    hour: "09",
    time: "09",
    ampm: "am",
    reminder: "",
  },
  {
    hour: "10",
    time: "10",
    ampm: "am",
    reminder: "",
  },
  {
    hour: "11",
    time: "11",
    ampm: "am",
    reminder: "",
  },
  {
    hour: "12",
    time: "12",
    ampm: "pm",
    reminder: "",
  },
  {
    hour: "01",
    time: "13",
    ampm: "pm",
    reminder: "",
  },
  {
    hour: "02",
    time: "14",
    ampm: "pm",
    reminder: "",
  },
  {
    hour: "03",
    time: "15",
    ampm: "pm",
    reminder: "",
  },
  {
    hour: "04",
    time: "16",
    ampm: "pm",
    reminder: "",
  },
  {
    hour: "05",
    time: "17",
    ampm: "pm",
    reminder: "",
  },
];

// gets data for today's date from momment js
function getTodaysDate() {
  var currentDate = moment().format("dddd, MMMM Do");
  $("#currentDay").text(currentDate);
}

// saves data to localStorage
function saveReminders() {
  localStorage.setItem("toDay", JSON.stringify(toDay));
}

// loads Todays date
getTodaysDate();

// creates the visuals for the scheduler body
toDay.forEach(function (thisHour) {
  // creates timeblocks row text
  var hourRow = $("<form>").attr({
    class: "row",
  });
  $(".container").append(hourRow);

  // creates time block -far left
  var hourBlock = $("<div>").text(`${thisHour.hour}${thisHour.ampm}`).attr({
    class: "col-md-1 hour",
  });

  // creates user data text area
  var hourPlan = $("<div>").attr({
    class: "col-md-10 description p-0",
  });
  var planData = $("<textarea>");
  hourPlan.append(planData);
  planData.attr(thisHour);

  //compares time blocks to present time and changes their color based on the results
  if (thisHour.time < moment().format("HH")) {
    planData.attr({
      class: "past",
    });
  } else if (thisHour.time === moment().format("HH")) {
    planData.attr({
      class: "present",
    });
  } else if (thisHour.time > moment().format("HH")) {
    planData.attr({
      class: "future",
    });
  }
  // creates save button
  var saveButton = $("<i class='far fa-calendar-check fa-large'></i>");
  var savePlan = $("<button>").attr({
    class: "col-md-1 saveBtn",
  });
  savePlan.append(saveButton);
  hourRow.append(hourBlock, hourPlan, savePlan);
});

init();
