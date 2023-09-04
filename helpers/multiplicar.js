const fs = require('node:fs');

const colors = require('colors');

const crearArchivo = async (tabla = 5, listar = false, hasta = 10) => {
	try {
		let salida = '';
		let consola = '';

		for (let j = 1; j <= hasta; j++) {
			salida += `${tabla} x ${j} = ${tabla * j}\n`;
			consola += `${tabla} ${'x'.green} ${j} ${'='.green} ${tabla * j}\n`;
		}

		if (listar) {
			console.log('===================='.green);
			console.log('  Tabla del:'.green, colors.blue(tabla));
			console.log('===================='.green);
			console.log(consola);
		}

		fs.writeFileSync(`./salida/tabla-${tabla}.txt`, salida);

		return `tabla-${tabla}.txt creado`;
	} catch (error) {
		throw error;
	}
};

module.exports = {
	crearArchivo,
};
