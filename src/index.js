const express = require('express');
const {PORT} = require('./config/constants')
const v1Routes = require('./routes/index');
const Sequelize = require('sequelize');
const { QueryTypes } = require('sequelize');
const {Train, Station, Schedule, sequelize} = require('./models/index')

const app = express();

const rawQuery = `SELECT 
s1.id as schedule_id,  
t.name as train_name,
t.number as train_number,
st1.name as from_station_name, 
st2.name as to_station_name
FROM schedules s1
JOIN schedules s2 ON s1.train_id = s2.train_id
JOIN trains t ON s1.train_id = t.id
JOIN stations st1 ON st1.id = s1.station_id
JOIN stations st2 ON st2.id = s2.station_id
WHERE st1.name LIKE '%mumbai%'
AND st2.name LIKE '%pune%'
AND s1.stop < s2.stop;`


app.use(express.json());
app.use(express.urlencoded({extended: true}))

app.get('/', (req, res) => {
    res.send('Welcome to the server!')
})

app.use('/api', v1Routes)

app.listen(PORT, async () => {
    
    /*
    const results = await sequelize.query(rawQuery, {type: QueryTypes.SELECT})
    console.log(results)
    */
    console.log(`Search Service is up and running at port ${PORT}`)
})