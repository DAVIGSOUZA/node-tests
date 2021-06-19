const firstDate = window.prompt('Fisrt Date:')
const secondDate = window.prompt('Second Date:')

const firstDateTimesStamp = new Date(firstDate).getTime()
const secondDateTimesStamp = new Date(secondDate).getTime()

gapInMiliseconds = secondDateTimesStamp - firstDateTimesStamp

gapInDays = gapInMiliseconds / 1000 / 60 / 60 / 24

if (isNaN(gapInDays)) window.alert("Date format must be YYYY-MM-DD")
else window.alert(`The difference is ${gapInDays} days`)