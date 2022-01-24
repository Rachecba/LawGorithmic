import { theme } from './utils/theming/theme';
import { ThemeProvider } from 'styled-components'
import { BrowserRouter as Router } from "react-router-dom";
import * as Styled from './App.style'
import Footer from './components/global/footer/Footer';
import Main from './Main';

function App() {
  return (
    <ThemeProvider theme={theme}>
    <Router>
      <Styled.ContainerWrap>
          <Main />
          <Footer />
      </Styled.ContainerWrap>
    </Router>
  </ThemeProvider>
  );
}

export default App;
