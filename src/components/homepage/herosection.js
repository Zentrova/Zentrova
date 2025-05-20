import Image from "next/image";
import Link from "next/link";
import CtcButton from "./ctcButton";

export default function HeroSection() {


  const users = [
    {
      name: "Prabhjot",
      image: "https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1480&q=80",
      link: "/portfolio/yashpal"
    },
    {
      name: "Sumit",
      image: "https://images.unsplash.com/photo-1527980965255-d3b416303d12?ixlib=rb-4.0.3&auto=format&fit=crop&w=1650&q=80",
      link: "/portfolio/yashpal"
    },
    {
      name: "Yashpal",
      image: "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-4.0.3&auto=format&fit=crop&w=1760&q=80",
      link: "/portfolio/yashpal"
    },
    {
      name: "Raktinder",
      image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1287&q=80",
      link: "/portfolio/yashpal"
    }
  ];


  return (
  <section className="h-mainSection flex flex-col md:flex-row items-center justify-between px-6 md:px-20 py-12 md:py-20">
  <div className="max-w-xl space-y-6 text-center md:text-left">
    <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight">
      From <span className="text-primary">Vision</span> to <span className="text-primary">Launch</span><br />
      Digital Products That Deliver Impact
    </h1>
    <p className="text-base sm:text-lg md:text-xl">
      We’re <span className="font-semibold">Zentrova</span> — a full-stack team crafting seamless web solutions with powerful design, scalable code, and reliable APIs.
    </p>

    <div className="flex flex-col sm:flex-row items-center gap-4 justify-center md:justify-start">
      <CtcButton />

      <div className="flex items-center justify-center sm:justify-end -space-x-4">
        {users.map((user, index) => (
          <div key={index} className="relative group">
            <Link href={user.link}>
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
      </div>
    </div>
  </div>

  <div className="w-full md:w-1/2 mt-10 md:mt-0">
    {/* Animation or image placeholder */}
  </div>
</section>

  );
}
