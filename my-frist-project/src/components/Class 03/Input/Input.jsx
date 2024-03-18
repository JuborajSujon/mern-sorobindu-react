import { useState } from "react";

export default function Input() {
  const [info, setInfo] = useState("We love React");

  // const [name, setName] = useState("");
  // const [email, setEmail] = useState("");
  // const [number, setNumber] = useState("");
  // const [userName, setUserName] = useState("");

  // get form filed value state
  const [input, setInput] = useState({
    name: "",
    email: "",
    number: "",
    userName: "",
    gender: "",
    isCheck: false,
  });

  //get all input data
  let { name, email, number, userName } = input;

  // Alert management
  const [alert, setAlert] = useState({
    msg: "This is an alert",
    type: "bg-red-300",
    status: false,
  });

  // handle form submit
  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (name === "" || email === "" || number === "" || userName === "") {
      setAlert({
        msg: "Please fill all the fields",
        type: "bg-red-300",
        status: true,
      });
    } else {
      setAlert({
        msg: "Data stable",
        type: "bg-green-300",
        status: true,
      });

      setInput({
        name: "",
        email: "",
        number: "",
        userName: "",
        isCheck: false,
      });
    }
  };

  const handleAlertClose = () => {
    setAlert({
      msg: "",
      type: "",
      status: false,
    });
  };

  console.log(input);
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
            <h3 className="card-title">Create New User</h3>
            <div>
              {alert.status && (
                <div
                  role="alert"
                  className={`alert ${alert.type} alert-dismissible flex justify-between`}>
                  <span>{alert.msg}</span>
                  <div>
                    <button onClick={handleAlertClose} className="btn btn-sm">
                      Close
                    </button>
                  </div>
                </div>
              )}
            </div>
            <form onSubmit={handleFormSubmit}>
              <label className="form-control w-full max-w-xs">
                <div className="label">
                  <span className="label-text text-lg">What is your name?</span>
                </div>
                <input
                  type="text"
                  placeholder="Your name"
                  className="input input-bordered w-full max-w-xs"
                  value={name}
                  onChange={(e) => setInput({ ...input, name: e.target.value })}
                />
              </label>
              <label htmlFor="email" className="label text-lg">
                What is you Email?
              </label>
              <input
                type="email"
                id="email"
                placeholder="Your Email"
                className="input input-bordered w-full max-w-xs"
                value={email}
                onChange={(e) => setInput({ ...input, email: e.target.value })}
              />
              <label htmlFor="number" className="label text-lg">
                What is you Cell No?
              </label>
              <input
                type="number"
                id="number"
                placeholder="Your cell no"
                className="input input-bordered w-full max-w-xs"
                value={number}
                onChange={(e) => setInput({ ...input, number: e.target.value })}
              />
              <label htmlFor="userName" className="label text-lg">
                What is you User Name?
              </label>
              <input
                type="text"
                id="userName"
                placeholder="Your User Name"
                className="input input-bordered w-full max-w-xs"
                value={userName}
                onChange={(e) =>
                  setInput({ ...input, userName: e.target.value })
                }
              />
              <label htmlFor="gender" className="label text-lg">
                Gender
              </label>
              <input
                name="gender"
                id="male"
                type="radio"
                value="male"
                onChange={(e) => setInput({ ...input, gender: e.target.value })}
              />{" "}
              <label htmlFor="male">Male</label>
              <br />
              <input
                name="gender"
                id="female"
                type="radio"
                value="female"
                onChange={(e) => setInput({ ...input, gender: e.target.value })}
              />{" "}
              <label htmlFor="female">Female</label>
              <br />
              <input
                id="checkbox"
                type="checkbox"
                onChange={(e) =>
                  setInput({ ...input, isCheck: e.target.checked })
                }
              />{" "}
              <label htmlFor="checkbox">Agree with terms and conditions</label>
              <input type="submit" className="btn btn-primary mt-3" />
            </form>
          </div>
        </div>
      </div>
      <div className="w-2/3 bg-slate-100 rounded-xl flex justify-center items-center">
        <h1 className="text-3xl font-bold">{info}</h1>
      </div>
    </div>
  );
}
