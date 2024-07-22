console.log(arrOfBtns);
console.log(location.href);
if(location.href.includes("#btn1")){
    console.log("yes");
}else{
    console.log("no");
};
let x=[1,2,3]
console.log(arrOfBtns.length);
console.log(arrOfBtns);
console.log(x.length);
console.log(x);

setTimeout(() => {
    console.log("arrbtn length after a timeout: ", arrOfBtns.length);
    for(let k=0;k<arrOfBtns.length;k++){
    console.log(arrOfBtns[k]);

    if(arrOfBtns[k].includes(jsDate[i].id)){
        console.log("yes");
    }else{
        console.log("no");
    };

}
}, 1000); // 1 second delay

console.log(arrOfBtns); // Check the content of arrbtn

let req = new XMLHttpRequest();
req.open("get", "podcast.json");
req.send();
req.onreadystatechange = function () {
  if (this.readyState == 4 && this.status === 200) {
    let jsDate = JSON.parse(this.responseText);
    for (let i = 0; i < jsDate.length; i++) {   
            if (location.href.includes(jsDate[i].id)) {
              console.log(jsDate[i].id);           
              console.log(jsDate[i].podcast_name); 
            //   break;          
            } else {
              console.log("no");
            }       
      }
    
  }
};

// ----------------------------------
          // let row = document.createElement("div");
          // row.id = "sec2";
          // row.className = "row";

          // let container = document.createElement("div");
          // container.className = "container";

          // let card = document.createElement("div");
          // card.className = "card";
          // card.id = "back";

          // let image = document.createElement("img");
          // image.src = jsDate[i].podcasts[j].pod_img;
          // image.id = "img-card";
          // image.className = "card-img-top";

          // let cardBody = document.createElement("div");
          // cardBody.className = "card-body";

          // let h5 = document.createElement("h5");
          // h5.className = "card-title";
          // h5.style = "color: white";
          // h5.innerText = jsDate[i].podcasts[j].guest_name;
          // let p = document.createElement("p");
          // p.className = "card-text";
          // p.innerText = jsDate[i].podcasts[j].pod_name;

          // // -------------------------------------------------------
          // let audio = document.createElement("audio");
          // audio.id = "song";
          // audio.src = jsDate[i].podcasts[j].pod_audio;
          // // -------------------------------------------------------

          // let input = document.createElement("input");
          // input.type = "range";
          // input.id = "rang1";
          // input.value = 0;

          // let br = document.createElement("br");

          // let div = document.createElement("div");
          // div.className = "controls";

          // let img1 = document.createElement("img");
          // img1.src = "img/back.png";

          // let img2 = document.createElement("img");
          // img2.src = "img/play.png";
          // img2.className = "play";
          // img2.id = "ctrlImg";

          // let img3 = document.createElement("img");
          // img3.src = "img/next.png";
          // document.body.appendChild(row);
          // row.appendChild(container);
          // container.appendChild(card);
          // card.appendChild(image);
          // card.appendChild(cardBody);
          // cardBody.appendChild(h5);
          // cardBody.appendChild(p);
          // cardBody.appendChild(audio);
          // cardBody.appendChild(input);
          // cardBody.appendChild(br);
          // cardBody.appendChild(div);
          // div.appendChild(img1);
          // div.appendChild(img2);
          // div.appendChild(img3);
