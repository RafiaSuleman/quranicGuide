import React from "react";

const AboutPage = () => {
  return (
    <div>
      <div
        className="h-96 relative z-0 "
        style={{
          backgroundImage: 'url("/about2.jpg")',
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 z-0 bg-gradient-to-t from-black to-transparent opacity-70"></div>
        <div className="absolute bottom-10 text-white text-xl font-bold left-0 p-10 ">
          <h1 className="">بسم الله الرحمن الرحيم</h1>
          <h1>Assalam-o-Alaikum!</h1>
          <p>
            Welcome to Quranic Guide, a platform dedicated <br />
            to making the teachings of the Quran accessible <br />
            to everyone, from beginners to advanced learners.
          </p>
        </div>
      </div>
      <div className="mx-10 mt-10">
      <h1 className="text-2xl font-bold mb-3">My Mission</h1>
      <p className="font-medium">
        At Quranic Guide, my mission is simple: to provide authentic, clear, and
        effective resources for learning the Quran, so you can deepen your
        understanding of its wisdom. Whether you are learning to recite or
        exploring the meaning of its verses, this app is here to guide you every
        step of the way.
      </p>
      <h1 className="text-2xl font-bold mb-3 mt-7">My Journey</h1>
      <p className="font-medium">
        I have always been passionate about sharing the beauty of the Quran with
        others. Over the years, I have dedicated myself to teaching its proper
        recitation and helping students connect with its messages on a deeper
        level. This app is an extension of that journey—a digital companion for
        those seeking to learn and grow through the Quran.
      </p>
      <h1 className="text-2xl font-bold mb-3 mt-7">Guiding Principles</h1>
      <h2 className="font-semibold text-xl">Authenticity:</h2>
      <p className="font-medium">Delivering teachings that are true to the Quran</p>
      <h2 className="font-semibold text-xl mt-3">Accessibility: </h2>
      <p className="font-medium">
        Making learning simple for everyone, regardless of age or background.
      </p>
      <h2 className="font-semibold text-xl mt-3">Commitment:</h2>
      <p className="font-medium">Ensuring every learner has the tools they need to succeed.</p>

      <div className="container mt-7 mb-7">
        <h1 className="text-2xl font-bold mb-3">Begin your journey today</h1>
        <p className="text-xl font-medium mb-7">
          Feel free to explore the resources, and if you have any questions or
          need personal guidance, don not hesitate to reach out.
        </p>
        <a href="/contactus" className="bg-[#D4A017] p-4 rounded-lg hover:bg-[#F8D479] text-white"> Contact Us</a>
      </div>
      </div>
      
    </div>
  );
};

export default AboutPage;
