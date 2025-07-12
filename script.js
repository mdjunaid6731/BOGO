const prices = {
    1: 10,
    2: 18,
    3: 24
  };
  
  function selectOption(selected) {
    const boxes = document.querySelectorAll('.option-box');
    boxes.forEach(box => {
      box.classList.remove('active');
      box.querySelector('input').checked = false;
    });
  
    const currentBox = document.querySelector(`.option-box[data-units="${selected}"]`);
    currentBox.classList.add('active');
    currentBox.querySelector('input').checked = true;
  
    document.getElementById('total-price').innerText = `$${prices[selected].toFixed(2)} USD`;
  }
  