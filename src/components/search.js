import React, { useState, useEffect } from "react";
import Form from "react-bootstrap/Form";
function Search() {
  return (
    <div>
      <Form>
        <Form.Control type="text" placeholder="Enter a movie" />
      </Form>
    </div>
  );
}
export default Search;
