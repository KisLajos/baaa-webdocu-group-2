//my data list
let countrylist = [];
let template = "";

function getPersonDetails(countrycode) {
  fetch("https://poc-a-hontas.github.io/country/country.json")
    .then(function (data) {
      return data.json();
    })
    .then(function (post) {
      countrylist = post.countrylist;

      const myModal = document.getElementById("myModal");

      myModal.innerHTML = "";
      for (const person of countrylist) {
        if (countrycode === person.countrycode) {
          template =
            `<!-- Modal content -->
              <div class="modal-content">
                <div class="modal-header">
                  <span class="close">&times;</span>
                  <img class="img" src="/${person.image}" alt="img of a person">
                  <div class="info">
                    <h1 class="name">${person.name}</h1>
                    <p>
                      age: ${person.age}<br>
                      story: ${person.story}
                    </p>
                  </div>
                </div>
                
                <div class="modal-footer">
                  <div class="line-container">
                    <?xml version="1.0" encoding="utf-8"?>
                    <!-- Generator: Adobe Illustrator 26.1.0, SVG Export Plug-In . SVG Version: 6.00 Build 0)  -->
                    <svg viewBox="0 0 600 80" xml:space="preserve">
                      <path class="svg" stroke="black" fill="none" d="M0,17.57c12.07,3.88,31.55,8.87,55.78,9.05c30.53,0.22,36.93-7.43,66.33-6.79c13.08,0.29,43.36,0.95,70.21,15
                      c11.81,6.18,34.16,21.97,47.88,19.29c10.2-2,10.6-1,23.15-8.98c0.57-0.12,1.43-0.24,2.35,0c0.63,0.16,1.03,0.41,1.18,0.5
                      c1.71,0.97,5.58-0.37,5.89-0.5c3.14-1.33,16.48-13.3,27.47-15.3c4.63-1.28,7.97-2.8,10.2-3.99c2.28-1.21,4.71-2.21,7.06-3.33
                      c1.61-0.76,2.92-1.39,4.71-1.33c0.41,0.01,2.88,0.09,3.92,1.33c1.98,2.36-1.63,8.41-7.06,11.31c-2.75,1.47-5.47,1.87-7.06,2
                      c-1.71-0.17-4.33-0.63-7.06-2c-0.86-0.43-2.41-1.22-3.92-2.66c-1.86-1.77-1.44-2.41-3.14-3.99c-1.01-0.94-2.87-2.66-5.49-2.66
                      c-2.41,0-4.09,1.46-4.71,2c-0.35,0.3-2.79,2.41-2.35,4.66c0.81,4.19,11.05,5.76,11.77,4.66c0.18-0.28-0.2-0.78-0.78-1.33
                      c-0.55-0.03-1.37-0.05-2.35,0c-2.14,0.11-3.08,0.45-4.71,0.67c-1.04,0.14-0.79,0.02-5.49,0c-3.72-0.01-4.93,0.06-5.49-0.67
                      c-0.32-0.4-0.46-1.08-0.13-1.32c0.76-0.55,3.66,1.46,11.12,5.31c1.63,0.84,3.43,1.75,3.92,1.33c0.29-0.24,0.07-0.87-0.23-1.28
                      c-0.66-0.91-2.06-1.21-5.27-1.38c-1.79-0.09-4.19-0.15-7.06,0c-0.3-0.2-0.83-0.51-1.57-0.67c-1.87-0.4-3.44,0.53-3.92,0
                      c-0.17-0.19-0.15-0.5,0-0.67c0.23-0.26,0.86-0.28,1.57,0c2.33,0.75,4.17,1.45,5.49,2c1.29,0.52,1.84,0.8,2.35,1.33
                      c0.83,0.87,0.71,1.54,1.57,2c0.85,0.45,2.11,0.4,2.35,0c0.26-0.43-0.68-1.24-0.78-1.33c-1.43-1.21-3.73-1.06-8.63-0.67
                      c-5.99,0.48-7.93,0.68-8.04,0.34c-0.08-0.25,0.76-0.83,1.76-1c3.32-0.56,7.48,3.61,7.85,3.99c0.74,0.75,1.64,1.84,3.14,2
                      c0.63,0.07,1.42-0.03,1.46-0.24c0.11-0.52-4.36-2.43-9.31-2.42c-3.43,0-6.51,0.92-7.06,0c-0.13-0.22-0.07-0.48,0-0.67
                      c0.58-0.09,1.4-0.15,2.35,0c2.17,0.34,3.48,1.55,3.92,2c0,0,3.92,4.66,5.49,3.33c0.11-0.09,0.18-0.21,0.17-0.29
                      c-0.01-0.61-2.89-1.43-15.09-2.37c-0.15-0.37-0.08-0.56,0-0.67c0.34-0.45,1.6-0.29,2.35,0c1.44,0.54,1.91,1.87,2.35,2.66
                      c1.65,2.93,6.06,4.02,8.63,4.66c4.75,1.17,8.65,0.35,10.2,0c1.56-0.35,5.44-0.96,5.73-2.46c0.01-0.06,0.1-0.55-0.23-0.87
                      c-0.31-0.3-0.9-0.39-3.14,0c-0.78,0.13-1.86,0.34-3.14,0.67c-1.26,0.97-1.78,1.64-1.57,2c0.4,0.7,3.54,0.25,9.42-1.33
                      c0,0,6.28-2,9.42,0c3.14,2,20.41,2.66,26.69-5.32c0,0,3.14,11.31-7.06,13.3c-10.2,2-19.62,7.98-19.62,7.98s-32.18,15.96-61.22,6.65
                      c0,0-10.99-3.99-3.92-13.97c0,0-5.49,5.99,25.12,6.65c30.61,0.67,58.87-17.29,58.87-17.29s1.57-1.33,3.92-11.97
                      c1.4-6.33,2.8-9.36,5.19-10.93c1.5-0.98,3.32-1.49,6.58-1.71c11.46-0.79,27.15,3.02,28.26,9.31c0.02,0.11,0.28,1.76-0.78,3.33
                      c-2.22,3.25-9.07,4.48-11.3,2.3c-1.15-1.13-0.98-3.07-0.47-4.29c0.61-1.47,1.86-2.33,2.35-2.66c9.13-6.08,16.48-8.65,16.48-8.65
                      c9.12-3.18,13.68-4.77,18.84-5.99c4.03-0.95,8.95-1.91,14.65-2.59c0,0,4.06-0.49,8.11-0.73c13.33-0.8,43.44,7.12,55.45,9.07
                      c22.88,3.71,27.72-6.52,63.32-10.18c14.47-1.49,36.46-2.15,64.82,3.39" />
                    </svg>
                  </div>
                </div>
              </div>
              `

          myModal.insertAdjacentHTML("beforeend", template);

          /* // Get the modal
          var modal = document.getElementById("myModal");

          // Get the button that opens the modal
          var btn = document.getElementById("country");

          // Get the <span> element that closes the modal
          var span = document.getElementsByClassName("close")[0];

          // When the user clicks the button, open the modal 
          btn.onclick = function () {
            modal.style.display = "block";
          }

          // When the user clicks on <span> (x), close the modal
          span.onclick = function () {
            modal.style.display = "none";
          }

          // When the user clicks anywhere outside of the modal, close it
          window.onclick = function (event) {
            if (event.target == modal) {
              modal.style.display = "none";
            }
          } */

          // Grab the modal and display it
          //var modal = document.getElementById("myModal");
          myModal.style.display = "block";

          // When the user clicks on <span> (x), close the modal
          var span = document.getElementsByClassName("close")[0];
          span.onclick = function () {
            myModal.style.display = "none";
          }

          // When the user clicks anywhere outside of the modal, close it
          window.onclick = function (event) {
            if (event.target == myModal) {
              myModal.style.display = "none";
            }
          }
        }
      }
    })
}