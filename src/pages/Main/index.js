import React, { useState, useEffect } from 'react';
import { FaGithubAlt, FaPlus, FaSpinner } from 'react-icons/fa';
import { Link } from 'react-router-dom';

import api from '../../services/api';

import Container from '../../components/Container';
import {
  Form, SubmitButton, List,
} from './styles';

function Main() {
  const [newRepo, setNewRepo] = useState('');
  const [repositories, setRepositories] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleInputChange = (e) => {
    setNewRepo(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);

    const response = await api.get(`/repos/${newRepo}`);

    const data = {
      name: response.data.full_name,
    };

    setRepositories([...repositories, data]);
    localStorage.setItem('repositories', JSON.stringify([...repositories, data]));
    setNewRepo('');
    setLoading(false);
  };

  useEffect(() => {
    const storedRepositories = localStorage.getItem('repositories');

    if (storedRepositories) {
      setRepositories(JSON.parse(storedRepositories));
    }
  }, []);

  return (
    <Container>
      <h1>
        <FaGithubAlt />
        Repositórios
      </h1>

      <Form onSubmit={handleSubmit}>
        <input
          type="text"
          value={newRepo}
          onChange={handleInputChange}
          placeholder="Adicionar repositório"
        />

        <SubmitButton disabled={loading}>
          {loading ? (
            <FaSpinner color="#FFF" size={14} />
          ) : (
            <FaPlus color="#FFF" size={14} />
          )}
        </SubmitButton>
      </Form>

      <List>
        {repositories.map((repository) => (
          <li key={repository.name}>
            <span>{repository.name}</span>
            <Link to={`/repository/${encodeURIComponent(repository.name)}`}>Detalhes</Link>
          </li>
        ))}
      </List>
    </Container>
  );
}

export default Main;
