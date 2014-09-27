

module.exports = function(app) {

 /*   app.get('/partials/:partialPath', function (req, res) {
        res.render('partials/' + req.params.partialPath);
    });
*/

    app.get('/partials/*', function (req, res) {
        res.render('../../public/app/' + req.params[0]);
    });

    app.all('/api/*', function(req, res) {
        res.status(404);
        res.send();
    });

    app.get('*', function (req, res) {
        res.render('index');
    });
};