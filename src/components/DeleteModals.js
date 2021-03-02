import React from 'react';

const DeleteModal = ({ handleClose, show, children }) => {
  const showHideClassName = show ? "modal display-block" : "modal display-none";
    
    return (
        <div className="bg-white rounded-lg w-1/2 text-center border ${showHideClassName}">
        <div className="w-full border-t-8 border-pink-600 rounded-lg text-center py-8">
            <h3 className="text-gray-700">Are you sure you want to delete this task?</h3>
        </div>
        <div className="pb-4 flex justify-around">
          <button onClick={handleClose} className="w-1/3 px-4 py-3 text-center bg-gray-100 text-gray-400 hover:bg-gray-200 hover:text-black font-bold rounded-lg text-sm">Cancel</button>
          <button onClick={deleteHandler} className="w-1/3 px-4 py-3 text-center text-pink-100 bg-pink-600 rounded-lg hover:bg-pink-700 hover:text-white font-bold text-sm">Delete task</button>
        </div>
      </div>      
    )
}

export default DeleteModal;
