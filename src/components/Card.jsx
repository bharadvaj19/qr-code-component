import qrCode from "../assets/images/image-qr-code.png";
const Card = () => {
  return (
    <section className="px-4 py-4 bg-white max-h-sm max-w-sm rounded-3xl shadow-sm sm:mx-4 lg:mx-0">
      <div className="flex flex-col items-center justify-center gap-6">
        <img
          src={qrCode}
          className="object-contain object-center rounded-xl"
        ></img>
        <div className="text-center lg:w-11/12">
          <h1 className="font-bold text-2xl text-darkBlue tracking-wide ">
            Improve your front-end
            <br />
            skills by building projects
          </h1>
          <p className="font-outfit text-grayishBlue text-lg mt-4 mb-6 tracking-wide">
            Scan the QR code to visit Frontend Mentor and take your coding
            skills to the next level
          </p>
        </div>
      </div>
    </section>
  );
};

export default Card;
