const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient()

//return all students
exports.getAll = async (req, res) => {
    try {
        //read all from database
        const response = await prisma.students.findMany();
        res.status(200).json(response)
    } catch (error) {
        res.status(500).json({ msg: error.message })
    }
}

//return student by his id (student id)
exports.getById = async (req, res) => {
    //get student id requested
    const id = req.params.id;
    try {
        //finds student by his id (id)
        const response = await prisma.students.findUnique({
            where: {
                id: id,
            },
        })
        //return student
        res.status(200).json(response)
    } catch (error) {
        res.status(404).json({ msg: error.message })
    }
}

//creates student
exports.create = async (req, res) => {
    //get requested student properties
    const { id, name, sigla, school } = req.body;
    try {
        //creates new student
        const student = await prisma.students.create({
            data: {
                id: id,
                name: name,
                sigla: sigla,
                school: school

            },
        })
        //return student created
        res.status(201).json(student)
    } catch (error) {
        res.status(400).json({ msg: error.message })
    }
}

//updates student
exports.update = async (req, res) => {
    const { id, name, sigla, school } = req.body;

    try {
        //find student to update their data
        const student = await prisma.students.update({
            where: {
                id: id,
            },
            data: {
                name: name,
                sigla: sigla,
                school: school
            },
        })
        //return student updated
        res.status(200).json(student)
    } catch (error) {
        res.status(400).json({ msg: error.message })
    }
}

//delete student by his id (student id)
exports.delete = async (req, res) => {
    //get student id requested
    const id = req.params.id;
    try {
        //delete student
        await prisma.students.delete({
            where: {
                id: id,
            },
        })
        //just return ok
        res.status(200).send("ok");
    } catch (error) {
        res.status(400).json({ msg: error.message })
    }
}