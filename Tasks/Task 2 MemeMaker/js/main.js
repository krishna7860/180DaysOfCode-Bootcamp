let src_val;
let base_src = "https://memegenerator.net/img/images/";
let src = "";
let image = document.getElementById("showcase__image");

// Genrate Random Link
function loadNewMeme() {
  src_val = Math.random() * 4000;
  src_val = Math.round(src_val);

  src = base_src + src_val + ".jpg";
  image.src = src;
}
