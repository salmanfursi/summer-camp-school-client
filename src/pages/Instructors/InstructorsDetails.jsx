/* eslint-disable react/prop-types */

const InstructorsDetails = ({ ins }) => {
    const { profile, name, email } = ins;
  return (
    <div>
      <div className="card card-compact w-96 bg-base-200 h-80 border-3 border-gray-500 hover:shadow-xl md:mx-10 mt-5">
        <figure>
          <img src={profile} alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">Name : {name}</h2>
          <h2>Email : {email}</h2>
        </div>
      </div>
    </div>
  );
};

export default InstructorsDetails;