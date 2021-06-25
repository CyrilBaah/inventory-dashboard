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

updateQuantity = () => {
    let inputs = document.getElementsByTagName("input")
    const itemName = defaultInput(inputs[0].value);
    const quantity = parseInt(inputs[1].value)

    for (let i = 0; i < inventoryDB.length; i++) {
        if (inventoryDB[i].itemName == itemName) {
            inventoryDB[i].quantity = quantity

        }
    }
    localStorage.setItem('inventory_db', JSON.stringify(inventoryDB));
    clearInput();
    document.getElementsByClassName('message')[0].style.display = 'block';
    document.getElementById('msg').innerHTML = 'Quantity updated Successfully';
}


let submitBtn = document.getElementById("submitBtn")
submitBtn.addEventListener("click", updateQuantity);

defaultInput = (input) => {
    const str = input;
    const str2 = str.charAt(0).toUpperCase() + str.slice(1);
    return str2;
};