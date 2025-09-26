export default function App() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-800">
      {/* Header */}
      <header className="bg-white shadow-md sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <h1 className="text-xl font-bold tracking-tight">Godwin Acheampong</h1>
          <nav className="space-x-6">
            <a href="#about" className="hover:text-blue-600">About</a>
            <a href="#experience" className="hover:text-blue-600">Experience</a>
            <a href="#education" className="hover:text-blue-600">Education</a>
            <a href="#contact" className="hover:text-blue-600">Contact</a>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-24">
        <div className="max-w-4xl mx-auto text-center px-6">
          <img
            src="/profile.jpeg"
            alt="Godwin Acheampong"
            className="w-40 h-40 mx-auto mb-6 rounded-full shadow-lg border-4 border-white object-cover"
          />
          <h2 className="text-4xl md:text-5xl font-extrabold mb-4">Godwin Acheampong</h2>
          <p className="text-lg md:text-xl mb-8 leading-relaxed max-w-2xl mx-auto">
            Delivering AI solutions, data-driven innovation, and technical training.
          </p>
          <a
            href="#contact"
            className="bg-white text-blue-700 font-semibold px-6 py-3 rounded-2xl shadow hover:bg-gray-100 transition"
          >
            Work With Me
          </a>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 max-w-5xl mx-auto px-6 text-center">
        <h3 className="text-3xl font-bold mb-6">About Me</h3>
        <p className="text-lg leading-relaxed">
          I’m a professional focused on leveraging AI and data to create innovative, ethical, and impactful solutions.
          I combine hands-on data science skills with a background in training and consulting.
        </p>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 bg-gray-100">
        <div className="max-w-6xl mx-auto px-6">
          <h3 className="text-3xl font-bold mb-12 text-center">Experience</h3>
          <div className="grid gap-8 md:grid-cols-2">
            <div className="bg-white p-6 rounded-2xl shadow">
              <h4 className="font-semibold text-xl">Supervisor AI</h4>
              <p className="text-gray-600 mt-2">Assess and supervise the deployment of AI and algorithmic systems within financial institutions to ensure transparency, 
                fairness, and compliance. Evaluate models for robustness, bias, and regulatory alignment, while identifying systemic and operational risks.</p>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow">
              <h4 className="font-semibold text-xl">Data Scientist</h4>
              <p className="text-gray-600 mt-2">Delivered data-driven solutions using Python, PySpark, Airflow, MLflow, Azure and AWS, while also working with modern analytics, visualization, and cloud tools. Built scalable data pipelines, optimized machine learning models,
                 and developed predictive systems to improve decision-making across multiple domains.</p>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow">
              <h4 className="font-semibold text-xl">Synthetic Data Expert – Fair AI</h4>
              <p className="text-gray-600 mt-2">Completed a case study for the Dutch government (DUO) showcasing how synthetic data enhances privacy and reduces bias.</p>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow">
              <h4 className="font-semibold text-xl">Data Consultant</h4>
              <p className="text-gray-600 mt-2">Advised organizations on designing and implementing data strategies. Worked with cloud platforms and modern data warehouses to deliver tailored solutions in analytics,
                 business intelligence, and workflow automation.</p>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow">
              <h4 className="font-semibold text-xl">Technology Trainer</h4>
              <p className="text-gray-600 mt-2">Delivered technical training to professionals and teams on Python, Power Automate, and data science fundamentals. Designed hands-on courses and workshops covering automation, 
                analytics, and applied AI to help organizations upskill their workforce.</p>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow">
              <h4 className="font-semibold text-xl">Data Science Intern</h4>
              <p className="text-gray-600 mt-2">Developed a Random Forest model to predict collision rates and identified key factors for road safety.</p>
            </div>
          </div>
        </div>
      </section>

            {/* Companies Section */}
      <section id="companies" className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h3 className="text-3xl font-bold mb-12">Companies I’ve Worked With</h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8 items-center">
            {/* Replace these logo file names with your own */}
            <img src="/logos/company1.png" alt="Company 1" className="h-12 mx-auto grayscale hover:grayscale-0 transition" />
            <img src="/logos/company2.png" alt="Company 2" className="h-12 mx-auto grayscale hover:grayscale-0 transition" />
            <img src="/logos/company3.png" alt="Company 3" className="h-12 mx-auto grayscale hover:grayscale-0 transition" />
            <img src="/logos/company4.png" alt="Company 4" className="h-12 mx-auto grayscale hover:grayscale-0 transition" />
            <img src="/logos/company5.png" alt="Company 5" className="h-12 mx-auto grayscale hover:grayscale-0 transition" />
            <img src="/logos/company6.png" alt="Company 6" className="h-12 mx-auto grayscale hover:grayscale-0 transition" />
            <img src="/logos/company7.png" alt="Company 7" className="h-12 mx-auto grayscale hover:grayscale-0 transition" />
            <img src="/logos/company8.png" alt="Company 8" className="h-12 mx-auto grayscale hover:grayscale-0 transition" />
          </div>
        </div>
      </section>


      {/* Education Section */}
      <section id="education" className="py-20 max-w-5xl mx-auto px-6">
        <h3 className="text-3xl font-bold mb-6 text-center">Education</h3>
        <div className="space-y-6">
          <div className="bg-white rounded-2xl shadow p-6">
            <h4 className="text-xl font-semibold">Master's Degree, Information Studies | Cum Laude</h4>
            <p className="text-gray-600 mt-2">University of Amsterdam<br />Thesis: 'The effect of road artefacts on deer-vehicle collisions'</p>
          </div>
          <div className="bg-white rounded-2xl shadow p-6">
            <h4 className="text-xl font-semibold">Bachelor's Degree, Business Administration</h4>
            <p className="text-gray-600 mt-2">University of Amsterdam<br />Thesis: 'Role and importance of renewable energy in China’s economy'<br />Minor in Data Science and Artificial Intelligence</p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 max-w-4xl mx-auto px-6 text-center">
        <h3 className="text-3xl font-bold mb-6">Contact Me</h3>
        <p className="mb-8 text-lg text-gray-700">
          Interested in collaborating or learning more about my work? Reach out anytime.
        </p>
        <a
          href="mailto:godwinacheampong89@gmail.com"
          className="inline-block bg-blue-600 text-white font-semibold px-6 py-3 rounded-2xl shadow hover:bg-blue-700 transition"
        >
          Send an Email
        </a>
      </section>

      {/* Footer */}
    <footer className="bg-gray-800 text-gray-300 py-6">
      <div className="max-w-6xl mx-auto px-6 text-center space-y-2">
        <p>© {new Date().getFullYear()} Godwin Acheampong. All rights reserved.</p>
        <p className="text-sm text-gray-400">
          🚀 Built by me using React, Tailwind & Netlify
        </p>
      </div>
    </footer>
    </div>
  );
}
