const {Movie, Sequelize} = require ('../../database/models');

module.exports = {
    list: (req, res) => {
        Movie.findAll()
        .then(movies =>{
            return res.status(200).json({
                total: movies.length,
                data: movies,
                status: 200
            })
        })
    },
    store: (req, res) => {
        Movie.create(req.body)
        .then(movie => {
            
            return res.status(200).json({
                data: movie,
                status: 200,
                created: "ok"
            })
        })
    },
    delete: (req, res) => {
        Movie.destroy({
            where:{
                id:req.params.id
            }
        })
        .then(response => {
            return res.json(response)
        })
    }
}