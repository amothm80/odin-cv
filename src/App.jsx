
import Aside from './Aside.jsx';
import Main from './Main.jsx';
import './App.css';

export default function App() {
  return (
    <div className="main-app flex flex-col lg:flex-row bg-slate-100 rounded-xl overflow-hidden">
      <Aside />
      <Main />
    </div>
  );
}
