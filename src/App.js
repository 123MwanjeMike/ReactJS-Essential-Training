import './App.css';

function SecretComponent() {
    return <h1>Only authorized users can access this secret information</h1>
}

function RegularComponent() {
    return <h1>Anyone can access this component</h1>
}
// component names are case sentive and need upper camel case

function App(props) {
  if(props.authorised){
    return <SecretComponent />
  }else{
    return <RegularComponent />
  }
}

export default App;
