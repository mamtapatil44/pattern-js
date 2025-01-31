function hollowRect(h,w){
let pattrn =''
    for(let i=1; i <=h;i++){
        let col = '';
        for(let j=1; j<= w;j++){
            if(i == 1 || j === 1 || i === h || j === w){
                col += "*";
            } else{
                col += " ";
            }
            
        }
         pattrn += col + "\n"

    }

 console.log(pattrn)
}

hollowRect(5,5);