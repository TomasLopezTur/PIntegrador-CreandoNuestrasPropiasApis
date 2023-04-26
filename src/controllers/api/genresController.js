const {Genre } = require('../../database/models');

module.exports ={
    list : (req, res) =>{
        Genre.findAll()
            .then(genres => {
                const REPONSE ={
                    meta:{
                        status: 200,
                        total: genres.length,
                        url: '/genres'
                    },
                    data: genres
                }
                res.json(REPONSE)
            })
    },
    detail: (req, res)=>{
        Genre.findByPk(req.params.id)
        .then(genre =>{
            return res.status(200).json({
                data: genre,
                status: 200,
            })
        })
    },
}