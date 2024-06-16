        const display = document.getElementById('dis');

        function clearDisplay() {
            display.value = '';
        }

        function deleteLastChar() {
            display.value = display.value.toString().slice(0, -1);
        }

        function appendNumber(number) {
            display.value += number;
        }

        function appendOperator(operator) {
            display.value += operator;
        }

        function appendConstant(constant) {
            if (constant === 'π') {
                display.value += Math.PI;
            } else if (constant === 'e') {
                display.value += Math.E;
            }
        }

        function calculateResult() {
            try {
                display.value = eval(display.value);
            } catch (e) {
                display.value = 'Error';
            }
        }

        function calculateFunction(func) {
            try {
                if (func === 'sin') {
                    display.value = Math.sin(eval(display.value));
                } else if (func === 'cos') {
                    display.value = Math.cos(eval(display.value));
                } else if (func === 'tan') {
                    display.value = Math.tan(eval(display.value));
                } else if (func === 'sqrt') {
                    display.value = Math.sqrt(eval(display.value));
                } else if (func === 'log') {
                    display.value = Math.log10(eval(display.value));
                }
            } catch (e) {
                display.value = 'Error';
            }
        }

        function toggleCalculator() {
            const simpleBtn = document.getElementById('simpleBtn');
            const sciBtn = document.getElementById('sciBtn');
            if (simpleBtn.style.display === 'none') {
                simpleBtn.style.display = 'block';
                sciBtn.style.display = 'none';
            } else {
                simpleBtn.style.display = 'none';
                sciBtn.style.display = 'block';
            }
        }
    