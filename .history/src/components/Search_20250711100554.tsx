import { useState } from "react";


export default function Search() {
    const [search, setSearch] = useState("");
    function handleSearch(e){
        const keyword = e.target.value;
        setSearch(keyword);
    }

    return (
      <div className="search-container">
        <hr></hr>
        <label>Rechercher</label><br/>
        <input
          type="text"
          placeholder="Search by title or language"
          value={search}
          onChange={(e) => handleSearch(e)}
        />
      </div>
    )
}