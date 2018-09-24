var config = {
    // Language for the mirror (currently not implemented)
    language : "ko",
    greeting : ["SmartMirror"], // An array of greetings to randomly choose from
    // forcast.io
    forcast : {
        key : "5ab010a0574edb48eb5aee85efe7bb58", // Your forcast.io api key
        units : "auto" // See forcast.io documentation if you are getting the wrong units
    },
    // Calendar (An array of iCals)
    calendar: {
      icals : ["https://calendar.google.com/calendar/ical/1phmrsgv9jpcjfjukc1q4rt74o%40group.calendar.google.com/private-762a7e72e838ebdba33fbc2e94b0abb7/basic.ics"],
      maxResults: 9, // Number of calender events to display (Defaults is 9)
      maxDays: 365 // Number of days to display (Default is one year)
    },
    traffic: {
      key : "Ah0o7kAnpzPUqOotpekWyTz7D4losAuLpPU6Ujiya59morhasQUJlOFpg1_owYYa", // Bing Maps API Key
      mode : "Transit", // Possibilities: Driving / Transit / Walking
      origin : "Suwon", // Start of your trip. Human readable address.
      destination : "Yangjae", // Destination of your trip. Human readable address.
      name : "멘헤라 프로젝트 SAMPLE", // Name of your destination ex: "work"
      reload_interval : 5 // Number of minutes the information is refreshed
    },

    youtube: {
      key:"AIzaSyDHnp0oDywcgU3FJIkyLGZJU1TVehd0Td8"
    },

    subway: {
      key:"....."
    },
    soundcloud: {
    	key:"....."
    }
}
