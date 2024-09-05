import Link from "next/link";

export default function Home() {
  return (
    <>
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
        <header className="w-full bg-gray-800 p-6 text-center text-white h-28 items-center flex justify-center">
          <h1 className="text-4xl font-bold">Empath</h1>
        </header>
        <main className="text-center p-8">
          <section id="hero" className="mb-16">
            <h2 className="text-3xl font-semibold mb-6">
              Discover Your Personality
            </h2>
            <p className="text-lg mb-8">
              Unveil the insights about your personality traits with Empath.
              Start your journey now.
            </p>
            <Link
              href="/test"
              className="bg-gray-800 text-white py-3 px-6 rounded-full text-lg hover:bg-primary transition duration-300"
            >
              Get Started
            </Link>
          </section>

          <section id="features" className="mb-16">
            <h2 className="text-2xl font-semibold mb-4">Features</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-6 shadow-lg rounded-lg">
                <h3 className="text-xl font-semibold mb-2">
                  Comprehensive Personality Test
                </h3>
                <p>
                  Take an in-depth test to uncover your personality type and
                  learn about your strengths, weaknesses, and preferences.
                </p>
              </div>
              <div className="bg-white p-6 shadow-lg rounded-lg">
                <h3 className="text-xl font-semibold mb-2">
                  Detailed Analysis
                </h3>
                <p>
                  Get detailed insights into your personality traits, including
                  your cognitive functions and behavioral tendencies.
                </p>
              </div>
              <div className="bg-white p-6 shadow-lg rounded-lg">
                <h3 className="text-xl font-semibold mb-2">Trait Insights</h3>
                <p>
                  Explore detailed insights into each trait and discover how
                  they shape your personality.
                </p>
              </div>
            </div>
          </section>
        </main>
        <footer
          id="contact"
          className="mt-auto w-full p-4 bg-gray-800 text-white text-center"
        >
          <p>&copy; 2024 Empath. All rights reserved.</p>
          <p>
            <a href="" className="underline">
              Github
            </a>
            .
          </p>
        </footer>
      </div>
    </>
  );
}
