// import * as MODEL from "../model/model.js";

function initListeners() {
  $(".bars").click(function (e) {
    $(".bars").toggleClass("active");
    $(".links").toggleClass("active");
  });

  $(".links a").click(function (e) {
    $(".bars").removeClass("active");
    $(".links").removeClass("active");
  });
}

function changeRoute() {
  let hashTag = window.location.hash;
  let pageID = hashTag.replace("#", "");
  MODEL.changePageContent(pageID);
}

function initURLListener() {
  $(window).on("hashchange", changeRoute);
  changeRoute();
}

$(document).ready(function () {
  // initURLListener();
  initListeners();
  browseBtnListener();
});

function browseBtnListener() {
  let btnID = $(".button").html();

  $(".btnView").click(function (e) {
    console.log("View");
  });

  $(".btnEdit").click(function (e) {
    console.log("Edit");
  });

  $(".btnDelete").click(function (e) {
    console.log("Delete");
  });

  console.log(btnID);
}
