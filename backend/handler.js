"use strict";
console.log(process.env.FOO);
module.exports.listTodos = async event => {
  const todos = ["Wake up at 4AM", "Workout", "Eat breakfast", "Code", "Sleep"];
  return {
    statusCode: 200,
    body: JSON.stringify({ todos }, null, 2)
  };
};
