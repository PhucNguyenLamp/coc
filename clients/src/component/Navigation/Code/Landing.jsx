import { useEffect, useState } from 'react'
import styles from './Landing.module.css'
// import { useSearchParams } from 'react-router-dom'
import  {RiFileLine, RiCodeBoxLine} from'@remixicon/react'
import CodeEditorWindow from './CodeEditorWindow'
import FileCode from './FileCode'
import FileDesign from './FileDesign'
import io from 'socket.io-client'
const Landing = () => {

  const [isFile, setIsFile] = useState(true);
  
  const [isOutputCode, setIsOutputCode] = useState("");
  const [initialFile, setInitialFile] = useState({name:"", language:"", value:""})

  const [inputUser, setInputUser] = useState("")
  const socket2 = io.connect("http://localhost:3000");

  useEffect(() => {
    socket2.on("receive_message_output", (data) => {
      console.log(data)
      setInputUser(data)
    })
  }, [socket2])

  function handleInputUser (e){
    setInputUser(e.target.value);
    socket2.emit("chat_message_input", e.target.value)
  }
  
  const files = [
    {
      name: "script.py",
      language: "python",
      value: "# Here is some python text"
    },
    {
      name: "file.cpp",
      language: "cpp",
      value: "#include <iostream>"
    }
  ];

  
  const fileSelected = (file) => {
    // console.log(`file selected from Landing jsx:${file.name} $${file.value} ${file.language}`)
    
    setInitialFile(file)
    // console.log(`file: ${initialFile}`)
  }
  
  const resetInputField = () =>{
    setInputUser("")
  }
  
  
  let selectFile = isFile? styles.Selector : styles.notSelector
  let selectDesign = !isFile? styles.Selector : styles.notSelector

  return (
    <div className={styles.codeEditorWrapper}>

      <div className={styles.leftWrapper}>
          <div className={styles.chooseTab}>

                <div
                onClick={()=>setIsFile(true)}
                className={selectFile}>
                  <RiFileLine className={styles.IconIcon}/>
                </div>

                <div 
                onClick={()=>setIsFile(false)}
                className={selectDesign}>
                  <RiCodeBoxLine className={styles.IconIcon}/>
                </div>
                
                
          </div>
          <div className={styles.folderTab}>
              {isFile?<FileCode files={files} fileSelected={fileSelected}/> : <FileDesign/>}
          </div>
      </div>

      <div className={styles.editor}>
        {console.log(inputUser)}
        <CodeEditorWindow initialFile={initialFile}  inputUser={inputUser} resetInputField= {resetInputField} setIsOutputCode = {setIsOutputCode}
        className={styles.codePlace}
        />  



        <div className={styles.inputOutput}>

          <div className={styles.codeOutput}>
            <p className={styles.Terminal}>Output</p>
            <div className={styles.outputContainer}>
              <p className={styles.OUTPUT}>{isOutputCode}</p>
            </div>
          </div>

          <div className={styles.codeOutput}>
            <p className={styles.Terminal}>Input</p>
              <textarea className={styles.InputField} 
              onChange={handleInputUser}
              placeholder='Enter your inputs' value={inputUser}></textarea>
          </div>

        </div>
        


      </div>
    </div>
  )
}

export default Landing
