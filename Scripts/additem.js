toggleMenu = () => {
    let toggle = document.querySelector('.toggle');
    let navigation = document.querySelector('.navigation');
    let main = document.querySelector('.main');
    toggle.classList.toggle('active');
    navigation.classList.toggle('active');
    main.classList.toggle('active');
}

let clearInput = () => {
    let inputs = document.getElementsByTagName("input")
    for (x of inputs) {
        x.value = ""
    }
}

let productData = localStorage.getItem('inventory_db');
let inventoryDB = JSON.parse(productData);

addItem = () => {
    let input = document.getElementsByTagName("input");
    const itemName = input[0].value.toUpperCase();
    const description = input[1].value.toUpperCase();
    const quantity = parseInt(input[2].value);
    const category = document.getElementById("category").value;

    if (itemName == "" || description == "" || quantity < 0) {
        alert("Fill in the empty fields")
    } else {
        let inputData = {
            itemName,
            description,
            category,
            quantity
        }
        inventoryDB.push(inputData);
        localStorage.setItem('inventory_db', JSON.stringify(inventoryDB));
        alert('Items added successfuly');
    }

    clearInput()
}

let addItemBtn = document.getElementById('submitBtn');
addItemBtn.addEventListener('click', addItem)