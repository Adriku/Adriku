var productController;

class Product
{
    constructor(name, price, quantity, description) 
    {
        this.name = name;
        this.price = price
        this.quantity = quantity;
        this.description = description;
    }
}

class ProductController 
{
    constructor() 
    {
        this.txtNombreProducto = document.getElementById('txtNombreProducto');
        this.txtPrecio = document.getElementById('txtPrecio');
        this.txtDisponible = document.getElementById('txtDisponible');
        this.txtDescripcion = document.getElementById('txtDescripcion');
        this.tbBody = document.getElementById('tbBody');

        this.products = new Array();
    }

    addProduct() 
    {
        let name = this.txtNombreProducto.value;
        let price = this.txtPrecio.value;
        let quantity = this.txtDisponible.value;
        let description = parseInt(this.txtDescripcion.value);

        let product = new Product(name, price, quantity, description);
        this.products.push(product);

        this.showProduct();
    }

    deleteProduct(i)
    {
        this.products.splice(i, 1);
        this.showProduct();
    }

    showProduct() 
    {
        this.tbBody.innerHTML = '';
        
        for (let i in this.products) 
        {
            let product = this.products[i];
            let tr = document.createElement('tr');

            let tdName = document.createElement('td');
            tdName.innerHTML = product.name;

            let tdPrice = document.createElement('td');
            tdPrice.innerHTML = product.price;

            let tdQuantity = document.createElement('td');
            tdQuantity.innerHTML = product.quantity;

            let tdDescription = document.createElement('td');
            tdDescription.innerHTML = product.description;

            let tdOption = document.createElement('td');
            let btnDelete = document.createElement('button');

            btnDelete.type = 'button';
            btnDelete.innerHTML = 'Delete';
            btnDelete.className = 'btn btn-primary'
            btnDelete.onclick = function()
            {
                productController.deleteProduct(i);
            }

            tdOption.appendChild(btnDelete);

            tr.appendChild(tdName);
            tr.appendChild(tdPrice);
            tr.appendChild(tdQuantity);
            tr.appendChild(tdDescription);
            tr.appendChild(tdOption);

            this.tbBody.appendChild(tr);
        }
    }
}

window.onload = function() 
{
    productController = new ProductController();
}