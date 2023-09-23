import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import useHomePage from "../../hooks/useHomePage";
import Divider from "../shared/Divider";
import ProjectTasks from "../forms/ProjectTasks/ProjectTasks";
import QuoteTasks from "../forms/QuoteTasks/QuoteTasks";
import RegularTasks from "./../forms/RegularTasks/RegularTasks";
import TrainingTasks from "../forms/TrainingTasks/TrainingTasks";
import UnplannedTasks from "../forms/UnplannedTasks/UnplannedTasks";
import StatisticsForm from "./../forms/Statistics/StatisticsForm";
import { Link } from "react-router-dom";

function FormPage() {
  const { register, handleSubmit, control, errors, onSubmit } = useHomePage();
  return (
    <div className="min-h-screen bg-gray-300">
      <div className="container py-8 mx-auto">
        <div className="flex items-center justify-between w-3/4 gap-4 mx-auto">
          <h1 className="self-center text-4xl">კვირის გეგმა</h1>

          <Link
            to="/list"
            className="px-4 py-2 text-white transition duration-300 ease-in-out bg-blue-500 rounded hover:bg-blue-600"
          >
            არსებული მონაცემების ნახვა
          </Link>
        </div>

        <div className="flex justify-center mt-8">
          <div className="w-4/5">
            <div className="px-8 pt-6 pb-8 mb-4 bg-white rounded shadow-md">
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
      </div>
      <ToastContainer />
    </div>
  );
}

export default FormPage;
