const express = require("express");

const ffmpeg = require("fluent-ffmpeg");

const fileUpload = require("express-fileupload");

const easypdfmerge = require('easy-pdf-merge');

const path = require('path');

var compress_images = require('compress-images');

const fs = require("fs");

const sharp = require('sharp');


const imagemin = require('imagemin');

const mozjpeg = require('imagemin-mozjpeg');

const jimp = require('jimp');

const app = express();

app.set("view engine", "ejs");

app.use(
  fileUpload({
    useTempFiles: true,
    tempFileDir: "/tmp/"
  })
);

ffmpeg.setFfmpegPath("C:/ffmpeg/bin/ffmpeg.exe");

ffmpeg.setFfprobePath("C:/ffmpeg/bin");

ffmpeg.setFlvtoolPath("C:/flvtool");

app.post("/mp3tomp4", (req, res) => {

  let file = req.files.mp3tomp4;

  // doing the validation of the user uploaded file

  if (String(file.mimetype).match('audio/mp3')) {

    res.contentType("video/mp4");
    res.attachment("output.mp4");

    file.mv("tmp/" + file.name, function (err) {
      if (err) return res.sendStatus(500).send(err);
      console.log("File Uploaded successfully");
    });
    ffmpeg("tmp/" + file.name)
      .toFormat("avi")
      .on("end", function (stdout, stderr) {
        console.log("Finished");
        fs.unlink("tmp/" + file.name, function (err) {
          if (err) throw err;
          console.log("File deleted");
        });
      })
      .on("error", function (err) {
        console.log("an error happened: " + err.message);
        fs.unlink("tmp/" + file.name, function (err) {
          if (err) throw err;
          console.log("File deleted");
        });
      })
      .pipe(
        res,
        { end: true }
      );
  }
});

app.post("/mp4tomp3", (req, res) => {

  console.log("requested");

  console.log(req.files.mp4tomp3);

  let file = req.files.mp4tomp3;

  // doing the validation of the user uploaded file
  if (String(file.mimetype).match('video/mp4')) {

    res.contentType("audio/mp3");
    res.attachment("output.mp3");

    file.mv("tmp/" + file.name, function (err) {
      if (err) return res.sendStatus(500).send(err);
      console.log("File Uploaded successfully");
    });
    ffmpeg("tmp/" + file.name)
      .toFormat("mp3")
      .on("end", function (stdout, stderr) {
        console.log("Finished");
        fs.unlink("tmp/" + file.name, function (err) {
          if (err) throw err;
          console.log("File deleted");
        });
      })
      .on("error", function (err) {
        console.log("an error happened: " + err.message);
        fs.unlink("tmp/" + file.name, function (err) {
          if (err) throw err;
          console.log("File deleted");
        });
      })
      .pipe(
        res,
        { end: true }
      );
  }
});

app.post("/avitomp4", (req, res) => {

  console.log("requested");

  console.log(req.files.avitomp4);

  let file = req.files.avitomp4;

  // doing the validation of the user uploaded file
  if (String(file.mimetype).match('video/avi')) {

    res.contentType("video/mp4");
    res.attachment("output.mp4");

    file.mv("tmp/" + file.name, function (err) {
      if (err) return res.sendStatus(500).send(err);
      console.log("File Uploaded successfully");
    });
    ffmpeg("tmp/" + file.name)
      .toFormat("avi")
      .on("end", function (stdout, stderr) {
        console.log("Finished");
        fs.unlink("tmp/" + file.name, function (err) {
          if (err) throw err;
          console.log("File deleted");
        });
      })
      .on("error", function (err) {
        console.log("an error happened: " + err.message);
        fs.unlink("tmp/" + file.name, function (err) {
          if (err) throw err;
          console.log("File deleted");
        });
      })
      .pipe(
        res,
        { end: true }
      );
  }
});


// avi to mp3 post request


app.post("/avitomp3", (req, res) => {

  console.log("requested");

  console.log(req.files.avitomp3);

  let file = req.files.avitomp3;

  // doing the validation of the user uploaded file
  if (String(file.mimetype).match('video/avi')) {

    res.contentType("audio/mp3");
    res.attachment("output.mp3");

    file.mv("tmp/" + file.name, function (err) {
      if (err) return res.sendStatus(500).send(err);
      console.log("File Uploaded successfully");
    });
    ffmpeg("tmp/" + file.name)
      .toFormat("mp3")
      .on("end", function (stdout, stderr) {
        console.log("Finished");
        fs.unlink("tmp/" + file.name, function (err) {
          if (err) throw err;
          console.log("File deleted");
        });
      })
      .on("error", function (err) {
        console.log("an error happened: " + err.message);
        fs.unlink("tmp/" + file.name, function (err) {
          if (err) throw err;
          console.log("File deleted");
        });
      })
      .pipe(
        res,
        { end: true }
      );
  }
});

app.post("/mp4toavi", (req, res) => {

  console.log("requested");

  console.log(req.files.mp4toavi);

  let file = req.files.mp4toavi;

  // doing the validation of the user uploaded file
  if (String(file.mimetype).match('video/mp4')) {

    res.contentType("video/avi");
    res.attachment("output.avi");

    file.mv("tmp/" + file.name, function (err) {
      if (err) return res.sendStatus(500).send(err);
      console.log("File Uploaded successfully");
    });
    ffmpeg("tmp/" + file.name)
      .toFormat("avi")
      .on("end", function (stdout, stderr) {
        console.log("Finished");
        fs.unlink("tmp/" + file.name, function (err) {
          if (err) throw err;
          console.log("File deleted");
        });
      })
      .on("error", function (err) {
        console.log("an error happened: " + err.message);
        fs.unlink("tmp/" + file.name, function (err) {
          if (err) throw err;
          console.log("File deleted");
        });
      })
      .pipe(
        res,
        { end: true }
      );
  }
});


app.post("/mp3toavi", (req, res) => {

  console.log("requested");

  console.log(req.files.mp3toavi);

  let file = req.files.mp3toavi;

  // doing the validation of the user uploaded file
  if (String(file.mimetype).match('video/mp3')) {

    res.contentType("video/avi");
    res.attachment("output.avi");

    file.mv("tmp/" + file.name, function (err) {
      if (err) return res.sendStatus(500).send(err);
      console.log("File Uploaded successfully");
    });
    ffmpeg("tmp/" + file.name)
      .toFormat("avi")
      .on("end", function (stdout, stderr) {
        console.log("Finished");
        fs.unlink("tmp/" + file.name, function (err) {
          if (err) throw err;
          console.log("File deleted");
        });
      })
      .on("error", function (err) {
        console.log("an error happened: " + err.message);
        fs.unlink("tmp/" + file.name, function (err) {
          if (err) throw err;
          console.log("File deleted");
        });
      })
      .pipe(
        res,
        { end: true }
      );
  }
});


app.post("/avitoflv", (req, res) => {

  console.log("requested");

  console.log(req.files.avitoflv)

  let file = req.files.avitoflv;

  // doing the validation of the user uploaded file
  if (String(file.mimetype).match('video/avi')) {

    res.contentType("video/flv");
    res.attachment("output.flv");

    file.mv("tmp/" + file.name, function (err) {
      if (err) return res.sendStatus(500).send(err);
      console.log("File Uploaded successfully");
    });
    ffmpeg("tmp/" + file.name)
      .toFormat("flv")
      .on("end", function (stdout, stderr) {
        console.log("Finished");
        fs.unlink("tmp/" + file.name, function (err) {
          if (err) throw err;
          console.log("File deleted");
        });
      })
      .on("error", function (err) {
        console.log("an error happened: " + err.message);
        fs.unlink("tmp/" + file.name, function (err) {
          if (err) throw err;
          console.log("File deleted");
        });
      })
      .pipe(
        res,
        { end: true }
      );
  }
});


app.post("/flvtoavi", (req, res) => {

  console.log("requested");

  console.log(req.files.flvtoavi)

  let file = req.files.flvtoavi;

  // doing the validation of the user uploaded file
  if (String(file.mimetype).match('application/octet-stream')) {

    res.contentType("video/avi");
    res.attachment("output.avi");

    file.mv("tmp/" + file.name, function (err) {
      if (err) return res.sendStatus(500).send(err);
      console.log("File Uploaded successfully");
    });
    ffmpeg("tmp/" + file.name)
      .toFormat("avi")
      .on("end", function (stdout, stderr) {
        console.log("Finished");
        fs.unlink("tmp/" + file.name, function (err) {
          if (err) throw err;
          console.log("File deleted");
        });
      })
      .on("error", function (err) {
        console.log("an error happened: " + err.message);
        fs.unlink("tmp/" + file.name, function (err) {
          if (err) throw err;
          console.log("File deleted");
        });
      })
      .pipe(
        res,
        { end: true }
      );
  }
});


app.post("/flvtomp3", (req, res) => {

  console.log("requested");

  let file = req.files.flvtomp3;

  // doing the validation of the user uploaded file
  if (String(file.mimetype).match('application/octet-stream')) {

    res.contentType("audio/mp3");
    res.attachment("output.mp3");

    file.mv("tmp/" + file.name, function (err) {
      if (err) return res.sendStatus(500).send(err);
      console.log("File Uploaded successfully");
    });
    ffmpeg("tmp/" + file.name)
      .toFormat("mp3")
      .on("end", function (stdout, stderr) {
        console.log("Finished");
        fs.unlink("tmp/" + file.name, function (err) {
          if (err) throw err;
          console.log("File deleted");
        });
      })
      .on("error", function (err) {
        console.log("an error happened: " + err.message);
        fs.unlink("tmp/" + file.name, function (err) {
          if (err) throw err;
          console.log("File deleted");
        });
      })
      .pipe(
        res,
        { end: true }
      );
  }
});


app.post("/flvtomp4", (req, res) => {

  console.log("requested");

  let file = req.files.flvtomp4;

  // doing the validation of the user uploaded file
  if (String(file.mimetype).match('application/octet-stream')) {

    res.contentType("video/mp4");
    res.attachment("output.mp4");

    file.mv("tmp/" + file.name, function (err) {
      if (err) return res.sendStatus(500).send(err);
      console.log("File Uploaded successfully");
    });
    ffmpeg("tmp/" + file.name)
      .toFormat("avi")
      .on("end", function (stdout, stderr) {
        console.log("Finished");
        fs.unlink("tmp/" + file.name, function (err) {
          if (err) throw err;
          console.log("File deleted");
        });
      })
      .on("error", function (err) {
        console.log("an error happened: " + err.message);
        fs.unlink("tmp/" + file.name, function (err) {
          if (err) throw err;
          console.log("File deleted");
        });
      })
      .pipe(
        res,
        { end: true }
      );
  }
});


app.post("/mp4toflv", (req, res) => {

  console.log("requested");

  let file = req.files.mp4toflv;

  // doing the validation of the user uploaded file
  if (String(file.mimetype).match('video/mp4')) {

    res.contentType("video/flv");
    res.attachment("output.flv");

    file.mv("tmp/" + file.name, function (err) {
      if (err) return res.sendStatus(500).send(err);
      console.log("File Uploaded successfully");
    });
    ffmpeg("tmp/" + file.name)
      .toFormat("flv")
      .on("end", function (stdout, stderr) {
        console.log("Finished");
        fs.unlink("tmp/" + file.name, function (err) {
          if (err) throw err;
          console.log("File deleted");
        });
      })
      .on("error", function (err) {
        console.log("an error happened: " + err.message);
        fs.unlink("tmp/" + file.name, function (err) {
          if (err) throw err;
          console.log("File deleted");
        });
      })
      .pipe(
        res,
        { end: true }
      );
  }
});


app.post("/mp3toflv", (req, res) => {

  console.log("requested");

  let file = req.files.mp3toflv;

  // doing the validation of the user uploaded file
  if (String(file.mimetype).match('audio/mp3')) {

    res.contentType("video/flv");
    res.attachment("output.flv");

    file.mv("tmp/" + file.name, function (err) {
      if (err) return res.sendStatus(500).send(err);
      console.log("File Uploaded successfully");
    });
    ffmpeg("tmp/" + file.name)
      .toFormat("flv")
      .on("end", function (stdout, stderr) {
        console.log("Finished");
        fs.unlink("tmp/" + file.name, function (err) {
          if (err) throw err;
          console.log("File deleted");
        });
      })
      .on("error", function (err) {
        console.log("an error happened: " + err.message);
        fs.unlink("tmp/" + file.name, function (err) {
          if (err) throw err;
          console.log("File deleted");
        });
      })
      .pipe(
        res,
        { end: true }
      );
  }
});


app.post("/mutevideo", (req, res) => {

  console.log("requested");

  let file = req.files.mutevideo;

  // doing the validation of the user uploaded file
  if (String(file.mimetype).match('video/mp4') || String(file.mimetype).match('video/avi') || String(file.mimetype).match('octet/application-stream')) {

    res.contentType("video/mp4");
    res.attachment("output.mp4");

    file.mv("tmp/" + file.name, function (err) {
      if (err) return res.sendStatus(500).send(err);
      console.log("File Uploaded successfully");
    });
    ffmpeg("tmp/" + file.name)
      .noAudio()
      .format('avi')
      .on("end", function (stdout, stderr) {
        console.log("Finished");
        fs.unlink("tmp/" + file.name, function (err) {
          if (err) throw err;
          console.log("File deleted");
        });
      })
      .on("error", function (err) {
        console.log("an error happened: " + err.message);
        fs.unlink("tmp/" + file.name, function (err) {
          if (err) throw err;
          console.log("File deleted");
        });
      })
      .pipe(
        res,
        { end: true }
      );
  }
});


app.post("/instagramvideo", (req, res) => {

  console.log("requested");

  let file = req.files.instagramvideo;

  // doing the validation of the user uploaded file
  if (String(file.mimetype).match('video/mp4') || String(file.mimetype).match('video/avi') || String(file.mimetype).match('octet/application-stream')) {

    res.contentType("video/mp4");
    res.attachment("output.mp4");

    file.mv("tmp/" + file.name, function (err) {
      if (err) return res.sendStatus(500).send(err);
      console.log("File Uploaded successfully");
    });
    ffmpeg("tmp/" + file.name)
      .size('1080x1350')
      .autoPad()
      .audioQuality(0)
      .format('avi')
      .on("end", function (stdout, stderr) {
        console.log("Finished");
        fs.unlink("tmp/" + file.name, function (err) {
          if (err) throw err;
          console.log("File deleted");
        });
      })
      .on("error", function (err) {
        console.log("an error happened: " + err.message);
        fs.unlink("tmp/" + file.name, function (err) {
          if (err) throw err;
          console.log("File deleted");
        });
      })
      .pipe(
        res,
        { end: true }
      );
  }
});



app.post("/trimvideo", (req, res) => {

  console.log("requested");

  let file = req.files.trimvideo;

  // doing the validation of the user uploaded file
  if (String(file.mimetype).match('video/mp4') || String(file.mimetype).match('video/avi') || String(file.mimetype).match('octet/application-stream')) {

    res.contentType("video/mp4");
    res.attachment("output.mp4");

    let start = req.body.start;

    let duration = req.body.duration;

    file.mv("tmp/" + file.name, function (err) {
      if (err) return res.sendStatus(500).send(err);
      console.log("File Uploaded successfully");
    });
    ffmpeg("tmp/" + file.name)
      .setStartTime(start)
      .duration(duration)
      .audioQuality(0)
      .format('avi')
      .on("end", function (stdout, stderr) {
        console.log("Finished");
        fs.unlink("tmp/" + file.name, function (err) {
          if (err) throw err;
          console.log("File deleted");
        });
      })
      .on("error", function (err) {
        console.log("an error happened: " + err.message);
        fs.unlink("tmp/" + file.name, function (err) {
          if (err) throw err;
          console.log("File deleted");
        });
      })
      .pipe(
        res,
        { end: true }
      );
  }
});


app.post("/takescreenshot", (req, res) => {

  console.log("requested");

  let file = req.files.takescreenshot;

  // doing the validation of the user uploaded file
  if (String(file.mimetype).match('video/mp4') || String(file.mimetype).match('video/avi') || String(file.mimetype).match('octet/application-stream')) {

    res.contentType("video/mp4");
    res.attachment("output.mp4");

    let second = req.body.second;

    file.mv("tmp/" + file.name, function (err) {
      if (err) return res.sendStatus(500).send(err);
      console.log("File Uploaded successfully");
    });
    ffmpeg("tmp/" + file.name)
      .takeScreenshots({
        count: 1,
        timemarks:[second]
      }, 'tmp/', function (err) {
          
      })
      .on("end", function (stdout, stderr) {
        console.log("Finished");
        fs.unlink("tmp/" + file.name, function (err) {
          if (err) throw err;
          console.log("File deleted");
        });
      })
      .on("error", function (err) {
        console.log("an error happened: " + err.message);
        fs.unlink("tmp/" + file.name, function (err) {
          if (err) throw err;
          console.log("File deleted");
        });
      })
      .pipe(
        res,
        { end: true }
      );
  }
});


app.post("/mergevideos", async (req, res) => {

  console.log("requested");

  console.log(req.files.firstvideo);

  let first = req.files.firstvideo;

  let second = req.files.secondvideo;

  // doing the validation of the user uploaded file
  //if ((String(first.mimetype).match('video/mp4') || String(first.mimetype).match('video/avi') || String(first.mimetype).match('octet/application-stream')) && (String(second.mimetype).match('video/mp4') || String(second.mimetype).match('video/avi') || String(second.mimetype).match('octet/application-stream'))) {

    res.contentType("video/mp4");
  res.attachment("output.mp4");
  
  let firstPath = "tmp/" + Date.now() + first.name;
  let secondpath = "tmp/" + Date.now() + second.name;
  let mergedpath = "output/" + Date.now() + "merged.mp4";
    first.mv(firstPath, function (err) {
      if (err) return res.sendStatus(500).send(err);
      console.log("File Uploaded successfully");
    });

    second.mv(secondpath, function (err) {
      if (err) return res.sendStatus(500).send(err);
      console.log("File Uploaded successfully");
    })

     await ffmpeg()
      .mergeAdd(firstPath)
      .mergeAdd(secondpath)
      .format('avi')
      .mergeToFile("merged.mp4","output/")
      .on("end", function (stdout, stderr) {
        console.log("Finished");
        res.download(mergedpath);
        /*fs.unlink("tmp/" + first.name, function (err) {
          if (err) throw err;
          console.log("File deleted");
        });
        fs.unlink("tmp/" + second.name, function (err) {
          if (err) throw err;
          console.log("File deleted");
        });*/
      })
      .on("error", function (err) {
        console.log("an error happened: " + err.message);
        fs.unlink("tmp/" + first.name, function (err) {
          if (err) throw err;
          console.log("File deleted");
        });

        fs.unlink("tmp/" + second.name, function (err) {
          if (err) throw err;
          console.log("File deleted");
        });

      })
      .pipe(
        res,
        { end: true }
      );
  }
);

app.post("/pngtojpg", async (req, res) => {

  var png = req.files.pngtojpg;

  if (String(png.mimetype).match("image/png")) {
    

    const image = await jimp.read(png.tempFilePath);

    var imagePath = 'tmp/' + Date.now() + 'output.jpg';

    await image
      .quality(100) // set JPEG quality
      .writeAsync(imagePath);

    res.download(imagePath);
  }
  else {
    res.send("Please upload a png file");
  }
});

app.post("/pngtobmp", async (req, res) => {

  var png = req.files.pngtobmp;

  if (String(png.mimetype).match("image/png")) {
  
    var imagePath = 'tmp/' + Date.now() + 'output.bmp';

    const jpgimage = await jimp.read(png.tempFilePath);

    await jpgimage
      .quality(100) // set JPEG quality
      .writeAsync(imagePath);

    res.download(imagePath);
  }
  else {
    res.send("Please upload a png file");
  }
});


app.post("/pngtotiff", async (req, res) => {

  var png = req.files.pngtotiff;

  if (String(png.mimetype).match("image/png")) {
  
    var imagePath = 'tmp/' + Date.now() + 'output.tiff';

    const jpgimage = await jimp.read(png.tempFilePath);

    await jpgimage
      .quality(100) // set JPEG quality
      .writeAsync(imagePath);

    res.download(imagePath);
  }
  else {
    res.send("Please upload a png file");
  }
});


app.post("/compresspng", async (req, res) => {

  var png = req.files.compresspng;

  if (String(png.mimetype).match("image/png")) {
  
    var imagePath = 'tmp/' + Date.now() + png.name;

    png.mv(imagePath, function (err) {
      if (err) throw err;
      console.log("File Uploaded");
    })

    input = 'tmp/**/*.{jpg,JPG,jpeg,JPEG,png,svg,gif}';
    OUTPUT_path = 'output/';
    
    await compress_images(input, OUTPUT_path, {compress_force: false, statistic: true, autoupdate: true}, false,
                                                {jpg: {engine: 'mozjpeg', command: ['-quality', '60']}},
                                                {png: {engine: 'pngquant', command: ['--quality=20-50']}},
                                                {svg: {engine: 'svgo', command: '--multipass'}},
                                                {gif: {engine: 'gifsicle', command: ['--colors', '64', '--use-col=web']}}, function(error, completed, statistic){
                console.log('-------------');
                //console.log(error);
                //console.log(completed);
                console.log(statistic.path_out_new);
                console.log('-------------');      
                res.download(statistic.path_out_new);                                  
    });
  }
  else {
    res.send("Please upload a png file");
  }
});


app.post("/compressjpg", async (req, res) => {

  var jpg = req.files.compressjpg;

  if (String(jpg.mimetype).match("image/jpeg") || String(jpg.mimetype).match("image/jpg")){
    console.log(req.files.compressjpg);
    
    let pathImage = "tmp/" + Date.now() + jpg.name;
    jpg.mv(pathImage, function (err) {
      if (err) throw err;
      console.log("File Uploaded");
    })

    input = 'tmp/**/*.{jpg,JPG,jpeg,JPEG,png,svg,gif}';
    OUTPUT_path = 'output/';
    
    await compress_images(input, OUTPUT_path, {compress_force: false, statistic: true, autoupdate: true}, false,
                                                {jpg: {engine: 'mozjpeg', command: ['-quality', '60']}},
                                                {png: {engine: 'pngquant', command: ['--quality=20-50']}},
                                                {svg: {engine: 'svgo', command: '--multipass'}},
                                                {gif: {engine: 'gifsicle', command: ['--colors', '64', '--use-col=web']}}, function(error, completed, statistic){
                console.log('-------------');
                //console.log(error);
                //console.log(completed);
                console.log(statistic.path_out_new);
                console.log('-------------');      
                res.download(statistic.path_out_new);                                  
    });


  }
  else {
    res.send("Please upload a jpg file");
  }
});


app.post("/compressgif", async (req, res) => {

  var gif = req.files.compressgif;

  if (String(gif.mimetype).match("image/gif")){
    
    let pathImage = "tmp/" + Date.now() + gif.name;
    gif.mv(pathImage, function (err) {
      if (err) throw err;
      console.log("File Uploaded");
    })

    input = 'tmp/**/*.{jpg,JPG,jpeg,JPEG,png,svg,gif}';
    OUTPUT_path = 'output/';
    
    await compress_images(input, OUTPUT_path, {compress_force: false, statistic: true, autoupdate: true}, false,
                                                {jpg: {engine: 'mozjpeg', command: ['-quality', '60']}},
                                                {png: {engine: 'pngquant', command: ['--quality=20-50']}},
                                                {svg: {engine: 'svgo', command: '--multipass'}},
                                                {gif: {engine: 'gifsicle', command: ['--colors', '64', '--use-col=web']}}, function(error, completed, statistic){
                console.log('-------------');
                //console.log(error);
                //console.log(completed);
                console.log(statistic.path_out_new);
                console.log('-------------');      
                res.download(statistic.path_out_new);                                  
    });


  }
  else {
    res.send("Please upload a gif file");
  }
});


app.post("/compresssvg", async (req, res) => {

  var svg = req.files.compresssvg;

  if (String(svg.mimetype).match("image/svg")){
    
    let pathImage = "tmp/" + Date.now() + svg.name;
    svg.mv(pathImage, function (err) {
      if (err) throw err;
      console.log("File Uploaded");
    })

    input = 'tmp/**/*.{jpg,JPG,jpeg,JPEG,png,svg,gif}';
    OUTPUT_path = 'output/';
    
    await compress_images(input, OUTPUT_path, {compress_force: false, statistic: true, autoupdate: true}, false,
                                                {jpg: {engine: 'mozjpeg', command: ['-quality', '60']}},
                                                {png: {engine: 'pngquant', command: ['--quality=20-50']}},
                                                {svg: {engine: 'svgo', command: '--multipass'}},
                                                {gif: {engine: 'gifsicle', command: ['--colors', '64', '--use-col=web']}}, function(error, completed, statistic){
                console.log('-------------');
                //console.log(error);
                //console.log(completed);
                console.log(statistic.path_out_new);
                console.log('-------------');      
                res.download(statistic.path_out_new);                                  
    });


  }
  else {
    res.send("Please upload a svg file");
  }
});


app.post("/mergepdf", async (req, res) => {

  var firstpdf = req.files.firstpdffile;

  var secondpdf = req.files.secondpdffile;

  if (String(firstpdf.mimetype).match("application/pdf") && String(secondpdf.mimetype).match("application/pdf")){
    
    let firstpdfpath = "tmp/" + Date.now() + firstpdf.name;
    let secondpdfpath = "tmp/" + Date.now() + secondpdf.name; 
    let dest_file_path = "output/" + Date.now() + "output.pdf";

    firstpdf.mv(firstpdfpath, function (err) {
      if (err) throw err;
      console.log("File Uploaded");
    })

    secondpdf.mv(secondpdfpath, function (err) {
      if (err) throw err;
      console.log("File Uploaded");
    })

    await easypdfmerge([firstpdfpath,secondpdfpath],dest_file_path,function(err){
      if(err) {
        return console.log(err)
      }
      console.log('Success')
      res.download(dest_file_path);
    });

    console.log(response);
    

  }
  else {
    res.send("Please upload a PDF file");
  }
});




app.get("/",(req, res) => {
  
  res.render("pages/index", {
    viewTitle: "Indian Desi Tools - Online Tools for Any Services",
    home: true
  });
  
});

app.get("/compressgif", (req, res) => {
  res.render("pages/compressgif", ({
    viewTitle: "Compress GIF Images Online - Indian Desi Tools",
    home:true
  }))
})

app.get("/compresssvg", (req, res) => {
  res.render("pages/compresssvg", ({
    viewTitle: "Compress SVG Images Online - Indian Desi Tools",
    home:true
  }))
})

app.get('/pngtojpg', (req, res) => {
  res.render("pages/pngtojpg", {
    viewTitle: "Convert PNG to JPG Online - Indian Desi Tools",
    home:true
  })
})

app.get('/pngtobmp', (req, res) => {
  res.render("pages/pngtobmp", {
    viewTitle: "Convert PNG to BMP Online - Indian Desi Tools",
    home:true
  })
})

app.get('/pngtotiff', (req, res) => {
  res.render("pages/pngtotiff", {
    viewTitle: "Convert PNG to TIFF Online - Indian Desi Tools",
    home:true
  })
})


app.get('/compresspng', (req, res) => {
  res.render("pages/compresspng", {
    viewTitle: "Compress PNG Images Online - Indian Desi Tools",
    home:true
  })
})

app.get('/compressjpg', (req, res) => {
  res.render("pages/compressjpg", {
    viewTitle: "Compress JPG Images Online - Indian Desi Tools",
    home:true
  })
})


app.get("/mp3tomp4", (req, res) => {
  res.render("pages/mp3tomp4", {
    viewTitle: "Mp3 to Mp4 Online Converter - Indian Desi Tools",
    home: false
  });
});

app.get("/mp4tomp3", (req, res) => {
  res.render("pages/mp4tomp3", {
    viewTitle: "Mp4 to Mp3 Online Converter - Indian Desi Tools",
    home: false
  });
});

app.get("/avitomp4", (req, res) => {
  res.render("pages/avitomp4", {
    viewTitle: "AVI to Mp4 Online Converter - Indian Desi Tools",
    home: false
  });
});

app.get("/avitomp3", (req, res) => {
  res.render("pages/avitomp3", {
    viewTitle: "AVI to Mp3 Online Converter - Indian Desi Tools",
    home: false
  });
});

app.get("/mp4toavi", (req, res) => {
  res.render("pages/mp4toavi", {
    viewTitle: "Mp4 to AVI Online Converter - Indian Desi Tools",
    home: false
  });
});

app.get("/mp3toavi", (req, res) => {
  res.render("pages/mp3toavi", {
    viewTitle: "Mp3 to AVI Online Converter - Indian Desi Tools",
    home: false
  });
});

app.get("/avitoflv", (req, res) => {
  res.render("pages/avitoflv", {
    viewTitle: "Mp3 to AVI Online Converter - Indian Desi Tools",
    home: false
  });
});


app.get("/flvtoavi", (req, res) => {
  res.render("pages/flvtoavi", {
    viewTitle: "FLV to AVI Online Converter - Indian Desi Tools",
    home: false
  });
});

app.get("/flvtomp3", (req, res) => {
  res.render("pages/flvtomp3", {
    viewTitle: "FLV to Mp3 Online Converter - Indian Desi Tools",
    home: false
  });
});

app.get("/flvtomp4", (req, res) => {
  res.render("pages/flvtomp4", {
    viewTitle: "FLV to MP4 Online Converter - Indian Desi Tools",
    home: false
  });
});

app.get("/mp3toflv", (req, res) => {
  res.render("pages/mp3toflv", {
    viewTitle: "MP3 to FLV Online Converter - Indian Desi Tools",
    home: false
  });
});

app.get("/mp4toflv", (req, res) => {
  res.render("pages/mp4toflv", {
    viewTitle: "MP4 to FLV Online Converter - Indian Desi Tools",
    home: false
  });
});

app.get("/mutevideo", (req, res) => {
  res.render("pages/mutevideo", {
    viewTitle: "Remove Noise From Video - Indian Desi Tools",
    home:false
  })
})

app.get("/instagramvideo", (req, res) => {
  res.render("pages/instagramvideo", {
    viewTitle: "Change Video to Instagram Size Video - Indian Desi Tools",
    home:false
  })
})

app.get('/trimvideo', (req, res) => {
  res.render("pages/trimvideo", ({
    viewTitle: "Trim and Cut Parts of Video - Indian Desi Tools",
    home:false
  }))
})

app.get("/mergepdf", (req, res) => {
  res.render("pages/mergepdf", ({
    viewTitle: "Merge Multiple PDF Documents - Indian Desi Tools",
    home:false
  }))
})

app.get('/takescreenshot', (req, res) => {
  res.render("pages/takescreenshot", ({
    viewTitle: "Take Screenshot of Video at Certain Time - Indian Desi Tools",
    home:false
  }))
})

app.get('/mergevideos', (req, res) => {
  res.render("pages/mergevideos", ({
    viewTitle: "Merge Multiple Videos at Once - Indian Desi Tools",
    home:false
  }))
})

app.listen(5000, () => {
  console.log("Server is listening on Port 5000");
});


