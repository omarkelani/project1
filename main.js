  let stars = document.getElementById('stars');
  let moon = document.getElementById('moon');
  let mountains3 = document.getElementById('mountains3');
  let mountains4 = document.getElementById('mountains4');
  let river = document.getElementById('river');
  let boat = document.getElementById('boat');
  let YOUMNATY = document.querySelector('.YOUMNATY');
  window.onscroll = function() {
    let value = scrollY
    stars.style.left = value + 'px';
    moon.style.top = value * 3 + 'px';
    mountains3.style.top = value * 2 + 'px';
    mountains4.style.top = value * 1.5 + 'px';
    river.style.top = value  + 'px';
    boat.style.top = value + 'px';
    boat.style.left = value * 3 + 'px';
    YOUMNATY.style.fontSize = value  + 'px';
    if(scrollY >= 67){
      YOUMNATY.style.fontSize = 67 + 'px';
      YOUMNATY.style.position = 'fixed';
      if(scrollY >= 478){
        YOUMNATY.style.display = 'none';
      } else {
        YOUMNATY.style.display = 'block';
      }
    }
    
  }
var acc = document.getElementsByClassName("according");
var i;

for (i = 0; i < acc.length; i++){
  acc[i].addEventListener("click", function() {
    
      this.classList.toggle("active");
      this.parentElement.classList.toggle("active")
      var Pannel = this.nextElementSibling;

      if(Pannel.style.display ==="block"){
        Pannel.style.display = "none";
      } else {
        Pannel.style.display = "block";
      }

    })
}