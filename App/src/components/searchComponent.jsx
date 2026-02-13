import { useState } from "react";
function SearchComponent({ searchInput }) {
  return (
    <>
      <input type="text" onChange={(e) => setSearchInput(e.target.value)} />
    </>
  );
}

export default SearchComponent;
