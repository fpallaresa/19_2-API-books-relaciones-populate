const mongoose = require("mongoose");
const { connect } = require("../db.js");
const { Author } = require("../models/Author.js");

const authorSeed = async () => {
  try {
    await connect();
    console.log("Tenemos conexión");

    // Borrar datos
    await Author.collection.drop();
    console.log("Autores eliminados");

    const authorList = [
      { name: "Gabriel García Márquez", country: "Colombia" },
      { name: "Jane Austen", country: "England" },
      { name: "Leo Tolstoy", country: "Russia" },
      { name: "Virginia Woolf", country: "England" },
      { name: "Ernest Hemingway", country: "United States" },
      { name: "Jorge Luis Borges", country: "Argentina" },
      { name: "Franz Kafka", country: "Czechoslovakia" },
      { name: "Toni Morrison", country: "United States" },
      { name: "Haruki Murakami", country: "Japan" },
      { name: "Chinua Achebe", country: "Nigeria" },
    ];

    const documents = authorList.map((author) => new Author(author));
    await Author.insertMany(documents);

    console.log("Autores creados correctamente!");
  } catch (error) {
    console.error(error);
  } finally {
    mongoose.disconnect();
  }
};

authorSeed();
