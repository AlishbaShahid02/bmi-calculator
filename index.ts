#! /usr/bin/env node

import inquirer from 'inquirer';
import chalk from 'chalk';

console.log(chalk.red.bold(`"Welcome to BMI calculator"`));

let input = await inquirer.prompt([
{name: "weight", type: "number", message: "Enter your weight in Kg"},
{name: "height", type: "number", message: "Enter your height in meters"},
]);
let bmi = input.weight / (input.height * input.height);
console.log(chalk.blue.italic(`Your BMI is: ${bmi}`));