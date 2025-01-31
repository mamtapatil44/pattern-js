
function printSolidRectangle(height, width) {
    // outer loop iterates through rows
    let pattern ='';
    for (let i = 0; i < height; i++) {
        let row = '';
        // inner loop iterates through columns
        for (let j = 0; j < width; j++) {
            row += "*"; 
          
        }
        // after each row  we need break the line
         pattern += row + '\n';
    }

    return pattern
   
}

const result = printSolidRectangle(4, 5);
console.log(result)
