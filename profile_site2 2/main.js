

$(function () {

  // カルーセル
  $(".carousel").slick({
    autoplay: true,
    dots: true,
    fade: true,  // fedeオン
    infinite: true,
    autoplaysSpeed: 5000,  // 自動スライド切り替え速度
    speed: 3000  // 画像切り替えにかかる時間（ミリ秒）
  });

  // ホバー時に透明度をつける

  // MyProfile
  $(".myprofile-hover").on("mouseenter", function () {
    $(".myprofile-hover").css("opacity", 0.7);
  });

  $(".myprofile-hover").on("mouseleave", function () {
    $(".myprofile-hover").css("opacity", 1);
  });

  // about
  $(".about-hover").on("mouseenter", function () {
    $(".about-hover").css("opacity", 0.7);
  });

  $(".about-hover").on("mouseleave", function () {
    $(".about-hover").css("opacity", 1);
  });

  // works
  $(".works-hover").on("mouseenter", function () {
    $(".works-hover").css("opacity", 0.7);
  });

  $(".works-hover").on("mouseleave", function () {
    $(".works-hover").css("opacity", 1);
  });

  // 画像１
  $(".firstimg-hover").on("mouseenter", function () {
    $(".firstimg-hover").css("opacity", 0.7);
  });

  $(".firstimg-hover").on("mouseleave", function () {
    $(".firstimg-hover").css("opacity", 1);
  });

  // 画像2
  $(".secondimg-hover").on("mouseenter", function () {
    $(".secondimg-hover").css("opacity", 0.7);
  });

  $(".secondimg-hover").on("mouseleave", function () {
    $(".secondimg-hover").css("opacity", 1);
  });

  // 画像３
  $(".thirdimg-hover").on("mouseenter", function () {
    $(".thirdimg-hover").css("opacity", 0.7);
  });

  $(".thirdimg-hover").on("mouseleave", function () {
    $(".thirdimg-hover").css("opacity", 1);
  });

  // topへ戻るボタン
  $(window).on("scroll", function () {

    if ($(this).scrollTop() > 100) {
      $("#back-btn").css("display", "inline")
    }
    else {
      $("#back-btn").css("display", "none")
    }
  });

  // ページ内リンクのスクロールをなめらかにする
  // $('a[href^="#"]').on("click", function() {
  //   const speed = 500;

  //   const href = $(this).attr("href");
  //   if (href === "#" || href == "") {
  //     const target = $("html");
  //   }

  //   else {
  //     const target = $("href");
  //   }

  //   const position = target.offset().top;
  //   $("html, body").animate({scrollTop:position}, speed, "swing");
  //   return false;
  // });

  $('a[href^="#"]').click(function () {
    var speed = 500; //移動スピードの設定
    var href = $(this).attr("href");
    var target = $(href == "#" || href == "" ? 'html' : href);
    var position = target.offset().top;
    $("html, body").animate({ scrollTop: position }, speed, "swing");
    return false;
  });

  // スクロールしたときにセクションをフェードインさせる
  $(window).scroll(function () {
    const Height = $(window).height();
    const Scroll = $(window).scrollTop();
    $(".section").each(function () {
      const Position = $(this).offset().top;
      if (Scroll > Position - Height + 200) {
        $(this).addClass("fadeIn");
      }
    });
  });

  // Worksの画像をクリックしたときにモーダルで拡大表示する
  $(".img a").click(function () {
    const modalSrc = $(this).children().attr("src");
    $(".modalimg").children().attr("src", modalSrc);
    $(".modal").fadeIn();
    $("body, html").css("overflow-y", "hidden");
    return false;
  });

  $("close-btn").click(function () {
    $(".modal").fadeOut();
    $("body, html").css("overflow-y", "visible");
    return false;
  });

});

