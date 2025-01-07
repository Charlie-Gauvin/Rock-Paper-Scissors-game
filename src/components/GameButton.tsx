import paper from "../assets/images/icon-paper.svg";
import scissors from "../assets/images/icon-scissors.svg";
import rock from "../assets/images/icon-rock.svg";
import triangle from "../assets/images/bg-triangle.svg";

export default function GameButton() {
  return (
    <section className="relative mx-auto max-w-4xl mt-20">
      <div className="absolute inset-0 flex justify-center items-center z-0">
        <img
          src={triangle}
          alt="triangle-background"
          className="w-40 md:w-64 lg:w-80"
        />
      </div>
      <div className="flex justify-center space-x-6 lg:space-x-12 relative z-10">
        <button className="p-6 md:p-12 lg:p-16 rounded-full border-[15px] border-paper bg-text-primary">
          <img
            src={paper}
            alt="image-paper"
            className="h-12 w-12 md:h-20 md:w-20 "
          />
        </button>
        <button className="p-6 md:p-12 lg:p-16 rounded-full border-[15px] border-scissors bg-text-primary">
          <img
            src={scissors}
            alt="image-scissors"
            className="h-12 w-12 md:h-20 md:w-20"
          />
        </button>
      </div>
      <div className="flex justify-center relative z-10">
        <button className="p-6 md:p-12 lg:p-16 rounded-full border-[15px] border-rock bg-text-primary">
          <img
            src={rock}
            alt="image-rock"
            className="h-12 w-12 md:h-20 md:w-20"
          />
        </button>
      </div>
    </section>
  );
}
