import $ from 'jquery';
import _ from 'lodash';
import '../css/main.css';


// Create the elements
const elements = [
  $('<p>').text('Holberton Dashboard'),
  $('<p>').text('Dashboard data for the students'),
  $('<button>').text('Click here to get started'),
  $('<p>').attr('id', 'count'),
  $('<p>').text('Copyright - Holberton School'),
];

// Add the elements to the body of the page
$('body').append(elements);

// Define the updateCounter function
let count = 0;
function updateCounter() {
  count += 1;
  $('#count').text(`${count} clicks on the button`);
}

// Bind the updateCounter function to the button click event using Lodash's debounce function
$('button').on('click', _.debounce(updateCounter, 500));


