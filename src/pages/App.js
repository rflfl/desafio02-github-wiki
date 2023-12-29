import GithubLogo from "../assets/github-logo.png"
import { Container } from "./styles";
import Input from "../components/Input";
import ItemRepo from "../components/ItemRepo";

function App() {
  return (
    <Container>
      <img src={GithubLogo} width={75} height={75} alt="Github Logo" />
      <Input />
      <ItemRepo />
    </Container>
  );
}

export default App;
