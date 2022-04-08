// this should be in env file
const token = "pj11daaQRz7zUIH56B9Z";

export const fetchPosts = async (perPage, setData) => {
  await fetch(
    `https://frontend-case-api.sbdev.nl/api/posts?page=1&perPage=${perPage}`,
    {
      headers: {
        // token:process.env.token,
        token,
      },
    }
  )
    .then((res) => res.json())
    .then((d) => setData(d));
};

export const createPost = async (formdata) => {
  const requestOptions = {
    headers: { token },
    method: "POST",
    body: formdata,
    redirect: "follow",
  };
  await fetch("https://frontend-case-api.sbdev.nl/api/posts", requestOptions)
    .then((response) => response.json())
    .then((result) => console.log(result))
    .catch((error) => console.log("error", error));
};

export const getCategories = async (setCategories) => {
  const requestOptions = {
    headers: { token },
    method: "GET",
    redirect: "follow",
  };
  const result = await fetch(
    "https://frontend-case-api.sbdev.nl/api/categories",
    requestOptions
  )
    .then((res) => res.json())
    .catch((error) => console.log("error", error));

  // we need to assign new properties {label , value} to each item in categories array to make it work with react-select
  result.map((category) => {
    category.value = category.id;
    category.label = category.name;
  });
  console.log(result);
  setCategories(result);
};
