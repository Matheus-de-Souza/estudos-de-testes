
var usarSolucaoFuncional = false;

const capitulo4 = require('./capitulo4')(usarSolucaoFuncional);

/** === A soma de um intervalo ===
 *
 * A introdução desse livro mencionou a seguinte maneira como uma boa
 * alternativa para somar um intervalo de números:
 *
 * console.log(sum(range(1, 10)));
 * Escreva uma função chamada range que recebe dois argumentos,
 * start (início) e end (fim), e retorna um array contendo todos os
 * números a partir do valor start até o valor end (incluindo-o).
 * 
 * Em seguida, escreva a função sum que recebe um array de números
 * como argumento e retorna a soma desses números. Execute o programa
 * anterior e veja se o resultado retornado é de fato 55.
 * 
 * Como um exercício bônus, modifique a sua função range para aceitar
 * um terceiro argumento opcional que indica o tamanho do “incremento”
 * usado para construir o array. Se nenhum valor for atribuído ao
 * tamanho do incremento, o array de elementos será percorrido em 
 * incrementos de um, correspondendo ao comportamento antigo. A chamada
 * à função range(1, 10, 2) deve retornar [1, 3, 5, 7, 9]. Certifique-se
 * que funcione também com valores negativos, fazendo com que
 * range(5, 2, -1) produza [5, 4, 3, 2].
 * 
 * // Your code here.
 *
 * console.log(sum(range(1, 10)));
 * // → 55
 * console.log(range(5, 2, -1));
 * // → [5, 4, 3, 2]
 * Dicas
 * 
 * A maneira mais fácil de construir um array é primeiramente inicializar
 * uma variável para [] (um novo array vazio) e, em seguida, chamar várias
 * vezes o seu método push para adicionar os valores. Não se esqueça de
 * retornar o array no final da função.
 * 
 * Devido ao fato de que o limite final é inclusivo, ao invés de usar
 * um simples operador <, você deverá usar o operador <= para checar o
 * final do seu loop.
 * 
 * Para verificar se o argumento de incremento foi fornecido, você pode
 * verificar o arguments.length ou comparar o valor do argumento com
 * undefined. Caso não tenha sido informado, apenas configure o seu valor
 * padrão (1) no topo da função.
 * 
 * Fazer com que range entenda incrementos negativos é provavelmente mais
 * fácil de ser feito escrevendo dois loops separados, um para contar
 * valores crescentes e outro para valores decrescentes. Isso se dá pelo
 * fato de que, quando estamos contando valores decrescentes, o operador
 * que compara e verifica se o loop terminou precisa ser >= ao invés de <=.
 * 
 * Pode ser útil usar um valor de incremento diferente do valor
 * padrão (por exemplo -1) quando o valor final do intervalo for menor
 * do que o valor de início. Dessa forma, ao invés de ficar preso em um
 *  loop infinito, range(5, 2) retorna algo relevante.
 *
**/  

describe('A soma de um intervalo ', function () {
	it('define a função range', function () {
		expect(capitulo4.range).toBeDefined();
	});

	it('lança exceção se o número de argumento for diferente de 2', function () {
		const lancaExcecao = [
			capitulo4.range.bind(null),
			capitulo4.range.bind(null, 1),
			capitulo4.range.bind(null, 1,2,3)
		];

		for (const fn of lancaExcecao) {
			expect(fn).toThrow('Número de argumentos inválido! Apenas 2!'); 
		}
	});

	it('lança exceção se os argumentos não forem números', function () {
		const lancaExcecao = [
			capitulo4.range.bind(null, 'asd', 'dsa'),
			capitulo4.range.bind(null, 123, 'asd'),
			capitulo4.range.bind(null, 'asd', 123),
			capitulo4.range.bind(null, {}, 123),
			capitulo4.range.bind(null, 123, {})
		];

		for (const fn of lancaExcecao) {
			expect(fn).toThrow('Argumentos inválidos! Devem ser apenas números!'); 
		}
		expect(capitulo4.range).toBeDefined();
	});

	it('devolve um array com os intervalos fornecidos', function () {
		const tuplasDeTeste = [
			{ in: [1,2], 
				out: [1,2]
			},
			{ in: [1,3], 
				out: [1,2,3]
			},
			{ in: [2,8], 
				out: [2,3,4,5,6,7,8]
			},
			{ in: [7,8], 
				out: [7,8]
			},
			{ in: [8,8], 
				out: [8]
			}
		];

		for(const tupla of tuplasDeTeste) {
			expect(capitulo4.range(tupla.in[0], tupla.in[1])).toEqual(tupla.out);
		}
	});

	it('define a função sum', function () {
		expect(capitulo4.sum).toBeDefined();
	});

	it('lança exceção se não receber argumentos', function () {
		const lancaExcecao = [
			capitulo4.sum.bind(null)
		];

		for (const fn of lancaExcecao) {
			expect(fn).toThrow('Número de argumentos inválido! Apenas 1 array!'); 
		}
	});

	it('lança exceção se receber mais de um argumento', function () {
		const lancaExcecao = [
			capitulo4.sum.bind(null, [], [])
		];

		for (const fn of lancaExcecao) {
			expect(fn).toThrow('Número de argumentos inválido! Apenas 1 array!'); 
		}
	});

	it('lança exceção se receber um argumento que não seja um array', function () {
		const lancaExcecao = [
			capitulo4.sum.bind(null, ''),
			capitulo4.sum.bind(null, 1),
			capitulo4.sum.bind(null, {})
		];

		for (const fn of lancaExcecao) {
			expect(fn).toThrow('Argumento inválido! Apenas 1 array!'); 
		}
	});

	it('soma os valores de todos números do array', function () {
		const tuplasDeTeste = [
			{ in: [1,2], 
				out: 3
			},
			{ in: [1,2,3], 
				out: 6
			},
			{ in: [2], 
				out: 2
			},
			{ in: [7,13,20,100,1000], 
				out: 1140
			},
			{ in: [8,8,10,10,10,10], 
				out: 56
			}
		];

		for(const tupla of tuplasDeTeste) {
			expect(capitulo4.sum(tupla.in)).toEqual(tupla.out);
		}
	});
});

/** === Invertendo um array ===
 * 
 * Os arrays possuem o método reverse, que modifica o array invertendo
 * a ordem que os elementos aparecem. Para esse exercício, escreva duas
 * funções: reverseArray e reverseArrayInPlace. A primeira (reverseArray)
 * recebe um array como argumento e produz um novo array que tem os
 * mesmos elementos com ordem inversa. A segunda (reverseArrayInPlace)
 *  funciona da mesma forma que o método reverse, invertendo seus elementos
 * apenas modificando o array que foi fornecido como argumento. Ambas as
 * funções não devem usar o método padrão reverse.
 * 
 * Levando em consideração as notas sobre efeitos colaterais e funções
 * puras do capítulo anterior, qual variante você espera que seja útil
 * em mais situações? Qual delas é mais eficiente?
 * 
 * // Your code here.
 * 
 * console.log(reverseArray(["A", "B", "C"]));
 * // → ["C", "B", "A"];
 * var arrayValue = [1, 2, 3, 4, 5];
 * reverseArrayInPlace(arrayValue);
 * console.log(arrayValue);
 * // → [5, 4, 3, 2, 1]
 * Dicas
 * 
 * Existem duas maneiras óbvias de implementar reverseArray. A primeira é
 * simplesmente iterar o array fornecido do início ao fim e usar o método
 * unshift para inserir cada elemento no início do novo array. A segunda
 * é iterar o array fornecido do fim ao início e usar o método push.
 * Iterar um array de trás para frente faz com que seja necessário usar
 * uma notação for um pouco estranha (var i = array.length - 1; i >= 0; i--).
 * 
 * Inverter o array em questão (reverseArrayInPlace) é mais difícil.
 * Você deve ter cuidado para não sobrescrever elementos que você precisará
 * posteriormente. Usar reverseArray ou até mesmo copiar o array inteiro
 * (array.slice(0) é uma boa forma de se copiar um array) funciona
 * mas é considerado trapaça.
 * 
 * O truque é inverter o primeiro e o último elemento, depois o segundo
 * e o penúltimo e assim por diante. Você pode fazer isso percorrendo
 * até a metade do valor de length do array (use Math.floor para arredondar
 * o valor para baixo — você não precisa usar o elemento do meio de um array
 * com tamanho ímpar) e substituir o elemento na posição i com o elemento
 * na posição array.length - 1 - i. Você pode usar uma variável local para
 * armazenar temporariamente um dos elementos, sobrescrever o seu valor
 * com o valor do elemento espelhado (elemento que deseja substituir),
 * e por fim, colocar o valor da variável local no lugar onde o elemento
 * espelhado estava originalmente.
 * 
 */ 

/** === A lista ===
 * 
 * Objetos como agrupamentos genéricos de valores, podem ser usados para
 * construir diversos tipos de estrutura de dados. Uma estrutura de dado
 * comum é a lista (não se confunda com o array). A lista é um conjunto de
 * objetos, sendo que o primeiro objeto contém uma referência para o
 * segundo, o segundo para o terceiro, e assim por diante.
 * 
 * var list = {
 *   value: 1,
 *   rest: {
 *     value: 2,
 *     rest: {
 *       value: 3,
 *       rest: null
 *     }
 *   }
 * };
 * O resultado desses objetos forma uma corrente, como representado abaixo:
 * 
 * Linked List
 * 
 * Uma das vantagens das listas é que elas podem compartilhar partes de sua
 * estrutura. Por exemplo, se eu criasse dois novos valores
 * {value: 0, rest: list} e {value: -1, rest: list}
 * (sendo que list é uma referência à variável definida anteriormente),
 * ambas serão listas independentes que compartilham a mesma estrutura que
 * foi usada para criar os três últimos elementos. Além disso, a lista
 * original ainda é uma lista válida com três elementos.
 * 
 * Escreva a função arrayToList que constrói uma estrutura de dados similar
 * à estrutura anterior quando fornecido [1, 2, 3] como argumento e,
 * escreva também, a função listToArray que produz um array quando dado uma
 * lista. Além disso, implemente uma função auxiliar prepend que receberá
 * um elemento e uma lista e será responsável por criar uma nova lista com
 * esse novo elemento adicionado ao início da lista original e, por fim,
 * crie a função nth que recebe uma lista e um número como argumentos e
 * retorna o elemento que está na posição informada pelo número ou
 * undefined caso não exista elemento em tal posição.
 * 
 * Caso não tenha feito, implemente a versão recursiva da função nth.
 * 
 * // Your code here.
 * 
 * console.log(arrayToList([10, 20]));
 * // → {value: 10, rest: {value: 20, rest: null}}
 * console.log(listToArray(arrayToList([10, 20, 30])));
 * // → [10, 20, 30]
 * console.log(prepend(10, prepend(20, null)));
 * // → {value: 10, rest: {value: 20, rest: null}}
 * console.log(nth(arrayToList([10, 20, 30]), 1));
 * // → 20
 * Dicas
 * 
 * Construir uma lista é mais fácil de ser feito de trás para frente.
 * Portanto, arrayToList poderia percorrer o array de trás para frente
 * (veja o exercício anterior) e, para cada elemento, adicionar um objeto
 * à lista. Você pode usar uma variável local para armazenar a parte da
 * lista que foi criada e usar um padrão similar a
 * list = {value: X, rest: list} para adicionar um elemento.
 * 
 * Para percorrer uma lista (no caso de listToArray e nth), o seguinte
 * loop for pode ser usado:
 * 
 * for (var node = list; node; node = node.rest) {}
 * Você consegue ver como funciona? A cada iteração do loop, node aponta
 * para a próxima sublista e, por isso, o corpo da função pode acessar
 * a propriedade value para pegar o elemento atual. Ao final de cada
 * iteração, node é atualizado apontando para a próxima sublista. Quando
 * seu valor é null, nós chegamos ao final da lista e o loop é finalizado.
 * 
 * A versão recursiva de nth irá, similarmente, olhar para uma parte ainda
 * menor do tail (final) da lista e, ao mesmo tempo, fazer a contagem do
 * índice até que chegue a zero, significando que é o ponto no qual pode
 * retornar a propriedade value do nó que está sendo verificado.
 * Para pegar o elemento na posição zero de uma lista, você pode
 * simplesmente acessar a propriedade value do seu nó head (inicial).
 * Para pegar o elemento N + 1, você pega o n-ésimo elemento da lista que
 * está contido na propriedade rest da lista em questão.
 * 
 */

/** === Deep comparison ===
 * 
 * O operador == compara objetos pelas suas identidades. Entretanto,
 * algumas vezes você pode preferir comparar os valores das suas
 * propriedades de fato.
 * 
 * Escreva a função deepEqual que recebe dois valores e retorna true
 * apenas se os valores forem iguais ou se forem objetos que possuem
 * propriedades e valores iguais quando comparados usando uma chamada
 * recursiva de deepEqual.
 * 
 * Para saber se a comparação entre duas coisas deve ser feita pela
 * identidade (use o operador === para isso) ou pela verificação de suas
 * propriedades, você pode usar o operador typeof. Se ele produzir object
 * para ambos os valores, você deverá fazer uma comparação “profunda”.
 * Entretanto, você deve levar em consideração uma excessão: devido a um
 * acidente histórico, typeof null também produz object.
 * 
 * // Your code here.
 * 
 * var obj = {here: {is: "an"}, object: 2};
 * console.log(deepEqual(obj, obj));
 * // → true
 * console.log(deepEqual(obj, {here: 1, object: 2}));
 * // → false
 * console.log(deepEqual(obj, {here: {is: "an"}, object: 2}));
 * // → true
 * Dicas
 * 
 * O teste para saber se está lidando com um objeto real deverá ser
 * parecido com typeof x == "object" && x != null. Tome cuidado para
 * comparar as propriedades apenas quando ambos argumentos forem objetos.
 * Em todos os outros casos, você pode simplesmente retornar imediatamente
 * o resultado da aplicação de ===.
 * 
 * Use um loop for/in para percorrer todas as propriedades. Você precisa
 * verificar se ambos os objetos possuem o mesmo conjunto de propriedades
 * e se essas propriedades têm valores idênticos. O primeiro teste pode ser
 * feito contando a quantidade de propriedades em cada objeto e retornar
 * false se forem diferentes. Caso seja o mesmo, percorra todas as
 * propriedades de um objeto e, para cada uma delas, verifique se o outro
 * objeto também a possui. Os valores das propriedades são comparados
 * usando uma chamada recursiva para deepEqual.
 * 
 * Para retornar o valor correto da função, é mais fácil retornar
 * imediatamente false quando qualquer diferença for encontrada e retornar
 * apenas true ao final da função.
 * 
 */