'use strict';

// sidebar custom
window.addEventListener("DOMContentLoaded", function() {
    // var button = document.getElementsByClassName('w3-bar-item');
    const sidebtns = document.querySelectorAll('.w3-padding-large');
    for(let i = 0; i < sidebtns.length; i++){
        sidebtns[i].addEventListener("click", function() {
            sidebtns[i].classList.toggle("sidebar_clicked");

            for (let j = 0; j < sidebtns.length; j++) {
                if(i!==j){
                    sidebtns[j].classList.remove("sidebar_clicked");
                }            
            }
        });
    }
  });