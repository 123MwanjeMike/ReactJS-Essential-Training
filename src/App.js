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
            <ul>
                {props.services.map((service) => 
                    <li>{service}</li>
                )}
            </ul>
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

const services = [
    "Web development",
    "App development",
    "Search Engine Optimization"
]

function App() {
  return (
    <div className="App">
      <Header name="Dobello"/>
      <Main pronoun="our" services={services}/>
      <Footer year={new Date().getFullYear()}/>
    </div>
  );
}

export default App;
