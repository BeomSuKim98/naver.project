function shoppingAdImg() {
  let imageIndex = $(".productLink");
  console.log(imageIndex);

  for (let i = 1; i < imageIndex.length; i++) {
    $(imageIndex[i]).attr("src", "../img/shoppingAdImg/adimg_" + i + ".jpg");
  }
}

shoppingAdImg();
