import axios from "axios";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";

const useEditPage = () => {
  const params = useParams();
  const [loading, setLoading] = useState(true);

  const [formData, setFormData] = useState({
    projectTasks: [
      { name: "", product: "", plannedTime: "", actualTime: "", date: "" },
    ],
    statistics: [
      { name: "", dimension: "", quantity: "", quota: "", remark: "" },
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
  });

  console.log(formData);

  const { register, handleSubmit, control, formState, setValue } = useForm({
    defaultValues: {
      projectTasks: [
        { name: "", product: "", plannedTime: "", actualTime: "", date: "" },
      ],
      statistics: [
        { name: "", dimension: "", quantity: "", quota: "", remark: "" },
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

  useEffect(() => {
    axios
      .get(`http://localhost:8000/api/project-data/${params.id}`)
      .then((res) => {
        const dataFromApi = res.data;

        setFormData(dataFromApi);
        setLoading(false);

        setValue("name", dataFromApi.name);
        setValue("last_name", dataFromApi.last_name);
        setValue("date", dataFromApi.date);

        updateFormFields("statistics", dataFromApi, setValue);
        updateFormFields("projectTasks", dataFromApi, setValue);
        updateFormFields("quoteTasks", dataFromApi, setValue);
        updateFormFields("regularTasks", dataFromApi, setValue);
        updateFormFields("trainingTasks", dataFromApi, setValue);
        updateFormFields("unplannedTasks", dataFromApi, setValue);
      });
  }, [params.id, setValue]);

  const { errors } = formState;

  const updateFormFields = (taskType, dataFromApi, setValue) => {
    dataFromApi[taskType].forEach((task, index) => {
      const fieldNames = [
        "name",
        "dimension",
        "quantity",
        "quota",
        "remark",
        "product",
        "plannedTime",
        "actualTime",
        "date",
      ];
      fieldNames.forEach((fieldName) => {
        const fieldPath = `${taskType}[${index}].${fieldName}`;
        setValue(fieldPath, task[fieldName]);
      });
    });
  };

  console.log(loading);

  const onSubmit = async (data) => {
    console.log(data);
    await axios
      .put(`http://localhost:8000/api/project-data/${params.id}`, data)
      .then((response) => {
        if (response.status === 200) {
          window.scrollTo(0, 0);
          toast.success(response.data.message);
        }
      })
      .catch((error) => {
        console.error("Error updating record:", error);
        toast.error("შეცდომა");
      });
  };

  return {
    register,
    handleSubmit,
    control,
    errors,
    onSubmit,
    loading,
  };
};

export default useEditPage;
