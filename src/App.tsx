import './index.css';
import './App.css';

function App() {
  return (
    <div className="min-h-screen flex flex-col items-center">
      {/* Navigation */}
      <nav className="fixed top-0 w-full backdrop-blur-md bg-black/30 z-50 border-b border-white/10">
        <div className="w-full max-w-5xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="flex justify-center h-20 items-center">
            <div className="text-2xl font-bold nav-link">Taha</div>
            <div className="hidden md:flex space-x-12 ml-12">
              <a href="#about" className="nav-link">About</a>
              <a href="#skills" className="nav-link">Skills</a>
              <a href="#projects" className="nav-link">Projects</a>
              <a href="#contact" className="nav-link">Contact</a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="w-full pt-40 pb-32 px-6 sm:px-8 lg:px-12 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-cyan-500/20 animate-pulse"></div>
        <div className="w-full max-w-4xl mx-auto flex flex-col items-center relative">
          <h1 className="text-6xl md:text-7xl font-bold mb-8 section-title text-center">
            Hi, I'm <span className="animate-pulse">Taha</span>
          </h1>
          <p className="text-xl md:text-2xl mb-12 text-cyan-300 text-center">
            Front-End Developer passionate about React, design & animation
          </p>
          <a href="#contact" className="btn-primary text-center">Get in Touch</a>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="w-full py-32 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-purple-900/20 to-black/20"></div>
        <div className="w-full max-w-4xl mx-auto px-6 sm:px-8 lg:px-12 relative flex flex-col items-center">
          <h2 className="section-title text-center mb-16">About Me</h2>
          <div className="text-cyan-100 space-y-6 flex flex-col items-center">
            <p className="text-lg leading-relaxed text-center max-w-2xl">
              I'm a passionate front-end developer with a keen eye for design and a love for creating
              smooth, interactive user experiences. I specialize in React and modern web technologies.
            </p>
            <p className="text-lg leading-relaxed text-center max-w-2xl">
              When I'm not coding, you can find me exploring new design trends, contributing to open-source
              projects, or learning new technologies to stay at the cutting edge of web development.
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
            {['React', 'TypeScript', 'Tailwind CSS', 'Node.js'].map((skill) => (
              <div key={skill} className="card text-center group p-8 flex flex-col items-center justify-center">
                <h3 className="font-semibold text-xl text-cyan-300 group-hover:text-purple-300 transition-colors">
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
              <h3 className="text-2xl font-bold mb-4 text-cyan-300 group-hover:text-purple-300 transition-colors">
                Project Title
              </h3>
              <p className="text-cyan-100 mb-6 leading-relaxed">
                A brief description of the project, technologies used, and your role in development.
              </p>
              <div className="flex gap-6 justify-center">
                <a href="#" className="text-purple-300 hover:text-cyan-300 transition-colors">Live Demo</a>
                <a href="#" className="text-purple-300 hover:text-cyan-300 transition-colors">GitHub</a>
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
            <p className="text-cyan-100 mb-12 text-lg leading-relaxed text-center max-w-2xl">
              I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions.
            </p>
            <div className="flex justify-center space-x-12">
              <a href="mailto:taha.syed.irfan@gmail.com" className="nav-link">
                Email
              </a>
              <a href="https://github.com/tah-6" className="nav-link">
                GitHub
              </a>
              <a href="https://www.linkedin.com/in/taha-irfan-57547525a/" className="nav-link">
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
