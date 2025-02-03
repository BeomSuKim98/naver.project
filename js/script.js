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

function sideMenuInOut() {
  $(".topTipBox").mouseenter(function () {
    $(this).find(".tooltipBox").removeClass("topblind");
  });

  $(".topTipBox").mouseenter(function (event) {
    event.stopPropagation();
  });

  $(".topTipBox").mouseleave(function () {
    $(this).find(".tooltipBox").addClass("topblind");
  });
}

function sideMenuPopup_1() {
  $(".topAsideArea").click(function () {
    $(".topAsideArea_ex_menu").removeClass("topblind");
  });

  $("body").click(function () {
    $(".topAsideArea_ex_menu").addClass("topblind");
  });

  $(".topAsideArea").click(function (e) {
    return false;
  });
}

sideMenuPopup_1();
sideMenuInOut();

function newsHover() {
  $(".content_box").mouseenter(function () {
    console.log("작동확인");
    let hoverdiv = $("<div></div>").addClass("news_th_hover");
    let hoverA1 = $("<a></a>")
      .addClass("news_th_hover_a")
      .attr("href", "#")
      .text("구독");
    let hoverA2 = $("<a></a>")
      .addClass("news_th_hover_a")
      .attr("href", "#")
      .text("기사보기");

    hoverdiv.append(hoverA1, hoverA2);
    $(this).append(hoverdiv);

    $(".content_box").mouseleave(function () {
      $(this).find(".news_th_hover").remove();
    });
  });
}

newsHover();


function tabMenu(){
  $(".first_tab").click(function () {
    $(".contentHeaderView_content").removeClass("topblind");
    $(".contentHeaderView_second").addClass("topblind");
    $(".second_tab").removeClass("text-black");
    $(".first_tab").addClass("text-black");
    
  });

  $(".second_tab").click(function () {
    $(".contentHeaderView_second").removeClass("topblind");
    $(".contentHeaderView_content").addClass("topblind");
    $(".second_tab").addClass("text-black");
    $(".first_tab").removeClass("text-black");
  });
}

tabMenu();
