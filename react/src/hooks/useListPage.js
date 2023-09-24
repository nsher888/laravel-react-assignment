import axios from "axios";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";

const useListPage = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get("http://localhost:8000/api/project-data").then((res) => {
      setData(res.data);
      setLoading(false);
    });
  }, []);

  const handleDelete = (id) => {
    axios
      .delete(`http://localhost:8000/api/project-data/${id}`)
      .then((response) => {
        if (response.status === 200) {
          setData((prevData) => prevData.filter((item) => item.id !== id));
          toast.success(response.data.message);
        }
      })
      .catch((error) => {
        console.error("Error deleting record:", error);
        toast.error("შეცდომა");
      });
  };

  return {
    data,
    loading,
    handleDelete,
  };
};

export default useListPage;
