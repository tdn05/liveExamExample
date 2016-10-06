import * as mongoose from 'mongoose';
import Car from './models/car'

const URL = 'mongodb://admin:Secret123!@ds035776.mlab.com:35776/coolkidsdata';

class Database {
    public static connect(){
        mongoose.connect(URL);
        let db = mongoose.connection;

        db.on('error', console.error.bind(console, 'connection error'));
        db.once('open', console.log.bind(console, 'CONNECT TO PORT 3000'))

        Car.find('cars').then((cars)=>{
            console.log(cars.length);
             if(cars.length==0) {
                 console.log('wooohooo')
                Car.create(
                    {make:'Honda', brand: 'Civic', year: 1995},
                    {make:'Toyota', brand: 'Avalon', year: 1995},
                    {make:'Nissan', brand: 'GTR', year: 2015}
                ).then(()=>{
                    console.log('cars created')
                })
            
            } else {
                console.log('already in database')
            }
        })
        .catch((err)=>{
            console.log('error')
        })
    }
}

export default Database;
