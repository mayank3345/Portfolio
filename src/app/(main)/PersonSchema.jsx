export default function PersonSchema() {
  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",

    "@id": "https://portfolio-rose-nu-60.vercel.app/",

    name: "Aditya Singh",

    url: "https://portfolio-rose-nu-60.vercel.app/",

    image:
      "https://portfolio-rose-nu-60.vercel.app/images/my_photos/profile.png",

    jobTitle: "MERN Stack Developer",

    description:
      "Aditya Singh is a MERN Stack Developer and B.Tech Computer Science graduate specializing in React.js, Next.js, Node.js, Express.js, MongoDB, and modern web development.",

    sameAs: [
      "https://github.com/mayank3345",
      "https://www.linkedin.com/in/aditya-singh0100/",
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(personSchema),
      }}
    />
  );
}
