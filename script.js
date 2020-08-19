let el = document.querySelector(".dropdown-content");  
let opened = false;  

window.onclick = function(e) {     
  if (e.target.matches(".heyhey") && !opened) {
      console.log("You clicked the dropdown menu");         
      el.style.display = "block"; // Shows the element       
      opened = !opened;         
      e.preventDefault(); // Prevents propagation  
   } else {         
      opened = false;         
      console.log("You clicked somewhere else");         
      el.style.display = "none";  
     
  } 
}