import React from 'react';
import { useForm } from 'react-hook-form';

const TrackIssues = ({show}) => {
  const {  register, handleSubmit,  formState: { errors }} = useForm();

  const onSubmit = (data) => {
    console.log(data);
    show();
  };

  return (
    <div className="w-[600px] max-h-[400px]  top-[10%] left-[35%] bg-[#EEEEEE] absolute z-10 inset-0 pb-0 shadow-sm rounded-md shadow-black border-2">
      <h2 className="text-[#0F364C] text-center text-[40px] font-itim">
        Add issue
      </h2>
      <form
        className="w-[400px] mx-auto"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div>
          <label className="text-[#0A3147] block pl-2 font-itim" htmlFor="name">
            Master Issue
          </label>
          <input
            className="w-[433px] pl-2 mx-auto rounded-[6px] border-2 border-[#20708E]"
            type="text"
            name="masterissue"
            {...register('masterissue', { required: ' Master Issue is required' })}
          />
          {errors.masterissue && <p className="text-red-500 pl-2">{errors.masterissue.message}</p>}
        </div>

        <div>
          <label className="text-[#0A3147] block pl-2 font-itim" htmlFor="keywords">
            SubIssue 
          </label>
          <input
            className="w-[433px] pl-2 mx-auto rounded-[6px] border-2 border-[#20708E]"
            type="text"
            name="subissue"
            {...register('subissue', { required: 'SubIssue are required' })}
          />
          {errors.subissue && <p className="text-red-500 pl-2">{errors.subissue.message}</p>}
        </div>
         
        <div>
          <label className="text-[#0A3147] block pl-2 font-itim" htmlFor="tags">
           Keywords
          </label>
          <input
            className="w-[433px] pl-2 mx-auto rounded-[6px] border-2 border-[#20708E]"
            type="text"
            name="keywords"
            {...register('keywords',{required:'Keywords is required'})}
          />
          
          {errors.keywords && <p className="text-red-500 pl-2">{errors.keywords.message}</p>}
        </div>

        <div>
          <label className="text-[#0A3147] block pl-2 font-itim" htmlFor="tags">
            Tags
          </label>
          <input
            className="w-[433px] pl-2 mx-auto rounded-[6px] border-2 border-[#20708E]"
            type="text"
            name="tags"
            {...register('tags')}
          />
        </div>


       

    

      


        <div className="flex gap-10 ">
         
        <button
          className="bg-[#6E01B1] w-[433px] font-inter rounded-[6px] text-[24px] mt-5 px-[32px] py-2 text-white"
          onClick={show}
        >
          Cancel
        </button>

        <button
          className="bg-[#6E01B1] w-[433px] font-inter rounded-[6px] text-[24px] mt-5 px-[32px] py-2 text-white"
          type="submit"
        >
          Submit
        </button>


        </div>
      </form>
    </div>
  );
};

export default TrackIssues;
