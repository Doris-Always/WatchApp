function clickToSelectFileCam(){
    const cam = document.getElementById("forImage");
    const vid = document.getElementById("forVideo");

    cam.addEventListener ("click" , async function() {
    let stream = await navigator.mediaDevices.getUserMedia({image: true, video: true, audio: false})
    cam.srcObject = stream;

    });
    vid.addEventListener('click' , async function(){
        let stream = await navigator.mediaDevices.getUserMedia({video: true, audio: true});
        vid.srcObject = stream;
          
    });    
   
}
clickToSelectFileCam();

// function dropDown(){
//     let drop = document.querySelector(".accord");
//     let down = document.querySelector(".down");

//     down.addEventListener("click",function(){
//     alert("hsjsjsks");
//     });
// }

// async function clickToSelectFileCam2(){
    //   const cam = document.getElementById("forImage");
    // const vid = document.getElementById("forVideo");
        
    // let stream = await navigator.mediaDevices.getUserMedia({image: true, video: true, audio: false})
    //  cam.srcObject = stream;
    // vid.addEventListener('click' , async function(){
    // let stream = await navigator.mediaDevices.getUserMedia({video: true, audio: true});
    // vid.srcObject = stream;
                  
    //  };  
    //  async function clickToSelectFileCam1(){
        //   const cam = document.getElementById("forImage");
        // const vid = document.getElementById("forVideo");
            
        // let stream = await navigator.mediaDevices.getUserMedia({image: true, video: true, audio: false})
        //  cam.srcObject = stream;
        // vid.addEventListener('click' , async function(){
        // let stream = await navigator.mediaDevices.getUserMedia({video: true, audio: true});
        // vid.srcObject = stream;
                      
        //  };  

//  const mybody = document.querySelector("body");

// mybody.addEventListener("click",function(e){
// if(e.target.classList.contains("forImage")){
    // const cam = document.getElementById("forImage");
    // clickToSelectFileCam2();
    // alert("hssgsgs");
// }
// if(e.target.classList.contains("forVideo")){
    // const vid = document.getElementById("forVideo");
    // clickToSelectFileCam1();
//     alert("hssgsgs");
// }
// if(e.target.classList.contains("angle-r")){
//     alert("wwwoooow!!!");
// }   
// });



