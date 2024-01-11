import GithubLogo from "../assets/github-logo.png"
import { Container } from "./styles";
import Input from "../components/Input";
import Button from "../components/Button";
import ItemRepo from "../components/ItemRepo";
import { useState } from "react";
import { api } from '../services/api'

function App() {

  const [currentRepo, setCurrentRepo] = useState('')
  const [repos, setRepos] = useState([]);

  const handleSearchRepo = async () => {
    if (currentRepo.trim() !== '') {

      const { data } = await api.get(`/repos/${currentRepo}`)

      if (data.id) {

        const isExist = repos.find(repo => repo.id === data.id)

        if (!isExist) {
          setRepos(prev => [...prev, data]);
          setCurrentRepo('')
          return
        }
      }
      alert("Repositório não encontrado!")
    }
  }

  const handleRemoveRepo = (id) => {
    setRepos(repos.filter(repo => repo.id !== id))
  }

  return (
    <Container>
      <img src={GithubLogo} width={75} height={75} alt="Github Logo" />
      <Input value={currentRepo} onChange={(e) => setCurrentRepo(e.target.value)} />
      <Button onClick={handleSearchRepo} />
      {repos.map(repo => <ItemRepo handleRemoveRepo={handleRemoveRepo} repo={repo} />)}
    </Container>
  );
}

export default App;
