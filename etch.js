'use strict';
// Add Event Listeners here:
let numCells = 8;

function changeOnHover() {
  $('.cell').hover(function() {
    $(this).addClass('active');
  });
}

function redrawGrid() {
  $('button').click(() => {
    createAndPlaceRows(numCells);
    changeOnHover();
  });
}

// When DOM is ready:
$(() => {
  createAndPlaceRows(numCells);
  // Bind your event listeners here:
  changeOnHover();
  redrawGrid();
});

// ===============================
// Code below is to automate grid creation
// You can ignore this!
// ===============================
function createRow(cellCount) {
  let row = '<div class="row">';
  let str = '<div class="cell">&nbsp;</div>';
  for (let i = 0; i < cellCount; i++) {
    row += str;
  }
  row += '</div>';
  return row;
}

function createRows(n) {
  let rows = '';
  for (let i = 0; i < n; i++) {
    rows += createRow(n);
  }
  return rows;
}

function createAndPlaceRows(n) {
  $('.cell').remove(); // Clear all current cells and listeners
  const rows = createRows(n);
  $('.grid').html(rows);
  const cells = $('.cell');
  cells.css({ height: cells.width() });
}
