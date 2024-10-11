import { useEffect, useState } from "react";

const slidesDescriptions = [
  "حضور در مگاپراجکت ها",
  "حضور در پروژه های بین المللی",
  "بهره گیری از متخصصین ماهر",
  "اجرای پروژه در شرایط مختلف",
  "استفاده از تجهیزات مدرن",
];

const slidesPhotosFiles = [
  "slider-1.jpg",
  "slider-2.jpg",
  "slider-3.webp",
  "slider-4.jpg",
  "slider-5.jpg",
];

function Slider() {
  const [step, setStep] = useState(0);
  const translates = [
    (((5 - step) % 5) - 1) * 30 - 30,
    (((6 - step) % 5) - 1) * 30 - 30,
    (((7 - step) % 5) - 1) * 30 - 30,
    (((8 - step) % 5) - 1) * 30 - 30,
    (((9 - step) % 5) - 1) * 30 - 30,
  ];

  useEffect(function () {
    const intervalTimer = setInterval(() => {
      setStep((s) => {
        if (s !== 4) return s + 1;
        return 0;
      });
    }, 5000);
    return () => clearInterval(intervalTimer);
  }, []);

  return (
    <div className="relative h-[30rem] w-[30rem] overflow-hidden">
      {slidesDescriptions.map((desc, index) => (
        <div
          key={desc}
          style={{
            transform: `translateX(${translates[index]}rem)`,
            backgroundImage: `url(./imgs/${slidesPhotosFiles[index]})`,
            zIndex: `${translates[index] === 0 || translates[index] === 30 || translates[index] === -30 ? "10" : "0"}`,
          }}
          className={`absolute left-0 top-0 h-[30rem] w-[30rem] rounded-md bg-cover bg-center transition-transform duration-500`}
        >
          <p className="pt-10 text-center text-3xl font-bold text-white">
            {desc}
          </p>
        </div>
      ))}

      <div className="absolute bottom-10 left-1/2 z-10 flex -translate-x-1/2 gap-1.5">
        {slidesPhotosFiles.map((_, index) => (
          <span
            key={index}
            className={`bottom-10 h-3 rounded-full bg-white ${index === step ? "w-8" : "w-3"}`}
          ></span>
        ))}
      </div>
    </div>
  );
}

export default Slider;
