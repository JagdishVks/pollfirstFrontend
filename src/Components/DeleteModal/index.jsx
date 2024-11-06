import React, { useState, useEffect } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const DeleteModal = ({ show, onClose }) => {
  const [showDeleteModal, setShowDeleteModal] = useState(show);

  useEffect(() => {
    setShowDeleteModal(show);
  }, [show]);

  const handleYes = () => {
    console.log("Item deleted");
    setShowDeleteModal(false);
    toast.success("Item deleted successfully");
    onClose();
  };

  const handleNo = () => {
    console.log("Action canceled");
    setShowDeleteModal(false);
  };

  return (
    <>
      
      {showDeleteModal && (
        <div className="fixed inset-0 bg-[rgba(0,0,0,0.5)] flex justify-center items-center z-10">
          <div className="bg-white p-6 rounded-[14px] border border-solid border-[#000000] shadow-lg w-[400px]">
            <h2 className='text-[24px] text-[#0A3147] font-itim mb-4'>Do you really want to delete this?</h2>
            <div className="flex justify-center gap-6 mt-5">
              <button onClick={handleNo} className='text-[24px] font-itim hover:bg-[#0A3147] text-[#0A3147] hover:text-white px-4 py-2 border border-[#0A3147] rounded'>No</button>
              <button onClick={handleYes} className='text-[24px] font-itim bg-[#0A3147] hover:bg-[#082f3c] text-white px-4 py-2 rounded'>Yes</button>
            </div>
          </div>
        </div>
      )}
      <div className="ml-32 absolute z-20">
        e/;lwmomeFOKwpkfe3PK#
      </div>
      <ToastContainer />
    
    </>
  );
};

export default DeleteModal;
