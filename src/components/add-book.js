import React, { useState } from "react";
import axios from "axios";

export default function addBook() {
  const [name, setName] = useState("");
  const [author, setAuthor] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");

  const postBook = (event) => {
    axios
      .post("https://bookstorefrontendapi-djm.herokuapp.com/book/add", {
        name: name,
        author: author,
        price: price,
        description: description,
      })
      .then((response) => console.log(response))
      .catch((error) => console.error(error));
      event.preventDefault();
  };

  return (
    <div>
      <h1>Add a book!</h1>
      <h1>{name}</h1>
      <form onSubmit={postBook}>
        <input
          onChange={(event) => setName(event.target.value)}
          type="text"
          placeholder="name"
        />
        <input
          onChange={(event) => setAuthor(event.target.value)}
          type="text"
          placeholder="author"
        />
        <input
          onChange={(event) => setPrice(event.target.value)}
          type="text"
          placeholder="price"
        />
        <textarea
          onChange={(event) => setDescription(event.target.value)}
          type="text"
          placeholder="description"
        />
        <button>Add book!</button>
      </form>
    </div>
  );
}
