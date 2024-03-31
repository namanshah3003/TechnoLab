
  function countTo1230() {
    var countDisplay = document.getElementById("counter-up-client");
    var count = 1;
    updateCount1();
    function updateCount1() {
      countDisplay.textContent = count;
      count++;
      if (count <= 1230) {
        setTimeout(updateCount1, 0.0005); // Update every 0.0005 milliseconds
      }
    }


  }

  function countTo4800() {
    var countDisplay = document.getElementById("counter-up-project");
    var count = 1;
    updateCount2();

    function updateCount2() {
      countDisplay.textContent = count;
      count++;
      if (count <= 4800) {
        setTimeout(updateCount2, 0.0005); 
      }
    }

  }

  function countTo10() {
    var countDisplay = document.getElementById("counter-up-year");
    var count = 1;
    updateCount3();

    function updateCount3() {
      countDisplay.textContent = count;
      count++;
      if (count <= 10) {
        setTimeout(updateCount3, 300);
      }
    }

  }

  // Call the function when the page loads
  window.onload = function() {
    countTo1230();
    countTo4800();
    countTo10();
  };