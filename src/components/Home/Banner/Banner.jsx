
const Banner = () => {
  return (
    <div>
      <div className="carousel mt-4 md:mx-20 h-[550px]">
        <div id="item1" className="carousel-item  w-full">
          <img
            src="https://as1.ftcdn.net/v2/jpg/05/72/26/16/1000_F_572261672_qJJoMToC8dKC6ZYqn5acgfErK6acFj0w.jpg"
            className="w-full"
          />
        </div>
        <div id="item2" className="carousel-item w-full">
          <img
            src="https://as1.ftcdn.net/v2/jpg/05/14/43/44/1000_F_514434409_niNYM64paDE5a8baTfW74yeOp5ksOTlI.jpg"
            className="w-full"
          />
        </div>
        <div id="item3" className="carousel-item w-full">
          <img
            src="https://as2.ftcdn.net/v2/jpg/05/52/49/15/1000_F_552491534_jl4yQ0zGMZIJUE4MDbaoWfv6345r4m73.jpg"
            className="w-full"
          />
        </div>
        <div id="item4" className="carousel-item w-full">
          <img
            src="https://as1.ftcdn.net/v2/jpg/05/63/06/34/1000_F_563063474_WCK7WndryDk8aZoAJSfMoIB8h6B6kSNg.jpg"
            className="w-full"
          />
        </div>
      </div>
      <div className="flex justify-center w-full py-2 gap-2">
        <a href="#item1" className="btn btn-xs">
          1
        </a>
        <a href="#item2" className="btn btn-xs">
          2
        </a>
        <a href="#item3" className="btn btn-xs">
          3
        </a>
        <a href="#item4" className="btn btn-xs">
          4
        </a>
      </div>
    </div>
  );
};

export default Banner;