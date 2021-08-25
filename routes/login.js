var express = require('express');
var router = express.Router();
const client = require('../connect');
/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('login', { title: 'Express' });
});

async function checkpass(Uname, Upass) {
    try {
        const db = client.db("scorePredict");
        var cursor = await db.collection('User').find({ name: Uname, pass: Upass });
        var tmp = cursor.forEach(iterateFunc);
        if (tmp != null) {
            return true;
        } else
            return false;

        function iterateFunc(doc) {
            console.log(JSON.stringify(doc, null, 4));
        }
    } catch (err) {
        console.log(err.stack);
    }
}
router.post('/confirm', async function(req, res, next) {
    var tmp = req.body.uName;
    var tmp1 = req.body.uPass;
    // console.log(tmp);
    // console.log(tmp1);
    const test1 = await checkpass(tmp, tmp1);

    console.log('day la test1', test1);
    if (test1 == true) {
        console.log("wow");
        res.render('index', { title: tmp });
    } else {
        console.log("false");
    }

});


// function md5(pass)
// {
//     var crypto = require('crypto');
//     var pass = 'braitsch';
//     var hash = crypto.createHash('md5').update(name).digest('hex');
// }
module.exports = router;