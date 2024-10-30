import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';
import logo from './icons/logo.png';
import linkedinIcon from './icons/linkedin.png';
import githubIcon from './icons/github.png';

function App() {
    const [tarefas, setTarefas] = useState([]);
    const [titulo, setTitulo] = useState("");
    const [mensagem, setMensagem] = useState("");

    useEffect(() => {
        const fetchTarefas = async () => {
            try {
                const response = await axios.get("http://localhost:8080/api/tarefas");
                setTarefas(response.data);
            } catch (error) {
                console.error("Erro ao buscar tarefas:", error);
            }
        };

        fetchTarefas();
    }, []);

    const adicionarTarefa = async () => {
        const novaTarefa = { titulo, descricao: "", concluida: false };
        try {
            const response = await axios.post("http://localhost:8080/api/tarefas", novaTarefa);
            setTarefas([...tarefas, response.data]);
            setTitulo("");
            setMensagem("Tarefa adicionada com sucesso!");
        } catch (error) {
            console.error("Erro ao salvar tarefa:", error);
            setMensagem("Erro ao adicionar tarefa.");
        }
    };

    const removerTarefa = async (id) => {
        try {
            await axios.delete(`http://localhost:8080/api/tarefas/${id}`);
            setTarefas(tarefas.filter((tarefa) => tarefa.id !== id));
            setMensagem("Tarefa marcada como concluída!");
        } catch (error) {
            console.error("Erro ao remover tarefa:", error);
            setMensagem("Erro ao remover tarefa.");
        }
    };

    return (
        <div className="app-container">
            <div className="container">
                <h1>Gerenciador de Tarefas</h1>
                <input
                    type="text"
                    value={titulo}
                    onChange={e => setTitulo(e.target.value)}
                    placeholder="Título da Tarefa"
                />
                <button onClick={adicionarTarefa}>Adicionar Tarefa</button>
                {mensagem && (
                    <div className={`message ${mensagem.includes('Erro') ? 'error' : 'success'}`}>
                        {mensagem}
                    </div>
                )}
                <ul>
                    {tarefas.length > 0 ? (
                        tarefas.map(tarefa => (
                            <li key={tarefa.id}>
                                {tarefa.titulo}
                                <button onClick={() => removerTarefa(tarefa.id)}>Concluído</button>
                            </li>
                        ))
                    ) : (
                        <p>Nenhuma tarefa encontrada.</p>
                    )}
                </ul>
            </div>
            <footer>
                <img style={{ objectFit: "contain" }} id="logo" src={logo} alt="Logo" />
                <span>Todos os direitos reservados ©</span>
                <span>Desenvolvido por Nícolas Bastos Bággio</span>
                <div className="footer-links">
                    <a href="https://www.linkedin.com/in/nicolasbaggio" target="_blank" rel="noopener noreferrer">
                        <img src={linkedinIcon} alt="LinkedIn" width="20" /> LinkedIn
                    </a>
                    <a href="https://github.com/nicolasbaggio" target="_blank" rel="noopener noreferrer">
                        <img src={githubIcon} alt="GitHub" width="20" /> GitHub
                    </a>
                </div> {/* Esta linha estava faltando */}
            </footer>
        </div>
    );
}

export default App;
