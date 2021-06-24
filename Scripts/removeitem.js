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

removeItem = () => {
    let inputs = document.getElementsByTagName("input")
    const itemName = inputs[0].value.toUpperCase()


    let found = false;
    for (let i = 0; i < inventoryDB.length; i++) {
        if (inventoryDB[i].itemName == itemName) {
            inventoryDB.splice(i, 1)
            found = true;
        }
    }
    localStorage.setItem('inventory_db', JSON.stringify(inventoryDB));
    clearInput()
    alert('Removed')
}


let submitBtn = document.getElementById("submitBtn")
submitBtn.addEventListener("click", removeItem)