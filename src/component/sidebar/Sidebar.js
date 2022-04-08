import "./sidebar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState, useEffect } from "react";

import { createPost, getCategories } from "../../frontend-case-api";
import Select from "react-select";

export default function Sidebar() {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    async function fetchCategories() {
      await getCategories(setCategories);
    }
    fetchCategories();
  }, []);

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log("submitted", event.target.files.files[0]);
    var formdata = new FormData();
    formdata.append("title", event.target.title.value);
    formdata.append("content", event.target.description.value);
    formdata.append("category_id", event.target.select.value);
    formdata.append(
      "image",
      event.target.file.files[0],
      event.target.files.files[0].name
    );
    await createPost(formdata);
  };

  return (
    <div className="sidebar">
      <div>
        <h1>Plaats een blog bericht</h1>
      </div>
      <form onSubmit={handleSubmit} className="sidebarTitle">
        <div>
          <section className="section">
            <label className="test">Berichtnaam</label>
            <br />
            <input
              type="text"
              name="title"
              className="sidebarInput"
              placeholder="Geen Title"
            />
            <br />

            <form
              onSubmit={(e) => {
                e.preventDefault();
              }}
            ></form>

            <label className="test">Bericht</label>
            <br />
            <textarea name="description" className="sidebarInput">
              schrijf hier je bericht
            </textarea>
            <br />

            <label className="test">Category</label>
            <Select
              className="sidebarInput"
              options={categories}
              name="select"
            />
            <br />

            <div>
              <label for="exampleFormControlFile1" className="test">
                Header afbeelding
              </label>
              <br />
              <FontAwesomeIcon icon="fa-solid fa-camera" />
              <label className="picture" for="file">
                <div>
                  <p>Kies bestand</p>
                </div>
              </label>
              <input
                type="file"
                name="file"
                className="form-control-file"
                id="file"
              />
            </div>
            <br />
            <button type="submit" className="sidebarsubmit">
              bericht aanmaken
            </button>
          </section>
        </div>
      </form>
    </div>
  );
}
