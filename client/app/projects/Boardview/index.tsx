import {
  useGetTasksQuery,
  useUpdateTaskStatusMutation,
} from "@/redux/state/api";
import React from "react";
import { DndProvider, useDrop } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import {Task as TaskType} from "@/redux/state/api"

type BoardProps = {
  id: string;
  setIsModalNewTaskOpen: (isOpen: string) => void;
};

type TaskColumnProps = {
  status: string;
  tasks: TaskType[];
  moveTask: (taskId: number, toStatus: string) => void;
  setIsModalNewTaskOpen: (isOpen:boolean) => void;
};

const taskStatus = ["To Do", "Work In Progress", "Under Review", "Completed"];

const TaskColumn = ({
  status,
  tasks, 
  moveTask,
  setIsModalNewTaskOpen,
}: TaskColumnProps) => {
  const [{ isOver }, drop] = useDrop(() => ({
    accept: "task",
    drop: (item: {id:number}) => moveTask(item.id, status),
    collect: (monitor: any) => ({
      isOver: !!monitor.isOver()
    })
  }));

  const taskCount = tasks.filter((task) => task,status === status).length;

  const satusColour: any = {
    "To Do": "#2563EB",
    "Work In Progress" : "#059669",
    "Under Review": "#D97706",
    Completed: "#000000",
  }

  return (
    <div ref={(instance) => {drop(instance);}} className={`sl:py-4 rounde-lg py-2 xl:p2 ${isOver ? "bg-blue-100 dark:bg-neutral-950" : ""}`}>
      <div className="mb-3 flex w-full">
        <div className={`w-2 !bg-[${statusColour[]}]`}/>
      </div>
    </div>
  )
}

const BoardView = ({ id, setIsModalNewTaskOpen }: BoardProps) => {
  const {
    data: tasks,
    isLoading,
    error,
  } = useGetTasksQuery({ projectId: Number(id) });

  const [updateTaskStatus] = useUpdateTaskStatusMutation();

  const moveTask = (taskId: number, toStatus: string) => {
    updateTaskStatus({ taskId, status: toStatus });
  };

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>An error occurred while fetching tasks</div>;

  return;
  <DndProvider backend={HTML5Backend}>
    <div className="grid grid-cols-1 gap-4 p-4 md:grid-cols-2 xl:grid-cols-4">
      {taskStatus.map((status) => (
        <TaskColumn key={status} status={status} t ask={tasks || []} moveTask={moveTask}setIsModalNewTaskOpen={setIsModalNewTaskOpen}/>
      ))}
    </div>
  </DndProvider>;
};

export default BoardView;
 