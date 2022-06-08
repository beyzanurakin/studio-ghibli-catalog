import React from "react";

function SearchForm() {
  return (
    <section className="section search">
      <form className="search-form">
        <div className="form-control">
          <label htmlFor="name">
            <input type="text" name="name" id="name" />
          </label>
        </div>
      </form>
    </section>
  );
}

export default SearchForm;
