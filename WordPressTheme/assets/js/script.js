"use strict";

jQuery(function ($) {
  // この中であればWordpressでも「$」が使用可能になる

  var topBtn = $('.c-to-top');
  topBtn.hide();

  // ボタンの表示設定
  $(window).scroll(function () {
    if ($(this).scrollTop() > 70) {
      // 指定px以上のスクロールでボタンを表示
      topBtn.fadeIn();
    } else {
      // 画面が指定pxより上ならボタンを非表示
      topBtn.fadeOut();
    }
  });
  //  ヘッダークラス名付与
  var header = $('.p-header');
  var headerHeight = $('.p-header').height();
  var height = $('.js-mv-height').height();
  console.log('ヘッダー高さ ' + headerHeight);
  console.log('mv高さ ' + height);
  $(window).scroll(function () {
    if ($(this).scrollTop() > height - headerHeight) {
      header.addClass('is-color');
    } else {
      header.removeClass('is-color');
    }
  });

  // ボタンをクリックしたらスクロールして上に戻る
  topBtn.click(function () {
    $('body,html').animate({
      scrollTop: 0
    }, 300, 'swing');
    return false;
  });

  //ドロワーメニュー
  $(".js-hamburger").click(function () {
    if ($('.js-hamburger').hasClass('is-active')) {
      $('.js-hamburger').removeClass("is-active");
      // $("html").toggleClass("is-fixed");
      $(".js-sp-nav").fadeOut(300);
    } else {
      $('.js-hamburger').addClass("is-active");
      // $("html").toggleClass("is-fixed");
      $(".js-sp-nav").fadeIn(300);
    }
  });

  // スムーススクロール (絶対パスのリンク先が現在のページであった場合でも作動)

  $(document).on('click', 'a[href*="#"]', function () {
    var time = 400;
    var header = $('header').innerHeight();
    var target = $(this.hash);
    if (!target.length) return;
    var targetY = target.offset().top - header;
    $('html,body').animate({
      scrollTop: targetY
    }, time, 'swing');
    return false;
  });
  var swiper = new Swiper(".js-works-swiper", {
    pagination: {
      el: ".js-works-pagination"
    },
    loop: true,
    clickable: true
    // autoplay: {
    //   delay: 3000,
    // },
  });
});