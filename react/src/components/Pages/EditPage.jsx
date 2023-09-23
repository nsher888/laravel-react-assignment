import { useParams } from "react-router-dom";
import axios from "axios";
import { useEffect } from "react";
import Divider from "../shared/Divider";
import StatisticsForm from "../forms/Statistics/StatisticsForm";
import ProjectTasks from "../forms/ProjectTasks/ProjectTasks";
import QuoteTasks from "../forms/QuoteTasks/QuoteTasks";
import RegularTasks from "../forms/RegularTasks/RegularTasks";
import TrainingTasks from "../forms/TrainingTasks/TrainingTasks";
import UnplannedTasks from "../forms/UnplannedTasks/UnplannedTasks";
import { useForm } from "react-hook-form";

const EditPage = () => {
  const params = useParams();

  const { register, handleSubmit, control, formState } = useForm({
    defaultValues: {
      statistics: [
        { name: "", dimension: "", quantity: "", quota: "", remark: "" },
      ],
      projectTasks: [
        { name: "", product: "", plannedTime: "", actualTime: "", date: "" },
      ],
      quoteTasks: [
        { name: "", product: "", plannedTime: "", actualTime: "", date: "" },
      ],
      regularTasks: [
        { name: "", product: "", plannedTime: "", actualTime: "", date: "" },
      ],
      trainingTasks: [
        { name: "", product: "", plannedTime: "", actualTime: "", date: "" },
      ],
      unplannedTasks: [
        { name: "", product: "", plannedTime: "", actualTime: "", date: "" },
      ],
    },
  });

  const { errors } = formState;

  useEffect(() => {
    axios
      .get(`http://localhost:8000/api/project-data/${params.id}`)
      .then((res) => {
        console.log(res.data);
      });
  }, [params.id]);

  const onSubmit = (data) => {
    console.log(data);
  };

  console.log(params.id);
  return (
    <div className="min-h-screen bg-gray-300">
      <div className="container py-8 mx-auto">
        <div className="w-4/5 px-8 pt-6 pb-8 mx-auto mb-4 bg-white rounded shadow-md">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="flex gap-5 mb-4">
              <div className="w-full">
                <label
                  className="block mb-2 text-sm font-bold text-gray-700"
                  htmlFor="name"
                >
                  სახელი
                </label>
                <input
                  className="w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline focus:border-blue-500 hover:bg-gray-100 focus:bg-gray-100"
                  id="name"
                  type="text"
                  placeholder="სახელი"
                  {...register("name", {
                    required: "შეიყვანეთ სახელი",
                  })}
                />

                <p className="mt-2 text-xs text-red-500">
                  {" "}
                  {errors.name?.message}
                </p>
              </div>
              <div className="w-full">
                <label
                  className="block mb-2 text-sm font-bold text-gray-700"
                  htmlFor="last_name"
                >
                  გვარი
                </label>
                <input
                  className="w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline focus:border-blue-500 hover:bg-gray-100 focus:bg-gray-100"
                  id="last_name"
                  type="text"
                  placeholder="გვარი"
                  {...register("last_name", {
                    required: "შეიყვანეთ გვარი",
                  })}
                />

                <p className="mt-2 text-xs text-red-500">
                  {" "}
                  {errors.last_name?.message}
                </p>
              </div>
            </div>

            <div className="mb-6">
              <label
                className="block mb-2 text-sm font-bold text-gray-700"
                htmlFor="date"
              >
                კვირის საწყისი თარიღი
              </label>
              <input
                className="w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline focus:border-blue-500 hover:bg-gray-100 focus:bg-gray-100"
                id="date"
                type="date"
                {...register("date", {
                  required: "შეიყვანეთ კვირის საწყისი თარიღი",
                })}
              />

              <p className="mt-2 text-xs text-red-500">
                {" "}
                {errors.date?.message}
              </p>
            </div>

            <Divider />

            <StatisticsForm control={control} register={register} />

            <ProjectTasks control={control} register={register} />

            <QuoteTasks control={control} register={register} />

            <RegularTasks control={control} register={register} />

            <TrainingTasks control={control} register={register} />

            <UnplannedTasks control={control} register={register} />

            <button
              className="px-4 py-2 text-white transition duration-300 ease-in-out bg-blue-500 rounded hover:bg-blue-600"
              type="submit"
            >
              გაგზავნა
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default EditPage;
