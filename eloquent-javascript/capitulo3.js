
const R = require('ramda');

const isOdd = (n) => n % 2 === 0;
const isEven = (n) => !isOdd(n);

function min (n1, n2) {
	if (isNaN(n1) || isNaN(n2)) {
		throw 'São necessários dois números como argumento!';
	}
	return (n1 < n2) ? n1 : n2;
}

// Não tem como deixar mais funcional...
function minFuncional (n1, n2) {
	if (isNaN(n1) || isNaN(n2)) {
		throw 'São necessários dois números como argumento!';
	}
	return (n1 < n2) ? n1 : n2;
}

module.exports = function (usarSolucaoFuncional) {
	return {
		min : usarSolucaoFuncional ? minFuncional : min
		// geraTriangulo: usarSolucaoFuncional ? geraTrianguloFuncional : geraTriangulo,
		// geraFizzBuzz:  usarSolucaoFuncional ? geraFizzBuzzFuncional  : geraFizzBuzz,
		// geraTabuleiro: usarSolucaoFuncional ? geraTabuleiroFuncional : geraTabuleiro
	};
};