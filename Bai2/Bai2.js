// let N = prompt('Nhap gia tri N')
	
// 	// N = parseInt(N)
	
// 	for( let i=0;i<N;i++) {
		
// 		for( let j=0;j<=i;j++) {
// 			document.writeln(" * ")
// 		}
// 		document.writeln("<br/>")
// 	}

    function NumberOneTriangle(num){
        listNum=[];
        for(let i = 1; i <= num; i++){
            for(let j = i; j <= i; j++){
                
                listNum.push('*');
            }   
            console.log(String(listNum))
        }
    }
    
    NumberOneTriangle(7);