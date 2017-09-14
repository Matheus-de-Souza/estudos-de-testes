
const R = require('ramda');

const isOdd = (n) => n % 2 === 0;
const isEven = R.compose(R.not, isOdd);

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
	const isDivisibleBy = (divisibleBy) => (n) => n % divisibleBy === 0;

	R.cond ([
		[R.lt(R.__, 1), launchException],
		[R.gt(R.__, 100), launchException],
		[R.both(isDivisibleBy(3), isDivisibleBy(5)), (n) => console.log('FizzBuzz')],
		[isDivisibleBy(3), (n) => console.log('Fizz')],
		[isDivisibleBy(5), (n) => console.log('Buzz')],
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

	const isLastCellOfRow = (width) => (n) => { return (n % width) === (width - 1); };

	const getRow    = R.curry((width, n) => { return Math.floor(n / width); });
	const isRowEven = R.curry((width, n) => { return isEven(getRow(width, n)); });
	const isRowOdd  = R.curry((width, n) => { return !isRowEven(width, n); });

	const result = R.pipe(
		R.multiply(largura),
		R.add(1),
		R.range(0),
		R.map(
			R.cond([
				[R.allPass([isRowEven(largura), isLastCellOfRow(largura)]), R.always('#\n')],
				[R.allPass([isRowOdd(largura), isLastCellOfRow(largura)]), R.always(' \n')],
				[R.allPass([isRowOdd(largura), isOdd]), R.always('#')],
				[R.allPass([isRowEven(largura), isEven]), R.always('#')],
				[R.T, R.always(' ')]
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