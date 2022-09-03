const form = document.querySelector("form");
const container = document.querySelector(".container");
form.addEventListener("submit", async (e) => {
  e.preventDefault();

  const config = { params: { q: form.elements.query.value } };
  const response = await axios.get(
    ` http://api.tvmaze.com/search/shows`,
    config
  );
  console.log(response.data);
  addImg(response.data);
  form.elements.query.value = "";
});

const addImg = (data) => {
  for (const result of data) {
    if (result.show.image.medium) {
      const img = document.createElement("IMG");
      img.classList.add("show-img");
      img.src = result.show.image.medium;
      container.append(img);
    }
  }
};
