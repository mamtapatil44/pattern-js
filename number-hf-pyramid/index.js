
function numberhfpyramid(h){
    for(let i =1; i <=h ;i++){
     let row ='';
        for(let j =1; j<=i;j++){
          row += j;
        }
      console.log(row)
    }

}
numberhfpyramid(7)
console.log("=============================")

function invertednumberhfpyramid(h){
    for(let i=h; i>=1 ;i--){
     let row ='';
        for(let j =1; j<=i;j++){
          row += j;
        }
      console.log(row)
    }

}

invertednumberhfpyramid(7)