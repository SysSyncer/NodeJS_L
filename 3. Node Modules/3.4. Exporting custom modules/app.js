const {inc, dec, getCount} = require('./myModule.js')

inc();
inc();
inc();
console.log(getCount());
dec();
console.log(getCount());