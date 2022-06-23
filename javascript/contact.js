'use strict';
window.addEventListener("DOMContentLoaded", function() {

    // get the form elements defined in your form HTML above
    
    var form = document.getElementById("contact_form");
    var button = document.getElementById("contact_form_btn");
    var status = document.getElementById("contact_form_status");
  
    // Success and Error functions for after the form is submitted
    
    function success() {
      form.reset();
      status.innerHTML = "Danke! Sie werden bald von mir hören";
    }
  
    function error() {
      status.innerHTML = "Oops! There was a problem.";
    }
  
    // handle the form submission event
  
    form.addEventListener("submit", function(ev) {
      ev.preventDefault();
      //var data = new FormData(form);
      //ajax(form.method, form.action, data, success, error);
      var name = document.querySelector('#name').value;
      var emailFrom = document.querySelector('#email').value;
      var subject = document.querySelector('#subject').value;
      var message = document.querySelector('#message').value;
      sendEmail(emailFrom, subject, name.concat(":").concat(message))
    });
  });
    
  // helper function for sending an AJAX request
  
  function ajax(method, url, data, success, error) {
    var xhr = new XMLHttpRequest();
    xhr.open(method, url);
    xhr.setRequestHeader("Accept", "application/json");
    xhr.onreadystatechange = function() {
      if (xhr.readyState !== XMLHttpRequest.DONE) return;
      if (xhr.status === 200) {
        success(xhr.response, xhr.responseType);
      } else {
        error(xhr.status, xhr.response, xhr.responseType);
      }
    };
    xhr.send(data);
  }

  // Intgration of Email elastic

  function sendEmail(from, subject, body){
    Email.send({
      Host : "smtp25.elasticemail.com",
      Username : "romeokamgo@gmail.com",
      Password : "C45104FB2A81D7C192737B55CBAC1CBDADCB",
      To : 'astride11_goufack@yahoo.com',
      From : from,
      Subject : subject,
      Body : body
  }).then(
    message => alert(message)
  );
  }