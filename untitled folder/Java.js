<script>
  var i = 0;  // Start point
  var images = [];
  var time = 3000;

  // Image List
  image[0] = "AJ1.jpg";
  image[1] = "AJ2.jpg";
  image[2] = "AJ3.jpg";
  image[3] = "AJ4.jpg";
  image[4] = "AJ5.jpg";

  //Change Image
  function changeImg(){
    document.slide.src = images[i];

    if(i < images.length - 1){
      i++;
    } else {
      i = 0;
    }

    setTimeout("changeImg()", time);
  }

  window.onload = changeImg;

</script>
