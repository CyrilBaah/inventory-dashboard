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
    const quantity = parseInt(inputs[1].value);

    itemChecker(itemName, quantity);
    clearInput();

}


let submitBtn = document.getElementById("submitBtn")
submitBtn.addEventListener("click", updateQuantity);

defaultInput = (input) => {
    const str = input;
    const str2 = str.charAt(0).toUpperCase() + str.slice(1);
    return str2;
};

itemChecker = (name, quantity) => {
    for (let i = 0; i < inventoryDB.length; i++) {
        if (inventoryDB[i].itemName == name) {
            inventoryDB[i].quantity = quantity;
            localStorage.setItem('inventory_db', JSON.stringify(inventoryDB));
            document.getElementsByClassName('message')[0].style.display = 'block';
            return document.getElementById('msg').innerHTML = 'Updated Successfully';

        }
    }
    document.getElementsByClassName('message')[0].style.display = 'block';
    document.getElementsByClassName('message')[0].style.color = 'red';
    return document.getElementById('msg').innerHTML = 'Fields are blanks';
};