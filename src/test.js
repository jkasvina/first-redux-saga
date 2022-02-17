// ф-я* генератор, возвращает данные поэтапно
// (function*  определяет функцию-генератор)

// https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Statements/function*

/* Генераторы являются функциями с возможностью выхода и последующего входа.
Их контекст исполнения (значения переменных) сохраняется при последующих входах.
*/

/* Когда вызывается функция-генератор, её тело исполняется не сразу;
вместо этого возвращается объект-итератор.
При вызове метода next() итератора тело функции-генератора исполняется до первого
встреченного оператора yield, который определяет возвращаемое значение или делегирует
дальнейшее выполнение другому генератору при помощи yield* anotherGenerator().
Метод next() возвращает объект со свойством value, содержащим отданное значение,
и свойством done, которое указывает, что генератор уже отдал своё последнее значение.
Вызов метода next() с аргументом прекращает выполнение функции-генератора, и заменяет инструкцию yield
на которой было приостановлено выполнение  на аргумент переданный в next().*/

function* generatorFunction() {
  for (let i = 0; i < 5; i++) {
    yield i;
    // ключевое слово yield, похоже на await и return в одном
  }
}

const iter = generatorFunction();

console.log(iter.next()); // { value: 0, done: false }
console.log(iter.next()); // { value: 1, done: false }
console.log(iter.next()); // { value: 2, done: false }
console.log(iter.next()); // { value: 3, done: false }
console.log(iter.next()); // { value: 4, done: false }
console.log(iter.next()); // { value: undefined, done: true }
