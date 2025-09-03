import './App.css';
import Header from './components/header';
import 'primereact/resources/themes/viva-dark/theme.css';
import "/node_modules/primeflex/primeflex.css";
import UserCalendar from './components/calendar';

function App() {
  return (
    <div className="App">
        <Header />
        <div className="grid">
            <div className="col-2">
              <div className="text-center p-3 border-round-sm bg-primary font-bold">2</div>    
            </div>
            <div className="col-7 col-offset-1">
              <div className="text-center p-3 border-round-sm bg-primary font-bold">
                <UserCalendar />
              </div>    
            </div>
            <div className="col-2">
              <div className="text-center p-3 border-round-sm bg-primary font-bold">2</div>    
            </div>
        </div>
    </div>
  );
}

export default App; 
