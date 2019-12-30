const descripcion =  {
    alias: 'd',
    demand: true
};
const completado = {
    alias: 'c',
    type: 'boolean',
    default: true
};

const argv = require('yargs')
    .command('crear', 'Crea un elemento por hacer', {
        descripcion
    })
    .command('actualizar', 'Actualiza el estado completado de una tarea', {
        descripcion,
        completado
    })
    .command('borrar', 'Elimina un elemento por hacer', {
        descripcion
    })
    .help()
    .argv;

module.exports = {
    argv
}