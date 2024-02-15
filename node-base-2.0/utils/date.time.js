const { DateTime } = require("luxon");

class LuxonDateTime {
    currentTime(){
        return DateTime.now()
    }
}

module.exports = LuxonDateTime