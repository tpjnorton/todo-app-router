'use client';

import { Input } from 'components/ui/input';
import { Button } from 'components/ui/button';
import { Checkbox } from 'components/ui/checkbox';

type Todo = {
  name: string;
  isComplete: boolean;
};

const TodoPage = () => {
  const todos: Todo[] = [
    { name: 'boio', isComplete: false },
    { name: 'boio2', isComplete: true },
    { name: 'boio3', isComplete: false },
  ];

  return (
    <main className="flex flex-col items-center justify-between p-24">
      <div className="flex flex-col items-center max-w-lg">
        <div className="w-full flex flex-col gap-4 p-5 bg-white dark:border rounded-lg dark:bg-gray-700  dark:bg-transparent  border-border shadow-sm  ">
          <h1 className="w-full text-2xl font-semibold">Current todos</h1>
          <ul className="list-none">
            {todos.map((todo, index) => (
              <li key={todo.name} className="gap-2 flex items-center justify-between">
                <span className="${}">{todo.name}</span>
                <Checkbox checked={todo.isComplete} />
              </li>
            ))}
          </ul>
          <div className="flex flex-col w-full gap-4">
            <Input type="text" placeholder="Add a new task" />
            <Button>Add</Button>
          </div>
        </div>
      </div>
    </main>
  );
};

export default TodoPage;
