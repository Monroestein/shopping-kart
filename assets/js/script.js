//Starts running with button

let startButton = document.getElementById('start_button');
startButton.addEventListener('click', welcoming)

function welcoming(){
    alert(`Welcome to Shopping Kart ⚡`);
    addingItems()
}

//Crear una clase Producto con los atributos 'nombre' y 'precio'

let product1 = new Product('Green Shell', 1000);
let product2 = new Product('Blue Shell', 5000);
let product3 = new Product('Bullet Bill', 1200);
let product4 = new Product('Bananas', 890);
let product5 = new Product('Mushroom', 1300);

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

function Kart(selectedItem){
    let _selectedItem = [];

    Object.defineProperties(this,{
        selectedItem:{
            set:function(new_selectedItem){
                 _selectedItem = new_selectedItem}
        }
    })
};



//Crea una función que permita agregar productos al carrito.

function addingItems(){
    let addItem = prompt(`Which product would you like to purchase?`);
    return addItem;
}



