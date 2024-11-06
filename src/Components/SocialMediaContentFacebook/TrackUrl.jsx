import React from 'react';
import { useForm } from 'react-hook-form';

const TrackUrl = ({ show }) => {
  const { register, handleSubmit, formState: { errors } } = useForm();
    

  const onSubmit = (data) => {
    console.log(data);
    show();
  };

  return (
    <div className="w-[500px] max-h-[400px]  top-[10%] left-[35%] bg-[#EEEEEE] absolute z-10 inset-0 pb-0 shadow-sm rounded-md shadow-black border-2">
      <h2 className="text-[#0F364C] text-center text-[40px] font-itim">
        Add Source Url
      </h2>
      <form
        className="w-[400px] mx-8"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div>
          <label className="text-[#0A3147] block pl-2 font-itim" htmlFor="sourceUrl">
            Source Url
          </label>
          <input
            className="w-[433px] pl-2 mx-auto rounded-[6px] border-2 border-[#20708E]"
            type="text"
            name="sourceUrl"
            {...register('sourceUrl', { required: 'Source URL is required' })}
          />
          {errors.sourceUrl && <p className="text-red-500 pl-2">{errors.sourceUrl.message}</p>}
        </div>

        <div>
          <label className="text-[#0A3147] block pl-2 font-itim" htmlFor="headline">
            Headline
          </label>
          <input
            className="w-[433px] pl-2 mx-auto rounded-[6px] border-2 border-[#20708E]"
            type="text"
            name="headline"
            {...register('headline', { required: 'Headline is required' })}
          />
          {errors.headline && <p className="text-red-500 pl-2">{errors.headline.message}</p>}
        </div>

        <div>
          <label className="text-[#0A3147] block pl-2 font-itim" htmlFor="description">
            Description
          </label>
          <input
            className="w-[433px] pl-2 mx-auto rounded-[6px] border-2 border-[#20708E]"
            type="text"
            name="description"
            {...register('description', { required: 'Description is required' })}
          />
          {errors.description && <p className="text-red-500 pl-2">{errors.description.message}</p>}
        </div>

        <div>
          <label className="text-[#0A3147] block pl-2 font-itim" htmlFor="body">
            Body
          </label>
          <input
            className="w-[433px] pl-2 mx-auto rounded-[6px] border-2 border-[#20708E]"
            type="text"
            name="body"
            {...register('body')}
          />
        </div>

        <div>
          <label className="text-[#0A3147] block pl-2 font-itim" htmlFor="author">
            Author
          </label>
          <input
            className="w-[433px] pl-2 mx-auto rounded-[6px] border-2 border-[#20708E]"
            type="text"
            name="author"
            {...register('author')}
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

export default TrackUrl;
