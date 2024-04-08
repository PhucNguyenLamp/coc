// import React from 'react'
import React from 'react';
import PropTypes from 'prop-types'; // Import PropTypes

import {RiCodeBlock} from "@remixicon/react";
import styles from "./FileCode.module.css";

const FileCode = ({ files, fileSelected }) => {

    const clickCodeFile = (file) => {
        // console.log(`Print from FileCode jsx ${file.name}`)
        fileSelected(file)
    }

    // console.log(files);
    return (
      <>
        <div className={styles.fileWrapper}>
            {files.map(fileCode => (
             
            <div 

            onClick={() => clickCodeFile(fileCode)}
            key={fileCode.name} className={styles.File}>
                <RiCodeBlock/>
                <p>{fileCode.name}</p>
            </div>
            ))}
        </div>
        
      </>
    );
  };

FileCode.propTypes = {
    files: PropTypes.arrayOf(PropTypes.shape({
      name: PropTypes.string.isRequired,
      language: PropTypes.string.isRequired,
      value: PropTypes.string.isRequired
    })).isRequired
  };
export default FileCode
