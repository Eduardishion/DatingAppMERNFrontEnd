

//import './App.css';
//para deploy en firebase hosting
//https://medium.com/swlh/how-to-deploy-a-react-app-with-firebase-hosting-98063c5bf425
//https://newbedev.com/firebase-hosting-setup-complete-code-example
//mejor 
//https://cming0721.medium.com/build-and-deploy-react-app-on-firebase-in-2021-80b37cc52707
//https://cming0721.medium.com/build-and-deploy-react-app-on-firebase-in-2021-80b37cc52707
import Header from './components/Header';
import DatingCards from './components/DatingCards';
import SwipeButtons from './components/SwipeButtons';

function App() {
  return (
    <div className="App">
      <h1>Dating App MERN</h1>
      <Header />
      <DatingCards />
      <SwipeButtons />
    </div>
  );
}

export default App;
