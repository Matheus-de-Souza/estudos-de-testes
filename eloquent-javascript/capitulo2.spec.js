
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