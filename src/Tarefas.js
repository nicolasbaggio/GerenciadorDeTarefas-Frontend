import React, { useEffect, useState } from 'react';
import axios from 'axios';

function Tarefas() {
    const [tarefas, setTarefas] = useState([]); // Estado para armazenar a lista de tarefas

    useEffect(() => {
        const fetchTarefas = async () => {
            try {
                const response = await axios.get('http://localhost:8080/api/tarefas');
                setTarefas(response.data);
            } catch (error) {
                console.error('Erro ao buscar tarefas:', error);
            }
        };

        fetchTarefas();
    }, []);

    const removerTarefa = async (id) => {
        try {
            await axios.delete(`http://localhost:8080/api/tarefas/${id}`);
            // Remove a tarefa do estado atualizando a lista diretamente
            setTarefas((tarefasAtuais) => tarefasAtuais.filter((tarefa) => tarefa.id !== id));
        } catch (error) {
            console.error('Erro ao remover tarefa:', error);
        }
    };
   
    return (
        <div>
            <h1>Lista de Tarefas</h1>
            <ul>
                {tarefas.length > 0 ? (
                    tarefas.map((tarefa) => (
                        <li key={tarefa.id}>
                            {tarefa.titulo} - {tarefa.descricao}
                            <button onClick={() => removerTarefa(tarefa.id)}>Remover</button> {/* Botão para remover tarefa */}
                        </li>
                    ))
                ) : (
                    <p>Nenhuma tarefa encontrada.</p>
                )}
            </ul>
        </div>
    );
}

export default Tarefas;
