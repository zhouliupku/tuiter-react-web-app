import TodoItem from "./TodoItem.js";
import todos from "./todos.js";
import todoItem from "./TodoItem.js";

const TodoList = () => {
    return(`
       <ul>
           ${
        todos.map(todo => {
            return (TodoItem(todo));
        }).join("")
    }

       </ul>
   `);
}
export default TodoList;

