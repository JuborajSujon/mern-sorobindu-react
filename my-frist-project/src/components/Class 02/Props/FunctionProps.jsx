import { developers } from "../studentsData.js";
import SigleDeveloper from "./SigleDeveloper.jsx";
const FunctionProps = () => {
  return (
    <section className="container mx-auto bg-slate-100 pb-10">
      <div className="text-center py-8 space-y-4">
        <h2 className="text-3xl font-bold">Our Developer</h2>
        <p className="w-2/3 mx-auto">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam numquam
          porro quam soluta distinctio esse?
        </p>
      </div>
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 px-4">
        {developers.map((item) => {
          return <SigleDeveloper key={item.id} {...item} />;
        })}
      </section>
    </section>
  );
};

export default FunctionProps;
