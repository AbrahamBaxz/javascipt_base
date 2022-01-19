//https://devhints.io/moment
//https://momentjs.com/

const moment = require('moment');
let m = moment();
//m.add(0, 'day')
//m.subtract(0, 'days')
console.log(
  m.format('MMMM Do YYYY, h:mm:ss a')
  //m.fromNow()
);
