
var usarSolucaoFuncional = true;

var capitulo3 = require("./capitulo3.js")(usarSolucaoFuncional);

/** === Mínimo ===
 * 
 * O capítulo anterior introduziu a função Math.min que retorna o seu menor argumento.
 * Nós podemos reproduzir essa funcionalidade agora. Escreva uma função min que recebe
 * dois argumentos e retorna o menor deles.
 * 
 * // Your code here.
 * 
 * console.log(min(0, 10));
 * // → 0
 * console.log(min(0, -10));
 * // → -10
 * 
 * Dica: Se estiver tendo problemas para colocar as chaves e os parênteses nos seus
 * lugares corretos, para ter uma definição de uma função válida, comece copiando
 * um dos exemplos desse capítulo e modificando-o. Uma função pode conter várias
 * declarações de retorno (return).
 * 
 */

describe("Obter mínimo", function() {

	it("define a função", function () {
		expect(capitulo3.min).toBeDefined();
	});

	it("retornar o valor mínimo", function () {
		let nr1 = 0, nr2 = 10;
		expect(capitulo3.min(nr1, nr2)).toBe(0);
		nr1 = 0;
		nr2 = -10;
		expect(capitulo3.min(nr1, nr2)).toBe(-10);
	});

	it("Lança exceção se a função for chamada com nenhum número", function () {
		const funcaoSemArgumentos = capitulo3.min.bind(null);

		expect(funcaoSemArgumentos).toThrow();
	});

	it("Lança exceção se a função for chamada com apenas um número", function () {
		const funcaoComApenas1Argumento = capitulo3.min.bind(null, 1);

		expect(funcaoComApenas1Argumento).toThrow();
	});

	it("Lança exceção se algum dos valores não for um número", function () {
		let nr = 12, letra = 'a', objeto = {};

		const primeiroNumeroInvalido = capitulo3.min.bind(null, letra, nr);
		const segundoNumeroInvalido  = capitulo3.min.bind(null, nr, objeto);

		expect(primeiroNumeroInvalido).toThrow();
		expect(segundoNumeroInvalido).toThrow();
	});

	it("Não lança exceção se algum dos valores for Infinity", function () {
		let nr = 12, infinityPositivo = Infinity, infinityNegativo = -Infinity;

		const funcaoComArgumentoInfinityPositivo = capitulo3.min.bind(null, infinityPositivo, nr);
		const funcaoComArgumentoInfinityNegativo = capitulo3.min.bind(null, nr, infinityNegativo);

		expect(funcaoComArgumentoInfinityPositivo).not.toThrow();
		expect(funcaoComArgumentoInfinityNegativo).not.toThrow();
	});
});

/** === Recursão ===
 *
 * Nós vimos que o % (operador resto) pode ser usado para testar se um número
 * é par ou ímpar, usando % 2 para verificar se ele é divisível por dois.
 * Abaixo, está uma outra maneira de definir se um número inteiro positivo é par ou ímpar:
 * 
 * Zero é par.
 * Um é ímpar.
 * Para todo outro número N, sua paridade é a mesma de N - 2.
 * Defina uma função recursiva isEven que satisfaça as condições descritas acima. A função
 * deve aceitar um número como parâmetro e retornar um valor Booleano.
 * 
 * Teste-a com os valores 50 e 75. Observe como ela se comporta com o valor -1. Por quê?
 * Você consegue pensar em uma maneira de arrumar isso?
 *
 * // Your code here.
 *
 * console.log(isEven(50));
 * // → true
 * console.log(isEven(75));
 * // → false
 * console.log(isEven(-1));
 * // → ??
 * Dica: Sua função será semelhante à função interna find do exemplo recursivo findSolution
 * neste capítulo, com uma cadeia de declarações if/else if/else que testam qual dos três
 * casos se aplica. O else final, correspondente ao terceiro caso, é responsável por fazer
 * a chamada recursiva. Cada uma das ramificações deverá conter uma declaração de retorno
 * ou retornar um valor específico.
 * 
 * Quando o argumento recebido for um número negativo, a função será chamada recursivamente
 * várias vezes, passando para si mesma um número cada vez mais negativo, afastando-se
 * cada vez mais de retornar um resultado. Ela, eventualmente, consumirá todo o espaço
 * em memória da pilha de chamadas e abortar.
 * 
 */

describe("É par ou impar?", function() {

	it("define a função", function () {
		expect(capitulo3.isEven).toBeDefined();
	});

	it("retorna \"true\" ao receber valores pares", function () {

		let numeros = [2,4,22,36,50,1000,1234];

		for(let numero of numeros) {
			expect(capitulo3.isEven(numero)).toBe(true);
		}
	});

	it("retorna \"false\" ao receber valores ímpares", function () {

		let numeros = [1,3,13,35,51,1001,4001];

		for(let numero of numeros) {
			expect(capitulo3.isEven(numero)).toBe(false);
		}
	});

	it("lança stackoverflow ao receber um valor negativo", function () {

		let numero = -1;

		const vaiExplodir = capitulo3.isEven.bind(null, numero);

		expect(vaiExplodir).toThrowError(RangeError);
	});

});

/** === Contando feijões ===
 *
 * Você pode acessar o N-ésimo caractere, ou letra, de uma string escrevendo "string".charAt(N),
 * similar a como você acessa seu tamanho com "s".length. O valor retornado será uma string
 * contendo somente um caractere (por exemplo, "b"). O primeiro caractere está na posição zero,
 * o que faz com que o último seja encontrado na posição string.length -1. Em outras palavras,
 * uma string com dois caracteres possui tamanho (length) dois, e suas respectivas posições são 0 e 1.
 *
 * Escreva uma função countBs que receba uma string como único argumento e retorna o número
 * que indica quantos caracteres “B”, em maiúsculo, estão presentes na string.
 *
 * Em seguida, escreva uma função chamada countChar que se comporta de forma parecida com countBs,
 * exceto que ela recebe um segundo argumento que indica o caractere que será contado
 * (ao invés de contar somente o caractere “B” em maiúsculo). Reescreva countBs para fazer
 * essa nova funcionalidade.
 *
 * // Your code here.
 *
 * console.log(countBs(“BBC”));
 * // → 2
 * console.log(countChar(“kakkerlak”, “k”));
 * // → 4
 *
 */
describe("Contando feijões", function() {

	it("define a função countBs", function () {
		expect(capitulo3.countBs).toBeDefined();
	});

	it("lança exceção se receber um argumento que não seja uma string (countBs)", function () {

		const argumentosInvalidos = [1,2, {}, null, function () {}];

		for(let arg of argumentosInvalidos) {
			let lancaExcecao = capitulo3.countBs.bind(null, arg); 
			expect(lancaExcecao).toThrow('Argumento inválido! Use uma string!');
		}
	});

	it("conta quantidade de \"B\" na string (countBs)", function () {

		const strings = ['BBC', 'BBbBC', 'ABC', 'CCCCCCB', 'bbCCbb'];
		const results = [2,3,1,1,0];

		for(let i in strings) {
			expect(capitulo3.countBs(strings[i])).toBe(results[i]);
		} 
	});

	it("define a função countChar", function () {
		expect(capitulo3.countChar).toBeDefined();
	});

	it("lança exceção se receber menos que dois argumentos (countChar)", function () {

		let lancaExcecao = capitulo3.countChar.bind(null, 'asd');
		expect(lancaExcecao).toThrow('São necessários dois argumentos!');
	});

	it("lança exceção se receber argumentos que não seja strings (countChar)", function () {

		const argumentosInvalidos = [1,2, {}, null, function () {}];

		for(let arg of argumentosInvalidos) {
			let lancaExcecao = capitulo3.countChar.bind(null, arg); 
			expect(lancaExcecao).toThrow('Argumento inválido! Use uma string!');
		}
	});

	it("conta quantidade de um certo caracter na string", function () {

		const strings = [['kakkerlak', 'k'], ['matheus','h'], ['abacate', 'a'], ['there is no chupits', 'i'], ['functional programming rules', 'm']];
		const results = [4,1,3,2,2];

		for(let i in strings) {
			expect(capitulo3.countChar(strings[i][0], strings[i][1])).toBe(results[i]);
		} 
	});
});