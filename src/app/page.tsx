import Image from 'next/image';
import { Input } from 'components/ui/input';
import { Button} from 'components/ui/button';

const TodoPage = () => {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="flex flex-col items-center max-w-lg">
        <div className="w-full flex flex-col gap-4">
          <h1 className="w-full text-4xl font">Todo list</h1>
          <div className="flex flex-col w-full gap-2">
            <Input type="text" placeholder="Add a task"  />
            <Button >Add</Button>
          </div>
        </div>
      </div>
    </main>
  );
};

export default TodoPage;
