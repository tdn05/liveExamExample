import * as express from 'express';
import Car from '../models/car';

let carRoute = express.Router()

carRoute.get('/', (req,res)=>{
    Car.find().then((cars)=>{
        res.send(cars)
    }).catch((err)=>{
        res.status(500).send(err)
    });
});

carRoute.post('/', (req,res)=>{
    let car = new Car();

    car.make = req.body.make;
    car.brand = req.body.brand;
    car.year = req.body.year;

    car.save().then((car)=>{
        res.send(car);
    }).catch((err)=>{
        res.status(400).send(err)
    })
});

export default carRoute;
