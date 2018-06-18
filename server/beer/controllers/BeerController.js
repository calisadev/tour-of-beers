var db = require('../../db');

class BeerController {
    constructor(){
        this.db = db;
    }
    getAll (req, res) {
        this.db.all("SELECT * FROM beer", function(err, row){
            res.json(row);
        });
    }
    getById (req, res) {
        var id = req.params.id;
        this.db.get("SELECT * FROM beer WHERE id = ?", [id], function(err, row) {
            res.json(row);
        });
    }
    insert (req, res) {
        var data = req.body;
        var that = this;
        this.db.get("SELECT MAX(ID) AS MAXID FROM BEER", function(err, row) {
            const maxId = row ? row['MAXID'] : 1;
            const nextId = maxId + 1;
            that.db.run("INSERT INTO beer (id, name, description, showDashboard, image) VALUES (?,?,?,?,?)", [nextId, data.name, data.description, data.showDashboard, data.image], function(err, row) {
                that.db.get("SELECT * FROM beer WHERE id = ?", [nextId], function(err, row) {
                    res.json(row);
                });
            });
        });
    }
    update (req, res) {
        var data = req.body;
        this.db.run("UPDATE beer SET (name, description, showDashboard, image) = (?,?,?,?) WHERE id = ?", [data.name, data.description, data.showDashboard, data.image, data.id]);
        res.json('OK');
    }
    delete (req, res) {
        var id = req.params.id;
        this.db.run("DELETE FROM beer WHERE id = ?", [id]);
        res.json('OK');
    }
}
module.exports = BeerController;