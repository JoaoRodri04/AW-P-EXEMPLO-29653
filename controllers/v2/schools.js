const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient()

//return all schools
exports.getAll = async (req, res) => {
    try {
        //read all from database
        const response = await prisma.schools.findMany();
        res.status(200).json(response)
    } catch (error) {
        res.status(500).json({ msg: error.message })
    }
}

//return school by his id (school id)
exports.getById = async (req, res) => {
    //get school id requested
    const id = req.params.id;
    try {
        //finds school by his id (id)
        const response = await prisma.schools.findUnique({
            where: {
                id: id,
            },
        })
        //return school
        res.status(200).json(response)
    } catch (error) {
        res.status(404).json({ msg: error.message })
    }
}

//creates school
exports.create = async (req, res) => {
    //get requested school properties
    const { id, name, sigla, address, website } = req.body;
    try {
        //creates new school
        const school = await prisma.schools.create({
            data: {
                id: id,
                name: name,
                sigla: sigla,
                address: address,
                website: website
            },
        })
        //return school created
        res.status(201).json(school)
    } catch (error) {
        res.status(400).json({ msg: error.message })
    }
}

//updates school
exports.update = async (req, res) => {
    const { id, name, sigla, address, website } = req.body;

    try {
        //find school to update their data
        const school = await prisma.schools.update({
            where: {
                id: id,
            },
            data: {
                name: name,
                sigla: sigla,
                address: address,
                website: website
            },
        })
        //return school updated
        res.status(200).json(school)
    } catch (error) {
        res.status(400).json({ msg: error.message })
    }
}

//delete school by his id (school id)
exports.delete = async (req, res) => {
    //get school id requested
    const id = req.params.id;
    try {
        //delete school
        await prisma.schools.delete({
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