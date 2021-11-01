"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var data = [
    { id: 1, name: "Adi 1" },
    { id: 2, name: "Adi 2" },
    { id: 3, name: "Adi 3" },
    { id: 4, name: "Adi 4" },
];
var UserController = /** @class */ (function () {
    function UserController() {
    }
    UserController.prototype.index = function (req, res) {
        return res.send(data);
    };
    UserController.prototype.create = function (req, res) {
        var _a = req.body, id = _a.id, name = _a.name;
        data.push({
            id: id,
            name: name,
        });
        return res.send("sukses tambah user");
    };
    UserController.prototype.show = function (req, res) {
        var id = req.params.id;
        var person = data.find(function (item) { return item.id == id; });
        return res.send(person);
    };
    UserController.prototype.update = function (req, res) {
        var id = req.params.id;
        var name = req.body.name;
        var person = data.find(function (item) { return item.id == id; });
        person.name = name;
        return res.send("update sukses");
    };
    UserController.prototype.delete = function (req, res) {
        var id = req.params.id;
        var people = data.filter(function (item) { return item.id != id; });
        return res.send(people);
    };
    return UserController;
}());
exports.default = new UserController();
