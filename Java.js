function dahmer() {
       
    document.getElementById("jeffrey").src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXuQAalKISAdoL2b0OCoiBGyKcwTZw1p96CA&usqp=CAU";
    
}

var dahmer=["https://www.latercera.com/resizer/ULEwcOQrpaBlhPi_bTwqlA1shYc=/900x600/smart/cloudfront-us-east-1.images.arcpublishing.com/copesa/LDY4UNACXBD5JLTMRVYILYFNZ4.jpg","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQi4Gi1gWzCReEv1XWi_B-3K6fJnF1luiSvL9MgC2VD5UCmqe54hOd9t-4gYKsvwsQuOIE&usqp=CAU",
"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtc7W77bTr9cqqogEQQpy7iAHR566qZc_7oaotyX9TRAL4ST5H_7A-LxllzCtvl-RJZo8&usqp=CAU"];

var jeffrey=0;

function jefery() {
    jeffrey=jeffrey+1;
    document.getElementById("dahmer").src=dahmer[jeffrey];
    if (jeffrey==3){
        jeffrey=jeffrey-3;
    }
}