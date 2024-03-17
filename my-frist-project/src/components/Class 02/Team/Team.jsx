import { Component } from "react";

export default class Team extends Component {
  render() {
    return (
      <section className="bg-black text-white py-16">
        <div className="container mx-auto px-10">
          <div className="text-center space-y-4 py-10">
            <h1 className="text-3xl font-bold">Our Developers</h1>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quos
              expedita laudantium autem soluta quibusdam vero quis repellendus
              eos consequuntur omnis eaque modi mollitia eveniet molestiae
              officiis nobis unde eligendi, excepturi earum ipsum corporis? Non,
              placeat fugit ad fuga, dolorem dolor eius corporis possimus
              reprehenderit vero quos veritatis animi est error?
            </p>
          </div>
          <div className="flex gap-4">
            <div className="w-1/3">
              <img
                className="w-[200px] h-[200px] rounded-full mx-auto object-cover"
                src="https://billey-4437.kxcdn.com/wp-content/uploads/2019/08/team-member-01.jpg"
                alt=""
              />

              <div className="text-center mt-6">
                <h3 className="text-2xl font-bold">Developer Name</h3>
                <p className="text-orange-600">Developer Skill</p>
              </div>
            </div>
            <div className="w-1/3">
              <img
                className="w-[200px] h-[200px] rounded-full mx-auto object-cover"
                src="https://billey-4437.kxcdn.com/wp-content/uploads/2019/08/team-member-01.jpg"
                alt=""
              />

              <div className="text-center mt-6">
                <h3 className="text-2xl font-bold">Developer Name</h3>
                <p className="text-orange-600">Developer Skill</p>
              </div>
            </div>
            <div className="w-1/3">
              <img
                className="w-[200px] h-[200px] rounded-full mx-auto object-cover"
                src="https://billey-4437.kxcdn.com/wp-content/uploads/2019/08/team-member-01.jpg"
                alt=""
              />

              <div className="text-center mt-6">
                <h3 className="text-2xl font-bold">Developer Name</h3>
                <p className="text-orange-600">Developer Skill</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
