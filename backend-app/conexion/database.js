const {Sequelize}= require('sequelize')

const sequelize= new Sequelize(
    'segundoparcial',
    'root',
    'admin123',
    {
        host:'localhost',
        port:3306,
        dialect:'mysql'
    }
)

sequelize.authenticate()
        .then(()=> console.log('conectado correctamente'))
        .catch((e)=> console.log('Ocurrio un error'+2))

module.exports=sequelize;