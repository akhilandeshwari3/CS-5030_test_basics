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
        console.log("Added new item to the list successfully.")
        console.log(this.todos); 
    }

    delete_todo(id){
        id="FALL 2022."
        // Deleting the item having the description FALL 2022 from the list.  
        this.todos = this.todos.filter(todo => todo.description !== id)
        console.log("The to-do list after deletion.")
        console.log(this.todos);
    }


    update_todo(id, todo){
        // Updating the description in the list using the id
        this.todos.map(todo_update => {
            if (todo_update.title === id) {todo_update.description = todo;}  
        })
        console.log("The to-do list after Updation.")
        console.log(this.todos);
    }
}


module.exports= todoservice;