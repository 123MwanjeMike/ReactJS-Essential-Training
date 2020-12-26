import './App.css';

function Header() {
    return (
        <header>
            <h1>Mike's Portfolio</h1>
        </header>
    )
}

function Main() {
    return(
        <section>
            <p>Hi there, welcome to my portfolio.</p>
        </section>
    )
}

function Footer() {
    return(
        <footer>
            <p>Reach out to me via my email.</p>
        </footer>
    )
}

function App() {
  return (
    <div className="App">
      <Header />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
