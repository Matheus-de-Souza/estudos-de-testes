
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

function countBs (input) {
	if (typeof input !== 'string') {
		throw 'Argumento inválido! Use uma string!';
	}
	let counter = 0;
	for (var i = 0; i < input.length; ++i) {
		if (input.charAt(i) === 'B') {
			++counter;
		}
	}
	return counter;
}

function countBsFuncional (input) {

	const accumulatorIfCharIsB = (acc, char) => char === 'B' ? (++acc) : acc;

	return R.ifElse (
		R.is(String),
			R.reduce (accumulatorIfCharIsB, 0),
			() => { throw 'Argumento inválido! Use uma string!'; }
	)(input);
}

function countChar (input, charToFind) {
	if (typeof input !== 'string') {
		throw 'Argumento inválido! Use uma string!';
	}
	if (arguments.length != 2) {
		throw 'São necessários dois argumentos!';
	}
	let counter = 0;
	for (var i = 0; i < input.length; ++i) {
		if (input.charAt(i) === charToFind) {
			++counter;
		}
	}
	return counter;
}

function countCharFuncional (input, char) {
	if (typeof input !== 'string') {
		throw 'Argumento inválido! Use uma string!';
	}
	if (arguments.length != 2) {
		throw 'São necessários dois argumentos!';
	}

	const accumulatorIfCharIs = (charToFind) => (acc, currentChar) => currentChar === charToFind ? (++acc) : acc;

	return R.ifElse (
		R.is(String),
			R.reduce (accumulatorIfCharIs(char), 0),
			() => { throw 'Argumento inválido! Use uma string!'; }
	)(input);
}

module.exports = function (usarSolucaoFuncional) {
	return {
		min : usarSolucaoFuncional ? minFuncional : min,
		isEven : usarSolucaoFuncional ? isEvenFuncional : isEven,
		countBs : usarSolucaoFuncional ? countBsFuncional : countBs,
		countChar : usarSolucaoFuncional ? countCharFuncional : countChar
	};
};