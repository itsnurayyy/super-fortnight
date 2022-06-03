
import { BrowserRouter,Route } from 'react-router-dom';
import './App.css';
import Header from "./components/Header";
import Homepage from "./Pages/Homepage";
import CoinPage from "./Pages/CoinPage";
import { makeStyles } from "@material-ui/core";
import Alert from "./components/Alert";

function App() {

  const useStyles = makeStyles(()=> ({
  App:{
    backgroundColor: "#0b0e20",
    color: "white",
    minHeight: "100vh",

  },
}));

const classes = useStyles()

  return (
    <BrowserRouter>
    <div className={classes.App}>
      <Header/>
      <Route path='/' component={Homepage} exact/>
      <Route path="/coins/:id" component={CoinPage}  />
    </div>
    <Alert/>
    </BrowserRouter>
  );
}

export default App;
