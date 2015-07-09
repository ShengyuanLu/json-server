var express = require('express')

//node bin/index.js --watch db.json
module.exports = function (app) {
    app.post('/Mobile/j_acegi_security_check', function (req, res) {
        console.log('login');

        cake(res, function () {
            res.setHeader("X-AUTH-TOKEN", "eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJhZG1pbiIsImV4cCI6MTQzNjQ5ODM3Mn0.NOja6ujVhVcX1Ck9N4NsM9GYkSGurdOmAuIfC4ucenlRDpWWPhgGB3-InT2LURmrqQTc-VdXA2S1W9csQKeKpA");
            res.status(200);
            res.send();
        });
    });

    app.get('/Mobile/login/menu', function (req, res) {
        console.log('menu');
        cake(res, function () {
            res.status(200);
            res.send();
        });
    });

    app.get('/Mobile/mobile/asset/search', function (req, res) {
        console.log('search asset');

        cake(res, function () {
            res.status(200);
            res.sendfile(__dirname + '/public/assetList.json');
        });
    });

    app.get('/Mobile/mobile/asset/:id', function (req, res) {
        console.log('detail asset');

        cake(res, function () {
            res.status(200);
            res.sendfile(__dirname + '/public/assetDetail.json');
        });
    });

    function cake(res, f) {
        res.setHeader("Access-Control-Allow-Origin", "*");
        res.setHeader("Access-Control-Allow-Methods", "POST, PUT, GET, OPTIONS, DELETE");
        res.setHeader("Access-Control-Allow-Headers", "x-requested-with, Content-Type, Authorization, Accept, X-AUTH-TOKEN");
        res.setHeader("Access-Control-Expose-Headers", "X-AUTH-TOKEN");
        res.setHeader("Access-Control-Max-Age", "3600");

        f();
    }

};

