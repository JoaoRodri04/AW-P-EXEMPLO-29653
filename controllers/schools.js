const fs = require('fs');

//return all schools
exports.getAll = async (req, res) => {
    //read local data json file
    const datajson = fs.readFileSync("data/local/data.json", "utf-8"); 
    //parse to json
    const data = JSON.parse(datajson);
    //returns schools array
    return res.send(data.schools);
}

//return school by his id (school id)
exports.getById = async (req, res) => {
    //get school id requested
    const id = req.params.id;
    //read local data json file
    const datajson = fs.readFileSync("data/local/data.json", "utf-8"); 
    //parse to json
    const data = JSON.parse(datajson);
    //finds school by his id
    const school = data.schools.filter(school => school.id == id);
    //return school
    res.send(school);
}

//creates school
exports.create = async (req, res) => {
    //get requested school properties
    const {id, name, sigla, address, website } = req.body;
    //read local data json file
    const datajson = fs.readFileSync("data/local/data.json", "utf-8"); 
    //parse to json
    const data = JSON.parse(datajson);
    //add to schools array
    data.schools.push(req.body);
    //add to schools array
    fs.writeFileSync('data/local/data.json', JSON.stringify(data));
    //return new school
    return res.status(201).send(req.body);
}

//updates school
exports.update = async (req, res) => {
    const { id, name, sigla, address, website } = req.body;
    //read local data json file
    const datajson = fs.readFileSync("data/local/data.json", "utf-8");
    //parse to json
    const data = JSON.parse(datajson);
    //find school to update
    const school = data.schools.find(school => school.id == id);
    //update properties
    school.id = id;
    school.name = name;
    school.sigla = sigla;
    school.address = address;
    school.website = website;
    //update local database
    fs.writeFileSync('data/local/data.json', JSON.stringify(data));
    //return updated school
    return res.send({id, name, sigla, address, website });
}

//delete school by his id (school id)
exports.delete = async (req, res) => {
    //get school id requested
    const id = req.params.id;
    //read local data json file
    const datajson = fs.readFileSync("data/local/data.json", "utf-8"); 
    //parse to json
    const data = JSON.parse(datajson);
    //find school to delete
    const school = data.schools.filter(school => school.id == id);
    //delete school
    data.schools.splice(school, 1);
    //update local database
    fs.writeFileSync('data/local/data.json', JSON.stringify(data));
    //return ok
    return res.status(200).send("ok");
}