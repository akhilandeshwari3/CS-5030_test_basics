

var todoservice = require('./todo.service.js');
describe('todo test suite', () => {

    test("truth_value", () => {
        expect(true).toBe(true);
    });
    
    let todo_service = new todoservice();

    test("if service instance is created", () => {
        expect(todo_service instanceof todoservice).toBe(true);
    });

    
    // Initial length of the todo list is 3 // 3 default tasks
    test("get_todos", () => {
        expect(todo_service.get_todos().todo.length).toEqual(3);
    });

    

    // Write all your test cases here that corresponds to software requirements
    test("add_todo", () => {
        todo={
            "title": "T4",
            "description": "READY FOR SPRING-23?",
            "done": false
        }
        todo_service.add_todo(todo);
        expect(todo_service.get_todos().length).toEqual(4);
    });


    // Checking the length of the list after addition is 4
    test("add_todo", () => {
        expect(todo_service.get_todos().length).toEqual(4);
    });

    // Checking the length of the list after deleting is -1 less than previous list
    test("delete_todo", () => { 
        todo_service.delete_todo("");
        expect(todo_service.get_todos().length).toEqual(3);
    });

});