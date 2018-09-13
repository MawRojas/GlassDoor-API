var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
const fs = require('fs');
const multer = require("multer");

router.use(bodyParser.urlencoded({ extended: true }));
router.use(bodyParser.json());

const upload = multer({
    dest: "/path/to/temporary/directory/to/store/uploaded/files"
});

router.post("/upload/:name", upload.single("file"), (req, res) => {
      const tempPath = req.file.path;
      const targetPath = path.join(__dirname, ("./files/" + req.param.name));
  
      if (path.extname(req.file.originalname).toLowerCase() === ".png") {
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
            .end("Only .png files are allowed!");
        });
      }
    }
);

router.get('/get/:name', (req, res) => {
    res.sendFile(path.join(__dirname, ("./files/" + req.param.name)));
});