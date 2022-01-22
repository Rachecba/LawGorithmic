import { theme } from './utils/theming/theme';
import { ThemeProvider } from 'styled-components'
import { BrowserRouter as Router } from "react-router-dom";
import * as Styled from './App.style'
import Banner from './components/views/home/banner/Banner';
import Services from './components/views/home/services/Services';
import History from './components/views/home/history/History';
import Clients from './components/views/home/clients/Clients';
import Team from './components/views/home/team/Team';
import Blogs from './components/views/home/blogs/Blogs';
import Contact from './components/views/home/contact/Contact';
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
