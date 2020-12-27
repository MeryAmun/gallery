import React, { useState, useEffect} from 'react';
import {projectStorage} from '../firebase/config';


const Storage = (file) => {
const [progress, setProgress] = useState(0);
const [error, setErroe] = useState(null);
const [url, setUrl] = useState(null);


useEffect (() => {

    //references

    const storageRef = projectStorage.ref(file.name);


    storageRef.put(file).on('state_change', (snap) => {
        let percentage = (snap.bytesTrransfered / snap.totalBytes) * 100;
        setProgress(percentage);
    }, (err) => { 
        setError(err);
    }, async () => {
        const url = await storageRef.getDownloadUrl();
        setUrl(url);
    })

}, [file]);
return { progress, url, error}


}


export default Storage
