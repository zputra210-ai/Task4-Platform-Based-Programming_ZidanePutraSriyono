const rectangle = {
    "width": 10,
    "height": 5,
    getarea(){
        return this.width  * this.height;
    },
    getperimeter(){
        return 2 * (this.width + this.height)
    }
    
};

console.log(`Width: ${rectangle.width}`);
console.log(`Height: ${rectangle.height}`);
console.log(`Area: ${rectangle.getarea()}`);
console.log(`Width: ${rectangle.getperimeter()}`);