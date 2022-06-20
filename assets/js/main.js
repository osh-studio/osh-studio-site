// function formSubmit(event) {
//     var url = "https://studio.us13.list-manage.com/subscribe/post?u=b6e6e8aafcf46407b042fba60&amp;id=902ad9814c";
//     var request = new XMLHttpRequest();
//     request.open('POST', url, true);
//     request.onload = function() { // request successful
//     // we can use server response to our request now
//       console.log(request.responseText);
//     };
  
//     request.onerror = function() {
//       // request failed
//     };
  
//     request.send(new FormData(event.target)); // create FormData from form that triggered event
//     event.preventDefault();
//   }
  
// document.getElementById('mc-embedded-subscribe-form').addEventListener("submit", formSubmit);