
const R = require('ramda');

const isOdd = (n) => n % 2 === 0;
const isEven = (n) => !isOdd(n);

function geraTriangulo (alturaTriangulo) {
	let result = '';
	
	if (!alturaTriangulo) {
		alturaTriangulo = 3;
	}

	for (let i = 0; i < alturaTriangulo; i++) {
		for (let j = 0; j <= i; j++) {
			result += '#';
		}
		result += '\n';
	}

	result = result.slice(0, -1);

	return result;
}

function geraTrianguloFuncional (alturaTriangulo) {

	if (!alturaTriangulo) {
		alturaTriangulo = 3;
	}

	let result = R.pipe(
									R.add(1),
									R.range(1),
									R.map(
										R.pipe(
											R.repeat('#'),
											R.join('')
										)
									),
									R.join('\n')
								)(alturaTriangulo);

	return result;
}

function geraFizzBuzz (numero) {
	if (numero < 1 || numero > 100) {
		throw 'Essa função aceita somente números de 1 a 100';
	} else {
		if (numero % 3 === 0 && numero % 5 === 0) {
			console.log('FizzBuzz');
		} else if (numero % 3 === 0) {
			console.log('Fizz');
		} else if (numero % 5 === 0) {
			console.log('Buzz');
		} else {
			console.log(numero);
		}
	}
}

function geraFizzBuzzFuncional (numero) {
	const launchException = () => { throw Exception (); };

	const isDivisibleBy3 = (n) => n % 3 === 0;
	const isDivisibleBy5 = (n) => n % 5 === 0;
	const isDivisibleBy3And5 = (n) => n % 3 === 0 && n % 5 === 0;

	R.cond ([
		[R.lt(R.__, 1), launchException],
		[R.gt(R.__, 100), launchException],
		[isDivisibleBy3And5, (n) => console.log('FizzBuzz')],
		[isDivisibleBy3, (n) => console.log('Fizz')],
		[isDivisibleBy5, (n) => console.log('Buzz')],
		[R.T, (n) => console.log(n)]
	])(numero);
}

function geraTabuleiro (tamanho) {
	let retorno = '';

	for (var j = 0; j < tamanho; j++) {
		for (var i = 0; i < tamanho; i++) {
			if (isEven(j)) {
				retorno += isEven(i) ? '#' : ' '; 
			} else {
				retorno += isEven(i) ? ' ' : '#';
			}
		}

		retorno += '\n';
	}

	retorno = retorno.slice(0, -1);

	return retorno;
}

function geraTabuleiroFuncional (largura) {

	const isLastCellOfRow = R.curry((width, n) => { return (n % width) === (width - 1); });

	const getRow    = R.curry((width, n) => { return Math.floor(n / width); });
	const isRowEven = R.curry((width, n) => { return isEven(getRow(width, n)); });
	const isRowOdd  = R.curry((width, n) => { return !isRowEven(width, n); });

	const returnsSharp = () => '#';
	const returnsSpace = () => ' ';
	const returnsSharpAndBreakLine = () => '#\n';
	const returnsSpaceAndBreakLine = () => ' \n';

	const result = R.pipe(
		R.multiply(largura),
		R.add(1),
		R.range(0),
		R.map(
			R.cond([
				[R.allPass([isRowEven(largura), isLastCellOfRow(largura)]), returnsSharpAndBreakLine],
				[R.allPass([isRowOdd(largura), isLastCellOfRow(largura)]), returnsSpaceAndBreakLine],
				[R.allPass([isRowOdd(largura), isOdd]), returnsSharp],
				[R.allPass([isRowEven(largura), isEven]), returnsSharp],
				[R.T, returnsSpace]
			])
		),
		R.join(''),
		R.dropLast(2)
	)(largura);

	return result;
}

module.exports = function (usarSolucaoFuncional) {
	return {
		geraTriangulo: usarSolucaoFuncional ? geraTrianguloFuncional : geraTriangulo,
		geraFizzBuzz:  usarSolucaoFuncional ? geraFizzBuzzFuncional  : geraFizzBuzz,
		geraTabuleiro: usarSolucaoFuncional ? geraTabuleiroFuncional : geraTabuleiro
	};
};