import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const EditModal = ({ show,onClose}) => {
  const [showEditModal, setShowEditModal] = useState(show);
  
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = (data,e) => {
    console.log('Form Data:', data);
    
    // setShowEditModal(false); 
    toast.success("Details submitted successfully!");
    onClose();
  };

  return (
    <>
      {showEditModal && (
        <div className="absolute  top-64 z-10 inset-10 bg-[rgba(0,0,0,0.2)] bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-6 rounded-lg shadow-lg w-auto ">
            <h2 className="text-[24px] text-[#0A3147]  mb-4">Edit Details for Akash</h2>

            <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
              
              <div>
                <label className="block text-[18px] text-[#03393D] font-semibold">Edit Keywords</label>
                <input
                  {...register('keywords', { required: true })}
                  className="w-[421px] p-2 border border-[#20708E] rounded bg-[#F0FAFF]"
                  placeholder="Enter keywords"
                />
                {errors.keywords && <span className="text-red-500">Keywords are required</span>}
              </div>

              <div>
                <label className="block text-[18px] text-[#03393D] font-semibold">Edit Hashwords</label>
                <input
                  {...register('hashwords', { required: true })}
                  className="w-[421px] p-2 border border-[#20708E] rounded bg-[#F0FAFF]"
                  placeholder="Enter hashwords"
                />
                {errors.hashwords && <span className="text-red-500">Hashwords are required</span>}
              </div>

              <div>
                <label className="block text-[18px] text-[#03393D] font-semibold">Edit Facebook ID</label>
                <input
                  {...register('facebookId', { required: true })}
                  className="w-[421px] p-2 border border-[#20708E] rounded bg-[#F0FAFF]"
                  placeholder="Enter Facebook ID"
                />
                {errors.facebookId && <span className="text-red-500">Facebook ID is required</span>}
              </div>

              <div>
                <label className="block text-[18px] text-[#03393D] font-semibold">Edit Instagram ID</label>
                <input
                  {...register('instagramId', { required: true })}
                  className="w-[421px] p-2 border border-[#20708E] rounded bg-[#F0FAFF]"
                  placeholder="Enter Instagram ID"
                />
                {errors.instagramId && <span className="text-red-500">Instagram ID is required</span>}
              </div>

              <div className="flex justify-end gap-4 mt-4">
                <button
                  type="button"
                  onClick={() => onClose()}
                  className="text-gray-600 border border-gray-300 px-4 py-2 rounded hover:bg-gray-200"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  
                  className="bg-[#0d353e] text-white px-4 py-2 rounded hover:bg-[#154f5c] hover:text-[#FFFFFF]"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default EditModal;
