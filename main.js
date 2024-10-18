function animateHeart() {
  TweenMax.from($("#heart"), 1, {
    scaleX: 1.2,
    scaleY: 1.2,
    transformOrigin: "50% 50%",
    ease: Elastic.easeOut.config(1, 0.3)
  });
  TweenMax.to($("#heart"), 1, {
    scaleX: 1,
    scaleY: 1,
    ease: Elastic.easeOut.config(1, 0.3),
    onComplete: function () {
      setTimeout(animateHeart, 200);
    }
  });
}

new Vivus('message', { type: "oneByOne", duration: 600 }, function () {
  TweenMax.to($("path"), 5, {
    fillOpacity: 1, onComplete: function () {
      animateHeart();
    }
  });
});

$(function () {
  TweenMax.to("body", 10, { backgroundPositionY: -100, repeat: -1, ease: Power0.easeNone });



  $("#submitBtn").click(function(e){
    var name= $("#username").val();
    var date= $("#dateOfBirth").val();    
    if(name==''){alert("Bạn chưa nhập họ và tên..?");}
    else if(date==''){alert("Bạn chưa nhập ngày-tháng-năm..?");}    
    else{
      // https://thansohoc.me/?fullname=Tr%E1%BA%A7n%20L%C3%AA%20Anh%20V%C5%A9&birthday=10%2F01%2F1999
      var params = {
        fullname: name,
        birthday: date
      };

      var queryString = Object.keys(params).map((key) => {
        return encodeURIComponent(key) + '=' + encodeURIComponent(params[key])
      }).join('&');
      window.open('https://thansohoc.me/?' + queryString, '_blank');

    }
 });
})