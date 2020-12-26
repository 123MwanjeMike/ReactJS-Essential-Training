import './App.css';

function Header(props) {

    return (
        <header>
            <h1>{props.name}'s Portfolio</h1>
        </header>
    )
}

function Main(props) {
    return(
        <section>
            <p>Hi there, welcome to {props.pronoun} portfolio.</p>
        </section>
    )
}

function Footer(props) {
    return(
        <footer>
            <p>Copyright {props.year}</p>
        </footer>
    )
}

function App() {
  return (
    <div className="App">
      <Header name="Dobello"/>
      <Main pronoun="our"/>
      <Footer year={new Date().getFullYear()}/>
    </div>
  );
}

export default App;
