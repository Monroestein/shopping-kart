//Starts running with button

let startButton = document.getElementById('start_button');
startButton.addEventListener('click', welcoming)

let kart = new Kart()
let init = false

function welcoming(){
    if(init==false){
        alert(`Welcome to Shopping Kart ⚡`);
        init = true;
    }
    let indexProduct = addingItems()
    let productQuantity = addingQuantity();
    console.log(products[indexProduct-1])

    let productAdd = products[indexProduct-1]
    productAdd.quantity = productQuantity;
    console.log(productAdd)

    kart.addProduct(productAdd);
    // console.log(kart.getTotal())

    let finish = askFinish();
    if (finish == 'y'){
        //boleta (detalle - total)
        let ticket = document.getElementById('ticket');
        ticket.innerHTML=`<h3>
        <br>
        <p>El total de su compra es: $${kart.getTotal()}.</p></h3>`

    }
}

function askFinish(){
    let response = prompt(`Finish shopping? [Y/N]`).toLowerCase();
    console.log(response)
    if (response == 'y' || response == 'n'){
        
        return response
    }
    alert(`Invalid option.`)
}

//Crear una clase Producto con los atributos 'nombre' y 'precio'

let product1 = new Product('Green Shell', 1000);
let product2 = new Product('Blue Shell', 5000);
let product3 = new Product('Bullet Bill', 1500);
let product4 = new Product('Bananas', 890);
let product5 = new Product('Mushroom', 1300);

let products = [
    product1,
    product2,
    product3,
    product4,
    product5
]

function Product(name, price){
    let _name = name;
    let _price = price;

    Object.defineProperties(this,{
        name:{
            get: function(){return _name},
            },
        price:{
            get: function(){return _price}, 
        }
    })
};

// Crea la clase Carrito que tenga como atributo un arreglo para almacenar los productos seleccionados.

function Kart(){
    let _selectedItem = [];

    Object.defineProperties(this,{
        selectedItem:{
            get:function(){
                return _selectedItem
            },
            set:function(new_selectedItem){
                 _selectedItem = new_selectedItem}
        }
    })

    this.getTotal = function(){
        return this.selectedItem.reduce((total, product) => {
            return total + (product.price * product.quantity)
        },0)
    }

    this.addProduct = function(product){
        this.selectedItem.push(product)
    }

};

let productAdded = new Kart();



//Crea una función que permita agregar productos al carrito.

function addingItems(){
    let addItem = prompt(`Which product would you like to purchase?`);
    if (addItem > 0 && addItem < 6){
        return addItem
    }
    else {
        alert(`Please select a valid number.`)
    }
    return
}

function addingQuantity(){
    let quantity = parseInt(prompt(`How many would you like to buy?`));
    if (isNaN(quantity)){
        alert(`Please select a valid number.`)
        return
    }
    return quantity
}

