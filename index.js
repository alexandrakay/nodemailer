require('dotenv').config

const PORT = process.env.PORT || 4225;
const server = require('./server')


server.listen(PORT, () => {
    console.log(`\n Server listening on port ${PORT}`.rainbow);
});


