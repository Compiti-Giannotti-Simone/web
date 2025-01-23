const products = [
    {
        name: "OXFORD SHIRT TOMMY HILFIGER",
        category: "Shirts",
        price: "30",
        image: "oxford.webp",
        size: ["S", "M", "XXL"],
        sale: true,
    },
    {
        name: "GANT GINGHAM SHIRT",
        category: "Shirts",
        price: "49",
        image: "gant.webp",
        size: ["L"],
        sale: false,
    },
    {
        name: "LUMBERJACK SHIRT",
        category: "Shirts",
        price: "49",
        image: "lumberjackshirt.webp",
        size: ["S"],
        sale: false,
    },
    {
        name: "BOSS SLIM FIT JEANS",
        category: "Jeans",
        price: "99",
        image: "boss.webp",
        size: ["44", "52"],
        sale: false,
    },
    {
        name: "ARMANI POCKETS PANT",
        category: "Jeans",
        price: "129",
        image: "armani.webp",
        size: ["48", "50", "52"],
        sale: false,
    },
    {
        name: "RALPH LAUREN AERA LACE",
        category: "Shoes",
        price: "129",
        image: "polo.webp",
        size: ["38", "39", "43", "44"],
        sale: true,
    },
    {
        name: "RALPH LAUREN HERITAGE",
        category: "Shoes",
        price: "110",
        image: "polo2.webp",
        size: ["44"],
        sale: false,
    },
    {
        name: "CLOSURE JACKET LONDON",
        category: "Jackets",
        price: "189",
        image: "london.webp",
        size: ["L", "XL"],
        sale: false,
    },
    {
        name: "JACK JONES LONG PUFFER",
        category: "Jackets",
        price: "77",
        image: "jack.webp",
        size: ["S", "M", "L", "XL"],
        sale: false,
    },
    {
        name: "POLO RALPH LAUREN ROUND",
        category: "Sunglasses",
        price: "111",
        image: "sunRalph.webp",
        size: [""],
        sale: true,
    },
];

document.querySelector('#search-button').addEventListener('click',search)
document.querySelector('#search-form').addEventListener('click',function(event) {
    event.preventDefault()
})

const navLinks = document.querySelectorAll('a:not(.dropdown-toggle)')
navLinks.forEach(element => {
    element.addEventListener('click', function() {
        filter(element.innerHTML)
    })
});

products.forEach(element => {
    createProduct(element)
});

function createProduct(element) {
    const row = document.querySelector('.row')
    const product = document.createElement('div')
    product.classList.add('product', 'text-center', 'p-2', 'col-12', 'col-md-6', 'col-lg-4', element.category)
    let product_img = document.createElement('img')
    product_img.src = './images/'+element.image
    product_img.style.width = '100%'
    product_img.style.height = 'auto'
    let product_name = document.createElement('h1')
    product_name.innerHTML = element.name
    let product_sizes = document.createElement('p')
    product_sizes.innerHTML = element.size.join(',')
    let product_price = document.createElement('p')
    product_price.innerHTML = element.price + "€"
    product.appendChild(product_img)
    product.appendChild(product_name)
    product.appendChild(product_sizes)
    product.appendChild(product_price)
    if(element.sale) {
        let sale = document.createElement('p')
        sale.innerHTML = "On Sale"
        product.classList.add('border', 'border-2', 'border-danger')
        product.appendChild(sale)
    }
    row.appendChild(product)
}

function filter(category) {
    const products = document.querySelectorAll('.product')
    products.forEach(element => {
        element.classList.remove('d-none')
    });
    if(category != 'All') {
        products.forEach(element => {
            if(!element.classList.contains(category)) element.classList.add('d-none')
        })
    }
}

function search() {
    const search = document.querySelector('#search-field').value
    const products = document.querySelectorAll('.product')
    products.forEach(element => {
        element.classList.remove('d-none')
        if(!element.querySelector('h1').innerHTML.toLowerCase().includes(search.toLowerCase())) {
            element.classList.add('d-none')
        }
    });
}