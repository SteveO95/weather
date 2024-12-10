import React, { useState } from "react";
import { Button, Input, SearchWrapper } from "./SearchBar.styled";
import PropTypes from "prop-types";

const SearchBar = ({ onSearch }) => {
  const [city, setCity] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (city.trim()) {
      onSearch(city);
      setCity("");
    }
  };

  return (
    <SearchWrapper>
      <form onSubmit={handleSubmit}>
        <Input
          type="text"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          placeholder="Введите город"
        />
        <Button type="submit">Найти погоду</Button>
      </form>
    </SearchWrapper>
  );
};
SearchBar.propTypes = {
  onSearch: PropTypes.func.isRequired, // Пропс onSearch — это функция
};
export default SearchBar;
