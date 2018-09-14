var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
const fs = require('fs');
const multer = require("multer");
const path = require("path");

router.use(bodyParser.json({ limit: '50mb' }));
router.use(bodyParser.urlencoded({ limit: '50mb', extended: true }));

const upload = multer({
    dest: "../../files/"
});

const handleError = (err, res) => {
  res
    .status(500)
    .contentType("text/plain")
    .end("Oops! Something went wrong!");
};

router.post("/upload/:name", upload.single("file"), (req, res) => {
      const tempPath = req.file.path;
      const targetPath = path.join(__dirname, ("../../files/" + req.params.name));
      console.log('Name of picture: ' + req.params.name);
      console.log(path.extname(req.file.originalname).toLowerCase());
      console.log('File path: '+ tempPath);
      console.log('Target path' + targetPath);
  
      if (path.extname(req.file.originalname).toLowerCase() === ".png" || path.extname(req.file.originalname).toLowerCase() === ".jpg") {
        fs.rename(tempPath, targetPath, err => {
          if (err) return handleError(err, res);
          res
            .status(200)
            .contentType("text/plain")
            .end("File uploaded!");
        });
      } else {
        fs.unlink(tempPath, err => {
          if (err) return handleError(err, res);
          res
            .status(403)
            .contentType("text/plain")
            .end("Only .png or .jpg files are allowed!");
        });
      }
    }
);

router.get('/get/:name', (req, res) => {
    res.sendFile(path.join(__dirname, ("../../files/" + req.params.name)));
});

router.get('/path/:name', (req, res) => {
  var picture_path = path.join(__dirname, ("../../files/" + req.params.name));
  console.log(picture_path);
  res.send(picture_path);
});

module.exports = router;