;(function() {
  
  'use strict';

  // set localStorage
  document.getElementById("filename").addEventListener("click", function() {
    var filename = document.getElementById("filename").value;
    var text = document.getElementById("text");
    
    

    window.localStorage.setItem("filename", filename)
  });

  // when window loads get localStorage
  window.onload = function() {
    if (window.localStorage.getItem("filename")) {
      var localText = window.localStorage.getItem("filename");
      var select = document.getElementById("filename").options;
      const selectDOM = document.getElementById("filename-sender");
      $("#filename option").each(function() {
        if ($(this).val() == localText) {
          $(this).attr("selected", "selected");
        };
      });
      var node = document.createTextNode(localText + " script was loaded.");
      text.appendChild(node); 
      
      text.style.font = "bold 20px arial,serif";
      selectDOM.style.font = "14px arial,serif";

      // load script
      $.getScript(localText, function() {
        console.log('%c%s', 'color: #ffffff; background: green; font-size: 20px;', localText + " script was loaded.");
      });
    }
  };
})();
