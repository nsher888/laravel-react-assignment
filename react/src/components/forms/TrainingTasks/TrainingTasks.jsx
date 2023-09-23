import { MdDeleteForever } from "react-icons/md";
import { useFieldArray } from "react-hook-form";
import PropTypes from "prop-types";
import TrainingTasksHeader from "./TrainingTasksHeader";
import Divider from "../../shared/Divider";

const TrainingTasks = ({ control, register }) => {
  const { fields, append, remove } = useFieldArray({
    name: "trainingTasks",
    control,
  });

  return (
    <>
      <div className="flex items-center justify-between gap-6 mb-6">
        <h3 className="p-3 text-lg font-semibold text-center text-gray-800 bg-gray-100 border border-gray-300 rounded-full">
          ამოცანები ტრენინგებთან მიმართებაში
        </h3>
        <button
          className="px-4 py-2 text-white transition duration-300 ease-in-out bg-blue-500 rounded hover:bg-blue-600"
          type="button"
          onClick={() => {
            append();
          }}
        >
          ახალი რიგის დამატება
        </button>
      </div>

      <TrainingTasksHeader />

      {fields.map((field, index) => {
        return (
          <div
            className="grid grid-cols-7 gap-2 mb-4 form-control"
            key={field.id}
          >
            <div className="col-span-2">
              <input
                className="w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline focus:border-blue-500 hover:bg-gray-100 focus:bg-gray-100"
                type="text"
                placeholder="ამოცანის სახელი"
                {...register(`trainingTasks.${index}.name`)}
              />
            </div>

            <div className="col-span-2">
              <input
                className="w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline focus:border-blue-500 hover:bg-gray-100 focus:bg-gray-100"
                type="text"
                placeholder="ამოცანის პროდუქტი"
                {...register(`trainingTasks.${index}.product`)}
              />
            </div>

            <div className="col-span-1">
              <input
                className="w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline focus:border-blue-500 hover:bg-gray-100 focus:bg-gray-100"
                type="text"
                placeholder="დაგეგმილი დრო"
                {...register(`trainingTasks.${index}.plannedTime`)}
              />
            </div>

            <div className="col-span-1">
              <input
                className="w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline focus:border-blue-500 hover:bg-gray-100 focus:bg-gray-100"
                type="text"
                placeholder="ფაქტიური დრო"
                {...register(`trainingTasks.${index}.actualTime`)}
              />
            </div>

            <div className="flex col-span-1 gap-2 align-center">
              <input
                className="w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline focus:border-blue-500 hover:bg-gray-100 focus:bg-gray-100"
                type="date"
                {...register(`trainingTasks.${index}.date`)}
              />

              {index > 0 && (
                <button
                  type="button"
                  onClick={() => remove(index)}
                  className="group hover:text-red-500"
                >
                  <MdDeleteForever className="text-gray-600 transition-colors duration-300 ease-in-out group-hover:text-red-500" />
                </button>
              )}
            </div>
          </div>
        );
      })}

      <Divider />
    </>
  );
};

TrainingTasks.propTypes = {
  control: PropTypes.object.isRequired,
  register: PropTypes.func.isRequired,
};

export default TrainingTasks;
