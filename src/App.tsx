import './App.css';

function App() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-gray-800">
      <header className="text-center space-y-4 px-6">
        <h1 className="text-5xl font-bold">Taha <span className="text-blue-500">Tahatech</span></h1>
        <p className="text-xl">Front‑End Developer passionate about React, design & animation</p>
      </header>

      <main className="py-16 px-6 w-full max-w-3xl space-y-16">
        {/* Projects */}
        <section>
          <h2 className="text-3xl font-semibold mb-6">Projects</h2>
          <div className="grid gap-8 md:grid-cols-2">
            <div className="p-6 bg-white rounded-lg shadow">
              <h3 className="text-2xl font-bold mb-2">Project Title</h3>
              <p className="mb-4">Short description about the tech used and your role.</p>
              <a href="#" className="text-blue-500 hover:underline">View Project →</a>
            </div>
            {/* Repeat cards */}
          </div>
        </section>

        {/* Contact */}
        <section className="text-center">
          <h2 className="text-3xl font-semibold mb-4">Let’s Connect</h2>
          <p>Email me at <a href="mailto:you@example.com" className="text-blue-500">you@example.com</a></p>
          <div className="mt-4 flex justify-center gap-6">
            <a href="#" className="hover:text-blue-500">GitHub</a>
            <a href="#" className="hover:text-blue-500">LinkedIn</a>
          </div>
        </section>
      </main>

      <footer className="py-4 text-gray-500 text-sm">
        © {new Date().getFullYear()} Taha — Built with React & Vite
      </footer>
    </div>
  );
}

export default App;
