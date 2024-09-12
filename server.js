const express = require("express");
const app = express();
/*app.get("/", (req, res) => {
    res.send({message:})
})*/
app.listen(3000, () => console.log(`server is running on port 3000`));

// 1. Be Polite, greet user.
app.get("/greeting/:username", (req, res) => {
    const username = req.params.username;
    const message = `Hello there, ${username}! What a delight it is to see you once more, Mathilda.`;
    res.send(message);
});

app.listen(port, () => {
    console.log(`Server running at https://localhost:${port}`);

}); 


// 2. Rolling the dice

app.get("/roll/:parameter", (req, res) => {
    const parameter = req.params.parameter;
    const number = parseInt(parameter, 10);
    if (isNaN(number)) {
        return res.status(300).send("You must specify a number.");

    }
    const result = Math.floor(Math.random() * (number + 1));
    res.send(`You rolled a ${result}.`);
});
//3. I want that one.
const collectibles = [
    { name: 'shiny ball', price: 5.95 },
    { name: 'autographed picture of a dog', price: 10 },
    { name: 'vintage 1970s yogurt SOLD AS-IS', price: 0.99 }
  ];
  app.get("/collectibles/:index", (req, res) => {
    const index = parseInt(req.params.index, 10);
    if (isNaN(index) || index < 0 || index >= collectibles.length) {
        return res. send("The item is not in stock! check agin!");

    }
    const item = collectibles[index];
    res.send(`So, you want the ${item.name}? For ${item.price.toFixed(2)}, can it be yours!`);
  });
  app.get('/hello', (req, res) => {
    res.send(`Hello there, ${req.query.name}! I hear you are ${req.query.age} years old!`);
});

  app.listen(port, () => {
    console.log(`Server running at https://localhost:${port}`);
  })

//4. query parameters
const shoes = [
    { name: "Birkenstocks", price: 50, type: "sandal" },
    { name: "Air Jordans", price: 500, type: "sneaker" },
    { name: "Air Mahomeses", price: 501, type: "sneaker" },
    { name: "Utility Boots", price: 20, type: "boot" },
    { name: "Velcro Sandals", price: 15, type: "sandal" },
    { name: "Jet Boots", price: 1000, type: "boot" },
    { name: "Fifty-Inch Heels", price: 175, type: "heel" }
];
app.get("shose", (req, res) => {
    let filteredShoes = [...shoes];
    const minPrice = parseFloat(req.query["min-price"]);
    const maxPrice = parseFloat(req.query["max-price"]);
    const type = req.query["type"];
    if (!isNaN(minPrice)) {
        filteredShoes = filteredShose.filter(shose => shoes.price >= minPrice);

    }
    if(!isNaN(maxPrice)) {
        filteredShoes = filteredShoes.filter(shoe => shoe.price <= maxPrice);

    }
    if(type) {
        filteredShoes = filteredShoes.filter(shoe => shoe.type === type);
    }
    res.json(filteredShoes);
});
 app.listen(port, () => {
    console.log(`Server running at https://localhost:${port}`);

 });