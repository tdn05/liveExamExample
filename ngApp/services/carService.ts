namespace liveexam.Services {
    export class CarService {
        public carResource;

        constructor(private $resource: ng.resource.IResourceService){
            this.carResource = $resource('/api/cars')
        }

        getCars(){
            return this.carResource.query();
        }
    }
    angular.module('liveexam').service('carService', CarService)
};
