import React from "react";

const BookSearch = props => {
  return (
    <form>
      <div className="form-group" style={{ textAlign: "center" }}>
        <input style={{ textAlign: "left" }}
          onChange={props.handleInputChange}
          value={props.value}
          name="title"
          type="text"
          className="form-control"
          placeholder="Search for Book, Author, Genre"
          id="title"
        />
        <br />
        <button onClick={props.handleFormSubmit} className="btn btn-primary">
          Search
        </button>
      </div>
    </form>
  );
}

export default BookSearch;