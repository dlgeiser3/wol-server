const Sequelize = require('sequelize');
const sequelize = new Sequelize('workout-log-project', 'postgres', process.env.PASS, {
  host: 'localhost',
  dialect: 'postgres'
});

sequelize.authenticate()
.then(() =>console.log('********** Connected to workoutlog postgres database **********'))
.catch(err => console.log(err))
 
module.exports = sequelize;