
var jsonString = '{"name": "John", "age": 30, "city": "New York"}'
var parsedObject = JSON.parse(jsonString);
console.log(parsedObject.name);

const jsonData = `{

    "users": [
  
      {
  
        "id": 1,
  
        "name": "John Doe",
  
        "email": "john@example.com",
  
        "address": {
  
          "city": "New York",
  
          "zipcode": "10001"
  
        }
  
      },
  
    ],
  
    "products": [
  
      {
  
        "id": 101,
  
        "name": "Laptop",
  
        "price": 999.99
  
      },
  
      {
  
        "id": 102,
  
        "name": "Smartphone",
  
        "price": 499.99
  
      }
  
    ]
  
  }`;

  const parsedO = JSON.parse(jsonData);
//   console.log(parsedO.users);