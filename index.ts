import inquirer from "inquirer";

const answers: {
    numberOne: number,
    numberTwo: number,
    operator: string
} = await inquirer.prompt([


    {
        type: "number",
        name: "numberOne",
        message: "Kindly enter your first no: "
    },

    {
        type: "number",
        name: "numberTwo",
        message: "Kindly enter your second no: "
    },

    {
        type: "list",
        name: "operator",
        choices: ["*", "+", "-", "/"],
        message: "Select operator: "
    }

])

const { numberOne, numberTwo, operator } = answers;

if (numberOne && numberTwo && operator) {

    let result: number = 0;

    if (operator === "+") {
        result = numberOne + numberTwo
    } else if (operator === "-") {
        result = numberOne - numberTwo
    } if (operator === "/") {
        result = numberOne / numberTwo
    } if (operator === "*") {
        result = numberOne * numberTwo
    }

    console.log("Your result is: ", result)
} else {
    console.log("Kindly enter valid input")
}

