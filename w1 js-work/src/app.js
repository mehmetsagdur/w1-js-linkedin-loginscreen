import "./styles.css";
import axios from "axios";

axios
  .get("https://my-json-server.typicode.com/modanisatech/bootcamp-db/products")
  .then((response) => {
    // Firstly, log response to the console,
    // inspect the response and see that it has data field
	  console.log(response);
    // Assign data field of the response to
    // products variable below by destructuring
    // You can use alias
	const {data:products} = response
	console.log(products)
    // Print names of all product to the console
    // by calling foreach  method (use arrow function)
	products.forEach((data) => console.log(data.name)) ;
    // Get all products that contain "Şal" in their name (use filter method)
    // map filtered products to new object having only image and name field
    // assign mapped items to mappedProducts variable
	

	const mappedProducts  = products.filter((data) => data.name.includes("Şal")).map((data) => {return [data.name,data.image]});;
	console.log(mappedProducts)
	
    // Display the images and names of mappedProducts
    // You need to add them to the DOM
    // you need to use forEach method
    // You need to use flexbox
    // Position of image and text is up to you
    // You can use any style you wish
	  mappedProducts.forEach((data) => table.appendChild(createCard(data[0],data[1])));

  });

const table = document.getElementsByClassName('table')[0];

function createCard(productName, productURL) {
    const card = document.createElement('div');
    card.className = "card";
    const Name = document.createElement('div');
    const ImageUrl = document.createElement('div');
    Name.className = "title";
    ImageUrl.className = "image";
    Name.innerHTML = '<h2>' + productName + '</h2>'

    ImageUrl.innerHTML = '<img src="'+productURL+'" alt="">';

    card.append(Name);
    card.append(ImageUrl)
    return card;
	
}

