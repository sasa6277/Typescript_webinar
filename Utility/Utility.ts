

//Partial<Type>

// interface Todo {
//     title: string;
//     description: string;
//   }
  
//   function updateTodo(todo: Todo, fieldsToUpdate: Partial<Todo>) {
//     return { ...todo, ...fieldsToUpdate };
//   }
  
//   const todo1 = {
//     title: "organize desk",
//     description: "clear clutter",
//   };
  
//   const todo2 = updateTodo(todo1, {
//     description: "throw out trash",
//   });


  //Readonly<Type>

//   interface Todo {
//     title: string;
//   }
  
//   const todo: Readonly<Todo> = {
//     title: "Delete inactive users",
//   };
  
//   todo.title = "Hello";


  //Pick<Type, Keys>

//   interface Todo {
//     title: string;
//     description: string;
//     completed: boolean;
//   }
  
//   type TodoPreview = Pick<Todo, "title" | "completed">;
  
//   const todo: TodoPreview = {
//     title: "Clean room",
//     completed: false
//   };
  
//   todo;

//Exclude<Type, ExcludedUnion>

// type T0 = Exclude<"a" | "b" | "c", "a">;
// //    ^ = type T0 = "b" | "c"
// type T1 = Exclude<"a" | "b" | "c", "a" | "b">;
// //    ^ = type T1 = "c"
// type T2 = Exclude<string | number | (() => void), Function>;
// //    ^ = type T2 = string | number


//Extract<Type, Union>

type T0 = Extract<"a" | "b" | "c", "a" | "f">;
//    ^ = type T0 = "a"
type T1 = Extract<string | number | (() => void), Function>;
//    ^ = type T1 = () => void