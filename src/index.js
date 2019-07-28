import React from "react";
import ReactDOM from "react-dom";
import * as cocoSsd from "@tensorflow-models/coco-ssd";
import "@tensorflow/tfjs";

import Dictionary from "./Dictionary"

import "./styles.css";

class App extends React.Component {
 
  videoRef = React.createRef();
  canvasRef = React.createRef();

  // 2019/07

  componentDidMount() {
    if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
      const webCamPromise = navigator.mediaDevices
        .getUserMedia({
          audio: false,
          video: {
            // facingMode: "user"
            facingMode: "environment"
          }
        })
        .then(stream => {
          window.stream = stream;
          this.videoRef.current.srcObject = stream;
          return new Promise((resolve, reject) => {
            this.videoRef.current.onloadedmetadata = () => {
              resolve();
            };
          });
        });

      // @tensorflow/COCOSSD 

      const modelPromise = cocoSsd.load();

      Promise.all([modelPromise, webCamPromise])        
        .then(values => {
          this.detectFrame(this.videoRef.current, values[0]);

          // console.log("DEV1",values[0])
        
        })
        .catch(error => {
          console.error(error);
        });
    }
  }

  detectFrame = (video, model) => {
    model.detect(video).then(predictions => {
     
      this.renderPredictions(predictions);
     
        console.log("render",model.detect(video));
      
        requestAnimationFrame(() => {
        this.detectFrame(video, model);
      });
    });
  };


    /*
  {
    bbox: [x, y, width, height],  // 物体を囲む境界ボックスのx値、y値、幅、高さ
    class: "person",   // 分類名
    [Dictionary]: *   // 辞書?      
    score: 0.8380282521247864     // そうである確率
  }
  */


  renderPredictions = predictions => {

    const ctx = this.canvasRef.current.getContext("2d");
   
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);

    // Font options.
    const font = "34px sans-serif";

    ctx.font = font;
    ctx.textBaseline = "top";

    predictions.forEach(prediction => {
      
      const x = prediction.bbox[0];
      const y = prediction.bbox[1];
     
      const width = prediction.bbox[2];
      const height = prediction.bbox[3];

      // Draw the bounding box.
      ctx.strokeStyle = "#00FFFF";
      ctx.lineWidth = 8;
      ctx.strokeRect(x, y, width, height);
      // Draw the label background.
      ctx.fillStyle = "#00FFFF";

      const textWidth = ctx.measureText(prediction.class).width;
      
      console.log("1",prediction.class);
      console.log("2",prediction.getLayer);
      const textHeight = parseInt(font, 24); // base 10
      ctx.fillRect(x, y, textWidth + 10, textHeight + 10);
 
    });

    
    
    predictions.forEach(prediction => {

      const x = prediction.bbox[0];
      const y = prediction.bbox[1];

      // Draw the text last to ensure it's on top.
      ctx.fillStyle = "#000000";
      
      // let dictionaryRef = this.state
      let dictionaryRef = Dictionary 
      

      // console.log("original",prediction.class);
      // console.log("dictionary",dictionaryRef);
      ctx.fillText(prediction.class, x, y);
      // ctx.fillText(dictionaryRef, x, y);

    });


  };

  render() {  
   

    return (
      <div>

        <Dictionary />

        <video
          className="size box PhotoGallery"
          autoPlay
          playsInline
          muted
          ref={this.videoRef}
          width="600"
          height="800"
        />
        <canvas
          className="size box PhotoGallery"
          ref={this.canvasRef}
          width="600"
          height="800"
        />

      </div>
    );
  }
}

const rootElement = document.getElementById("root");

ReactDOM.render(<App />, rootElement);
