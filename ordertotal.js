
const order = {
    items: [
        {
            name: "Laptop",
            price: "10000000",
            quantity: "1"
        },
        {
            name: "Mouse",
            price: "200000",
            quantity: "1"
        },
        {
            name: "Keyboard",
            price: "100000",
            quantity: "1"
        }
    ],

    calculatetotal: function() {
        let total = 0;

        for (let i = 0; i<this.items.length; i++) {
            total += this.items[i].price * this.items[i].quantity;
        }

        return total;
    }
};

console.log(`Order Total: ${order.calculatetotal()}`);
