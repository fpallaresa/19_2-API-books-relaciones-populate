const mongoose = require("mongoose");
const { connect } = require("../db.js");
const { Book } = require("../models/Book.js");

const bookSeed = async () => {
  try {
    await connect();
    console.log("Tenemos conexión");

    // Borrar datos
    await Book.collection.drop();
    console.log("Libros eliminados");

    const bookList = [
      { title: "The Lost Symphony", pages: 980, publisher: "Whimsical Press" },
      { title: "The Midnight Symphony", pages: 98, publisher: "Fantasy Books Co." },
      { title: "The Secret Symphony", pages: 700, publisher: "Enchanted Editions" },
      { title: "The Silver Symphony", pages: 936, publisher: "Novelty Books Inc." },
      { title: "The Hidden Symphony", pages: 956, publisher: "Make-Believe Publishers" },
      { title: "Whispers in the Wind", pages: 909, publisher: "Enchanted Editions" },
      { title: "The Lost City", pages: 370, publisher: "Enchanted Editions" },
      { title: "Lost in Time", pages: 868, publisher: "Imaginary House" },
      { title: "The Hidden Path", pages: 820, publisher: "Dreamscape Publishing" },
      { title: "The Crimson Symphony", pages: 149, publisher: "Enchanted Editions" },
      { title: "The Forgotten Kingdom", pages: 196, publisher: "Whimsical Press" },
      { title: "The Emerald Isle", pages: 602, publisher: "Storyteller Publications" },
      { title: "Whispers of the Heart", pages: 820, publisher: "Dreamscape Publishing" },
      { title: "The Hidden Symphony", pages: 736, publisher: "Fantasy Books Co." },
      { title: "The Starlight Symphony", pages: 955, publisher: "Fantasy Books Co." },
      { title: "The Midnight Sonata", pages: 399, publisher: "Storyteller Publications" },
      { title: "The Midnight Sonata", pages: 522, publisher: "Fictional Press" },
      { title: "Lost in Time", pages: 212, publisher: "Bookworm Publishing" },
      { title: "The Hidden Treasure", pages: 271, publisher: "Bookworm Publishing" },
      { title: "The Starlight Symphony", pages: 674, publisher: "Make-Believe Publishers" },
      { title: "The Enchanted Symphony", pages: 588, publisher: "Fantasy Books Co." },
      { title: "The Emerald Symphony", pages: 267, publisher: "Fictional Press" },
      { title: "The Midnight Symphony", pages: 562, publisher: "Novelty Books Inc." },
      { title: "The Silver Lining", pages: 207, publisher: "Fictional Press" },
      { title: "The Secret Symphony", pages: 471, publisher: "Novelty Books Inc." },
      { title: "The Golden Symphony", pages: 58, publisher: "Imaginary House" },
      { title: "The Hidden Symphony", pages: 922, publisher: "Make-Believe Publishers" },
      { title: "Whispers in the Wind", pages: 831, publisher: "Fictional Press" },
      { title: "A Tale of Two Cities", pages: 390, publisher: "Bookworm Publishing" },
      { title: "The Crystal Key", pages: 957, publisher: "Whimsical Press" },
      { title: "The Midnight Sonata", pages: 395, publisher: "Whimsical Press" },
      { title: "The Crimson Symphony", pages: 910, publisher: "Novelty Books Inc." },
      { title: "The Midnight Symphony", pages: 507, publisher: "Fantasy Books Co." },
      { title: "The Starlight Symphony", pages: 800, publisher: "Make-Believe Publishers" },
      { title: "The Hidden Symphony", pages: 570, publisher: "Imaginary House" },
      { title: "The Hidden Symphony", pages: 794, publisher: "Fictional Press" },
      { title: "The Silver Symphony", pages: 966, publisher: "Whimsical Press" },
      { title: "The Starlight Symphony", pages: 317, publisher: "Enchanted Editions" },
      { title: "Whispers in the Wind", pages: 438, publisher: "Novelty Books Inc." },
      { title: "The Lost Symphony", pages: 731, publisher: "Fictional Press" },
      { title: "The Forgotten Symphony", pages: 401, publisher: "Dreamscape Publishing" },
      { title: "The Crimson Symphony", pages: 392, publisher: "Whimsical Press" },
      { title: "The Secret Symphony", pages: 214, publisher: "Bookworm Publishing" },
      { title: "The Hidden Symphony", pages: 728, publisher: "Imaginary House" },
      { title: "The Midnight Masquerade", pages: 656, publisher: "Storyteller Publications" },
      { title: "The Crystal Key", pages: 773, publisher: "Enchanted Editions" },
      { title: "The Crimson Symphony", pages: 163, publisher: "Fantasy Books Co." },
      { title: "The Enchanted Symphony", pages: 97, publisher: "Imaginary House" },
      { title: "The Golden Compass", pages: 409, publisher: "Imaginary House" },
      { title: "Whispers in the Wind", pages: 360, publisher: "Imaginary House" },
      { title: "The Golden Gate", pages: 795, publisher: "Enchanted Editions" },
      { title: "The Crimson Symphony", pages: 998, publisher: "Bookworm Publishing" },
      { title: "The Forgotten Realm", pages: 704, publisher: "Dreamscape Publishing" },
      { title: "The Hidden Symphony", pages: 535, publisher: "Novelty Books Inc." },
      { title: "The Crimson Symphony", pages: 981, publisher: "Make-Believe Publishers" },
      { title: "The Hidden Treasure", pages: 57, publisher: "Dreamscape Publishing" },
      { title: "The Last Voyage", pages: 487, publisher: "Novelty Books Inc." },
      { title: "The Golden Symphony", pages: 539, publisher: "Novelty Books Inc." },
      { title: "The Lost Symphony", pages: 787, publisher: "Enchanted Editions" },
      { title: "The Emerald Isle", pages: 449, publisher: "Whimsical Press" },
      { title: "The Forgotten Symphony", pages: 333, publisher: "Dreamscape Publishing" },
      { title: "The Golden Symphony", pages: 64, publisher: "Storyteller Publications" },
      { title: "The Emerald Symphony", pages: 233, publisher: "Dreamscape Publishing" },
      { title: "The Secret Symphony", pages: 730, publisher: "Whimsical Press" },
      { title: "The Crimson Symphony", pages: 492, publisher: "Fictional Press" },
      { title: "The Forgotten Symphony", pages: 935, publisher: "Novelty Books Inc." },
      { title: "The Silver Lining", pages: 475, publisher: "Storyteller Publications" },
      { title: "The Golden Symphony", pages: 205, publisher: "Storyteller Publications" },
      { title: "The Enchanted Mirror", pages: 646, publisher: "Make-Believe Publishers" },
      { title: "The Crimson Symphony", pages: 602, publisher: "Enchanted Editions" },
      { title: "The Forgotten Symphony", pages: 430, publisher: "Novelty Books Inc." },
      { title: "The Midnight Symphony", pages: 854, publisher: "Enchanted Editions" },
      { title: "A Tale of Two Cities", pages: 625, publisher: "Novelty Books Inc." },
      { title: "The Starlight Chronicles", pages: 966, publisher: "Fantasy Books Co." },
      { title: "The Forgotten Symphony", pages: 388, publisher: "Bookworm Publishing" },
      { title: "The Lost City", pages: 374, publisher: "Storyteller Publications" },
      { title: "The Lost Symphony", pages: 264, publisher: "Make-Believe Publishers" },
      { title: "The Starlight Symphony", pages: 365, publisher: "Bookworm Publishing" },
      { title: "The Forgotten Realm", pages: 709, publisher: "Storyteller Publications" },
      { title: "The Hidden Path", pages: 432, publisher: "Fantasy Books Co." },
      { title: "The Lost Symphony", pages: 576, publisher: "Dreamscape Publishing" },
      { title: "The Hidden Symphony", pages: 146, publisher: "Fictional Press" },
      { title: "The Forgotten Realm", pages: 603, publisher: "Dreamscape Publishing" },
      { title: "The Lost Symphony", pages: 865, publisher: "Whimsical Press" },
      { title: "The Silver Symphony", pages: 308, publisher: "Dreamscape Publishing" },
      { title: "The Secret Symphony", pages: 822, publisher: "Novelty Books Inc." },
      { title: "The Enchanted Forest", pages: 802, publisher: "Enchanted Editions" },
      { title: "The Secret Keeper", pages: 987, publisher: "Imaginary House" },
      { title: "The Hidden Symphony", pages: 284, publisher: "Fictional Press" },
      { title: "The Silver Sword", pages: 314, publisher: "Imaginary House" },
      { title: "The Secret Symphony", pages: 843, publisher: "Make-Believe Publishers" },
      { title: "The Secret Garden", pages: 927, publisher: "Dreamscape Publishing" },
      { title: "The Golden Symphony", pages: 574, publisher: "Storyteller Publications" },
      { title: "The Crystal Key", pages: 496, publisher: "Whimsical Press" },
      { title: "The Silver Symphony", pages: 596, publisher: "Dreamscape Publishing" },
      { title: "The Golden Symphony", pages: 62, publisher: "Enchanted Editions" },
      { title: "The Forgotten Kingdom", pages: 308, publisher: "Dreamscape Publishing" },
      { title: "The Enchanted Symphony", pages: 950, publisher: "Imaginary House" },
      { title: "The Emerald City", pages: 454, publisher: "Make-Believe Publishers" },
      { title: "The Golden Compass", pages: 755, publisher: "Enchanted Editions" },
    ];

    const documents = bookList.map((book) => new Book(book));
    await Book.insertMany(documents);

    console.log("Libros creados correctamente!");
  } catch (error) {
    console.error(error);
  } finally {
    mongoose.disconnect();
  }
};

bookSeed();
