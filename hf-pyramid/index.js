function hfpyramid(n){

    for(let i =1; i <=n; i++){
        let col = '';
        for(let j=1;j<=i;j++){
         col += '*'
        }
        console.log(col)
    }

}
hfpyramid(6)
console.log("==================================")
function ultaHfPyramid(n){
    for(let i=n; i>=1; i--){
        let row = '';
        for(let j=1;j<=i;j++){
            row += '*'
        }
        console.log(row)
    }

}

ultaHfPyramid(6)