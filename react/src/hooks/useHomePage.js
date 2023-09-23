import axios from "axios";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";

const useHomePage = () => {
  const { register, handleSubmit, control, formState, reset } = useForm({
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

  const onSubmit = async (data) => {
    try {
      const apiUrl = "http://localhost:8000/api/project-data";

      const response = await axios.post(apiUrl, data, {
        headers: {
          "Content-Type": "application/json",
        },
      });

      reset();
      toast.success(response.data.message);
      window.scrollTo(0, 0);
    } catch (error) {
      toast.error("შეცდომა!");
    }
  };

  return {
    register,
    handleSubmit,
    control,
    errors,
    onSubmit,
  };
};

export default useHomePage;
