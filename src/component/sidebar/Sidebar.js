import "./sidebar.css";
import CameraAltIcon from "@mui/icons-material/ThreeDRotation";
import { useState, useEffect } from "react";
import { createPost, getCategories } from "../../frontend-case-api";
import Select from "react-select";
export default function Sidebar() {
  const [categories, setCategories] = useState([]);
  const [formKey, setFormKey] = useState(4);

  useEffect(() => {
    async function fetchCategories() {
      await getCategories(setCategories);
    }
    fetchCategories();
  }, []);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setFormKey(formKey + 1);
    var files = document.getElementById("file").files[0];
    console.log(files);
    var formdata = new FormData();
    formdata.append("title", event.target.title.value);
    formdata.append("content", event.target.description.value);
    formdata.append("category_id", event.target.select.value);
    formdata.append("image", files, files.name);
    await createPost(formdata);
  };

  return (
    <div className="sidebar">
      <div>
        <h1>Plaats een blog bericht</h1>
      </div>

      <form
        key={formKey}
        onSubmit={handleSubmit}
        className="sidebarTitle"
        enctype="multipart/form-data"
      >
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

              <label className="picture" for="file">
                <CameraAltIcon />
                <div>
                  <p>Kies bestand</p>
                </div>
              </label>
              <input
                type="file"
                name="files"
                className="form-control-file"
                id="file"
              />
            </div>
            <br />
            <button type="submit" className="sidebarsubmit">
              Bericht aanmaken
            </button>
          </section>
        </div>
      </form>
    </div>
  );
}
