import { ArrowDown, Github } from 'lucide-react'
import { Button } from "@/components/ui/button"

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-black to-teal-900">
      <nav className="fixed top-0 w-full z-50">
  <div className="max-w-2xl mx-auto px-4">
    <div className="backdrop-blur-md bg-black/30 rounded-full my-4">
      <ul className="flex justify-center space-x-6 py-3">
        {['Home', 'About', 'Projects', 'Social', 'Contact Me'].map((item) => (
          <li key={item}>
            <a
              href={`#${item.toLowerCase()}`}
              className="text-gray-300 hover:text-white transition-colors text-sm"
            >
              {item}
            </a>
          </li>
        ))}
      </ul>
    </div>
  </div>
</nav>

      <main className="container mx-auto px-4 pt-32 grid lg:grid-cols-2 gap-8 items-center">
        <div className="space-y-6">
          <h1 className="text-6xl font-bold text-white">
            Mo <span className="bg-teal-500/20 text-teal-300 px-4 py-2 rounded-md">Shafaamry</span>
          </h1>
          
          <p className="text-gray-300 text-lg max-w-xl">
            Hello world! I am a Computer Science major with technical background and certifications in Cybersecurity. Below are my projects, experience and resume as well.
          </p>
          
          <div className="flex gap-4">
            <Button variant="outline" className="text-white border-white hover:bg-white/10">
              Contact
            </Button>
            <Button className="bg-white text-black hover:bg-gray-200">
              Resume
            </Button>
          </div>
        </div>

        <div className="relative">
          <div className="bg-black/50 backdrop-blur-sm rounded-lg p-4 font-mono text-sm max-w-full">
            <div className="flex gap-2 mb-3">
              <div className="w-3 h-3 rounded-full bg-red-500" />
              <div className="w-3 h-3 rounded-full bg-yellow-500" />
              <div className="w-3 h-3 rounded-full bg-green-500" />
            </div>
            <pre className="text-gray-300 whitespace-pre-wrap break-words overflow-x-auto max-w-full">
              <code>
                <span className="text-teal-400">const</span> express = <span className="text-blue-400">require</span>(<span className="text-green-400">'express'</span>);
                <span className="text-teal-400">const</span> cors = <span className="text-blue-400">require</span>(<span className="text-green-400">'cors'</span>);

                <span className="text-teal-400">const</span> app = <span className="text-blue-400">express</span>();
                <span className="text-teal-400">const</span> port = <span className="text-orange-400">5000</span>;

                <span className="text-gray-500">// Middleware</span>
                app.<span className="text-blue-400">use</span>(cors());
                app.<span className="text-blue-400">use</span>(express.json());
              </code>
            </pre>
            <Button variant="ghost" className="mt-4 text-white hover:bg-white/10">
              <Github className="mr-2 h-4 w-4" />
              My GitHub
            </Button>
          </div>
        </div>
      </main>

      <div className="flex justify-center mt-20">
        <Button variant="ghost" className="text-white animate-bounce">
          <ArrowDown className="h-6 w-6" />
        </Button>
      </div>
    </div>
  )
}

