function shoppingAdImg() {
  let imageIndex = $(".productLink_img");

  for (let i = 0; i < imageIndex.length; i++) {
    $(imageIndex[i]).attr(
      "src",
      "../img/shoppingAdImg/adimg_" + (i + 1) + ".jpg"
    );
  }
}
shoppingAdImg();

function feedAdImg() {
  let imageIndex = $(".feed_main_img");

  for (let i = 0; i < imageIndex.length; i++) {
    $(imageIndex[i]).attr(
      "src",
      "../img/feedCommImg/feedImg" + (i + 1) + ".jpg"
    );
  }
}
feedAdImg();

// 1.20일 깃허브 업로드 시 js를 불러 오지 못함을 확인
