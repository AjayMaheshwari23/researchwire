// Get the modal
var modal = document.getElementById("myModall");

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


// Patent modals ENd


// Sector modals

const modalTriggerButtons = document.querySelectorAll("[data-modal-target]");
const modals = document.querySelectorAll(".modal");
const modalCloseButtons = document.querySelectorAll(".modal-close");

modalTriggerButtons.forEach(elem => {
  elem.addEventListener("click", event => toggleModal(event.currentTarget.getAttribute("data-modal-target")));
});
modalCloseButtons.forEach(elem => {
  elem.addEventListener("click", event => toggleModal(event.currentTarget.closest(".modal").id));
});
modals.forEach(elem => {
  elem.addEventListener("click", event => {
    if(event.currentTarget === event.target) toggleModal(event.currentTarget.id);
  });
});

// Maybe also close with "Esc"...
document.addEventListener("keydown", event => {
  if(event.keyCode === 27 && document.querySelector(".modal.modal-show")) {
    toggleModal(document.querySelector(".modal.modal-show").id);
  }
});

function toggleModal(modalId) {
  const modal = document.getElementById(modalId);

  if(getComputedStyle(modal).display==="flex") { // alternatively: if(modal.classList.contains("modal-show"))
    modal.classList.add("modal-hide");
    setTimeout(() => {
      document.body.style.overflow = "initial"; // Optional: in order to enable/disable page scrolling while modal is hidden/shown - in this case: "initial" <=> "visible"
      modal.classList.remove("modal-show", "modal-hide");
      modal.style.display = "none";      
    }, 200);
  }
  else {
    document.body.style.overflow = "hidden"; // Optional: in order to enable/disable page scrolling while modal is hidden/shown
    modal.style.display = "flex";
    modal.classList.add("modal-show");
  }
}