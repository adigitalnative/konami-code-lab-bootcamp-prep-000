const codes = [
  "ArrowUp",
  "ArrowUp",
  "ArrowDown",
  "ArrowDown",
  "ArrowLeft",
  "ArrowRight",
  "ArrowLeft",
  "ArrowRight",
  "b",
  "a"
];

function init() {
  const alphabet = ['a', 'b', 'c'];
  
  let index = 0
  
  document.body.addEventListener('keydown', (e) => {
    const key = e.key
    
    index = (codes[index] === key)
  })
  
}
