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
          <h2 className="text-4xl md:text-5xl font-extrabold mb-6">Delivering AI Solutions & Training</h2>
          <p className="text-lg md:text-xl mb-8 leading-relaxed">
            I'm Godwin Acheampong, a data specialist specializing in AI, machine learning, and data-driven solutions.
            I also offer technical training to help companies upskill their teams in Python and data science.
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
              <p className="text-gray-600 mt-2">Oversaw AI in finance to ensure fair markets, assess compliance, and support policies like the AI Act.</p>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow">
              <h4 className="font-semibold text-xl">Data Scientist</h4>
              <p className="text-gray-600 mt-2">Worked with Python, PySpark, Airflow, MLFlow, and AWS to improve churn and demand predictions.</p>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow">
              <h4 className="font-semibold text-xl">Synthetic Data Expert – Fair AI</h4>
              <p className="text-gray-600 mt-2">Completed a case study for the Dutch government (DUO) showcasing how synthetic data enhances privacy and reduces bias.</p>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow">
              <h4 className="font-semibold text-xl">Data Consultant</h4>
              <p className="text-gray-600 mt-2">Consulted on data projects using Azure and related cloud tools.</p>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow">
              <h4 className="font-semibold text-xl">Technology Trainer</h4>
              <p className="text-gray-600 mt-2">Delivered training on Power Automate, teaching companies to optimize workflows and automate processes.</p>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow">
              <h4 className="font-semibold text-xl">Data Science Intern</h4>
              <p className="text-gray-600 mt-2">Developed a Random Forest model to predict collision rates and identified key factors for road safety.</p>
            </div>
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
        <div className="max-w-6xl mx-auto px-6 text-center">
          <p>© {new Date().getFullYear()} Godwin Acheampong. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
