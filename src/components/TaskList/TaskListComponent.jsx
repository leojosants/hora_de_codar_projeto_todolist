import Task from "../Task/TaskComponent.jsx";

const TaskList = (props) => {
    const { tasks, onDeleteTask, onToggleTaskDone } = props;

    if (tasks.length === 0) {
        return (
            <p>Nenhuma tarefa cadastrada!</p>
        );
    }

    return (
        <ul>
            {
                tasks.map(
                    (task) => (
                        <Task
                            key={task.id}
                            task={task}
                            onDelete={() => onDeleteTask(task)}
                            onToggleDone={() => onToggleTaskDone(task.id)}
                        />
                    )
                )
            }
        </ul>
    );
};

export default TaskList;