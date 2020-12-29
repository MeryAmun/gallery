import React, { useState} from 'react';
import ProgressBar from './progressBar';


const Upload = () => {
    const [file, setFile] =  useState(null);
    const [error, setError] = useState(null)

    const types = ['image/png', 'image/jpg', 'image/jpeg'];

const handleChange = (e) => {

    let selected = e.target.files[0];
    if(selected && types.includes(selected.type)) {
        setFile(selected)
        setError('')
    }else{
        setFile(null);
        setError('Please select an image file (png, jpg, or jpeg)');
    }

}
    return ( 
        <form>
         <label>
        
            <input type='file' className='file' onChange={handleChange}/>
            <span>+</span>
           </label>
            <div className='output'>
              { error && <div className='error'> { error } </div> }
              { file && <div className='error'> { file.name } </div> }
              { file && <ProgressBar file={file}  setFile={setFile} /> }
            </div> 
            </form>
     );
}
export default Upload;