import { Link } from "react-router-dom";
import Divider from "../shared/Divider";
import StatisticsForm from "../forms/Statistics/StatisticsForm";
import ProjectTasks from "../forms/ProjectTasks/ProjectTasks";
import QuoteTasks from "../forms/QuoteTasks/QuoteTasks";
import RegularTasks from "../forms/RegularTasks/RegularTasks";
import TrainingTasks from "../forms/TrainingTasks/TrainingTasks";
import UnplannedTasks from "../forms/UnplannedTasks/UnplannedTasks";
import { ToastContainer } from "react-toastify";
import useEditPage from "../../hooks/useEditPage";

const EditPage = () => {
  const { handleSubmit, onSubmit, register, errors, control, loading } =
    useEditPage();
  return (
    <div className="min-h-screen bg-gray-300">
      <div className="container py-8 mx-auto">
        <div className="flex items-center justify-between w-3/4 gap-4 mx-auto mb-6">
          <h1 className="self-center text-4xl">ფორმის რედაქტირება</h1>
          <Link
            to="/list"
            className="px-4 py-2 text-white transition duration-300 ease-in-out bg-blue-500 rounded hover:bg-blue-600"
          >
            ფორმების სიაზე დაბრუნება
          </Link>
        </div>
        <div className="w-4/5 px-8 pt-6 pb-8 mx-auto mb-4 bg-white rounded shadow-md">
          {loading ? (
            <div className="flex items-center justify-center">
              <div className="w-16 h-16 border-8 border-blue-500 rounded-full loader"></div>
            </div>
          ) : (
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
                რედაქტირება
              </button>
            </form>
          )}
        </div>
      </div>
      <ToastContainer autoClose={700} />
    </div>
  );
};

export default EditPage;
