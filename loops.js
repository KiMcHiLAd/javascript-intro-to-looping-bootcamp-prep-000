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



describe('whileLoop(n)', () => {
    it('counts down from n to 0', () => {
      const spy = chai.spy.on(console, 'log')
      const n = Math.floor(Math.random() * 100)

      expect(whileLoop(n)).to.equal('done')
      expect(spy).to.have.been.called.exactly(n)

      console.log.reset()
    })
  })
