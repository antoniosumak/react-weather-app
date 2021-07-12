import Home from './pages/Home';
import { Main } from './lib/styles/generalStyles';

function App() {
  const date = new Date();
  const hour = date.getHours();
  return (
    <Main time={hour}>
      <Home />
    </Main>
  );
}

export default App;
