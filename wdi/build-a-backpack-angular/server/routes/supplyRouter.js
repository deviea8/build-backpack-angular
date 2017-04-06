var express = require('express');
var router = express.Router();

var supplies = [
    {
        _id: 1,
        type: 'pencils',
        qty: 0
    },
    {
        _id: 2,
        type: 'folders',
        qty: 0
    },
    {
        _id: 3,
        type: 'notebooks',
        qty: 0
    },
    {
        _id: 4,
        type: 'scissors',
        qty: 0
    },
    {
        _id: 5,
        type: 'erasers',
        qty: 0
    },
    {
        _id: 6,
        type: 'colored_pencils',
        qty: 0
    },
    {
        _id: 7,
        type: 'markers',
        qty: 0
    },
    {
        _id: 8,
        type: 'glue_sticks',
        qty: 0
    }
];

router.get('/', function (req, res) {
    res.json({supplies: supplies });
});

module.exports = router;
