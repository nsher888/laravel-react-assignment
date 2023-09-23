import FormHeaderTitle from "../../shared/FormHeaderTitle";

const RegularTasksHeader = () => {
  return (
    <div className="grid items-center grid-cols-7 gap-2 mb-4">
      <FormHeaderTitle
        title="რეგულარული ამოცანები"
        additionalClassName="col-span-2"
      />

      <FormHeaderTitle
        title="ამოცანის პროდუქტი"
        additionalClassName="col-span-2"
      />

      <FormHeaderTitle title="დაგეგმილი დრო" additionalClassName="col-span-1" />

      <FormHeaderTitle title="ფაქტიური დრო" additionalClassName="col-span-1" />

      <FormHeaderTitle
        title="შესრულების თარიღი"
        additionalClassName="col-span-1"
      />
    </div>
  );
};

export default RegularTasksHeader;
