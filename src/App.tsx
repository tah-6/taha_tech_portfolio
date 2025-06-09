import { useState } from 'react'
import './App.css'

function App() {
  return (
    <div className="min-h-screen bg-gray-100 text-gray-900">
      <header className="p-6 bg-white shadow-md">
        <h1 className="text-3xl font-bold">Taha's Tech Portfolio</h1>
        <p className="text-sm">Aspiring Developer | Problem Solver | Tech Enthusiast</p>
      </header>

      <main className="p-6">
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-2">Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <div className="p-4 bg-white rounded-2xl shadow">
              <h3 className="text-xl font-bold">Project Title</h3>
              <p className="text-sm">Short description of what this project does and what technologies it uses.</p>
              <a href="#" className="text-blue-500 text-sm mt-2 inline-block">View Project</a>
            </div>
            {/* Add more project cards here */}
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-2">Skills</h2>
          <ul className="list-disc pl-6">
            <li>JavaScript / TypeScript</li>
            <li>React / Next.js</li>
            <li>Node.js / Express</li>
            <li>Python / Java</li>
            <li>Git / GitHub</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-2">Contact</h2>
          <p>Email: <a href="mailto:you@example.com" className="text-blue-500">you@example.com</a></p>
          <p>LinkedIn: <a href="https://linkedin.com/in/yourprofile" className="text-blue-500">linkedin.com/in/yourprofile</a></p>
          <p>GitHub: <a href="https://github.com/tah-6" className="text-blue-500">github.com/tah-6</a></p>
        </section>
      </main>

      <footer className="p-4 text-center text-sm text-gray-500">
        &copy; {new Date().getFullYear()} Taha. All rights reserved.
      </footer>
    </div>
  )
}

export default App
