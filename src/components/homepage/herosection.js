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
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&auto=format&fit=crop&w=1061&q=80",
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
    <section className="h-mainSection flex items-center justify-between px-6 md:px-20">
      <div className="max-w-xl space-y-6">
        <h1 className="text-4xl md:text-5xl font-bold leading-tight">
          From <span className="text-primary">Vision</span> to <span className="text-primary">Launch</span><br />
          Digital Products That Deliver Impact
        </h1>
        <p className="text-lg md:text-xl">
          We’re <span className="font-semibold">Zentrova</span> — a full-stack team crafting seamless web solutions with powerful design, scalable code, and reliable APIs.
        </p>

        <div className="flex items-center gap-4">
          <CtcButton />


          <div className="flex items-center justify-end -space-x-4">
            {users.map((user, index) => (
              <div key={index} className="relative group">
                <Link href={user.link}>
                  <Image
                    alt={user.name}
                    src={user.image}
                    height={100}
                    width={100}
                    className="inline-block h-12 w-12 rounded-full border-2 border-white object-cover object-center hover:z-10 transition-all"
                    unoptimized
                  />
                </Link>
                <div className="absolute top-full left-1/2 transform -translate-x-1/2 mb-2 hidden group-hover:flex flex-col items-center text-xs px-3 py-2 rounded shadow-lg z-20 whitespace-nowrap">
                  <span>{user.name}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>

      <div className="w-1/2">


        {/* Lets add some animation here */}



      </div>
    </section>
  );
}
