import { Upload } from './components/Upload';
import { Container, Content } from './styles';
import GlobalStyle from './styles/global';

function App() {
  return (
    <Container>
      <Content>
        <Upload />
      </Content>
      <GlobalStyle />
    </Container>
  );
}

export default App;
