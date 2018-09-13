var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');

router.use(bodyParser.urlencoded({ extended: true }));
router.use(bodyParser.json());

var ceo = require('../../models/company/company_ceos');
// CREATES A NEW CEO
router.post('/ceo', function (req, res) {
    ceo.create({
            first_name : req.body.first_name,
            last_name : req.body.last_name,
            title : req.body.title
        }, 
        function (err, ceo) {
            if (err) return res.status(500).send("There was a problem adding the ceo to the database.");
            res.status(200).send(ceo);
        });
});
// RETURNS ALL THE CEOS IN THE DATABASE
router.get('/ceo', function (req, res) {
    ceo.find({}, function (err, ceos) {
        if (err) return res.status(500).send("There was a problem finding the ceos.");
        res.status(200).send(ceos);
    });
});

// Returns a ceo given the id
router.get('/ceo/:id', function (req, res) {
    ceo.findById(req.params.id, function (err, ceos) {
        if (err) return res.status(500).send("There was a problem finding the ceos.");
        res.status(200).send(ceos);
    });
});

// Updates a ceo
router.put('/ceo/:id', function (req, res) {
    ceo.findByIdAndUpdate(req.params.id, req.body, function (err, post) {
      if (err) {
            res.status(500).send("There was a problem updating the ceo to the database.")
      }
      res.status(200).json(post);
    });
})
// Deletes a ceo
router.delete("/ceo/:id", function(req, res) {
    ceo.findByIdAndRemove(req.params.id, req.body, function (err, post) {
        if (err) {
              res.status(500).send("There was a problem removing the ceo to the database.")
        }
        res.status(200).json(post);
      });
})

var location = require('../../models/company/company_locations');
// Creates a new company location
router.post('/location', function (req, res) {
    location.create({
            name : req.body.name,
            address : req.body.address,
            city : req.body.city,
            zip_code: req.body.zip_code
        }, 
        function (err, ceo) {
            if (err) return res.status(500).send("There was a problem adding the ceo to the database.");
            res.status(200).send(ceo);
        });
});
// Returns all the locations in the database
router.get('/location', function (req, res) {
    location.find({}, function (err, ceos) {
        if (err) return res.status(500).send("There was a problem finding the ceos.");
        res.status(200).send(ceos);
    });
});

// Returns a location given the id
router.get('/location/:id', function (req, res) {
    location.findById(req.params.id, function (err, ceos) {
        if (err) return res.status(500).send("There was a problem finding the ceos.");
        res.status(200).send(ceos);
    });
});

// Updates a location
router.put('/location/:id', function (req, res) {
    location.findByIdAndUpdate(req.params.id, req.body, function (err, post) {
      if (err) {
            res.status(500).send("There was a problem updating the ceo to the database.")
      }
      res.status(200).json(post);
    });
})
// Deletes a location
router.delete("/location/:id", function(req, res) {
    location.findByIdAndRemove(req.params.id, req.body, function (err, post) {
        if (err) {
              res.status(500).send("There was a problem removing the ceo to the database.")
        }
        res.status(200).json(post);
      });
})

var benefit = require('../../models/company/company_benefits');
// Creates a new company benefit
router.post('/benefit', function (req, res) {
    benefit.create({
            country : req.body.country,
            title : req.body.title,
            description : req.body.description
        }, 
        function (err, ceo) {
            if (err) return res.status(500).send("There was a problem adding the ceo to the database.");
            res.status(200).send(ceo);
        });
});
// Returns all the benefits in the database
router.get('/benefit', function (req, res) {
    benefit.find({}, function (err, ceos) {
        if (err) return res.status(500).send("There was a problem finding the ceos.");
        res.status(200).send(ceos);
    });
});

// Returns a benefit given the id
router.get('/benefit/:id', function (req, res) {
    benefit.findById(req.params.id, function (err, ceos) {
        if (err) return res.status(500).send("There was a problem finding the ceos.");
        res.status(200).send(ceos);
    });
});

// Updates a benefit
router.put('/benefit/:id', function (req, res) {
    benefit.findByIdAndUpdate(req.params.id, req.body, function (err, post) {
      if (err) {
            res.status(500).send("There was a problem updating the ceo to the database.")
      }
      res.status(200).json(post);
    });
})
// Deletes a benefit
router.delete("/benefit/:id", function(req, res) {
    benefit.findByIdAndRemove(req.params.id, req.body, function (err, post) {
        if (err) {
              res.status(500).send("There was a problem removing the ceo to the database.")
        }
        res.status(200).json(post);
      });
})

var award = require('../../models/company/company_awards');
// Creates a new company award
router.post('/award', function (req, res) {
    award.create({
            name : req.body.name,
            source : req.body.source,
            year : req.body.year,
            website : req.body.website
        }, 
        function (err, ceo) {
            if (err) return res.status(500).send("There was a problem adding the ceo to the database.");
            res.status(200).send(ceo);
        });
});
// Returns all the awards in the database
router.get('/award', function (req, res) {
    award.find({}, function (err, ceos) {
        if (err) return res.status(500).send("There was a problem finding the ceos.");
        res.status(200).send(ceos);
    });
});

// Returns a award given the id
router.get('/award/:id', function (req, res) {
    award.findById(req.params.id, function (err, ceos) {
        if (err) return res.status(500).send("There was a problem finding the ceos.");
        res.status(200).send(ceos);
    });
});

// Updates a benefit
router.put('/award/:id', function (req, res) {
    award.findByIdAndUpdate(req.params.id, req.body, function (err, post) {
      if (err) {
            res.status(500).send("There was a problem updating the ceo to the database.")
      }
      res.status(200).json(post);
    });
})
// Deletes a benefit
router.delete("/award/:id", function(req, res) {
    award.findByIdAndRemove(req.params.id, req.body, function (err, post) {
        if (err) {
              res.status(500).send("There was a problem removing the ceo to the database.")
        }
        res.status(200).json(post);
      });
})

var photo = require('../../models/company/company_photos');
// Creates a new company photo
router.post('/photo', function (req, res) {
    photo.create({
            isFeatured : req.body.isFeatured,
            category : req.body.category,
            source : req.body.source
        }, 
        function (err, ceo) {
            if (err) return res.status(500).send("There was a problem adding the ceo to the database.");
            res.status(200).send(ceo);
        });
});
// Returns all the photos in the database
router.get('/photo', function (req, res) {
    photo.find({}, function (err, ceos) {
        if (err) return res.status(500).send("There was a problem finding the ceos.");
        res.status(200).send(ceos);
    });
});

// Returns a photo given the id
router.get('/photo/:id', function (req, res) {
    photo.findById(req.params.id, function (err, ceos) {
        if (err) return res.status(500).send("There was a problem finding the ceos.");
        res.status(200).send(ceos);
    });
});

// Updates a photo
router.put('/photo/:id', function (req, res) {
    photo.findByIdAndUpdate(req.params.id, req.body, function (err, post) {
      if (err) {
            res.status(500).send("There was a problem updating the ceo to the database.")
      }
      res.status(200).json(post);
    });
})
// Deletes a photo
router.delete("/photo/:id", function(req, res) {
    photo.findByIdAndRemove(req.params.id, req.body, function (err, post) {
        if (err) {
              res.status(500).send("There was a problem removing the ceo to the database.")
        }
        res.status(200).json(post);
      });
})

var update = require('../../models/company/company_updates');
// Creates a new company update
router.post('/update', function (req, res) {
    update.create({
            description : req.body.description,
            media : req.body.media
        }, 
        function (err, ceo) {
            if (err) return res.status(500).send("There was a problem adding the ceo to the database.");
            res.status(200).send(ceo);
        });
});
// Returns all the updates in the database
router.get('/update', function (req, res) {
    update.find({}, function (err, ceos) {
        if (err) return res.status(500).send("There was a problem finding the ceos.");
        res.status(200).send(ceos);
    });
});

// Returns a update given the id
router.get('/update/:id', function (req, res) {
    update.findById(req.params.id, function (err, ceos) {
        if (err) return res.status(500).send("There was a problem finding the ceos.");
        res.status(200).send(ceos);
    });
});

// Updates a update
router.put('/update/:id', function (req, res) {
    update.findByIdAndUpdate(req.params.id, req.body, function (err, post) {
      if (err) {
            res.status(500).send("There was a problem updating the ceo to the database.")
      }
      res.status(200).json(post);
    });
})
// Deletes a photo
router.delete("/update/:id", function(req, res) {
    update.findByIdAndRemove(req.params.id, req.body, function (err, post) {
        if (err) {
              res.status(500).send("There was a problem removing the ceo to the database.")
        }
        res.status(200).json(post);
      });
})

var company = require('../../models/company/company_companies');
// Creates a new company
router.post('/company', function (req, res) {
    company.create({
            name : req.body.name,
            website : req.body.website,
            hqCity : req.body.hqCity,
            yearFounded : req.body.yearFounded,
            type : req.body.type,
            sector : req.body.sector,
            industry : req.body.industry,
            totalEmployees : req.body.totalEmployees,
            annualRevenue : req.body.annualRevenue,
            status : req.body.status,
            affiliated_companies : req.body.affiliated_companies,
            competitors : req.body.competitors,
            stock_symbol : req.body.stock_symbol,
            logo : req.body.logo,
            description : req.body.description,
            mission : req.body.mission,
            company_ceos : req.body.company_ceos,
            company_locations : req.body.company_locations,
            company_benefits : req.body.company_benefits,
            company_awards : req.body.company_awards,
            company_photos : req.body.company_photos,
            company_updates : req.body.company_updates
        },
        function (err, ceo) {
            if (err) return res.status(500).send("There was a problem adding the ceo to the database.");
            res.status(200).send(ceo);
        });
});
// Returns all the companies in the database
router.get('/company', function (req, res) {
    company.find().populate('company_ceos company_locations company_benefits company_awards company_photos company_updates').exec( function (err, ceos) {
        if (err) return res.status(500).send("There was a problem finding the ceos.");
        res.status(200).send(ceos);
    });
});

//Returns a company given the id
router.get('/company/:id', function (req, res) {
    company.findById(req.params.id).populate('company_ceos company_locations company_benefits company_awards company_photos company_updates').exec( function (err, ceos) {
        if (err) return res.status(500).send("There was a problem finding the ceos.");
        res.status(200).send(ceos);
    });
});

// Updates a update
router.put('/company/:id', function (req, res) {
    company.findByIdAndUpdate(req.params.id, req.body, function (err, post) {
      if (err) {
            res.status(500).send("There was a problem updating the ceo to the database.")
      }
      res.status(200).json(post);
    });
})
// Deletes a photo
router.delete("/company/:id", function(req, res) {
    company.findByIdAndRemove(req.params.id, req.body, function (err, post) {
        if (err) {
              res.status(500).send("There was a problem removing the ceo to the database.")
        }
        res.status(200).json(post);
      });
})

module.exports = router;