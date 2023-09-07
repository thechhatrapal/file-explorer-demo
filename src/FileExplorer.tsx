import React, { useState } from 'react';
import Popup from './Popup';

type File = {
  type: String;
  meta: String;
  name: String;
}

type Folder = {
  type: String;
  name: String;
  data: Array<File | Folder>;
}

type RootFolder = {
  type: String;
  name: String;
  data: Folder[];
  meta?: String
}

interface FileExplorer {
  files: RootFolder
}

export const FileExplorer = ({ files }: FileExplorer) => {
  const [expanded, setExpanded] = useState(false);
  const [active, setActive] = useState<String>("");
  const [show, setShow] = useState(false);

  const handleClick = (name: String) => {
    setActive(name)
    console.log(name)
  }

  if (files.type === "folder") {
    return (
      <>
        <div key={`${files.name}`}>
          <div onClick={() => setExpanded(!expanded)}>{files.name}📂</div>
          <div
            className="expanded"
            style={{ display: expanded ? "block" : "gt" }}
          >
            {files.data.map((file: Folder) => {
              if (file.type === "file")
                return <div key={`${file.name}`} onContextMenu={() => setShow(true)}
                  onClick={() => handleClick(file.name)}>{file.name}</div>;
              else if (file.type === "folder")
                return <FileExplorer key={`${file.name}`} files={file as RootFolder} />;
            })}
          </div>
        </div>
          {show && <Popup active={active} setShow={setShow} />}
      </>

    );
  } else if (files.type === "file") {
    return <div>{files.name}</div>;
  } else {
    return <p>⚱⚱</p>;
  }

}
