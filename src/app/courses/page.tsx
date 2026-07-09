import React from "react";

const courses = [
  {
    title: "Beginner Quran Recitation (Tajweed Basics)",
    duration: "4 Weeks",
    description:
      "This course introduces the foundational rules of Tajweed, helping you recite the Quran with proper pronunciation. You will learn how to articulate Arabic letters correctly, recognize common mistakes, and recite shorter Surahs with confidence.",
    audience: "Absolute beginners or those needing a refresher.",
    learn: [
      "Arabic letters and sounds",
      "Basic Tajweed rules",
      "Correct pronunciation of short Surahs",
    ],
  },
  {
    title: "Intermediate Quran Recitation (Advanced Tajweed)",
    duration: "6 Weeks",
    description:
      "Building on your knowledge of Tajweed, this course dives deeper into advanced rules and techniques. You will learn to recite with fluency while improving your rhythm and tone.",
    audience:
      "Students who have completed the beginner course or have basic knowledge of Tajweed.",
    learn: [
      "Advanced Tajweed rules",
      "Fluent Quran recitation",
      "Improving rhythm and tone",
    ],
  },
  {
    title: "Tafseer (Quran Interpretation)",
    duration: "8 Weeks",
    description:
      "Study the meanings behind the verses of the Quran by exploring historical context, key lessons, and practical applications in daily life.",
    audience:
      "Learners who want to deepen their understanding of the Quran's teachings.",
    learn: [
      "Understanding Quranic verses",
      "Historical and thematic context",
      "Practical lessons for daily life",
    ],
  },
  {
    title: "Quranic Arabic",
    duration: "10 Weeks",
    description:
      "Learn the Arabic language of the Quran to understand its meanings directly without translation. This course covers vocabulary, grammar, and sentence structure.",
    audience: "Beginners with no prior knowledge of Arabic.",
    learn: [
      "Quranic vocabulary",
      "Basic Arabic grammar",
      "Sentence structure and comprehension",
    ],
  },
];

const Courses = () => {
  return (
   <section className="min-h-screen bg-[#F7E7CE] py-16">
      <div className="mx-auto max-w-7xl px-6">
        {/* Heading */}
        <div className="mb-14 text-center">
          <h1 className="text-4xl font-bold text-[191970] md:text-5xl">
            Qari App Courses
          </h1>
          <p className="mx-auto mt-5 max-w-3xl text-lg text-gray-600">
            Explore our Quranic learning pathways designed for students of all
            levels. Whether you are beginning your journey or looking to deepen
            your understanding of the Quran, we have a course for you.
          </p>
        </div>

        {/* Courses */}
        <div className="grid gap-8 md:grid-cols-2">
          {courses.map((course, index) => (
            <div
              key={index}
              className="rounded-2xl border border-emerald-100 bg-white p-8 shadow-lg transition duration-300 hover:-translate-y-2 hover:shadow-2xl"
            >
              <span className="rounded-full bg-emerald-100 px-4 py-1 text-sm font-semibold text-[191970]">
                {course.duration}
              </span>

              <h2 className="mt-4 text-2xl font-bold text-gray-800">
                {index + 1}. {course.title}
              </h2>

              <p className="mt-4 leading-7 text-gray-600">
                {course.description}
              </p>

              <div className="mt-6">
                <h3 className="font-semibold text-[191970]">
                  Who is this course for?
                </h3>
                <p className="mt-2 text-gray-600">{course.audience}</p>
              </div>

              <div className="mt-6">
                <h3 className="font-semibold text-[191970]">
                  What you will learn
                </h3>

                <ul className="mt-3 space-y-2">
                  {course.learn.map((item, i) => (
                    <li key={i} className="flex items-start">
                      <span className="mr-3 text-lg text-emerald-600">✓</span>
                      <span className="text-gray-600">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <button className="mt-8 w-full rounded-lg bg-[#191970] px-5 py-3 font-semibold text-white transition hover:bg-[#191970]">
                Enroll Now
              </button>
            </div>
          ))}
        </div>

        {/* Enrollment Section */}
        <div className="mt-20 rounded-3xl bg-[#191970] p-10 text-center text-white shadow-xl">
          <h2 className="text-3xl font-bold">How to Enroll</h2>

          <p className="mx-auto mt-5 max-w-3xl text-lg leading-8 text-emerald-100">
            Simply choose the course that best suits your learning goals and
            click the <span className="font-semibold">Enroll Now</span> button.
            We offer flexible learning schedules with weekly lessons and live
            interactive sessions to help you succeed.
          </p>

          <button className="mt-8 rounded-lg bg-white px-8 py-3 font-semibold text-[#191970] transition hover:bg-gray-100">
            Start Learning Today
          </button>
        </div>
      </div>
    </section>
  );
};

export default Courses;