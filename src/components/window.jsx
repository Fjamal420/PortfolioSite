import { useRef, useState } from "react";
import { Rnd } from "react-rnd";
import { FaInstagram, FaLinkedin } from "react-icons/fa";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

export default function Window({ id, onClose }) {
  const nodeRef = useRef(null);

  // 🔦 Lightbox state
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);
  const [lightboxSlides, setLightboxSlides] = useState([]);

  // 📝 Content map
  const contentMap = {
    about: (
      <div className="space-y-6 text-black">
        {/* Top Section: Image + Info */}
        <div className="flex space-x-4 items-center">
          <img
            src="/public/aurafarmingpfp.png"
            alt="Farshid Jamal"
            className="w-28 h-28 object-cover border border-gray-600"
          />
          <div>
            <h2 className="text-xl font-bold">Farshid Jamal</h2>
            <p className="text-sm">Illustrator, UX Designer, Content Creator</p>
          </div>
        </div>

        {/* About */}
        <div>
          <p className="text-sm">
            Hi, I’m Farshid, a UX/UI Designer and content creator based in
            Toronto. I specialize in
          </p>
          <ul className="list-disc list-inside text-sm mt-2 space-y-1">
            <li>User Interface Design</li>
            <li>User Research</li>
            <li>Prototyping and Wireframing</li>
            <li>Design Systems</li>
            <li>JavaScript</li>
            <li>HTML & CSS</li>
            <li>Video/Photo Editing</li>
            <li>Content Development</li>
          </ul>
        </div>

        {/* Education */}
        <div>
          <h3 className="text-lg font-bold">Education</h3>
          <p className="text-sm mt-1">
            Bachelor of Technology in Graphic Communications Management <br />
            <span className="text-gray-600 text-xs">2022–2026</span>
          </p>
        </div>

        {/* Other Interests */}
        <div>
          <h3 className="text-lg font-bold">Other Interests</h3>
          <ul className="list-disc list-inside text-sm mt-1 space-y-1">
            <li>Drawing</li>
            <li>Hiking</li>
            <li>Lifting</li>
            <li>Gaming</li>
          </ul>
        </div>

        {/* Language Proficiency */}
        <div>
          <h3 className="text-lg font-bold">Language Proficiency</h3>
          <p className="text-sm mt-1">
            I have native fluency in English and can speak conversational Bangla
          </p>
        </div>
      </div>
    ),

    work: (
      <div className="space-y-6 text-black">
        {/* Tools Section */}
        <div>
          <h2 className="text-xl font-semibold mb-2">Tools</h2>
          <ul className="list-disc list-inside space-y-1 text-sm">
            <li>Adobe Creative Suite (Illustrator, Photoshop, InDesign)</li>
            <li>Figma</li>
            <li>Canva</li>
            <li>Framer</li>
          </ul>
        </div>

        {/* Development Section */}
        <div>
          <h2 className="text-xl font-semibold mb-2">Development</h2>
          <ul className="list-disc list-inside space-y-1 text-sm">
            <li>JavaScript</li>
            <li>HTML & CSS</li>
          </ul>
        </div>

        {/* Photoshop Section */}
        <div>
          <h2 className="text-xl font-semibold mb-2">Photoshop</h2>
          <div className="grid grid-cols-3 gap-2">
            {[
              "Hyundai.png",
              "Levi.png",
              "pizza.png",
              "Polar.png",
              "FJ.png",
              "flux.png",
              "distorted.png",
              "sun.png",
              "planet.png",
            ].map((file, i) => (
              <img
                key={i}
                src={`/public/${file}`}
                alt={`Photoshop work ${i + 1}`}
                className="border border-gray-600 rounded-md hover:scale-105 transition-transform cursor-pointer"
                onClick={() => {
                  setLightboxSlides(
                    [
                      "Hyundai.png",
                      "Levi.png",
                      "pizza.png",
                      "Polar.png",
                      "FJ.png",
                      "flux.png",
                      "distorted.png",
                      "sun.png",
                      "planet.png",
                    ].map((f) => ({ src: `/public/${f}` }))
                  );
                  setLightboxIndex(i);
                  setLightboxOpen(true);
                }}
              />
            ))}
          </div>
        </div>

        {/* Illustrations Section */}
        <div>
          <h2 className="text-xl font-semibold mb-2">Illustrations</h2>
          <div className="grid grid-cols-4 gap-2">
            {[
              "comission1.png",
              "couragethecowardlydogcommision.png",
              "eveee.png",
              "patrickandbuucommission.png",
              "scarylady.png",
              "garret.png",
              "onolaband.png",
              "turtwig.png",
            ].map((file, i) => (
              <img
                key={i}
                src={`/public/${file}`}
                alt={`Illustration ${i + 1}`}
                className="border border-gray-600 rounded-md hover:scale-105 transition-transform cursor-pointer"
                onClick={() => {
                  setLightboxSlides(
                    [
                      "comission1.png",
                      "couragethecowardlydogcommision.png",
                      "eveee.png",
                      "patrickandbuucommission.png",
                      "scarylady.png",
                      "garret.png",
                      "onolaband.png",
                      "turtwig.png",
                    ].map((f) => ({ src: `/${f}` }))
                  );
                  setLightboxIndex(i);
                  setLightboxOpen(true);
                }}
              />
            ))}
          </div>

          {/* Lightroom Section */}
          <div>
            <h2 className="text-xl font-semibold mb-2">Lightroom</h2>
            <div className="grid grid-cols-3 gap-2">
              {[
                "victoria.png",
                "bandcover.png",
                "westside.png",
                "clark.png",
                "silenthill.png",
              ].map((file, i) => (
                <img
                  key={i}
                  src={`/public/${file}`}
                  alt={`Lightroom work ${i + 1}`}
                  className="border border-gray-600 rounded-md hover:scale-105 transition-transform cursor-pointer"
                  onClick={() => {
                    setLightboxSlides(
                      [
                        "victoria.png",
                        "bandcover.png",
                        "westside.png",
                        "clark.png",
                        "silenthill.png",
                      ].map((f) => ({ src: `/${f}` }))
                    );
                    setLightboxIndex(i);
                    setLightboxOpen(true);
                  }}
                />
              ))}
            </div>
          </div>

          {/* Infographic Section */}
          <div>
            <h2 className="text-xl font-semibold mb-2">Infographics</h2>
            <div className="grid grid-cols-3 gap-2">
              {[
                "infographic1.png",
                "infographic2.png",
                "infographic3.png",
              ].map((file, i) => (
                <img
                  key={i}
                  src={`/${file}`}
                  alt={`Infographic ${i + 1}`}
                  className="border border-gray-600 rounded-md hover:scale-105 transition-transform cursor-pointer"
                  onClick={() => {
                    setLightboxSlides(
                      [
                        "infographic1.png",
                        "infographic2.png",
                        "infographic3.png",
                      ].map((f) => ({ src: `/${f}` }))
                    );
                    setLightboxIndex(i);
                    setLightboxOpen(true);
                  }}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    ),

   case: (
  <div className="space-y-6 text-black">
    <h2 className="text-xl font-bold">AppTally Productivity Tracker</h2>
    <p className="text-sm">
      AppTally is a mobile app designed for consumers who are trying to
      improve their productivity and time management, offering a seamless
      and engaging experience. The goal was to create an all-in-one app that
      tracks how much time users spend on apps, and if the user is meeting
      their own goals. Its intuitive design ensures smooth navigation,
      allowing users to set goals and interact with ease.
    </p>

    {/* Tools */}
    <div className="space-y-2">
      <h3 className="text-lg font-semibold">Tools</h3>
      <ul className="list-disc list-inside space-y-1 text-sm">
        <li>Illustrator</li>
        <li>Photoshop</li>
        <li>Figma</li>
      </ul>
    </div>

    {/* Case Study Images */}
    <div>
      <h3 className="text-lg font-semibold mb-2">Case Study Screens</h3>
      <div className="grid grid-cols-2 gap-4">
        {[
          { src: "case1.png", label: "Home Screen" },
          { src: "case2.png", label: "Detailed Home Screen" },
          { src: "case3.png", label: "Goals Page" },
          { src: "case4.png", label: "App Category " },
          { src: "case5.png", label: "App Usage " },
          { src: "case6.png", label: "Calender " },
        ].map((item, i) => (
          <div key={i} className="flex flex-col items-center">
            <img
              src={`/public/${item.src}`}
              alt={item.label}
              className="border border-gray-600 rounded-md hover:scale-105 transition-transform cursor-pointer"
              onClick={() => {
                setLightboxSlides(
                  [
                    { src: "case1.png" },
                    { src: "case2.png" },
                    { src: "case3.png" },
                    { src: "case4.png" },
                    { src: "case5.png" },
                    { src: "case6.png" },
                  ]
                );
                setLightboxIndex(i);
                setLightboxOpen(true);
              }}
            />
            <p className="text-xs mt-1 text-center">{item.label}</p>
          </div>
        ))}
      </div>
    </div>
  </div>
),

    mail: (
      <div className="flex flex-col items-center text-center space-y-4 text-black">
        <h2 className="text-lg font-bold">Mail</h2>
        <p className="text-sm max-w-md">
          The easiest way to contact me is through email. <br />
          You can also message me on Instagram and LinkedIn!
        </p>

        <img
          src="/quagsire.png"
          alt="Quagsire"
          className="w-40 h-40 object-cover border border-gray-600"
        />

        <p className="text-sm">
          Email me at:{" "}
          <a
            href="mailto:farshidjamal2@gmail.com"
            className="underline text-blue-800"
          >
            farshidjamal2@gmail.com
          </a>
          <br />
          or press the icons to see my socials!
        </p>

        <div className="flex space-x-6 mt-2 text-2xl">
          <a
            href="https://www.instagram.com/fjdesigns8/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-pink-600"
          >
            <FaInstagram />
          </a>
          <a
            href="https://www.linkedin.com/in/farshid-jamal/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-700"
          >
            <FaLinkedin />
          </a>
        </div>
      </div>
    ),
  };

  return (
    <Rnd
      default={{
        x: 100,
        y: 100,
        width: 500,
        height: 400,
      }}
      minWidth={350}
      minHeight={250}
      bounds="window"
      dragHandleClassName="window-header"
      className="border border-black shadow-md bg-gray-200"
    >
      {/* Title bar */}
      <div
        ref={nodeRef}
        className="window-header flex justify-between items-center px-2 py-[2px] cursor-move
                   bg-gradient-to-r from-blue-800 to-blue-500 text-white font-bold
                   border-b border-black"
      >
        <span className="text-sm"></span>

        {/* Close button */}
        <button
          onClick={onClose}
          className="w-6 h-6 flex items-center justify-center 
                     bg-gray-200 text-black text-xs font-bold
                     border border-gray-700
                     shadow-[inset_-1px_-1px_0px_#000,inset_1px_1px_0px_#fff]
                     hover:bg-red-600 hover:text-white 
                     active:shadow-[inset_1px_1px_0px_#000,inset_-1px_-1px_0px_#fff]
                     active:translate-y-px"
        >
          ✕
        </button>
      </div>

      {/* Dynamic Content */}
      <div className="overflow-y-auto h-[calc(100%-28px)] p-4">
        {contentMap[id] || <p className="text-black">No content available.</p>}
      </div>

      {/* Lightbox */}
      <Lightbox
        open={lightboxOpen}
        close={() => setLightboxOpen(false)}
        index={lightboxIndex}
        slides={lightboxSlides}
      />
    </Rnd>
  );
}