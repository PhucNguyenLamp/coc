import { useEffect, useState } from "react";
import Editor from '@monaco-editor/react'
import styles from './CodeEditorWindow.module.css'
import io from 'socket.io-client'
import PropTypes from 'prop-types';



const CodeEditorWindow = ({ initialFile, inputUser, resetInputField , setIsOutputCode}) => {
  const socket = io.connect("http://localhost:3000");
  
  // console.log(`Console log Code Editor: ${initialFile.name} `)
  
  const [file, setFile] = useState(initialFile);
  // console.log(`FILEFILE: ${file}`)

  

  useEffect(() => {
    setFile(initialFile);
  }, [initialFile]);

  useEffect(() => {
    socket.on("receive_message", (data) => {
      setFile(prevFile => ({
        ...prevFile,
        value: data
      }));
    });
    return () => socket.disconnect();
  }, [socket]);

  function handleEditorDidMount(value, event) {
    setFile(prevFile => ({
      ...prevFile,
      value: value
    }));
    // console.log(`from handleEditor ${file.value}`)
    socket.emit("chat_message", value);
  }

  async function compile(){
    try{
      // resetInputField();
      const code = file.value
      const input = inputUser
      const inputRadio = input === ""? false: true
      const lang = file.language

      const requestBody = {
        code: code,
        input: input,
        inputRadio: inputRadio,
        lang: lang
      };
      const response = await fetch('http://localhost:3000/test', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(requestBody)
      });
      if (!response.ok){
        throw new Error("Failed to complete");
      }
      const responseData = await response.json()
      console.log(`responseData: ${responseData.output}`)
      setIsOutputCode(responseData.output)
    }catch(error){
      console.error(error);
      throw error;
    }
  }
  

  return (
    <div className={styles.editor}>
        {/* Add console.log to check the value of initialFile */}
        {/* {console.log('initialFile:', file)} */}
        <Editor
          height="80%"
          defaultLanguage={file.language}
          theme="vs-dark"
          path={file.name}
          value={file.value}
          onChange={handleEditorDidMount}
        />
      <button  
      className={styles.runButton} 
      onClick={compile}>Compile</button>
    </div>
  );
}

CodeEditorWindow.propTypes = {
  initialFile: PropTypes.shape({
    name: PropTypes.string.isRequired,
    language: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired
  }).isRequired,
  inputUser: PropTypes.string.isRequired,
  resetInputField: PropTypes.func.isRequired, 
  setIsOutputCode: PropTypes.func.isRequired
};

export default CodeEditorWindow;
