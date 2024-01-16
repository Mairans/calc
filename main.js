let result = document.getElementById('out');

let buttons = Array.from(document.querySelectorAll('.btn'));
// click - это обработчик события, (e) - объект события
// это способ передачи объекту события, что произошло
// Объект события - показывает информацию, что произошло в зависимости от способа передачи события
// eval () - функция, которая позволяет складывать строки, например eval('2'+'2')// 4
buttons.map((btn) => {
    btn.addEventListener('click', (e) => {
        switch (e.target.innerText) {

            default:
                if (result.innerText === '0' && e.target.innerText !== '.') {
                    result.innerText = e.target.innerText;
                } else {
                    result.innerText += e.target.innerText;
                }
                break;

            case "AC":
                result.innerText = '0'
                break;
                
            case "+/-":
                result.innerText = '-';
                break;

            case "%":
                let passedText = result.innerText + '/100';
                result.innerText = eval(passedText)
                break;

            case '=':
                try {
                    result.innerText = eval(result.innerText);
                } catch (e) {
                    result.innerText = 'Error!'
                }
                break;

        }
    });
});