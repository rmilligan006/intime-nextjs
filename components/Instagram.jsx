
import InstagramImg from "./InstagramImg";
import IgImg1 from "../public/assets/ig-img-1.jpg";
import IgImg2 from "../public/assets/ig-img-2.jpg";
import IgImg3 from "../public/assets/ig-img-3.jpg";
import IgImg4 from "../public/assets/ig-img-4.jpg";
import IgImg5 from "../public/assets/ig-img-5.jpg";
import IgImg6 from "../public/assets/ig-img-6.jpg";

const Instagram = () => {
  return (
    <div id="gallery" className="max-w-[1240px] mx-auto text-center py-24">
      <p className="text-2xl font-bold">Follow me on Instagram</p>
      <p className="pb-4">@InTime</p>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-2 p-4">
        <InstagramImg socialImg={IgImg1} />
        <InstagramImg socialImg={IgImg2} />
        <InstagramImg socialImg={IgImg3} />
        <InstagramImg socialImg={IgImg4} />
        <InstagramImg socialImg={IgImg5} />
        <InstagramImg socialImg={IgImg6} />
      </div>
    </div>
  );
};

export default Instagram;
