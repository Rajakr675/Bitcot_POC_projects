import { DateTime } from "luxon";

class LuxonDateTime {
    currentTime(): DateTime {
        return DateTime.now();
    }
}

export default LuxonDateTime;




// const { DateTime } = require("luxon");

// class LuxonDateTime {
//     currentTime(){
//         return DateTime.now()
//     }
// }

// module.exports = LuxonDateTime