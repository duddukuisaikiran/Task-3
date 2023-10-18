import './App.css';
import { ColorPicker } from './components/ColorPicker';
function App() { 
  const arr=["red","lawngreen","blue","yellow","fuchsia","skyblue","coral","darkmagenta","pink","green","orangered","deepskyblue","brown","lightcoral","darkcyan","goldenrod"]
  return (
    <div>
      <ColorPicker color={arr} />
    </div>
  );
}
export default App;
