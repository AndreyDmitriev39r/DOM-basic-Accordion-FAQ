// constants

const QABlock = document.getElementsByClassName('QA');
// console.log(QABlock);//3 divs in html collection

//functions

// this keyword involved >>> CAN NOT use arrow funcs here!
const showAnswer = function() {
  // console.log('before toggling', this.classList);
  this.classList.toggle('active');
  // console.log('after toggling', this.classList);
}

/* for the sake of understanding toggle method
before toggling DOMTokenList ['QA', value: 'QA']
after toggling DOMTokenList(2) ['QA', 'active', value: 'QA active']
before toggling DOMTokenList(2) ['QA', 'active', value: 'QA active']
after toggling DOMTokenList ['QA', value: 'QA']
*/

//event listeners

for (let i = 0; i < QABlock.length; i++) {  
  QABlock[i].addEventListener('click', showAnswer);
}