class Todo {

    id : string;
    text : string;
    date : Date;
    completed : boolean;

    constructor(text: string, completed : boolean = false ){

        this.text = text;
        this.id = new Date().toISOString();
        this.date = new Date();
        this.completed = completed;
    }
}

export default Todo;
