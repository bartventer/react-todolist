/////////////////////////////////////////////////////////////
// IMPORT NPM PACKAGES
/////////////////////////////////////////////////////////////

import express from 'express';
import morgan from 'morgan';
import path from 'path';

const app = express();
const PORT = process.env.PORT || 8080;
import router from './routes/api.js';


/////////////////////////////////////////////////////////////
// DATA PARSING
/////////////////////////////////////////////////////////////
app.use(express.json());
app.use(express.urlencoded({ extended: false}));


/////////////////////////////////////////////////////////////
// HEROKU PRODUCTION BUILD
/////////////////////////////////////////////////////////////
if (process.env.NODE_ENV === 'production'){
    app.use(express.static('client/build'));
}


/////////////////////////////////////////////////////////////
// HTTP REQUEST LOGGER
/////////////////////////////////////////////////////////////
app.use(morgan('tiny'));
app.use('/', router)


/////////////////////////////////////////////////////////////
// STARTING THE SERVER
/////////////////////////////////////////////////////////////
app.listen(PORT, console.log(`Server is starting at ${PORT}`));