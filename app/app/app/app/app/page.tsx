import Link from "next/link"
import { ChevronDown, Upload, FileText } from 'lucide-react'

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <Link href="/" className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-emerald-500 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-sm">P</span>
                </div>
                <span className="text-xl font-medium text-gray-900">PDF Editor</span>
              </Link>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main>
        <div className="bg-gray-50 py-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-5xl font-bold text-gray-900 mb-4">Online PDF Editor</h1>
            <p className="text-xl text-gray-500 mb-12">Edit PDF files for free. Fill & sign PDF</p>
            
            <button className="bg-emerald-500 hover:bg-emerald-600 text-white px-8 py-4 text-lg font-medium rounded-md">
              Upload PDF file
            </button>
          </div>
        </div>

        {/* Features Section */}
        <div className="bg-gray-50 py-16">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-800 mb-4">All PDF Tools You Need</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                { name: "Compress PDF", desc: "Reduce PDF file size" },
                { name: "Merge PDF", desc: "Combine multiple PDF files" },
                { name: "Split PDF", desc: "Extract pages from PDF" },
                { name: "Convert PDF", desc: "Convert PDF to Word, Excel" },
                { name: "Edit PDF", desc: "Add text, images, shapes" },
                { name: "Sign PDF", desc: "Electronic signature" },
              ].map((tool, index) => (
                <div key={index} className="bg-white p-6 rounded-lg border border-gray-200">
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">{tool.name}</h3>
                  <p className="text-gray-600 text-sm">{tool.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
