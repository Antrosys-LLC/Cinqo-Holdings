import Image from "next/image";

const directors = [
  { name: "Junaid Usman", role: "", linkedin: "", image: "/images/about/Junaid.png" },
  { name: "Sufyan Usman", role: "", linkedin: "", image: "/images/about/Sufyan.png" },
  { name: "Uzair Usman", role: "", linkedin: "", image: "/images/about/Uzair.png" },
];

const executives = [
  { name: "Siby", role: "General Manager – Cingo Contracting", linkedin: "", image: "/images/about/Siby.png" },
  { name: "Salman", role: "Operations Manager – Cingo Contracting", linkedin: "", image: "/images/about/Salman.png" },
  { name: "Ranjith", role: "General Manager – Cingo Trading", linkedin: "", image: "/images/about/Ranjith.png" },
  { name: "Mohd Ali", role: "General Manager – Head of Operations", linkedin: "", image: "/images/about/Ali.png" },
  { name: "Collins", role: "General Manager – C T Co WLL", linkedin: "", image: "/images/about/Collins.png" },
  { name: "Prakash", role: "Group Financial Manager", linkedin: "", image: "/images/about/Prakash.png" },
  { name: "Satish", role: "Technical Manager", linkedin: "", image: "/images/about/Satish.png" },
  { name: "Alok", role: "Group Business Development Manager", linkedin: "", image: "/images/about/Alok.png" },
  { name: "Selina", role: "Group HR Manager", linkedin: "", image: "/images/about/Selina.png" },
];

function TeamCard({ image, name, role, linkedin }: { image: string; name: string; role: string; linkedin?: boolean | string }) {
  return (
    <div className="flex flex-col items-center bg-white max-w-[400px]">
      <Image
        src={image}
        alt={name}
        width={260}
        height={310}
        className="w-full max-w-[320px] object-cover rounded-sm md:max-w-none md:w-[260px] md:h-[310px]"
      />
      {linkedin ? (
        <div className="mt-4 w-full max-w-[320px] md:max-w-[260px]">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-semibold text-[#111111] md:text-[20px] [font-family:var(--font-body)]">
              {name}
            </h3>
            <a
              href={typeof linkedin === 'string' && linkedin ? linkedin : "#"}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#111111] hover:opacity-60 transition-opacity"
              aria-label={`${name} LinkedIn`}
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
            </a>
          </div>
          {role && (
            <p className="mt-1 text-left text-sm font-normal leading-[1.6] text-[#7A7A7A] md:text-[15px] [font-family:var(--font-body)]">
              {role}
            </p>
          )}
        </div>
      ) : (
        <>
          <h3 className="mt-4 text-lg font-semibold text-[#111111] md:text-[20px] [font-family:var(--font-body)]">
            {name}
          </h3>
          <p className="mt-1.5 max-w-[240px] text-center text-sm font-normal leading-[1.6] text-[#7A7A7A] md:text-[15px] [font-family:var(--font-body)]">
            {role}
          </p>
        </>
      )}
    </div>
  );
}

export default function Leadership() {
  return (
    <section className="bg-white py-12">
      <div className="mx-auto max-w-full ">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-[46%_54%] xl:gap-12">
          <div>
            <Image
              src="/images/about/chairman.png"
              alt="Chairman of Cinqo Holding"
              width={800}
              height={1500}
              className="w-full h-250 object-cover"
            />
          </div>

          <div className="flex flex-col justify-center max-h-250">
            <p className="mb-5 text-lg font-bold tracking-wide text-[#222222] [font-family:var(--font-body)]">
              Leadership
            </p>

            <h2 className="mb-6 text-xl font-medium leading-[1.1] tracking-wide text-[#111111] md:text-3xl xl:text-4xl [font-family:var(--font-display)]">
              CHAIRMAN&rsquo;S MESSAGE
            </h2>

            <div className="max-w-[640px] space-y-2 text-left text-md leading-[1.75] text-[#6A6A6A] [font-family:var(--font-body)]">
              <p>
                
                  At Cingo, we do not see ourselves as a collection of separate
                businesses.
                 We operate as one organisation built on a simple
                principle: take responsibility for what we commit, plan properly
                and execute with discipline. When these foundations hold, results
                follow.
              </p>
              <p>
                Cingo Holding was established to reinforce this structure. It
                ensures clarity in scope, communication and accountability across
                the organisation. Whether we are constructing a tower, maintaining
                an industrial facility, supplying technical products or assessing a
                new investment, the expectations remain the same: deliver work that
                is technically sound and commercially responsible.
              </p>
              <p>
                We are a Bahrain-born group with regional ambition, but our growth
                is measured and purposeful. We prioritise stability, long-term
                relationships and outcomes that retain their value. This is why we
                invest in engineering capability, ERP-enabled transparency, safety
                systems and practical governance. These elements safeguard our
                clients, our teams and the Group&rsquo;s investments.
              </p>
              <p>
                Across all divisions, our culture is consistent: accountability,
                disciplined operations and long-term customer commitment. We value
                clarity over complication and substance over appearance. On behalf
                of the Board, I thank our clients, partners and teams for their
                continued trust. Our responsibility is to uphold that trust through
                consistent and reliable execution.
              </p>
            </div>

            <p className="mt-6 text-2xl font-semibold text-[#111111] [font-family:var(--font-body)]">
              Mohammad Usman
            </p>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-[1280px] px-6 mt-20">
        <h2 className="mb-9 text-[28px] font-semibold text-[#111111] [font-family:var(--font-display)]">
          Directors
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-x-[15px] gap-y-8 justify-items-center">
          {directors.map((person) => (
            <TeamCard key={person.name} image={person.image} name={person.name} role={person.role} linkedin={person.linkedin || true} />
          ))}
        </div>
      </div>

      <div className="mx-auto max-w-[1280px] px-6 mt-20">
        <h2 className="mb-9 text-[28px] font-semibold text-[#111111] [font-family:var(--font-display)]">
          Executive Management
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 xl:grid-cols-4 gap-6 justify-items-center">
          {executives.map((person, i) => (
            <div key={person.name} className={i === executives.length - 1 ? "xl:col-span-4 xl:flex xl:justify-center" : ""}>
              <TeamCard image={person.image} name={person.name} role={person.role} linkedin={person.linkedin || true} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
