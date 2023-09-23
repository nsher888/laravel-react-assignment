import FormHeaderTitle from "../../shared/FormHeaderTitle";

const StatisticsHeader = () => {
  return (
    <div className="grid items-center grid-cols-7 gap-2 mb-4">
      <FormHeaderTitle title="დასახელება" additionalClassName="col-span-2" />

      <FormHeaderTitle title="განზომილება" additionalClassName="col-span-1" />

      <FormHeaderTitle
        title="რაოდენობა გასული კვირის"
        additionalClassName="col-span-1"
      />

      <FormHeaderTitle
        title="კვოტა მიმდინარე კვირის"
        additionalClassName="col-span-1"
      />

      <FormHeaderTitle title="შენიშვნა" additionalClassName="col-span-2" />
    </div>
  );
};

export default StatisticsHeader;
