import React from "react";

export default function Input() {
  const [info, setInfo] = React.useState("We love React");
  return (
    <div className="container mx-auto flex gap-3 mt">
      <div className="w-1/3 ">
        <div className="card bg-white shadow-lg">
          <div className="card-body">
            <h3 className="card-title">Please Fill up your personal info</h3>

            <div>
              <input
                type="text"
                placeholder="Type here"
                className="input input-bordered w-full"
                value={info}
                onChange={(e) => setInfo(e.target.value)}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="w-2/3 bg-slate-100 rounded-xl flex justify-center items-center">
        <h1 className="text-3xl font-bold">{info}</h1>
      </div>
    </div>
  );
}
