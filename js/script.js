const path = window.location.pathname;

if (path.includes('sobre.html')){

} else {

(function () {
  const second = 1000,
        minute = second * 60,
        hour = minute * 60,
        day = hour * 24;

  //I'm adding this section so I don't have to keep updating this pen every year :-)
  //remove this if you don't need it
  let today = new Date(),
      dd = String(today.getDate()).padStart(2, "0"),
      mm = String(today.getMonth() + 1).padStart(2, "0"),
      yyyy = today.getFullYear(),
      nextYear = yyyy,
      dayMonth = "11/23/",
      birthday = dayMonth + yyyy;
  
  today = mm + "/" + dd + "/" + yyyy;
  if (today > birthday) {
    birthday = dayMonth + nextYear;
  }
  //end
  
  const countDown = new Date(birthday).getTime(),
      x = setInterval(function() {    

        const now = new Date().getTime(),
              distance = countDown - now;

          document.getElementById("days").innerText = Math.floor(distance / (day)),
          document.getElementById("hours").innerText = Math.floor((distance % (day)) / (hour)),
          document.getElementById("minutes").innerText = Math.floor((distance % (hour)) / (minute)),
          document.getElementById("seconds").innerText = Math.floor((distance % (minute)) / second);

        //do something later when date is reached
        if (distance < 0) {
          document.getElementById("headline").innerText = "Tá na Hora do Pau Quebrar!";
          document.getElementById("countdown").style.display = "none";
          document.getElementById("content").style.display = "flex";
          document.getElementById("content").style.justifyContent = "center";
          clearInterval(x);
        }
        //seconds
      }, 0)
  }());

(function(){
  // const slide_1 = document.getElementById('slide_1');
  // const slide_2 = document.getElementById('slide_2');
  // const slide_3 = document.getElementById('slide_3');
  // const slide_4 = document.getElementById('slide_4');
  // const slide_5 = document.getElementById('slide_5');

  var numActive = 1;

  x = setInterval(function() {
    if (numActive > 5) {
      numActive = 1;
    }

    console.log("to no " + numActive);

    for (var i = 1; i <= 5; i++) {
      let string = "slide_" + i;

      if(i == numActive){
        document.getElementById(string).style.display = 'flex';  
      } else {
        document.getElementById(string).style.display = 'none';
      }
      
    }
  
    numActive+=1
  }, 10000)

}());

(function() {
  const images = document.querySelectorAll('.img_slide');

  function updateImages() {
    const windowSize = window.innerWidth;

    if (windowSize < 769) {
      images.forEach(img => {
        img.src = 'src/bannerL.png';
      });

    } else {
      images.forEach(img => {
        img.src = 'src/banner.png';
      });
    }
  }

  updateImages();

  window.addEventListener('resize', updateImages);
})();
}