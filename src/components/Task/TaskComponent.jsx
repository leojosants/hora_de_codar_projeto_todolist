const Task = (props) => {
    const { task, onDelete, onToggleDone } = props;

    const spanStyle = {
        textDecoration: task.done ? 'line-through' : 'none',
        color: task.done ? 'gray' : 'black'
    };

    const title = task.done ? 'Marcar como não feita' : 'Marcar como feita';

    const handleOnDelete = () => {
        if (task.done === false) {
            alert(`Não é possível remover, a tarefa '${task.text}' está marcada como 'não feita'!`);
            return;
        }

        const confirmTaskDeletion = confirm(`Confirma deletar a tarefa '${task.text}'?`);

        if (!confirmTaskDeletion) return;

        onDelete();

        alert(`A tarefa '${task.text}' será removida!`);
    };

    return (
        <li>
            <span onClick={onToggleDone} style={spanStyle} title={title}>
                {task.text}
            </span>

            <button onClick={handleOnDelete} title="clique para remover tarefa">
                Remover
            </button>
        </li>
    );
};

export default Task;