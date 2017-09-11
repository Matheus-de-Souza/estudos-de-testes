
var usarSolucaoFuncional = true;

var capitulo2 = require("./capitulo2.js")(usarSolucaoFuncional);

/**  === Criando um Triângulo com Loop ===
 * 
 * Escreva um programa que faça 7 chamadas a console.log() para retornar o seguinte triângulo.
 * 
 * #
 * ##
 * ###
 * ####
 * #####
 * ######
 * #######
 * 
 */

describe("Gerar o triângulo", function() {

	it("define a função", function () {
		expect(capitulo2.geraTriangulo).toBeDefined();
	});

	it("gera sustenidos", function () {
		var resultado = capitulo2.geraTriangulo();
		expect(resultado).toMatch(/[#]+/);
	});

	it("gera triangulo pequeno", function () {
		var resultado = capitulo2.geraTriangulo(3),
				triangulo = '#'  + '\n' + 
										'##' + '\n' +
										'###';
		expect(resultado).toEqual(triangulo);
	});

	it("gera triangulo grande", function () {
		var resultado = capitulo2.geraTriangulo(5),
				triangulo = '#'  + '\n'   +
										'##' + '\n'   +
										'###' + '\n'  +
										'####' + '\n' +
										'#####';
		expect(resultado).toMatch(triangulo);
	});

});

/** === FizzBuzz ===
 * 
 * Escreva um programa que imprima (usando console.log())
 * todos os números de 1 a 100, exceto que, para números divisíveis por 3,
 * ele imprima Fizz ao invés do número, e para números divisíveis por 5 
 * (e não 3), ele imprima Buzz.
 * 
 * Quando você tiver o programa funcionando, modifique-o para imprimir
 * FizzBuzz para números que são divisíveis por ambos os números 3 e 5.
 * 
 * (Isto é na verdade uma pergunta de entrevista usada para eliminar
 * uma porcentagem significativa de candidatos programadores.
 * Então, se você resolvê-la, você está autorizado de se sentir
 * bem consigo mesmo).
 */

describe("Gerar FizzBuzz", function() {

	it("define a função", function () {
		expect(capitulo2.geraFizzBuzz).toBeDefined();
	});

	it("lança exception ao receber números menores que 1 e maiores que 100", function () {
		var funcaoComErro1 = capitulo2.geraFizzBuzz.bind (null, 0),
				funcaoComErro2 = capitulo2.geraFizzBuzz.bind (null, 101);

		expect(funcaoComErro1).toThrow();
		expect(funcaoComErro2).toThrow();
	});

	it("não lança exception ao receber números entre 1 e 100", function () {
		var funcaoComErro1 = capitulo2.geraFizzBuzz.bind (null, 1),
				funcaoComErro2 = capitulo2.geraFizzBuzz.bind (null, 100);

		expect(funcaoComErro1).not.toThrow();
		expect(funcaoComErro2).not.toThrow();
	});

	it("escreve no console.log o número", function () {

		spyOn(console, 'log');

		var numero = 1;

		capitulo2.geraFizzBuzz(numero);

		expect(console.log).toHaveBeenCalledWith(numero);
	});

	it("escreve no console.log \"Fizz\" quando o número for divisível por 3", function () {

		spyOn(console, 'log');

		var numero = 3;
		
		capitulo2.geraFizzBuzz(numero);
		expect(console.log).toHaveBeenCalledWith('Fizz');
	});

	it("escreve no console.log \"Buzz\" quando o número for divisível por 5", function () {

		spyOn(console, 'log');

		var numero = 5;

		capitulo2.geraFizzBuzz(numero);

		expect(console.log).toHaveBeenCalledWith('Buzz');
	});

	it("escreve no console.log \"FizzBuzz\" quando o número for divisível por 3 e por 5 ao mesmo tempo", function () {

		spyOn(console, 'log');

		var numero = 15;

		capitulo2.geraFizzBuzz(numero);

		expect(console.log).toHaveBeenCalledWith('FizzBuzz');
	});
});

/** === Tabuleiro de Xadrez ===
 * 
 * Escreva um programa que cria uma string que representa uma grade 8x8,
 * usando novas linhas para separar os caracteres. 
 * A cada posição da grade existe ou um espaço ou um caracter “#”,
 * de forma que estes caracteres formem um tabuleiro de xadrez.
 * 
 * Exemplo:
 * 
 * # # # #
 *  # # # 
 * # # # #
 *  # # # 
 * # # # #
 *  # # # 
 * # # # #
 *  # # # 
 * 
 */

describe("Gerar o tabuleiro de xadrez", function() {

	it("define a função", function () {
		expect(capitulo2.geraTabuleiro).toBeDefined();
	});

	it("Gera string com espaços e sustenidos", function () {
		var resultado = capitulo2.geraTabuleiro(2);
		expect(resultado).toMatch(/[#]+/);
		expect(resultado).toMatch(/[ ]+/);
	});

	it("Gera string com largura de acordo com número enviado", function () {
		var resultado = capitulo2.geraTabuleiro(2);
		expect(resultado.length).toBe(2 * 2 + 1);
		resultado = capitulo2.geraTabuleiro(4);
		expect(resultado.length).toBe(4 * 4 + (1 * 3));
		resultado = capitulo2.geraTabuleiro(6);
		expect(resultado.length).toBe(6 * 6 + (1 * 5));
		resultado = capitulo2.geraTabuleiro(10);
		expect(resultado.length).toBe(10 * 10 + (1 * 9));
	});

	it("gera tabuleiro 2x2", function () {
		var resultado = capitulo2.geraTabuleiro(2),
				tabuleiro = '# ' + '\n' +
										' #' ;
		expect(resultado).toEqual(tabuleiro);
	});

	it("gera tabuleiro 8x8", function () {
		var resultado = capitulo2.geraTabuleiro(8),
				tabuleiro = "# # # # " + '\n' +
										" # # # #" + '\n' +
										"# # # # " + '\n' +
										" # # # #" + '\n' +
										"# # # # " + '\n' +
										" # # # #" + '\n' +
										"# # # # " + '\n' +
										" # # # #";

		expect(resultado).toEqual(tabuleiro);
	});

});