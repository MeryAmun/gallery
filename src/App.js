import React,{ useState }  from 'react';
import ImageGrid from './comps/imageGrid';
import Modal from './comps/modal';
import Title from './comps/Title';
import Upload from './comps/uplaod';

function App() {
const [selectedImg, setSelectedImg] = useState(null)



  return (
    <div className="App">
      <Title/>
      <Upload />
      <ImageGrid setSelectedImg={setSelectedImg} />
    { selectedImg && <Modal selectedImg={selectedImg} setSelectedImg={setSelectedImg}/>}
    </div>
  );
}

export default App;
