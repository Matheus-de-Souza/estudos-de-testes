
const R = require('ramda');

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

function isEven (numero) {
	if (numero === 0) {
		return true;
	} else if (numero === 1) {
		return false;
	} else {
		return isEven(numero - 2);
	} 
}

// Não dá pra fazer mais funcional também...
function isEvenFuncional (numero) {
	if (numero === 0) {
		return true;
	} else if (numero === 1) {
		return false;
	} else {
		return isEvenFuncional(numero - 2);
	} 
}

module.exports = function (usarSolucaoFuncional) {
	return {
		min : usarSolucaoFuncional ? minFuncional : min,
		isEven : usarSolucaoFuncional ? isEvenFuncional : isEven
	};
};