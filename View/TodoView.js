class TodoView {
    constructor(todos) {
        this.todos = todos; 
        this.tablazatOsszerak(); // A táblázat létrehozása
    }

    tablazatOsszerak(){
        const tarolo = document.querySelector('.tarolo'); 
        let txt = "<table style='border-collapse: collapse;'><thead><tr><th>Tevékenység</th><th>Határidő</th></tr></thead><tbody>";

        this.todos.forEach(todo => {
            txt += `<tr>
                        <td>${todo.tevekenyseg}</td>
                        <td>${todo.hatarido}</td>
                    </tr>`;
        });

        txt += "</tbody></table>";
        tarolo.innerHTML = txt;
    }
}

export default TodoView;
