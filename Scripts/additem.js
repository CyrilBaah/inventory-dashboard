toggleMenu = () => {
    let toggle = document.querySelector('.toggle');
    let navigation = document.querySelector('.navigation');
    let main = document.querySelector('.main');
    toggle.classList.toggle('active');
    navigation.classList.toggle('active');
    main.classList.toggle('active');
}

let clearInput = () => {
    let inputs = document.getElementsByTagName("input");
    for (x of inputs) {
        x.value = "";
    }
}

let productData = localStorage.getItem('inventory_db');
let inventoryDB = JSON.parse(productData);

addItem = () => {
    let input = document.getElementsByTagName("input");
    const itemName = defaultInput(input[0].value);
    const description = defaultInput(input[1].value);
    const quantity = parseInt(input[2].value);
    const category = document.getElementById("category").value;

    if (itemName == "" || description == "" || quantity < 0) {
        document.getElementsByClassName('message')[0].style.display = 'block'
        document.getElementById('msg').innerHTML = 'Fields are blank';
    } else {
        let inputData = {
            itemName,
            description,
            category,
            quantity
        }
        inventoryDB.push(inputData);
        localStorage.setItem('inventory_db', JSON.stringify(inventoryDB));
        document.getElementsByClassName('message')[0].style.display = 'block'
    }

    clearInput()
}

let addItemBtn = document.getElementById('submitBtn');
addItemBtn.addEventListener('click', addItem)


defaultInput = (input) => {
    const str = input;
    const str2 = str.charAt(0).toUpperCase() + str.slice(1);
    return str2;
};
