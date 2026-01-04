"use client";

export default function Home() {
  const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    if (targetId === "home") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      const element = document.getElementById(targetId);
      if (element) {
        element.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }
  };

  return (
    <div className="flex min-h-screen bg-gradient-to-br from-zinc-50 via-zinc-100 to-zinc-200 font-sans dark:from-zinc-900 dark:via-zinc-950 dark:to-black">
      {/* Navigation Bar */}
      <nav className="fixed top-0 right-0 z-50 px-8 py-4">
        <div className="flex items-center gap-6">
          <a
            href="#home"
            onClick={(e) => handleSmoothScroll(e, "home")}
            className="text-base font-medium text-zinc-700 dark:text-zinc-300 hover:text-zinc-950 dark:hover:text-zinc-50 transition-colors cursor-pointer"
          >
            Home
          </a>
          <a
            href="#about"
            onClick={(e) => handleSmoothScroll(e, "about")}
            className="text-base font-medium text-zinc-700 dark:text-zinc-300 hover:text-zinc-950 dark:hover:text-zinc-50 transition-colors cursor-pointer"
          >
            About
          </a>
          <a
            href="#projects"
            onClick={(e) => handleSmoothScroll(e, "projects")}
            className="text-base font-medium text-zinc-700 dark:text-zinc-300 hover:text-zinc-950 dark:hover:text-zinc-50 transition-colors cursor-pointer"
          >
            Projects
          </a>
          <a
            href="#experience"
            onClick={(e) => handleSmoothScroll(e, "experience")}
            className="text-base font-medium text-zinc-700 dark:text-zinc-300 hover:text-zinc-950 dark:hover:text-zinc-50 transition-colors cursor-pointer"
          >
            Experience
          </a>
        </div>
      </nav>

      <main className="w-full max-w-4xl mx-auto px-8 py-8 ml-[20%]">
        {/* Home Section */}
        <section id="home" className="min-h-screen flex items-start pt-20">
          {/* Header with Picture, Name, Subtitle, and Social Links */}
          <header className="flex items-start gap-6">
            {/* Profile Picture Placeholder - Bigger */}
            <div className="relative h-32 w-32 overflow-hidden rounded-full bg-zinc-200 dark:bg-zinc-800 border-4 border-zinc-300 dark:border-zinc-700 flex-shrink-0">
              <div className="flex h-full w-full items-center justify-center text-zinc-400 dark:text-zinc-600">
                <svg
                  className="h-16 w-16"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                  />
                </svg>
              </div>
            </div>

            {/* Name, Subtitle, and Social Links - To the right */}
            <div className="flex flex-col gap-3">
              {/* Name */}
              <h1 className="text-3xl font-bold tracking-tight text-black dark:text-zinc-50">
                Afik Haviv
              </h1>

              {/* Subtitle */}
              <h2 className="text-lg text-zinc-600 dark:text-zinc-400">
                3rd year Computer Science student
              </h2>

              {/* Social Media Buttons */}
              <div className="flex items-center gap-4">
                <a
                  href="https://www.linkedin.com/in/afikhaviv/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 rounded-full bg-zinc-200 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 hover:bg-zinc-300 dark:hover:bg-zinc-700 transition-colors font-medium"
                >
                  LinkedIn
                </a>
                <a
                  href="https://github.com/AfikHaviv"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 rounded-full bg-zinc-200 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 hover:bg-zinc-300 dark:hover:bg-zinc-700 transition-colors font-medium"
                >
                  GitHub
                </a>
              </div>
            </div>
          </header>
        </section>

        {/* About Section */}
        <section id="about" className="min-h-screen flex items-center pt-20">
          <div className="w-full">
            <h2 className="text-4xl font-bold text-black dark:text-zinc-50 mb-4">About</h2>
            <p className="text-lg text-zinc-600 dark:text-zinc-400">
              About section content goes here.
            </p>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="min-h-screen flex items-center pt-20">
          <div className="w-full">
            <h2 className="text-4xl font-bold text-black dark:text-zinc-50 mb-4">Projects</h2>
            <p className="text-lg text-zinc-600 dark:text-zinc-400">
              Projects section content goes here.
            </p>
          </div>
        </section>

        {/* Experience Section */}
        <section id="experience" className="min-h-screen flex items-center pt-20">
          <div className="w-full">
            <h2 className="text-4xl font-bold text-black dark:text-zinc-50 mb-4">Experience</h2>
            <p className="text-lg text-zinc-600 dark:text-zinc-400">
              Experience section content goes here.
            </p>
          </div>
        </section>
      </main>
    </div>
  );
}
