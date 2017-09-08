
var R = require("ramda");

const isEven = (n) => n % 2 === 0 ;
const isOdd = (n) => !isEven(n);

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

function solucaoFuncional(tamanho) {
	const isRowEven = R.curry((tamanho, n) => { return isEven(Math.floor(n / Math.sqrt(tamanho))); });
	const isRowOdd  = R.curry((tamanho, n) => { return !isRowEven(tamanho,n); });

	const returnsSharp = (n) => "#";
	const returnsSpace = (n) => " ";
	
	const result = R.pipe(
		R.range(0),
		R.map(
			R.cond([
				[R.and(isRowEven(tamanho), isEven), returnsSharp],
				[R.and(isRowEven(tamanho), isOdd), returnsSpace],
				[R.and(isRowOdd(tamanho), isEven), returnsSpace],
				[R.and(isRowOdd(tamanho), isOdd), returnsSharp],
				[R.T, returnsSharp]
			])
		)
	)(tamanho);

	return result;
}

module.exports = function (usarSolucaoFuncional) {

	var exports = {};
	
	exports.geraTabuleiro = usarSolucaoFuncional ? solucaoFuncional : solucaoNaoFuncional;

	return exports;
};