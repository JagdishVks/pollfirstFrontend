import React from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const TrackLeaders = ({ show }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    // Map form fields to database field names
    const payload = {
      LeaderName: data.name,            // Adjusted field name
      Keywords: data.keywords,
      HashTag: data.tags,               // Adjusted field name
      TwitterHandle: data.twitter,      // Adjusted field name
      FacebookId: data.facebook,        // Adjusted field name
      InstagramId: data.instagram,      // Adjusted field name
      YoutubeId: data.youtube,          // Adjusted field name
      UserId: '3',                      // Ensure this matches actual User ID logic
    };

    try {
      // Send a POST request to the API
      const response = await axios.post('http://localhost:5196/api/TrackLeader/add', payload);
      console.log('Leader saved:', response.data);
      toast.success("Leader saved successfully", { autoClose: 3000 });
      
      // Delay the execution of show to allow the toast to display
      setTimeout(() => show(), 3000); // Adjust delay as needed
    } catch (error) {
      console.error('Error saving leader:', error);
      toast.error("Error saving leader", { autoClose: 3000 });
    }
  };

  return (
    <div className="w-[600px] h-[670px] top-[10%] left-[35%] bg-white p-6 rounded-lg shadow-lg absolute z-10 inset-0 pb-0 shadow-black border-2">
      <h2 className="text-[#0F364C] text-center text-[40px]">
        Track Leaders
      </h2>
      <form
        className="w-[400px] mx-auto"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div>
          <label className="block text-[18px] text-[#03393D] font-semibold" htmlFor="name">
            Leader Name
          </label>
          <input
            className="w-[421px] p-2 border border-[#20708E] rounded bg-[#F0FAFF]"
            type="text"
            name="name"
            {...register('name', { required: 'Leader name is required' })}
          />
          {errors.name && <p className="text-red-500 pl-2">{errors.name.message}</p>}
        </div>

        <div>
          <label className="block text-[18px] text-[#03393D] font-semibold" htmlFor="keywords">
            Keywords
          </label>
          <input
            className="w-[421px] p-2 border border-[#20708E] rounded bg-[#F0FAFF]"
            type="text"
            name="keywords"
            {...register('keywords', { required: 'Keywords are required' })}
          />
          {errors.keywords && <p className="text-red-500 pl-2">{errors.keywords.message}</p>}
        </div>

        <div>
          <label className="block text-[18px] text-[#03393D] font-semibold" htmlFor="tags">
            Tags
          </label>
          <input
            className="w-[421px] p-2 border border-[#20708E] rounded bg-[#F0FAFF]"
            type="text"
            name="tags"
            {...register('tags')}
          />
        </div>

        <div>
          <label className="block text-[18px] text-[#03393D] font-semibold" htmlFor="twitter">
            Twitter Handle
          </label>
          <input
            className="w-[421px] p-2 border border-[#20708E] rounded bg-[#F0FAFF]"
            type="text"
            name="twitter"
            {...register('twitter')}
          />
        </div>

        <div>
          <label className="block text-[18px] text-[#03393D] font-semibold" htmlFor="facebook">
            Facebook
          </label>
          <input
            className="w-[421px] p-2 border border-[#20708E] rounded bg-[#F0FAFF]"
            type="text"
            name="facebook"
            {...register('facebook')}
          />
        </div>

        <div>
          <label className="block text-[18px] text-[#03393D] font-semibold" htmlFor="instagram">
            Instagram
          </label>
          <input
            className="w-[421px] p-2 border border-[#20708E] rounded bg-[#F0FAFF]"
            type="text"
            name="instagram"
            {...register('instagram')}
          />
        </div>

        <div>
          <label className="block text-[18px] text-[#03393D] font-semibold" htmlFor="youtube">
            Youtube
          </label>
          <input
            className="w-[421px] p-2 border border-[#20708E] rounded bg-[#F0FAFF]"
            type="text"
            name="youtube"
            {...register('youtube')}
          />
        </div>

        <div className="flex gap-16">
          <button
            className="w-[433px] font-inter rounded-[6px] text-[24px] mt-5 px-[32px] py-2 text-gray-600 border border-gray-300 hover:bg-gray-200"
            type="button"
            onClick={show}
          >
            Cancel
          </button>

          <button
            className="bg-[#0d353e] text-white hover:bg-[#154f5c] hover:text-[#FFFFFF] w-[433px] font-inter rounded-[6px] text-[24px] mt-5 px-[32px] py-2"
            type="submit"
          >
            Submit
          </button>
        </div>
      </form>
      <ToastContainer />
    </div>
  );
};

export default TrackLeaders;
