module.exports = {
    getAllHouses: (req, res) => {
        const db = req.app.get('db')

        db.get_houses().then(houses => {
            
            res.status(200).send(houses)
        })
        .catch(err => console.log(`problem getting houses`, err))
    },

    addHouse: (req, res) => {
        console.log("add endpoint hit")
        const db = req.app.get('db');
        const {name, address, city, state, zip} = req.body;
        console.log(`${name} ${address} ${city} ${state} ${zip}`)
        db.add_house([name, address, city, state, zip]).then(houses => {
            res.status(200).send(houses)
        })
    },

    deleteHouse: (req, res) => {
        const db = req.app.get('db');
        const {id} = req.params;

        db.delete_house(id).then(house => {
            res.status(200).send(house)
        })

    }
}