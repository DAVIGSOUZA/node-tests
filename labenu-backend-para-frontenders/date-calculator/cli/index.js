const { writeFileSync } = require("fs")

const history = require("./history.json")

const path = "C:/Projects/node-tests/labenu-backend-para-frontenders/date-calculator/cli/history.json"

const firstDate = process.argv[2]
const secondDate = process.argv[3]

const firstDateTimesStamp = new Date(firstDate).getTime()
const secondDateTimesStamp = new Date(secondDate).getTime()

gapInMiliseconds = secondDateTimesStamp - firstDateTimesStamp

gapInDays = gapInMiliseconds / 1000 / 60 / 60 / 24

if (isNaN(gapInDays)) {
    console.log("Date format must be YYYY-MM-DD")
} else {
    history.push({ firstDate, secondDate, gapInDays })
    writeFileSync(path, JSON.stringify(history))
    console.log(`The difference is ${gapInDays} days`)
}