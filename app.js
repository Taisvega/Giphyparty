const gifArea = document.querySelector("#gif-area");
const searchInput = document.querySelector("#search");
const form = document.querySelector("form");
const removeBtn = document.querySelector("#remove");

function addGif(res) {
  let numResults = res.data.length;
  if (numResults) {
    let randomIdx = Math.floor(Math.random() * numResults);
    let newCol = document.createElement("div");
    newCol.className = "col-md-4 col-12 mb-4";
    let newGif = document.createElement("img");
    newGif.src = res.data[randomIdx].images.original.url;
    newGif.className = "w-100";
    newCol.appendChild(newGif);
    gifArea.appendChild(newCol);
  }
}

form.addEventListener("submit", async function(evt) {
  evt.preventDefault();

  let searchTerm = searchInput.value;
  searchInput.value = "";

  const response = await axios.get("http://api.giphy.com/v1/gifs/search", {
    params: {
      q: searchTerm,
      api_key: "OPSFIjiHpM7Ce5VrZWqpPbG0mYplEkEy"
    }
  });
  addGif(response.data);
});

removeBtn.addEventListener("click", function() {
  gifArea.innerHTML = "";
});
