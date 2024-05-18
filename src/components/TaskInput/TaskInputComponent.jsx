import { useState } from "react";

const TaskInput = (props) => {
    const { onAddTask } = props;
    const [input, setInput] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        const isInput = input.trim();

        if (isInput) {
            onAddTask(input);
            setInput('');
        }
        else {
            alert('Adicione um título para a tarefa!');
            return;
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="Adicione uma nova tarefa"
                value={input}
                onChange={(event) => setInput(event.target.value)}
            />

            <button type="submit" title="clique para adicionar tarefa">
                Adicionar
            </button>
        </form>
    );
};

export default TaskInput;