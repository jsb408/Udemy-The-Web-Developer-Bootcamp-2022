const commandList = ['new', 'list', 'delete', 'quit'];
const todoList = [];

let command = '';

while (command !== 'quit' && command !== 'q') {
    command = prompt('What would you like to do?');

    switch (command) {
        case 'new':
            const newTodo = prompt('Ok, what is the new todo?')
            todoList.push(newTodo);
            console.log(`${newTodo} is added to the list!`)
            break;
        case 'list':
            console.log('**********');
            for (let i = 0; i < todoList.length; i++) {
                console.log(`${i}. ${todoList[i]}`);
            }
            console.log('**********');
            break;
        case 'delete':
            const index = parseInt(prompt('Ok, enter an index to delete!'));

            if (!isNaN(index)) {
                const deleted = todoList.splice(index, 1);
                console.log(`Ok, deleted ${deleted}`);
            }
            
            break;
    }
}