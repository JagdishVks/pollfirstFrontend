import React from "react";
import { useForm, useFieldArray } from "react-hook-form";
import { Bar } from "react-chartjs-2";
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from "chart.js";


const indianLanguages = [
  'Hindi', 'Bengali', 'Telugu', 'Marathi', 'Tamil', 'Gujarati', 'Kannada',
  'Odia', 'Malayalam', 'Punjabi', 'Assamese', 'Urdu', 'Sanskrit', 'Konkani'
];

const tones = [
  'Formal', 'Informal', 'Serious', 'Optimistic', 'Critical', 'Supportive'
];

const politicalLeaders = [
  'Narendra Modi', 'Rahul Gandhi', 'Amit Shah', 'Arvind Kejriwal',
  'Mamata Banerjee', 'Mayawati', 'Sharad Pawar', 'Akhilesh Yadav'
];
const data = {
  labels: ["Damaging", "Negativity", "Positive", "Neutral"], // X-axis labels
  datasets: [
    {
      label: "Sentiment Analysis", // Label for the dataset
      data: [5, 8, 10, 7], // Corresponding data points
      backgroundColor: [
        "rgba(255, 99, 132, 0.5)", // Color for Damaging
        "rgba(54, 162, 235, 0.5)", // Color for Negativity
        "rgba(75, 192, 192, 0.5)", // Color for Positive
        "rgba(153, 102, 255, 0.5)", // Color for Neutral
      ],
      borderColor: [
        "rgba(255, 99, 132, 1)", // Border color for Damaging
        "rgba(54, 162, 235, 1)", // Border color for Negativity
        "rgba(75, 192, 192, 1)", // Border color for Positive
        "rgba(153, 102, 255, 1)", // Border color for Neutral
      ],
      borderWidth: 1,
    },
  ],
};

const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "top",
    },
    title: {
      display: true,
      text: "Sentiment Analysis Chart",
    },
  },
};
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);
const CreateSummary = () => {
  const { register, handleSubmit, control, formState: { errors } } = useForm({
    defaultValues: {
      objective: '',
      language: '',
      tones: [{ tone: '' }],
      leader: ''
    }
  });

  const { fields, append } = useFieldArray({
    control,
    name: 'tones',
  });

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div className="flex flex-col items-center justify-start w-full min-h-screen p-10 bg-[#CFE2E4]">
    
      <div className="flex w-full mb-10">
    
        <div className="w-[40%] p-4">
          <label className="block mb-2 text-xl font-istokweb font-bold text-[#6E01B1]">HeadLines</label>
          <textarea
            className="w-full h-40 p-2 border-2 border-[#6E01B1] rounded-lg focus:outline-none"
            placeholder="Type here..."
          ></textarea>
        </div>

        <div className="w-[600px] p-4 ml-6">
          <h2 className="text-xl font-bold text-[#6E01B1]">Graph</h2>
          <div className="w-full h-100 bg-[#e4d4ee] text-white flex items-center justify-center rounded-lg">
            {/* Placeholder for Graph */}
            <Bar data={data} options={options} />
          </div>
        </div>
      </div>

      {/* Second Row: Form */}
      <div className="w-[70%] bg-white p-6 rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold mb-4 text-[#6E01B1]">Form</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          {/* Objective Textarea */}
          <div className="mb-4">
            <label className="block mb-2 text-lg text-[#6E01B1]">Specify the Objective</label>
            <textarea
              {...register('objective', {
                required: 'Objective is required',
                maxLength: {
                  value: 200,
                  message: 'Maximum of 200 words allowed'
                }
              })}
              className={`w-full h-32 p-2 border ${
                errors.objective ? "border-red-500" : "border-[#6E01B1]"
              } rounded-lg`}
              placeholder="Type here..."
            ></textarea>
            {errors.objective && <span className="text-red-500">{errors.objective.message}</span>}
          </div>

          {/* Language Dropdown */}
          <div className="mb-4">
            <label className="block mb-2 text-lg text-[#6E01B1]">Select Language</label>
            <select
              {...register("language", { required: "Language is required" })}
              className={`w-full p-2 border ${
                errors.language ? "border-red-500" : "border-[#6E01B1]"
              } rounded-lg`}
            >
              <option value="">-- Select Language --</option>
              {indianLanguages.map((language, index) => (
                <option key={index} value={language}>{language}</option>
              ))}
            </select>
            {errors.language && <span className="text-red-500">{errors.language.message}</span>}
          </div>

          {/* Tone Dropdown (Multiple Selections) */}
          <div className="mb-4">
            <label className="block mb-2 text-lg text-[#6E01B1]">Select Tone (Multiple)</label>
            {fields.map((item, index) => (
              <div key={item.id} className="flex items-center space-x-2 mb-2">
                <select
                  {...register(`tones.${index}.tone`, { required: 'Tone is required' })}
                  className="w-full p-2 border border-[#6E01B1] rounded-lg"
                >
                  <option value="">-- Select Tone --</option>
                  {tones.map((tone, i) => (
                    <option key={i} value={tone}>{tone}</option>
                  ))}
                </select>
                <button
                  type="button"
                  onClick={() => append({ tone: '' })}
                  className="text-blue-500"
                >
                  + Add Tone
                </button>
              </div>
            ))}
            {errors.tones && <p className="text-red-500 text-sm mt-1">At least one tone is required</p>}
          </div>

          {/* Political Leader Dropdown */}
          <div className="mb-4">
            <label className="block mb-2 text-lg text-[#6E01B1]">Select Political Leader</label>
            <select
              {...register("leader", { required: "Leader is required" })}
              className={`w-full p-2 border ${
                errors.leader ? "border-red-500" : "border-[#6E01B1]"
              } rounded-lg`}
            >
              <option value="">-- Select Leader --</option>
              {politicalLeaders.map((leader, index) => (
                <option key={index} value={leader}>{leader}</option>
              ))}
            </select>
            {errors.leader && <span className="text-red-500">{errors.leader.message}</span>}
          </div>

          {/* Submit Button */}
          <div className="text-center">
            <button
              type="submit"
              className="px-4 py-2 text-white bg-[#6E01B1] rounded-lg"
            >
              Generate
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateSummary;
