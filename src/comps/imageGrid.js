import React from 'react';
import UseFirestore from '../hooks/useFirestore';
import { motion } from 'framer-motion';


const ImageGrid = ({setSelectedImg}) => {

const { docs } = UseFirestore('images');
console.log(docs);


    return ( 
        <div className='image-grid'>
{docs && docs.map(doc => (
    <motion.div className='image-wrap' key={doc.id}
    //motion attribute
    layout
    whileHover={{ opacity: 1 }}


    onClick={() => setSelectedImg(doc.url)}
    >

<motion.img src={doc.url} alt='uploaded' 

    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{delay: 1 }}
/>

    </motion.div>
    ))}
        </div>
     );
}
 
export default ImageGrid;