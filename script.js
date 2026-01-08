document.getElementById("toggle-style").addEventListener("click", () => {
    const link = document.getElementById("theme");
    const current = link.getAttribute("href");
  
    if (current === "style.css") {
      link.setAttribute("href", "style_2.css");
      localStorage.setItem("siteStyle", "style_2.css");
    } else {
      link.setAttribute("href", "style.css");
      localStorage.setItem("siteStyle", "style.css");
    }
  });

  document.addEventListener("DOMContentLoaded", () => {
    const savedStyle = localStorage.getItem("siteStyle");
    const link = document.getElementById("theme");
    if(savedStyle){
      link.setAttribute("href", savedStyle);
    }
    else{
      link.setAttribute("href", "style.css");
    }
  });