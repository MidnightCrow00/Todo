import { TODOLIST2 } from "./adatok.js";
import TodoView from "./View/TodoView.js";

document.addEventListener('DOMContentLoaded', () => {
    const todoView = new TodoView(TODOLIST2); 
});