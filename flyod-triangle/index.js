function flyodTriangle(h){
    let number =1;
    for(let i=1; i <=h;i++){
        let row ='';
        for(let j= 1;j<=i;j++){
            row += number+" ";
            number++;

        }
        console.log(row)

    }

}
flyodTriangle(5)
console.log("==============finish===================")
function zOneTrinagle(h){
    for(let i=1; i <=h;i++){
        let row ='';
        for(let j= 1;j<=i;j++){
           
            if((i+j)%2 ===0){
                row += "1"

            }else{
                row += "0"
            }
            

        }
        console.log(row)

    }
}

zOneTrinagle(5)