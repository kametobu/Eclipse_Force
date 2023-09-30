function createStars(i) {
    for (var i; i; i--) {
      drawStars();
    }
  }
  
  function drawStars(){
    var tmpStar = document.createElement('figure')
    tmpStar.className = "star";
    tmpStar.style.top = 100*Math.random()+'%';
    tmpStar.style.left = 100*Math.random()+'%';
    document.getElementById('stars').appendChild(tmpStar);
  }
  
  function selectStars() {
      stars = document.querySelectorAll(".star");
    console.log(stars)
  }
  
  function animateStars() {
        Array.prototype.forEach.call(stars, function(el, i){
        TweenMax.to(el, Math.random() * 0.5 + 0.5, {opacity: Math.random(), onComplete: animateStars});
      });
  }
  
  createStars(200);
  selectStars();
  animateStars();
  