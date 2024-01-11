import GithubLogo from "../assets/github-logo.png"
import { Container } from "./styles";
import Input from "../components/Input";
import Button from "../components/Button";
import ItemRepo from "../components/ItemRepo";
import { useState } from "react";

function App() {

  const [repos, setRepos] = useState([]);

  return (
    <Container>
      <img src={GithubLogo} width={75} height={75} alt="Github Logo" />
      <Input />
      <Button />
      <ItemRepo />
    </Container>
  );
}

export default App;
