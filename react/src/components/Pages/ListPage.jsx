import { Link } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";

const ListPage = () => {
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

  return (
    <div className="min-h-screen bg-gray-300">
      <div className="container py-8 mx-auto">
        <div className="flex items-center justify-between w-3/4 gap-4 mx-auto">
          <h1 className="self-center text-4xl">არსებული მონაცემები</h1>

          <Link
            to="/"
            className="px-4 py-2 text-white transition duration-300 ease-in-out bg-blue-500 rounded hover:bg-blue-600"
          >
            ახალი ფორმის დამატება
          </Link>
        </div>

        <div className="flex justify-center mt-8">
          <div className="w-4/5">
            {loading ? (
              <div className="flex items-center justify-center">
                <div className="w-16 h-16 border-8 border-blue-500 rounded-full loader"></div>
              </div>
            ) : (
              <div className="px-8 py-6 mb-4 overflow-x-auto bg-white rounded shadow-md">
                <table className="w-full border-collapse">
                  <thead>
                    <tr className="bg-gray-200">
                      <th className="px-4 py-2 font-semibold text-left">
                        Name
                      </th>
                      <th className="px-4 py-2 font-semibold text-left">
                        Last Name
                      </th>
                      <th className="px-4 py-2 font-semibold text-left">
                        Date
                      </th>
                      <th className="px-4 py-2 font-semibold text-center">
                        Actions
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {data.map((item, index) => (
                      <tr
                        key={index}
                        className={index % 2 === 0 ? "bg-gray-100" : ""}
                      >
                        <td className="px-4 py-2">{item.name}</td>
                        <td className="px-4 py-2">{item.last_name}</td>
                        <td className="px-4 py-2">{item.date}</td>
                        <td className="px-4 py-2 text-center">
                          <Link
                            to={`/list/${item.id}`}
                            className="px-5 py-2 mr-2 text-white bg-blue-500 rounded hover:bg-blue-600"
                          >
                            Edit
                          </Link>
                          <button
                            className="px-5 py-2 text-white bg-red-500 rounded hover:bg-red-600"
                            onClick={() => {
                              handleDelete(item.id);
                            }}
                          >
                            Delete
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </div>
        </div>
      </div>
      <ToastContainer autoClose={700} />
    </div>
  );
};

export default ListPage;
