const array1 = [9,2,5,6,3,4]

const array2 = ['henrique','bruno','eduardo']

const array3 = [8,'abacaxi',6>3,7,'goiaba', false]

const array1Copia = array1.slice()

array1Copia.push(1)

console.log(`Primeira array: ${array1} \nCópia da primeira array com método .push(): ${array1Copia}`)

console.log(`---------------------------------------------------------`)

const array2Copia = array2.slice()

array2Copia.pop()

console.log(`Segunda array: ${array2} \nCópia da segunda array com método .pop(): ${array2Copia}`)

console.log(`---------------------------------------------------------`)

const array3Copia = array3.slice()

array3Copia.splice(1,1)

console.log(`Terceira array: ${array3} \nCópia da terceira array com método .splice(i,n): ${array3Copia}`)

console.log(`---------------------------------------------------------`)