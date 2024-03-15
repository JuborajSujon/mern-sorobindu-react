import { Component } from "react";

class Teacher extends Component {
  render() {
    return (
      <section className="container mx-auto bg-violet-200 py-20 px-4">
        <section className="flex items-stretch">
          <div className="w-2/3">
            <img
              className="w-full h-full rounded-lg "
              src="https://media.istockphoto.com/id/1343389492/vector/tiny-people-with-puzzle-men-and-women-collect-large-color-puzzle-pieces-office-teamwork-work.jpg?s=612x612&w=0&k=20&c=Bne-o99iFEU6Fpgz4oTykNeAlyQ3p41NItg1Z1H1YMU="
              alt="Teacher"
            />
          </div>
          <div className="w-1/3 px-4 space-y-3">
            <h3 className="text-3xl font-bold">Our Teacher</h3>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Laboriosam molestias expedita ipsa. Eius ut omnis quia quos
              nesciunt assumenda iste. Aliquid totam autem error porro soluta
              labore reprehenderit dolorum dignissimos?
            </p>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officia
              possimus alias odit sed harum dolore eligendi? Non accusamus
              voluptates quis quasi accusantium ea dolorum, excepturi aliquid,
              unde voluptatum minima saepe.
            </p>
          </div>
        </section>
      </section>
    );
  }
}

export default Teacher;
