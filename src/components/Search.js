import React from "react";

const Search = props => {
  return (
    <div style={style.contentSearch}>
      <input
      style= {styles.inputSearch}
        placeholder="Search anything..."
        type="text"
        value={props.search}
        onChange={props.onChangeSearch}
      />
    </div>
  );
};

const styles = {
  inputSearch:{
    width: 500,
    height: 30,
  }
},
contentSearch: {
  backgroundColor: "red",
  height: 100,
  justifyContent: "center",
  alignitems: "center"
  display: "flex"
}

export default Search;
