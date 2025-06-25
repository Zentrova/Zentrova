import Image from "next/image";
import Link from "next/link";
import CtcBtn from "./ctcBtn";

export default function HeroSection() {
  



  return (
    <section className="h-mainSection flex flex-col md:flex-row items-center justify-between px-6 md:px-20 py-12 md:py-20">
      <div className="max-w-xl space-y-6 text-center md:text-left">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight">
          From <span className="text-primary">Vision</span> to{" "}
          <span className="text-primary">Launch</span>
          <br />
          Digital Products That Deliver Impact
        </h1>
        <p className="text-base sm:text-lg md:text-xl">
          We’re <span className="font-semibold">Zentrova</span> — a full-stack
          team crafting seamless web solutions with powerful design, scalable
          code, and reliable APIs.
        </p>

        <div className="flex flex-col sm:flex-row items-center gap-4 justify-center md:justify-start">
          <Link href="/contact">
          <CtcBtn text="Hire Us" />
          </Link>

          {/* <div className="flex items-center justify-center sm:justify-end -space-x-4">
            {users.map((user, index) => (
              <div key={index} className="relative group">
                <Link href={`/portfolio/${user.name.toLowerCase()}`}>
                  <Image
                    alt={user.name}
                    src={user.image}
                    height={100}
                    width={100}
                    className="
                  inline-block h-12 w-12 rounded-full border-2 border-white object-cover object-center
                  transition-transform duration-300 ease-in-out
                  group-hover:z-30 group-hover:scale-110 group-hover:-translate-x-2
                "
                    unoptimized
                  />
                </Link>
                <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 hidden group-hover:flex flex-col items-center text-xs px-3 py-2 rounded shadow-lg z-40 whitespace-nowrap bg-white text-gray-900">
                  <span>{user.name}</span>
                </div>
              </div>
            ))}
          </div> */}
        </div>
      </div>

      <div className="w-full md:w-1/2 mt-10 md:mt-0">
        {/* Animation or image placeholder */}
      </div>
    </section>
  );
}
