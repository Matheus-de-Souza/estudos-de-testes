
var R = require("ramda");

const isOdd = (n) => n % 2 === 0;
const isEven = (n) => !isOdd(n);

function solucaoNaoFuncional(tamanho) {
	var retorno = "";

	for (var j = 0; j < tamanho; j++) {
		for (var i = 0; i < tamanho; i++) {
			if (isEven(j)) {
				retorno += isEven(i) ? "#" : " "; 
			} else {
				retorno += isEven(i) ? " " : "#";
			}
		}

		retorno += "\n";
	}

	retorno = retorno.slice(0, -1);

	return retorno;
}

function solucaoFuncional(largura) {

	const isLastCellOfRow = R.curry((width, n) => { return (n % width) === (width - 1); });

	const getRow    = R.curry((width, n) => { return Math.floor(n / width); });
	const isRowEven = R.curry((width, n) => { return isEven(getRow(width, n)); });
	const isRowOdd  = R.curry((width, n) => { return !isRowEven(width, n); });

	const returnsSharp     = () => "#";
	const returnsSpace     = () => " ";
	const returnsSharpAndBreakLine = () => "#\n";
	const returnsSpaceAndBreakLine = () => " \n";

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

	var exports = {};
	
	exports.geraTabuleiro = usarSolucaoFuncional ? solucaoFuncional : solucaoNaoFuncional;

	return exports;
};