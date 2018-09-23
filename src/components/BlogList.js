import React from "react";

const SearchBarStyle = {
  width: 5000,
  height: 2000
}

const BlogList = props => {
  return (
    <div>
      <h2>{props.title}</h2>
      <p>{props.content}</p>
    </div>
  );
};

export default BlogList;
