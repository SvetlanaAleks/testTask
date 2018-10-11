const App = (function() {
  "use strict";
  const overlay = $(".js_overlay");
  const popup = $(".js_popup");
  const tablePlace = $(".js_table-place");
  return {
    orderEvent: function() {
      const app = this;
      $(document).on("click", ".js_order", function(e) {
        e.preventDefault();
        const _this = $(this);
        const row = _this.parents("tr");
        const route = row.find(".route").text();
        const date = row.find(".date").text();
        const plane = row.find(".plane").text();
        tablePlace.html(app.createPopupContent(route, date, plane));
        overlay.fadeIn();
        popup.addClass("popup--active");
      });
    },
    onPopupClose: function() {
      $(".js_overlay, .js_popup-close").click(function() {
        popup.removeClass("popup--active");
        overlay.fadeOut();
      });
    },
    createPopupContent: function(route, date, plane) {
      const popupContent = `<table><tr><td>EMPTY LEGS:</td><td>${route}</td></tr><tr><td>ДАТА ВЫЛЕТА:</td><td>${date}</td></tr><tr><td>САМОЛЕТ:</td><td>${plane}</td></tr></table>`;
      return popupContent;
    },
    init: function() {
      this.orderEvent();
      this.createPopupContent();
      this.onPopupClose();
    }
  };
})();
