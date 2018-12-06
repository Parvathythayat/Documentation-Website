

    function changeClass(){
      document.getElementById("more").className = "row";
      document.getElementById("showmore").style.display="none";
        document.getElementById("showless").style.display="inline-block";

        // Code examples from above
      }
        function showLess(){
          document.getElementById("more").className = "hidden";
          document.getElementById("showmore").style.display="inline-block";
          document.getElementById("showless").style.display="none";
        }






function myFunction() {
    var popup = document.getElementById("myPopup");
    popup.classList.toggle("show");
}
