import { useState } from "react";
import { useFilter } from "../context/useFilter";


export default function Search() {
    const {setKeyword} = useFilter();
    function handleSearch(e){
        const keyword = e.target.value;
        setKeyword(keyword)
    }

    return (
      <div className="mb-4">
        <label>Rechercher</label><br/>
        <input
          type="text"
          placeholder="Search by title or language"
          value={keyword}
          onChange={(e) => handleSearch(e)}
        />
      </div>
    )
}