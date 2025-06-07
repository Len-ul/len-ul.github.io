// 水墨风点击效果
(function() {
  var a_idx = 0;
  //var a = new Array("墨", "竹", "梅", "兰", "菊", "松", "风", "雨", "山", "水");
  var a = new Array("风", "花", "雪", "月", "琴", "棋", "书", "画", "诗", "酒", "茶", "香", "山", "水", "云" ,"竹");
  jQuery(document).ready(function($) {
    $("body").click(function(e) {
      var $i = $("<span/>").text(a[a_idx]);
      a_idx = (a_idx + 1) % a.length;
      
      var x = e.pageX,
          y = e.pageY;
      
      var opacity = 0.7 + Math.random() * 0.3;
      
      $i.css({
        "z-index": 999999999,
        "top": y - 20,
        "left": x,
        "position": "absolute",
        "font-weight": "bold",
        "color": "rgba(0, 0, 0, " + opacity + ")",
        "user-select": "none",
        "cursor": "default",
        "font-size": "24px",
        "font-family": "宋体"
      });
      
      $("body").append($i);
      
      var angle = Math.random() * 60 - 30;
      var distance = 100 + Math.random() * 50;
      
      $i.animate({
        "top": y - distance,
        "left": x + angle,
        "opacity": 0
      }, 1500 + Math.random() * 1000, function() {
        $i.remove();
      });
    });
  });
})();