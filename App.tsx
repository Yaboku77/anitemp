import exampleImage from 'figma:asset/38ed31af6673d2528f2cfdfa75cccc170db2ab75.png';
import { Camera } from 'lucide-react';

export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-100 to-purple-600 flex items-center justify-center p-4">
      <div className="w-full max-w-5xl bg-gradient-to-r from-white via-purple-50 to-purple-400 rounded-3xl overflow-hidden shadow-2xl relative">
        {/* Decorative dotted arrows */}
        <div className="absolute top-16 left-1/3 transform -translate-x-1/2">
          <div className="flex space-x-1">
            {Array.from({ length: 8 }).map((_, i) => (
              <div key={i} className="w-2 h-2 bg-purple-400 rounded-full opacity-60"></div>
            ))}
          </div>
          <div className="flex space-x-1 mt-2 ml-4">
            {Array.from({ length: 6 }).map((_, i) => (
              <div key={i} className="w-2 h-2 bg-purple-400 rounded-full opacity-60"></div>
            ))}
          </div>
          <div className="flex space-x-1 mt-2 ml-8">
            {Array.from({ length: 4 }).map((_, i) => (
              <div key={i} className="w-2 h-2 bg-purple-400 rounded-full opacity-60"></div>
            ))}
          </div>
        </div>

        <div className="flex items-center min-h-[600px]">
          {/* Left content */}
          <div className="flex-1 p-12">
            {/* Header */}
            <div className="flex items-center space-x-4 mb-8">
              <div className="w-16 h-16 bg-black rounded-full flex items-center justify-center">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-400 to-purple-600 rounded-full flex items-center justify-center">
                  <span className="text-white text-xs font-bold">ANIME</span>
                </div>
              </div>
              <div className="bg-purple-600 text-white px-6 py-2 rounded-full">
                <span className="text-sm font-medium">ONGOING CLAN</span>
              </div>
            </div>

            {/* Season info */}
            <div className="mb-6">
              <p className="text-purple-600 text-lg font-medium tracking-wide">FALL 2024</p>
            </div>

            {/* Main title */}
            <div className="mb-8">
              <h1 className="text-5xl font-bold mb-2">
                <span className="text-black">RE:ZERO </span>
                <span className="text-purple-600">SEASON 3</span>
              </h1>
            </div>

            {/* Studio info */}
            <div className="flex items-center space-x-3 mb-12">
              <Camera className="w-6 h-6 text-purple-600" />
              <span className="text-purple-600 font-medium text-lg">STUDIO WHITEFOX</span>
            </div>

            {/* Genre tags */}
            <div className="flex flex-wrap gap-3 mb-12">
              {['ACTION', 'ADVENTURE', 'FANTASY', 'DRAMA'].map((genre) => (
                <span
                  key={genre}
                  className="bg-purple-600 text-white px-6 py-2 rounded-full text-sm font-medium"
                >
                  {genre}
                </span>
              ))}
            </div>

            {/* Bottom section */}
            <div className="flex items-center space-x-6">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-black rounded-full flex items-center justify-center">
                  <span className="text-white text-xs font-bold">AC</span>
                </div>
                <div>
                  <p className="text-purple-600 font-bold text-lg">ANIME</p>
                  <p className="text-black font-bold text-lg">CLAN</p>
                </div>
              </div>
              <button className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-3 rounded-full font-medium text-lg transition-colors">
                WATCH NOW
              </button>
            </div>
          </div>

          {/* Right side - Anime image */}
          <div className="flex-shrink-0 relative">
            <div className="w-96 h-[600px] relative">
              <img
                src={exampleImage}
                alt="Re:Zero Season 3 Anime Poster"
                className="w-full h-full object-cover rounded-l-3xl"
              />
              {/* Overlay gradient to blend with background */}
              <div className="absolute inset-0 bg-gradient-to-l from-transparent via-transparent to-purple-400/20 rounded-l-3xl"></div>
            </div>
          </div>
        </div>

        {/* Additional decorative dotted arrows on the right */}
        <div className="absolute top-20 right-1/4">
          <div className="flex space-x-1 justify-end">
            {Array.from({ length: 4 }).map((_, i) => (
              <div key={i} className="w-2 h-2 bg-purple-300 rounded-full opacity-40"></div>
            ))}
          </div>
          <div className="flex space-x-1 mt-2 justify-end mr-4">
            {Array.from({ length: 6 }).map((_, i) => (
              <div key={i} className="w-2 h-2 bg-purple-300 rounded-full opacity-40"></div>
            ))}
          </div>
          <div className="flex space-x-1 mt-2 justify-end mr-8">
            {Array.from({ length: 8 }).map((_, i) => (
              <div key={i} className="w-2 h-2 bg-purple-300 rounded-full opacity-40"></div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}