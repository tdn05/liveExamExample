namespace liveexam.Controllers {
    export class CarController {
        public cars;

        constructor(private carService: liveexam.Services.CarService ){
            this.getCars();
        }
        getCars(){
            this.cars = this.carService.getCars();
        }
    }
}
