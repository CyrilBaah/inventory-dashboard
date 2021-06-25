toggleMenu = () => {
    let toggle = document.querySelector('.toggle');
    let navigation = document.querySelector('.navigation');
    let main = document.querySelector('.main');
    toggle.classList.toggle('active');
    navigation.classList.toggle('active');
    main.classList.toggle('active');
}

storage = () => {
    if (localStorage.getItem('inventory_db') === null) {
        let inventoryProducts = [{
                itemName: "Pens",
                description: "For writing ",
                category: "Stationary",
                quantity: 0
            },
            {
                itemName: "Painting",
                description: "Home Decor - Paintings of Piccaso",
                category: "Interior",
                quantity: 15
            },
            {
                itemName: "Dictionary",
                description: "Collections of words and meanings",
                category: "Stationary",
                quantity: 20
            },
            {
                itemName: "Desktop computer",
                description: "Technology to enhance work",
                category: "Electronics",
                quantity: 20
            }
        ];
        localStorage.setItem('inventory_db', JSON.stringify(inventoryProducts));
    }
};

storage();

let productData = localStorage.getItem('inventory_db');
let inventoryDB = JSON.parse(productData);
document.getElementById('totalItems').innerText = inventoryDB.length;

tableData = (arr, count) => {
    const data = document.getElementById('productDetails');
    const tr = document.createElement('tr');
    tr.innerHTML = `
        <tr>
            <td>${arr[count].itemName}</td>
            <td>${arr[count].description}</td>
            <td>${arr[count].category}</td>
            <td>${arr[count].quantity}</td>
            <td><span class="status"></span></td>
        </tr>
    `
    data.append(tr);
}

statusIndicator = () => {
    let status = document.getElementsByClassName('status');

    for (let i = 0; i < inventoryDB.length; i++) {
        if (inventoryDB[i].quantity == 0) {
            status[i].classList.add("statusred")
        } else if (inventoryDB[i].quantity > 0 && inventoryDB[i].quantity < 20) {
            status[i].classList.add("statusorange")
        } else {
            status[i].classList.add("statusgreen")
        }
    }
}

dashboard = () => {
    for (let i = 0; i < inventoryDB.length; i++) {
        tableData(inventoryDB, i);
    }
    statusIndicator()
}

dashboard()
