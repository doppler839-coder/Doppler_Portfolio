import HeroImg from "@/assets/images/hero.png";
import OlovaLogo from "@/assets/images/olova.png";

export default function About() {
  return (
    <>
      <section id="about" className="py-16 md:py-32  text-white bg-[#04081A]">
        <div className="mx-auto max-w-5xl space-y-8 px-6 md:space-y-16">
          <h2 className="relative z-10 max-w-xl text-4xl font-medium lg:text-5xl text-white">
            Developer, Designer, Creator, Innovator
          </h2>
          <div className="grid gap-6 sm:grid-cols-2 md:gap-12 lg:gap-24">
            <div className="relative mb-6 sm:mb-0">
              <div className="bg-linear-to-b aspect-76/59 relative rounded-2xl p-px from-zinc-300 to-transparent">
                {/* <img
                  src={HeroImg}
                  className="rounded-[15px] shadow block"
                  alt="payments illustration"
                  width={1207}
                  height={929}
                /> */}
              </div>
            </div>

            <div className="relative space-y-4">
              <p className="text-white">
                Hello! I'm Lars Doppler, a passionate JavaScript developer
                specializing in creating innovative web solutions and
                user-friendly interfaces.{" "}
                <span className="font-bold text-white">
                  As the creator of the Ionic UI Framework
                </span>
                , I'm dedicated to simplifying development workflows.
              </p>
              <p className="text-white">
                My focus is on making web development faster, easier, and
                accessible to all developers. Currently, I'm expanding into
                backend development to grow as a full-stack developer and create
                seamless, robust web applications.
              </p>

              <div className="pt-6">
                <blockquote className="border-l-4 border-gray-300 pl-4">
                  <p className="text-white">
I’m Doppler, a web developer with experience in PHP, React, and modern web solutions.
I reviewed your project details and I’m confident I can deliver a clean, responsive, and efficient solution that meets your requirements.
I’ve built similar projects such as [short example: “a business website with admin panel and contact form”].
If you’d like, I can share my portfolio or a live demo.
Looking forward to collaborating with you.
Best regards,
Doppler
                  </p>

                  <div className="mt-6 space-y-3">
                    <cite className="block font-medium text-white">
                      Lars Doppler, Create of
                    </cite>
                    <div className="flex items-center gap-2">
                      <img
                        className="h-5 w-fit"
                        src={OlovaLogo}
                        alt="Olova Logo"
                        height="20"
                        width="auto"
                      />
                      <span className="text-white">Ionic</span>
                    </div>
                  </div>
                </blockquote>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
