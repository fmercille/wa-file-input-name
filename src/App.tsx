import './App.css';
import '@awesome.me/webawesome-pro/dist/styles/webawesome.css';

import WaInput from "@awesome.me/webawesome-pro/dist/react/input/index.js"
import WaComboBox from "@awesome.me/webawesome-pro/dist/react/combobox/index.js"
import WaFileInput from "@awesome.me/webawesome-pro/dist/react/file-input/index.js";

function App() {
  return (
    <div className="App">
      <form>
        <WaInput name="my_input" label="Input" />
        <WaComboBox name="my_combobox" label="ComboBox" />
        <WaFileInput name="my_file_input" label="FileInput" />
      </form>
    </div>
  );
}

export default App;
