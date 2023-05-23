const { parse } = require('csv-parse')
const fs = require('fs')

const results = []

const options = {
  comment: '#',
  columns: true
}

const isHabitable = (planet) => {
  return (
    planet['koi_disposition'] === 'CONFIRMED' 
    && planet['koi_insol'] > 0.36
    && planet['koi_insol'] < 1.11
    && planet['koi_prad'] < 1.6
  )
}

const habitablePlanets = (planet) => isHabitable(planet) && results.push(planet)

fs.createReadStream('keplerData.csv') 
  .pipe(parse(options))
  .on('data', (data) => habitablePlanets(data))
  .on('error', (error) => console.log(error))
  .on('end', () => {
    console.log(`${results.length} habitable planets found!`)
    results.forEach(planet => console.log(planet['kepler_name']))
  })

