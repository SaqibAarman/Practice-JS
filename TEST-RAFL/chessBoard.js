// Declare variables for Knight's X coordinate and Y coordinate
let knightX, knightY;
// Create function for input
function setKnightPosition(x, y) {
  // Validate inputs
  if (x < 0 || x > 7 || y < 0 || y > 7) {
    console.log("Invalid position!");
  } else {
    // Set coordinates
    knightX = x;
    knightY = y;
    console.log("Knight position is set to " + x + ", " + y);
  }
} // Call input function
setKnightPosition(3, 5);
