export function changePageContent(pageID) {
  if (pageID != "") {
    $.get(`pages/${pageID}/${pageID}.html`, function (data) {
      $("#app").html(data);
    });
  } else {
    $.get(`pages/browse/browse.html`, function (data) {
      $("#app").html(data);
    });
  }
}
