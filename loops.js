function forLoop(array) {
  for (let i = 0; i < 25; i++) {
    
 if (i == 1) {
   array.push("I am 1 strange loop.")
 }
 
 else {
   array.push(`I am ${i} strange loops.`)
 }
}
return array 
  }



function whileLoop(n) {
  while (n > 0) {
    console.log(-- n)
  }
  return 'done'
}


function doWhileLoop(array) {
  do {
    array.pop();
    while (array.length > 0 && maybeTrue());
    return array;
  }
 describe('doWhileLoop(array)', () => {
    it('removes elements from `array` until `array` is empty or until `maybeTrue()` returns `false`', () => {
      const [array, t] = makeArray()
      const l = array.length

      const newArray = doWhileLoop(array)

      expect(newArray).to.have.length.of.at.most(l - 1)
    })