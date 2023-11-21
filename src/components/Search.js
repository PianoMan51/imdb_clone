import React from "react";

export default function Search({ onSearch }) {
  const [title, setTitle] = React.useState("");

  const handleSearch = () => {
    if (title) {
      onSearch(title);
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  return (
    <div className="search--container">
      <input
        className="title--input"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        onKeyDown={handleKeyDown}
      />
      <input
        className="button--input"
        type="button"
        value="Search"
        onClick={handleSearch}
      />
    </div>
  );
}
