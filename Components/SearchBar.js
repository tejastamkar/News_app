import React, { useState } from "react";
import styles from "../styles/SearchBar.module.css";
import { BiSearch } from "react-icons/bi";
import { AiOutlineCloseCircle } from "react-icons/ai";
import Link from "next/link";
function SearchBar({ placeholder, data }) {
  const [filteredData, setFilteredData] = useState([]);
  const [wordEntered, setWordEntered] = useState("");

  const handleFilter = (event) => {
    const searchWord = event.target.value;
    setWordEntered(searchWord);
    const newFilter = data.filter((value) => {
      // console.log(value.name.toLowerCase().includes(searchWord.toLowerCase()));
      return value.name.toLowerCase().includes(searchWord.toLowerCase());
    });

    if (searchWord === "") {
      setFilteredData([]);
    } else {
      setFilteredData(newFilter);
    }
  };

  const clearInput = () => {
    setFilteredData([]);
    setWordEntered("");
  };

  return (
    <>
      <div className={styles.searchInputs}>
        <input
          className={styles.searchInputBar}
          type="text"
          placeholder={placeholder}
          value={wordEntered}
          onChange={handleFilter}
        />
        <div className={styles.searchIcon}>
          {filteredData.length === 0 ? (
            <BiSearch />
          ) : (
            <AiOutlineCloseCircle
              className={styles.clearBtn}
              onClick={clearInput}
            />
          )}
        </div>
      </div>

      {filteredData.length != 0 && (
        <div className={styles.dataResult}>
          {filteredData.slice(0, 15).map((value, key) => {
            return (
              <Link
                key={key}
                className={styles.dataItem}
                href={`/docs/news/${value.id}`}
                target="_blank"
                rel="noreferrer"
              >
                <p className={styles.DataItems}>{value.name} </p>
              </Link>
            );
          })}
        </div>
      )}
    </>
  );
}

export default SearchBar;
