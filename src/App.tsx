import './App.css';

function App() {
  return (
    <div className="min-h-screen flex flex-col items-center">
      {/* Navigation */}
      <nav className="fixed top-0 w-full backdrop-blur-md bg-black/30 z-50 border-b border-white/10">
        <div className="w-full max-w-5xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="flex justify-center h-20 items-center">
            <div className="text-2xl font-bold text-white">Taha</div>
            <div className="hidden md:flex space-x-12 ml-12">
              <a href="#about" className="text-white hover:text-cyan-300 transition-colors">About</a>
              <a href="#skills" className="text-white hover:text-cyan-300 transition-colors">Skills</a>
              <a href="#projects" className="text-white hover:text-cyan-300 transition-colors">Projects</a>
              <a href="#contact" className="text-white hover:text-cyan-300 transition-colors">Contact</a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="w-full pt-40 pb-32 px-6 sm:px-8 lg:px-12 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-cyan-500/20 animate-pulse"></div>
        <div className="w-full max-w-4xl mx-auto flex flex-col items-center relative">
          <h1 className="text-6xl md:text-7xl font-bold mb-8 text-white">
            Hi, I'm <span className="text-cyan-300 animate-pulse">Taha</span>
          </h1>
          <p className="text-xl md:text-2xl mb-12 text-white">
            Computer Engineer passionate about design & creation
          </p>
          <a href="#contact" className="btn-primary text-center">Get in Touch</a>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="w-full py-32 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-purple-900/20 to-black/20"></div>
        <div className="w-full max-w-4xl mx-auto px-6 sm:px-8 lg:px-12 relative flex flex-col items-center">
          <h2 className="section-title text-center mb-16">About Me</h2>
          <div className="text-white space-y-6 flex flex-col items-center">
            <p className="text-lg leading-relaxed text-center max-w-2xl">
              I'm a Computer Engineering student at the University of Guelph, passionate about creating innovative solutions and tackling complex problems. My journey in technology is driven by a love for creation, problem-solving, and embracing new experiences.
            </p>
            <p className="text-lg leading-relaxed text-center max-w-2xl">
              Whether I'm coding software, working with hardware, or exploring new technologies, I'm always excited to learn and grow. I believe in combining theoretical knowledge with practical experience to build meaningful solutions.
            </p>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="w-full py-32 relative">
        <div className="absolute inset-0 bg-gradient-to-t from-purple-900/20 to-black/20"></div>
        <div className="w-full max-w-4xl mx-auto px-6 sm:px-8 lg:px-12 relative flex flex-col items-center">
          <h2 className="section-title text-center mb-16">Skills</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 w-full">
            {['Java', 'React', 'JavaScript', 'C++', 'Arduino', 'Breadboarding', 'Web Design', 'Problem Solving'].map((skill) => (
              <div key={skill} className="card text-center group p-8 flex flex-col items-center justify-center">
                <h3 className="font-semibold text-xl text-white group-hover:text-cyan-300 transition-colors">
                  {skill}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="w-full py-32 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-purple-900/20 to-black/20"></div>
        <div className="w-full max-w-4xl mx-auto px-6 sm:px-8 lg:px-12 relative flex flex-col items-center">
          <h2 className="section-title text-center mb-16">Projects</h2>
          <div className="grid md:grid-cols-2 gap-10 w-full">
            {/* Project Card */}
            <div className="card group p-8 flex flex-col items-center text-center">
              <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-cyan-300 transition-colors">
                Project Title
              </h3>
              <p className="text-white mb-6 leading-relaxed">
                A brief description of the project, technologies used, and your role in development.
              </p>
              <div className="flex gap-6 justify-center">
                <a href="#" className="text-cyan-300 hover:text-purple-300 transition-colors">Live Demo</a>
                <a href="#" className="text-cyan-300 hover:text-purple-300 transition-colors">GitHub</a>
              </div>
            </div>
            {/* Add more project cards as needed */}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="w-full py-32 relative">
        <div className="absolute inset-0 bg-gradient-to-t from-purple-900/20 to-black/20"></div>
        <div className="w-full max-w-4xl mx-auto px-6 sm:px-8 lg:px-12 relative flex flex-col items-center">
          <h2 className="section-title text-center mb-16">Get in Touch</h2>
          <div className="flex flex-col items-center">
            <p className="text-white mb-12 text-lg leading-relaxed text-center max-w-2xl">
              I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions.
            </p>
            <div className="flex justify-center space-x-12">
              <a href="mailto:taha.syed.irfan@gmail.com" className="text-cyan-300 hover:text-purple-300 transition-colors">
                Email
              </a>
              <a href="https://github.com/tah-6" className="text-cyan-300 hover:text-purple-300 transition-colors">
                GitHub
              </a>
              <a href="https://www.linkedin.com/in/taha-irfan-57547525a/" className="text-cyan-300 hover:text-purple-300 transition-colors">
                LinkedIn
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
