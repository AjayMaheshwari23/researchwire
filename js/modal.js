// Get the modal
var modal = document.getElementById("myModal");

const arr = [ "images/interesting/amazon_sketch.png" ,
            "images/interesting/foldable_sketch.png" , 
            "images/interesting/glens_sketch.jpeg" ,
            "images/interesting/drone_sketch.jpeg",
            "images/interesting/Chef_sketch.jpeg" ,
            "images/interesting/LG-Patent-Pet-Bath.png" ,
            "images/interesting/Microsoft-Patent-AR-GLASSES-WITH-PREDICTIVE-CONTROL-OF-EXTERNAL-DEVICE-BASED-ON-EVENT-INPUT.png" ,
            "images/interesting/Apple-Patent-Virtual-Paper.png",
            "images/interesting/Ratheon-Patent-Shroud-driven-deployable-flight-surfaces-and-method-2.png",
            "images/interesting/Disney-Patent-Techniques-for-automatically-removing-content-from-closed-caption-data-embedded-in-a-video-signal.png",
        ]  

// Get the image and insert it inside the modal - use its "alt" text as a caption
var img = document.getElementById("myImg");
// console.log(img);
var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");
// img.onclick = function(){
    const pop_me_up = (arg) =>{
        console.log(arg);
  modal.style.display = "block";
  modalImg.src = arr[arg-1];
  captionText.innerHTML = alt;
}

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() { 
  modal.style.display = "none";
}