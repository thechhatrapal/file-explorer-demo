import React from 'react'
import './Popup.css'

interface popup {
    active: String
    setShow: React.Dispatch<React.SetStateAction<boolean>>
}


function Popup({ active, setShow }: popup) {
    const handleClick = (e: any) => {
        console.log(active, e.target.value);
        setShow(false)
    }
    return (
        <div id="popup-box" className="modal" style={{ position: 'relative' }}>
            <div className="content">
                <div>
                    <button onClick={handleClick} value={'Rename'}>Rename</button>
                </div>
                <div>
                    <button onClick={handleClick} value="Delete">Delete</button>
                </div>
                <div>
                    <button onClick={handleClick} value="copy">Copy</button>
                </div>
            </div>
        </div>
    )
}

export default Popup