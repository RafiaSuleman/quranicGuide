import Herosection from "@/components/herosection";
import Image from "next/image";
import Link from "next/link";
import { FaBookOpen, FaRegClock } from "react-icons/fa";
import { MdOutlineAttachMoney } from "react-icons/md";
import { IoIosPerson } from "react-icons/io";
import { FaGraduationCap } from "react-icons/fa6";
import { GrCertificate } from "react-icons/gr";
import { MdOutlineDone } from "react-icons/md";
export default function Home() {
  const cards = [
    {
      step: "Step 1:",
      imageurl: "/inquiry.png",
      title: "Send Query",
      description:
        "Discover the ease of learning the Quran online with our outstanding teachers! Just fill out the form below, and our committed team will help you arrange your trial classes.",
      button: "Get Started",
    },
    {
      step: "Step 2:",
      imageurl: "/inquiry.png",
      title: "Free Trail Class",
      description:
        "Review Your Schedule and Join Our Free Online Quran Classes for Three Days—No Payment or Credit Card Needed!",
      button: "Get Started",
    },
    {
      step: "Step 3:",
      imageurl: "/admission.png",
      title: "Quick Admission ",
      description:
        "Enjoyed our free trial classes? If so, secure your spot in our regular sessions by selecting a monthly plan that fits your needs.",
      button: "Get Started",
    },
  ];

  const courses = [
    {
      imgaeurl: "/nooraniqaida.jpg",
      coursename: "Noorani Qaida",
      description:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magnam, est!",
      button: "Learn More",
    },
    {
      imgaeurl: "/quranrecitation.jpg",
      coursename: "Quran Recitation",
      description:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magnam, est!",
      button: "Learn More",
    },
    {
      imgaeurl: "/quranmemo.jpg",
      coursename: "Quran Memorization",
      description:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magnam, est!",
      button: "Learn More",
    },
    {
      imgaeurl: "/duasullah.jpg",
      coursename: "Dua and Sullah",
      description:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magnam, est!",
      button: "Learn More",
    },
    {
      imgaeurl: "/hadithcourse.jpg",
      coursename: "Hadith Course",
      description:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magnam, est!",
      button: "Learn More",
    },
    {
      imgaeurl: "/tafseer.jpg",
      coursename: "Quran Tafseer",
      description:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magnam, est!",
      button: "Learn More",
    },
  ];

  const feature1 = [
    {
      f1: "Personalized one-on-one tutoring",
      f2: "Female tutors available",
      f3: "Customized class schedules",
      f4: "40-minute daily classes",
    },
  ];
  return (
    <main>
      <Herosection />

      <div className="container py-[60px] flex flex-col justify-center items-center gap-5 ">
        <div>
          <h1 className="text-5xl font-bold text-transparent pb-2 bg-clip-text bg-gradient-to-r from-[#7100A1] to-primary-foreground ">
            Start Your Online Quran Learning Journey
          </h1>
        </div>
        <div>
          <p>
            Are you looking for a convenient and effective approach to learn the
            Quran online? Sajid Quran Academy is here to offer you an
            outstanding online Quran learning experience. We recognise how
            important it is to have access to quality Islamic education,
            regardless of where you live. That is why we provide comprehensive
            online Quran courses customised to the needs of students in the
            United States.
          </p>
        </div>
        {/* card */}
        <div className="container mx-auto px-4 py-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {cards.map((card, index) => {
              return (
                <div className="bg-white  shadow-lg rounded-lg overflow-hidde " key={index}>
                  <img
                    src={card.imageurl}
                    alt="Headless UI"
                    className=" bg-primary-foreground w-full h-64 object-cover"
                  />
                  <div className="p-4 md:p-6">
                    <h3 className="text-xl font-semibold text-primary-foreground dark:text-indigo-300 mb-2 ">
                      {card.step} &nbsp;{card.title}
                    </h3>
                    <p className="text-gray-700 dark:text-gray-300 mb-4 two-lines">
                      {card.description}
                    </p>
                    <a
                      href="#"
                      className="inline-block bg-[#d4a017] hover:bg-[#f8d479]  text-white px-4 py-2 rounded-full"
                    >
                      {card.button}
                    </a>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Courses */}

        <div id="exploreCourses" className="relative x-6 pt-10 pb-10 lg:px-8 lg:pt-24 lg:pb-10">
          <div className="relative mx-auto max-w-7xl">
            <div className="text-center">
              <h2 className="text-3xl font-bold  text-primary-foreground sm:text-4xl">
                Our Popular Courses
              </h2>
            </div>
            <div className="mx-auto mt-12 grid max-w-lg gap-5 lg:max-w-none lg:grid-cols-3">
              {courses.map((course, index) => {
                return (
                  <div className="flex flex-col overflow-hidden rounded-lg shadow-lg" key={index}>
                    <div className="flex-shrink-0">
                      <img
                        className="h-48 w-full object-cover"
                        src={course.imgaeurl}
                        alt={course.coursename}
                      />
                    </div>
                    <div className="flex flex-1 flex-col justify-between bg-white p-6">
                      <div className="flex-1">
                        <a href="#" className="mt-2 block">
                          <p className="text-xl font-semibold text-gray-900">
                            {course.coursename}
                          </p>
                          <p className="mt-3 text-base text-gray-500">
                            {course.description}
                          </p>
                        </a>
                      </div>
                     
                    </div>
                    <div className="flex-shrink-0 bg-primary-foreground w-full py-3 hover:text-[#3A7FF2]">
                    <Link href="/" className="text-white px-8 ">
                        {course.button}
                        </Link>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        <div className="container flex flex-col justify-center items-center border bg-white shadow-xl rounded-lg pb-9">
          <h1 className="text-center text-3xl font-bold pb-8 mt-8">
            Program Features
          </h1>
          <ol className="font-semibold ">
            <div className="grid xl:grid-cols-3 grid-cols-1 gap-24">
              <div className="space-y-2">
                <li className="my-1 flex items-center">
                <MdOutlineDone className="text-[#3B82F6] text-xl font-bold mr-2" />
                  Personalized one-on-one tutoring
                </li>
                <li className="my-1 flex items-center">
                <MdOutlineDone className="text-[#3B82F6] text-xl font-bold mr-2" />
                  Female tutors available
                </li>
                <li className="my-1 flex items-center">
                <MdOutlineDone className="text-[#3B82F6] text-xl font-bold mr-2" />
                  Customized class schedules
                </li>
                <li className="my-1 flex items-center">
                <MdOutlineDone className="text-[#3B82F6] text-xl font-bold mr-2" />
                  40-minute daily classes
                </li>
              </div>

              <div className="space-y-2">
                <li className="my-1 flex items-center">
                <MdOutlineDone className="text-[#3B82F6] text-xl font-bold mr-2" />
                  5 days a week
                </li>
                <li className="my-1 flex items-center">
                <MdOutlineDone className="text-[#3B82F6] text-xl font-bold mr-2" />
                  2 FREE trial classes
                </li>
                <li className="my-1 flex items-center">
                <MdOutlineDone className="text-[#3B82F6] text-xl font-bold mr-2" />
                  Flexible timing
                </li>
                <li className="my-1 flex items-center">
                <MdOutlineDone className="text-[#3B82F6] text-xl font-bold mr-2" />
                  Interactive online platform
                </li>
              </div>
              <div className="space-y-2">
                <li className="my-1 flex items-center">
                <MdOutlineDone className="text-[#3B82F6] text-xl font-bold mr-2" />
                  Certified instructors
                </li>
                <li className="my-1 flex items-center">
                <MdOutlineDone className="text-[#3B82F6] text-xl font-bold mr-2" />
                  Regular progress reports
                </li>
                <li className="my-1 flex items-center">
                <MdOutlineDone className="text-[#3B82F6] text-xl font-bold mr-2" />
                  Regular progress reports
                </li>
                <li className="my-1 flex items-center">
                <MdOutlineDone className="text-[#3B82F6] text-xl font-bold mr-2" />
                  Access to recorded lessons
                </li>
              </div>
            </div>
          </ol>
        </div>
        

        {/* Why Choose */}
        <section  className=" py-8 bg-white sm:py-10 lg:py-16">
          <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
            <div className="text-center">
              <h2 className="text-3xl font-bold leading-tight text-gray-900 sm:text-4xl xl:text-5xl">
                Why Choose Quranic Guide
              </h2>
              <p className="mt-4 text-base leading-7 text-gray-600 sm:mt-8">
                Our Leading Features
              </p>
            </div>
            <div className="grid grid-cols-1 mt-10 text-center sm:mt-16 sm:grid-cols-2 sm:gap-x-12 gap-y-12 md:grid-cols-3 md:gap-0 xl:mt-24">
              <div className="md:p-8 lg:p-12 flex flex-col justify-center items-center">
                <div className="w-14 h-14 rounded-full bg-purple-200 flex justify-center items-center">
                  <i className="fa-solid fa-chart-column text-3xl text-gray-900">
                    <FaRegClock />
                  </i>
                </div>
                <h3 className="mt-12 text-xl font-bold text-gray-900">
                  Flexible Schedule 24/7
                </h3>
                <p className="mt-5 text-base text-gray-600">
                  Access expert Quran teachers anytime, anywhere. Ideal for busy
                  families and individuals looking for simple online Quran
                  classes.
                </p>
              </div>

              <div className="md:p-8 lg:p-14 md:border-l md:border-gray-200 flex flex-col justify-center items-center">
                <div className="w-14 h-14 rounded-full bg-teal-200 flex justify-center items-center">
                  <i className="fa-solid fa-truck-fast text-3xl text-gray-900">
                    <MdOutlineAttachMoney />
                  </i>
                </div>
                <h3 className="mt-12 text-xl font-bold text-gray-900">
                  Money Back Guarantee
                </h3>
                <p className="mt-5 text-base text-gray-600">
                  Unsatisfied with your first month? We offer a full refund,
                  ensuring your investment in Quranic education is risk-free.
                </p>
              </div>

              <div className="md:p-8 lg:p-14 md:border-l md:border-gray-200 flex flex-col justify-center items-center">
                <div className="w-14 h-14 rounded-full bg-yellow-200 flex justify-center items-center">
                  <i className="fa-solid fa-shield text-3xl text-gray-900">
                    <IoIosPerson />
                  </i>
                </div>
                <h3 className="mt-12 text-xl font-bold text-gray-900">
                  Affordable Tuition
                </h3>
                <p className="mt-5 text-base text-gray-600">
                  Competitive pricing with special discounts on family packages
                  and reduced rates for those in need. Quality Quran education
                  accessible to all.
                </p>
              </div>

              <div className="md:p-8 lg:p-14 md:border-t md:border-gray-200 flex flex-col justify-center items-center">
                <div className="w-14 h-14 rounded-full bg-red-200 flex justify-center items-center">
                  <i className="fa-solid fa-cloud text-3xl text-gray-900">
                    <FaGraduationCap />
                  </i>
                </div>
                <h3 className="mt-12 text-xl font-bold text-gray-900">
                  Qualified Quran Teachers
                </h3>
                <p className="mt-5 text-base text-gray-600">
                  Our rigorously trained and certified male and female
                  instructors provide exceptional online Quran education for all
                  ages.
                </p>
              </div>

              <div className="md:p-8 lg:p-14 md:border-l md:border-gray-200 md:border-t flex flex-col justify-center items-center">
                <div className="w-14 h-14 rounded-full bg-green-200 flex justify-center items-center">
                  <i className="fa-solid fa-pen-nib text-3xl text-gray-900">
                    {" "}
                    <FaBookOpen />{" "}
                  </i>
                </div>
                <h3 className="mt-12 text-xl font-bold text-gray-900">
                  Authentic Curriculum
                </h3>
                <p className="mt-5 text-base text-gray-600">
                  Structured lessons rooted in fundamental Islamic teachings,
                  delivered through comprehensive, pre-designed programs.
                </p>
              </div>

              <div className="md:p-8 lg:p-14 md:border-l md:border-gray-200 md:border-t flex flex-col justify-center items-center">
                <div className="w-14 h-14 rounded-full bg-orange-200 flex justify-center items-center">
                  <i className="fa-solid fa-bolt text-3xl text-gray-900">
                    <GrCertificate />
                  </i>
                </div>
                <h3 className="mt-12 text-xl font-bold text-gray-900">
                  Certifications
                </h3>
                <p className="mt-5 text-base text-gray-600">
                  Receive a certificate of achievement upon course completion,
                  recognizing your dedication and proficiency in Quranic
                  studies.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/*  tesitmonials*/}
        <h1 className="text-center text-3xl font-bold pb-8 mt-8">
            Testimonials
          </h1>
        <div className="grid xl:grid-cols-2 grid-cols-1 xl:gap-28 gap-10">
              <div>  <figure className="relative rounded-2xl bg-white p-6 shadow-xl shadow-slate-900/10">
    <svg aria-hidden="true" width="105" height="78" className="absolute top-6 left-6 fill-slate-100">
        <path
            d="M25.086 77.292c-4.821 0-9.115-1.205-12.882-3.616-3.767-2.561-6.78-6.102-9.04-10.622C1.054 58.534 0 53.411 0 47.686c0-5.273.904-10.396 2.712-15.368 1.959-4.972 4.746-9.567 8.362-13.786a59.042 59.042 0 0 1 12.43-11.3C28.325 3.917 33.599 1.507 39.324 0l11.074 13.786c-6.479 2.561-11.677 5.951-15.594 10.17-3.767 4.219-5.65 7.835-5.65 10.848 0 1.356.377 2.863 1.13 4.52.904 1.507 2.637 3.089 5.198 4.746 3.767 2.41 6.328 4.972 7.684 7.684 1.507 2.561 2.26 5.5 2.26 8.814 0 5.123-1.959 9.19-5.876 12.204-3.767 3.013-8.588 4.52-14.464 4.52Zm54.24 0c-4.821 0-9.115-1.205-12.882-3.616-3.767-2.561-6.78-6.102-9.04-10.622-2.11-4.52-3.164-9.643-3.164-15.368 0-5.273.904-10.396 2.712-15.368 1.959-4.972 4.746-9.567 8.362-13.786a59.042 59.042 0 0 1 12.43-11.3C82.565 3.917 87.839 1.507 93.564 0l11.074 13.786c-6.479 2.561-11.677 5.951-15.594 10.17-3.767 4.219-5.65 7.835-5.65 10.848 0 1.356.377 2.863 1.13 4.52.904 1.507 2.637 3.089 5.198 4.746 3.767 2.41 6.328 4.972 7.684 7.684 1.507 2.561 2.26 5.5 2.26 8.814 0 5.123-1.959 9.19-5.876 12.204-3.767 3.013-8.588 4.52-14.464 4.52Z">
        </path>
    </svg>
    <blockquote className="relative">
        <p className="text-lg tracking-tight text-slate-900">
            Awesome idea. Can not wait to see how this turns out!
        </p>
    </blockquote>
    <figcaption className="relative mt-6 flex items-center justify-between border-t border-slate-100 pt-6">
        <div>
            <div className="font-display text-base text-slate-900">Exmaple name</div>
            <div className="mt-1 text-sm text-slate-500">Job designation</div>
        </div>
    </figcaption>
          </figure></div>
              <div>  <figure className="relative rounded-2xl bg-white p-6 shadow-xl shadow-slate-900/10">
    <svg aria-hidden="true" width="105" height="78" className="absolute top-6 left-6 fill-slate-100">
        <path
            d="M25.086 77.292c-4.821 0-9.115-1.205-12.882-3.616-3.767-2.561-6.78-6.102-9.04-10.622C1.054 58.534 0 53.411 0 47.686c0-5.273.904-10.396 2.712-15.368 1.959-4.972 4.746-9.567 8.362-13.786a59.042 59.042 0 0 1 12.43-11.3C28.325 3.917 33.599 1.507 39.324 0l11.074 13.786c-6.479 2.561-11.677 5.951-15.594 10.17-3.767 4.219-5.65 7.835-5.65 10.848 0 1.356.377 2.863 1.13 4.52.904 1.507 2.637 3.089 5.198 4.746 3.767 2.41 6.328 4.972 7.684 7.684 1.507 2.561 2.26 5.5 2.26 8.814 0 5.123-1.959 9.19-5.876 12.204-3.767 3.013-8.588 4.52-14.464 4.52Zm54.24 0c-4.821 0-9.115-1.205-12.882-3.616-3.767-2.561-6.78-6.102-9.04-10.622-2.11-4.52-3.164-9.643-3.164-15.368 0-5.273.904-10.396 2.712-15.368 1.959-4.972 4.746-9.567 8.362-13.786a59.042 59.042 0 0 1 12.43-11.3C82.565 3.917 87.839 1.507 93.564 0l11.074 13.786c-6.479 2.561-11.677 5.951-15.594 10.17-3.767 4.219-5.65 7.835-5.65 10.848 0 1.356.377 2.863 1.13 4.52.904 1.507 2.637 3.089 5.198 4.746 3.767 2.41 6.328 4.972 7.684 7.684 1.507 2.561 2.26 5.5 2.26 8.814 0 5.123-1.959 9.19-5.876 12.204-3.767 3.013-8.588 4.52-14.464 4.52Z">
        </path>
    </svg>
    <blockquote className="relative">
        <p className="text-lg tracking-tight text-slate-900">
            Awesome idea. Can not wait to see how this turns out!
        </p>
    </blockquote>
    <figcaption className="relative mt-6 flex items-center justify-between border-t border-slate-100 pt-6">
        <div>
            <div className="font-display text-base text-slate-900">Exmaple name</div>
            <div className="mt-1 text-sm text-slate-500">Job designation</div>
        </div>
    </figcaption>
</figure></div>
        </div>
       
      </div>
    </main>
  );
}
