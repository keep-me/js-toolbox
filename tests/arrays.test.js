import  assert  from  'node:assert/strict';
import  *  as  arrays  from  '../src/arrays.js';

assert.deepEqual(arrays.unique([1,1,2,3]),  [1,2,3]);
assert.deepEqual(arrays.chunk([1,2,3,4],  2),  [[1,2],[3,4]]);
assert.equal([1,2,3].includes(arrays.sample([1,2,3])),  true);
assert.deepEqual(arrays.flatten([[1],[2,3]]),  [1,2,3]);
assert.deepEqual(arrays.compact([0,  1,  false,  2,  '',  3]),  [1,  2,  3]);
assert.equal(arrays.first([1,  2,  3]),  1);
assert.equal(arrays.last([1,  2,  3]),  3);
assert.deepEqual(arrays.take([1,  2,  3],  2),  [1,  2]);
assert.deepEqual(arrays.range(5),  [0,  1,  2,  3,  4]);
assert.deepEqual(arrays.partition([1, 2, 3, 4], x => x % 2 === 0), [[2, 4], [1, 3]]);

// deepClone tests
const obj = { a: 1, b: { c: 2 }, d: [3, 4] };
const clonedObj = arrays.deepClone(obj);
assert.deepEqual(clonedObj, obj);
assert.notStrictEqual(clonedObj, obj);
assert.notStrictEqual(clonedObj.b, obj.b);
assert.notStrictEqual(clonedObj.d, obj.d);

// Test circular reference
const circularObj = { a: 1 };
circularObj.self = circularObj;
const clonedCircular = arrays.deepClone(circularObj);
assert.equal(clonedCircular.a, 1);
assert.strictEqual(clonedCircular.self, clonedCircular);

// Test Date and RegExp
const date = new Date('2023-01-01');
const clonedDate = arrays.deepClone(date);
assert.equal(clonedDate.getTime(), date.getTime());
assert.notStrictEqual(clonedDate, date);

const regex = /test/gi;
const clonedRegex = arrays.deepClone(regex);
assert.equal(clonedRegex.source, regex.source);
assert.equal(clonedRegex.flags, regex.flags);
assert.notStrictEqual(clonedRegex, regex);

// isEmpty tests
assert.equal(arrays.isEmpty(null), true);
assert.equal(arrays.isEmpty(undefined), true);
assert.equal(arrays.isEmpty(''), true);
assert.equal(arrays.isEmpty('   '), true);
assert.equal(arrays.isEmpty([]), true);
assert.equal(arrays.isEmpty({}), true);
assert.equal(arrays.isEmpty('hello'), false);
assert.equal(arrays.isEmpty([1, 2, 3]), false);
assert.equal(arrays.isEmpty({ a: 1 }), false);
assert.equal(arrays.isEmpty(0), false);
assert.equal(arrays.isEmpty(false), false);

console.log('arrays tests ok');






































