import React, { Component } from "react";
import axios from "axios";
import Book from "./book";

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      books: [],
    };
  }

  componentDidMount() {
    axios
      .get("https://bookstoreapi-djm.herokuapp.com/book/get")
      .then((response) => {
        console.log(response);
        this.setState({ books: response.data });
      })
      .catch((error) => {
        console.error(error);
      });
  }

  renderBooks() {
    return this.state.books.map((book) => {
      return (
        <div key={book.id}>
          <h1>book title: {book.name}</h1>
        </div>
      );
    });
  }

  render() {
    return (
      <div className="app">
        <h1>My Books</h1>
        {this.renderBooks()}
      </div>
    );
  }
}
