import "react-dropdown/style.css";
import styles from "../styles/dropbox.module.scss";
import { useState } from "react";
import { Dropdown } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.css";
import { useEffect } from "react";

export default function DropBoxInput() {
  const [Dropboxvalue, setDropbox] = useState(0);
  const Dropboxmenu = [
    { id: 1, name: "News" },
    { id: 2, name: "Magzine" },
    { id: 3, name: "Book" },
    { id: 4, name: "Article" },
    { id: 5, name: "Podcast" },
  ];
  useEffect(() => {
    import("bootstrap/dist/js/bootstrap");
  }, []);

  function DropBoxInputJsx() {
    return (
      <div className={styles.container}>
        <div className={styles.dropdown}>
          <button
            className="btn btn-secondary dropdown-toggle"
            type="button"
            data-bs-toggle="dropdown"
            id="dropdownMenuButton1"
            aria-expanded="false"
          >
            Dropdown button
          </button>
          <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
            {Dropboxmenu.map((Data, index) => (
              <li key={index}>
                <a
                  className="dropdown-item"
                  onClick={() => setDropbox(Data.id)}
                >
                  {Data.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
  }

  return { DropBoxInputJsx, Dropboxvalue };
}
