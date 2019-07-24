import express from 'express';
import config from '../config';
import middleware from '../middleware';
import initializeDb from '../db';
import app from '../app';
import restaurant from '../controller/restaurant';
import foodtruck from '../controller/foodtruck';

let router = express();

//connect to db
initializeDb(db => {

    //internal middleware
    router.use(middleware({config, db}));

    //api route v1 (/v1)
    router.use('/restaurant', restaurant({ config, db}));

    //api route v1 (/v1)
    router.use('/foodtruck', foodtruck({ config, db}));

});

export default router;