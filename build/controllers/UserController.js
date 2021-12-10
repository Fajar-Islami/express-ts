"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let data = [
    { id: 1, name: "Adi 1" },
    { id: 2, name: "Adi 2" },
    { id: 3, name: "Adi 3" },
    { id: 4, name: "Adi 4" },
];
class UserController {
    index(req, res) {
        return res.send(data);
    }
    create(req, res) {
        const { id, name } = req.body;
        data.push({
            id,
            name,
        });
        return res.send("sukses tambah user");
    }
    show(req, res) {
        const { id } = req.params;
        let person = data.find((item) => item.id == id);
        return res.send(person);
    }
    update(req, res) {
        const { id } = req.params;
        const { name } = req.body;
        let person = data.find((item) => item.id == id);
        person.name = name;
        return res.send("update sukses");
    }
    delete(req, res) {
        const { id } = req.params;
        let people = data.filter((item) => item.id != id);
        return res.send(people);
    }
}
exports.default = new UserController();
