function create_car(manufacturer, model, ...option){
    let car = {
        manufacturer: manufacturer,
        model: model
    };

    option.forEach(option => {
        let [key, value] = option.split(":");
        car[key.trim()] = value.trim();
    }); 

    return car;

}


let my_car = create_car("Toyota", "Corrolla", "Color: Black", "Sunroof: True");

console.log(my_car);