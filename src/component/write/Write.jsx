import "./write.css";

export default function Write() {
  function submit(event) {
    // voorkomt dat je niet naar de andere pagina gestuurd
    event.preventDefault();
    console.log(event.target.title.value);
    console.log(event.target.description.value);

    var formdata = new FormData();
    formdata.append("title", event.target.title.value);
    formdata.append("content", event.target.description.value);
    formdata.append("category_id", "1");
    formdata.append("image", event.target.file.files[0], "logo square.png");

    var requestOptions = {
      headers: { token: "pj11daaQRz7zUIH56B9Z" },
      method: "POST",
      body: formdata,
      redirect: "follow",
    };

    fetch("https://frontend-case-api.sbdev.nl/api/posts", requestOptions)
      .then((response) => response.text())
      .then((result) => console.log(result))
      .catch((error) => console.log("error", error));
  }
  return (
    <div className="write">
      <img
        className="writeImg"
        src="https://images.pexels.com/photos/6685428/pexels-photo-6685428.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
        alt=""
      />
      <form onSubmit={submit} className="writeForm">
        <div className="writeFormGroup">
          <label htmlFor="fileInput">
            <i className="writeIcon fas fa-plus"></i>
          </label>
          <input id="fileInput" type="file" style={{ display: "none" }} />
          <input
            className="writeInput"
            placeholder="Title"
            name="title"
            type="text"
            autoFocus={true}
          />
        </div>
        <div className="writeFormGroup">
          <textarea
            className="writeInput writeText"
            placeholder="Tell your story..."
            name="description"
            type="text"
            autoFocus={true}
          />
          <input type="file" name="file" />
        </div>
        <button className="writeSubmit" type="submit">
          Publish
        </button>
      </form>
    </div>
  );
}
