Logger and Rollbar -> (utils/custom.logger.js)

We will be using a custom logger that can be controlled from one place. It uses chalk to differentiate between the different type of messages.

The custom log file is set in global, so in any file we can directly use

log.<type> to access it. Available types are

1. info (blue color logs)
2. error (red color logs)
3. success (green color logs)
4. warning (yellow color logs)
5. object (to deserialize and show an object)

Usage example ->

log.info("Need to show this as info ")

We can use this exactly like we use console.log. So instead of console.log we will use log.

Rollbar is an online error tracking software tool. This is used so that we can store errors online and compare and debug. 

For this app and all apps to follow we will be logging all errors alone to rollbar. So all logs that use log.error will be logged to rollbar.

---------------------------------------------------------------------------------------------

Swagger -> (in app.js)

This is for documenting apis. 
Whenever we create a new api we need to add those details inside swagger.json file so that we will be able to view that in the document hosted at <base-url>/<version>/api-docs

So for this base project it will be http://localhost:3022/v1/api-docs/


------------------------------------------------------------------------------------------------

Luxon -> (utils/date.time.js)

This id for timezones and date time. Since moment has been deprecated we will be using luxon. Luxon has been set as a global variable so all the helper functions will be written inside the date.time.js class and these can be accessed anywher using

dt.<function name>

example = dt.currentTime()


// Graphql file run karne ke lie pehle yoga graphql browser per open karna padega and then  "http://localhost:3022/graphql"
fir aap apne code ko run kar sakte hai