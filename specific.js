// specific page part
let req = new XMLHttpRequest();
req.open("get", "podcast.json");
req.send();
console.log(window.location.href);
// Get the hash portion of the URL
let hash = window.location.hash; // Output: #2

// Extract only the number part from the hash
let number = hash.replace("#", ""); // Output: 2

console.log(number); // Output: 2

req.onreadystatechange = function () {
  if (this.readyState == 4 && this.status === 200) {
    let jsDate = JSON.parse(this.responseText);
    let count =0;
    for (let i = 0; i < jsDate.length; i++) {
      for (let j = 0; j < jsDate[i].podcasts.length; j++) {
          count++;
          if (jsDate[i].podcasts[j].pod_id ==number){
            if(jsDate[i].podcasts[j].guest_name!=""){
            console.log(jsDate[i].podcasts[j].guest_name);
            }
            console.log(jsDate[i].podcasts[j].pod_name);
            console.log(jsDate[i].podcasts[j].pod_img);
            console.log(jsDate[i].podcasts[j].pod_audio);

            let row = document.createElement("div");
            row.id = "sec2";
            row.className = "row";
  
            let container = document.createElement("div");
            container.className = "container";
  
            let card = document.createElement("div");
            card.className = "card";
            card.id = "back";
  
            let image = document.createElement("img");
            // pod image-------------------------------------------
            image.src = jsDate[i].podcasts[j].pod_img;
            image.id = "img-card";
            image.className = "card-img-top";
  
            let cardBody = document.createElement("div");
            cardBody.className = "card-body";
  
            // guest name------------------------------------
            let h5 = document.createElement("h5");
            h5.className = "card-title";
            h5.style = "color: white";
            if(jsDate[i].podcasts[j].guest_name!=""){
              h5.innerText = jsDate[i].podcasts[j].guest_name;
              } 
            // pod name----------------------------------------
            let p = document.createElement("p");
            p.className = "card-text";
            p.innerText = jsDate[i].podcasts[j].pod_name;
  
            //pod audio -------------------------------------------------------
            let audio = document.createElement("audio");
            audio.id = "song";
            audio.type="audio/mp3"
            audio.src = jsDate[i].podcasts[j].pod_audio;

          //design
          let input = document.createElement("input");
          input.type = "range";
          input.id = "rang1";
          input.value = 0;

          let br = document.createElement("br");

          let div = document.createElement("div");
          div.className = "controls";

          // let img1 = document.createElement("img");
          // img1.src = "img/back.png";

          let img2 = document.createElement("img");
          img2.src = "img/play.png";
          img2.className = "play";
          img2.id = "ctrlImg";
          img2.style="position:relative;left:23%"

          // let img3 = document.createElement("img");
          // img3.src = "img/next.png";
          document.body.appendChild(row);
          row.appendChild(container);
          container.appendChild(card);
          card.appendChild(image);
          card.appendChild(cardBody);
          cardBody.appendChild(h5);
          cardBody.appendChild(p);
          cardBody.appendChild(audio);
          cardBody.appendChild(input);
          cardBody.appendChild(br);
          cardBody.appendChild(div);
          // div.appendChild(img1);
          div.appendChild(img2);
          // div.appendChild(img3);

            
          }
      }
    }
    
  }

// music part ------------------------------------------------------------
let progress = document.getElementById("rang1");
let song = document.getElementById("song");
let ctrlImg = document.getElementById("ctrlImg");
// let controls = document.querySelector(".controls");
song.onloadeddata = function () {
  progress.max = song.duration;
  progress.value = song.currentTime;
};
ctrlImg.addEventListener("click", function () {
  togglePlayPause();
});
function togglePlayPause() {
  if (song.paused) {
    song.play();
    ctrlImg.src = "img/pause-button1.png";
  } else {
    song.pause();
    ctrlImg.src = "img/play.png";
  }
}
if (song.play()) {
  setInterval(() => {
    progress.value = song.currentTime;
  }, 500);
}
progress.onchange = function () {
  //for range
  song.play();
  song.currentTime = progress.value;
  ctrlImg.src = "img/pause-button1.png";
};


};

