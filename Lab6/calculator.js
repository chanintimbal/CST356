//Lab 6

const buttons = document.querySelectorAll("button");
const display = document.getElementById("display");

let expression = "";

buttons.forEach(button => {
    button.addEventListener("click", function() {
        let value = this.value;

        if (value === "=") {
            try {
                expression = eval(expression).toString();
            }
            catch (error) {
                expression = "Error";
            }
        }
        else if (value === "C") {
            expression = "";
        }
        else if (value === "DEL") {
            expression = expression.slice(0, -1);
        }
        else {
            expression += value;
        }

        display.value = expression;
    });
});


