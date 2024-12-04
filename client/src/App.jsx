
import './app.scss'
import Navbar from './components/Navbar/Navbar';

function App() {
  return (
    <div>
    <section><Navbar/></section>
    <section>Home</section>
    <section>Skills</section>
    <section>Projects</section>
    <section>Contacts</section>
    </div>
      // <BrowserRouter>
      //   <Routes>
      //     <Route path="/" element={<Page />} />
      //     <Route path="/home" element={<HomePage />} />
      //   </Routes>
      // </BrowserRouter>
  );
}

export default App;
