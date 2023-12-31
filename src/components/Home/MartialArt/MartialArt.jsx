
const MartialArt = () => {
    return (
      <div
        className="hero sm:w-full w-full h-[500px]"
        style={{
          backgroundImage:
            "url('https://as2.ftcdn.net/v2/jpg/04/48/55/83/1000_F_448558377_0OqtbLWaDmPXyvE60G5einMFeFEdbKe2.jpg') ",
        }}
      >
        <div className="hero-overlay bg-opacity-10"></div>
        <div className="hero-content sm:text-right md:text-right text-neutral-content">
          <div className="max-w-md">
            <h1 className="text-cyan-600 mb-5 text-4xl font-bold">
              Washington dance acadamy
            </h1>
            <p className="mb-5 text-1xl">

Washington Dance School is a prestigious dance institution ,The school offers a variety of dance programs for students of all ages and levels, from beginner to advanced.If you are looking for a challenging and rewarding dance education, then it will be perfect place for you.
            </p>
            <button className="btn btn-primary">Join with us</button>
          </div>
        </div>
      </div>
    );
};

export default MartialArt;


