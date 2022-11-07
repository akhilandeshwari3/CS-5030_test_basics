class todoservice{
    // Creating an array named - "the todo_lst" that stores the to-do list

    todo_data = {
        "todo":[{
            "title": "T1",
            "description": "WELCOME TO SLU",
            "done": false
        },{
            "title": "T2",
            "description": "MS IN AI",
            "done": false
        },{
            "title": "T3",
            "description": "FALL 2022.",
            "done": false
        }]
    }
    constructor(){
        this.todos=this.todo_data;
    }

    get_todos(){
        return this.todos;
    }

    add_todo(todo){
        // Populating the existing list using the concat 
        this.todos=this.todos.todo.concat(todo);
        // Displaying the feedback message along with the new list after addition
        console.log("Added new item to the list successfully.", this.todos)
        console.log(this.todos); 
        return this.todos
    }

    delete_todo(id){
        // Your code here
    }

    update_todo(id, todo){
        // Your code here
    }
}


module.exports= todoservice;