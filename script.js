// Copyright (c) 2023 Olantu All rights reserved
//
// Created by: Olantu
// Created on:May 2023
// This file contains the JS functions for index.html

"use strict";
/**
 * This function displays the triangle of numbers
 */
window.addEventListener('DOMContentLoaded', function() {
  // Get references to the input and container elements
  var numRowsInput = document.getElementById('numrows');
  var triangleContainer = document.getElementById('triangleContainer');

  // Attach an event listener to the input for dynamic updates
  numRowsInput.addEventListener('input', generateTriangle);

  // Function to generate the number triangle
  function generateTriangle() {
    var numRows = numRowsInput.value;
    triangleContainer.innerHTML = ''; // Clear previous triangle

    // Loop to generate each row of the triangle
    for (var i = 1; i <= numRows; i++) {
      var row = document.createElement('div');
      row.className = 'row';

      // Loop to generate each number in the row
      for (var j = 1; j <= i; j++) {
        var number = document.createElement('span');
        number.className = 'number';
        number.textContent = j;
        row.appendChild(number);
      }

      triangleContainer.appendChild(row); // Add row to the triangle container
    }
  }

  generateTriangle(); // Generate the initial number triangle
});
