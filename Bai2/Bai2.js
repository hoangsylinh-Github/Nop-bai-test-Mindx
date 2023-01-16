function NumberOneTriangle(num){
    listNum=[];
    for(let i = 1; i <= num; i++){
        for(let j = i; j <= i; j++){
            
            listNum.push(' * ');
        }   
        console.log(String(listNum))
    }
}

NumberOneTriangle(7);