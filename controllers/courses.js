const fs = require('fs');

//return all courses
exports.getAll = async (req, res) => {
    //read local data json file
    const datajson = fs.readFileSync("data/local/data.json", "utf-8"); 
    //parse to json
    const data = JSON.parse(datajson);
    //returns courses array
    return res.send(data.courses);
}

//return course by his id (course id)
exports.getById = async (req, res) => {
    //get course id requested
    const id = req.params.id;
    //read local data json file
    const datajson = fs.readFileSync("data/local/data.json", "utf-8"); 
    //parse to json
    const data = JSON.parse(datajson);
    //finds course by his id
    const course = data.courses.filter(course => course.id == id);
    //return course
    res.send(course);
}

//creates course
exports.create = async (req, res) => {
    //get requested course properties
    const {id, name, sigla, school } = req.body;
    //read local data json file
    const datajson = fs.readFileSync("data/local/data.json", "utf-8"); 
    //parse to json
    const data = JSON.parse(datajson);
    //add to courses array
    data.courses.push(req.body);
    //add to courses array
    fs.writeFileSync('data/local/data.json', JSON.stringify(data));
    //return new course
    return res.status(201).send(req.body);
}

//updates course
exports.update = async (req, res) => {
    const { id, name, sigla, school } = req.body;
    //read local data json file
    const datajson = fs.readFileSync("data/local/data.json", "utf-8");
    //parse to json
    const data = JSON.parse(datajson);
    //find course to update
    const course = data.courses.find(course => course.id == id);
    //update properties
    course.id = id;
    course.name = name;
    course.sigla = sigla;
    course.school = school;
    //update local database
    fs.writeFileSync('data/local/data.json', JSON.stringify(data));
    //return updated course
    return res.send({id, name, sigla, school });
}

//delete course by his id (course id)
exports.delete = async (req, res) => {
    //get course id requested
    const id = req.params.id;
    //read local data json file
    const datajson = fs.readFileSync("data/local/data.json", "utf-8"); 
    //parse to json
    const data = JSON.parse(datajson);
    //find course to delete
    const course = data.courses.filter(course => course.id == id);
    //delete course
    data.courses.splice(course, 1);
    //update local database
    fs.writeFileSync('data/local/data.json', JSON.stringify(data));
    //return ok
    return res.status(200).send("ok");
}