export default function Student() {
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
        <div className="shadow-lg rounded-lg p-4 flex flex-col justify-between">
          <img
            className="rounded-md h-full"
            src="https://agighana.org/wp-content/uploads/2019/08/team-member-02.jpg"
            alt="team"
          />
          <div>
            <h3 className="text-xl font-bold mt-3">IOS Developer</h3>
            <p className="font-medium text-blue-600">Senior IOS Developer</p>
          </div>
        </div>
        <div className="shadow-lg rounded-lg p-4 flex flex-col justify-between">
          <img
            className="rounded-md h-full"
            src="https://organicagroindia.com/wp-content/uploads/2020/10/team-member-8.jpg"
            alt="team"
          />
          <div>
            <h3 className="text-xl font-bold mt-3">IOS Developer</h3>
            <p className="font-medium text-blue-600">Senior IOS Developer</p>
          </div>
        </div>
        <div className="shadow-lg rounded-lg p-4 flex flex-col justify-between">
          <img
            className="rounded-md h-full"
            src="https://cbeyondsal.com/wp-content/uploads/2017/02/team_member_02-540x540.jpg"
            alt="team"
          />
          <div>
            <h3 className="text-xl font-bold mt-3">IOS Developer</h3>
            <p className="font-medium text-blue-600">Senior IOS Developer</p>
          </div>
        </div>
      </section>
    </section>
  );
}
