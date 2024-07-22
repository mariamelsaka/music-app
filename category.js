// import { arrOfBtns } from './exportedData.js';
let arrOfBtns = [];
let req = new XMLHttpRequest();
req.open("get", "podcast.json");
req.send();
console.log(req);
let jsData;
req.onreadystatechange = function () {
  
  if (this.readyState == 4 && this.status === 200) {
    let jsDate = JSON.parse(this.responseText);
    let row = document.createElement("div");
    row.className = "row";
    row.id = "sec2";
  
    document.body.appendChild(row);
    for (let i = 0; i < jsDate.length; i++) {
      // console.log(jsDate[i].podcast_name);
      // console.log(jsDate[i].host_name);
      // console.log(jsDate[i].podcasts);

      let col = document.createElement("div");
      col.className = "col-lg-4 col-md-4 col-sm-12";

      let card = document.createElement("card");
      card.className = "card";
      card.id = "back";
      // style
      card.style = "width: 18rem;margin-left: 12%;";

      let img = document.createElement("img");
      img.src = jsDate[i].podcast_image;
      img.id = "img-card";
      img.className = "card-img-top";

      let cardBody = document.createElement("div");
      cardBody.className = "card-body";

      let podcastName = document.createElement("h5");
      let podName = document.createTextNode(`بودكاست ${jsDate[i].podcast_name}`);
      podcastName.className = "card-title";
      // style
      podcastName.style = "color: white;";

      let hostName = document.createElement("p");
      let hostName2 = document.createTextNode(jsDate[i].host_name);
      hostName.className = "card-text";
    // Dynamically generate unique ID for the button
      let buttonId = "btn" + jsDate[i].id;

      arrOfBtns.push(buttonId);
      let button = document.createElement("button");
      // button.id = "btn2";
      button.id = buttonId;
      button.style=`
      box-sizing: border-box;
      background: linear-gradient(274deg, #baeaffc8 0%, #3f8caec8 100%);
      border: 1px solid #000000;
      border-radius: 5px;
      width: 112px;
      height: 40px;
      line-height: 14px;
      margin-left: 23%;
      margin-top: 1%;`
      let anchor = document.createElement("a");      
      // anchor.href="specific copy.html";
      anchor.className = "card-text";
      anchor.id = "card-text";
      let aTxt = document.createTextNode(" اضغط هنا للمزيد ");

      row.appendChild(col);
      col.appendChild(card);
      card.appendChild(img);
      card.appendChild(cardBody);
      cardBody.appendChild(podcastName);
      cardBody.appendChild(hostName);
      cardBody.appendChild(button);
      podcastName.appendChild(podName);
      hostName.appendChild(hostName2);
      button.appendChild(anchor);
      anchor.appendChild(aTxt);

      // categories
      // console.log(jsDate[i].podcasts);

      let clickBtn = document.getElementById(buttonId);
  
      clickBtn.onclick = function () {
        // dynamic------------------------------------------------
        for (let j = 0; j < jsDate[i].podcasts.length; j++) {
          let categories = document.createElement("div");
          categories.id = "categories";
          let anchor2 = document.createElement("a");
          
          //SPECIFIC PAGE
          anchor2.href = `specific.html#${jsDate[i].podcasts[j].pod_id}`;

          let card2 = document.createElement("div");
          card2.className = "card shadow";
          card2.style = "margin-bottom: 20px;";
          let row2 = document.createElement("div");
          row2.id = "cate";
          row2.className = "row";

          let col3 = document.createElement("div");
          col3.className = "col-lg-3 col-md-3 col-sm-3";
          let img2 = document.createElement("img");
          img2.src = jsDate[i].podcasts[j].pod_img;
          img2.style = "width:100%;height:100%";
          // console.log(jsDate[i].podcasts[j].pod_img);
          // console.log(jsDate[i].podcasts[j].pod_name);
          let col9 = document.createElement("div");
          col9.className = "col-lg-9 col-md-9 col-sm-9";
          let text = document.createElement("p");
          text.style = "font-family: head_font2";
          let inTxt = document.createTextNode(jsDate[i].podcasts[j].pod_name);
          col3.appendChild(img2);
          col9.appendChild(text);
          text.appendChild(inTxt);
          col.appendChild(categories);
          categories.appendChild(anchor2);
          anchor2.appendChild(card2);
          card2.appendChild(row2);
          row2.appendChild(col3);
          row2.appendChild(col9);
          
        }
        
      };
      
    }
    
  }
  
};




