module.exports = function(app) {
    app.get('/partials/:partialDir/:partialName', function(req, res) {
        res.render('../../public/app/' + req.params.partialDir + '/' + req.params.partialName);
    });

    app.get('*', function(req, res) {
        res.render('index');
    });
};