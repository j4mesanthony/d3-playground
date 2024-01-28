const { OK, CREATED, INTERNAL_SERVER_ERROR } = require('../consts/statusCodes');

function peopleController(model) {
    
    const addOrEdit = async (req, res) => {
        try {
            const newPerson = await model.create({ ...req.body });
            res.status(CREATED).send(newPerson);
        } 
        catch (error) {
            res.status(INTERNAL_SERVER_ERROR).send({ error: 'Could not create new user' });
        }
    }

    const get = async (req, res) => {
        try {
            const people = await model.findAll();
            res.status(OK).send(people);
        } catch (error) {
            res.status(INTERNAL_SERVER_ERROR).send({ error: 'Could not retrieve users' });
        }
    };

    const getById = (req, res) => {
        
    }

    return {
        addOrEdit,
        get,
        getById,
    }
}

module.exports = peopleController;