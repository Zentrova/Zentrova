// src/app/portfolio/[id]/page.js

const portfolios = {
  prabhjot: {
    name: "Prabhjot Singh",
    role: "Frontend Developer",
    bio: "Passionate about UI/UX and clean code.",
  },
  sumit: {
    name: "Sumit Kumar",
    role: "Backend Developer",
    bio: "Loves working with databases and scalable systems.",
  },
  yashpal: {
    name: "Yashpal Singh",
    role: "Full Stack Engineer",
    bio: "Bridging frontend and backend with elegant solutions.",
  },
  raktinder: {
    name: "Raktinder Singh",
    role: "Project Manager",
    bio: "Ensuring delivery, deadlines, and delightful UX.",
  },
};

export default function PortfolioPage({ params }) {
  const data = portfolios[params.id?.toLowerCase?.()];

  if (!data)
    return <div className="p-8 text-red-500">Member not Exist.</div>;

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold">{data.name}</h1>
      <h2 className="text-xl text-gray-600">{data.role}</h2>
      <p className="mt-4">{data.bio}</p>
    </div>
  );
}
