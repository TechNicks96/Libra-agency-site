import { LibraLogo } from './components/LibraLogo';

export default function App() {
  return (
    <div className="min-h-screen bg-white antialiased">
      {/* Logo Showcase Section */}
      <div className="max-w-7xl mx-auto px-6 py-20">
        <h1 className="text-4xl font-bold text-gray-900 mb-16 text-center">
          Libra Agency Logo Variations
        </h1>

        {/* Variation 1: Solid Dark Version */}
        <div className="mb-16">
          <div className="bg-white border-2 border-gray-200 rounded-3xl p-12">
            <div className="flex flex-col items-center">
              <LibraLogo variant="dark" />
              <p className="mt-6 text-sm font-semibold text-gray-500 uppercase tracking-wide">
                Variation 1: Solid Dark Version
              </p>
              <p className="mt-2 text-sm text-gray-600 text-center max-w-md">
                Professional, clean, and versatile. Use for general purposes and light backgrounds.
              </p>
            </div>
          </div>
        </div>

        {/* Variation 2: Gradient Premium Version */}
        <div className="mb-16">
          <div className="bg-white border-2 border-purple-200 rounded-3xl p-12 shadow-xl shadow-purple-500/10">
            <div className="flex flex-col items-center">
              <LibraLogo variant="gradient" />
              <p className="mt-6 text-sm font-semibold text-purple-600 uppercase tracking-wide">
                Variation 2: Gradient Premium Version (Default)
              </p>
              <p className="mt-2 text-sm text-gray-600 text-center max-w-md">
                Luxury gradient with royal blue → violet → pink. Perfect for headers, hero sections, and premium branding.
              </p>
            </div>
          </div>
        </div>

        {/* Variation 3: White Version (for dark backgrounds) */}
        <div className="mb-16">
          <div className="bg-gradient-to-br from-gray-900 via-purple-900 to-blue-900 rounded-3xl p-12">
            <div className="flex flex-col items-center">
              <LibraLogo variant="white" />
              <p className="mt-6 text-sm font-semibold text-white/70 uppercase tracking-wide">
                Variation 3: White Version
              </p>
              <p className="mt-2 text-sm text-white/60 text-center max-w-md">
                High contrast white version. Use for dark backgrounds, footers, or overlays.
              </p>
            </div>
          </div>
        </div>

        {/* Size Comparison - All Variations */}
        <div className="bg-gray-50 rounded-3xl p-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">
            Size Comparison: All Variations
          </h2>
          
          <div className="space-y-8">
            {/* Large */}
            <div className="flex items-center justify-between border-b border-gray-200 pb-6">
              <span className="text-sm font-medium text-gray-500 w-24">Large</span>
              <div className="flex gap-8">
                <LibraLogo variant="dark" />
                <LibraLogo variant="gradient" />
              </div>
            </div>

            {/* Medium */}
            <div className="flex items-center justify-between border-b border-gray-200 pb-6">
              <span className="text-sm font-medium text-gray-500 w-24">Medium</span>
              <div className="flex gap-8">
                <div className="scale-75 origin-left">
                  <LibraLogo variant="dark" />
                </div>
                <div className="scale-75 origin-left">
                  <LibraLogo variant="gradient" />
                </div>
              </div>
            </div>

            {/* Small */}
            <div className="flex items-center justify-between pb-6">
              <span className="text-sm font-medium text-gray-500 w-24">Small</span>
              <div className="flex gap-8">
                <div className="scale-50 origin-left">
                  <LibraLogo variant="dark" />
                </div>
                <div className="scale-50 origin-left">
                  <LibraLogo variant="gradient" />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Usage Guidelines */}
        <div className="mt-16 grid md:grid-cols-3 gap-6">
          <div className="bg-white border border-gray-200 rounded-2xl p-6">
            <h3 className="text-lg font-bold text-gray-900 mb-3">Typography</h3>
            <ul className="text-sm text-gray-600 space-y-2">
              <li>• Geometric sans-serif font</li>
              <li>• "Libra" - Bold weight</li>
              <li>• "Agency" - Semibold weight</li>
              <li>• Tight kerning (-0.03em / -0.01em)</li>
              <li>• 28px base size</li>
            </ul>
          </div>

          <div className="bg-white border border-gray-200 rounded-2xl p-6">
            <h3 className="text-lg font-bold text-gray-900 mb-3">Color Palette</h3>
            <ul className="text-sm text-gray-600 space-y-2">
              <li>• Royal Blue: #2563eb</li>
              <li>• Violet: #7c3aed</li>
              <li>• Pink: #db2777</li>
              <li>• Dark Gray: #1f2937</li>
              <li>• Medium Gray: #6b7280</li>
            </ul>
          </div>

          <div className="bg-white border border-gray-200 rounded-2xl p-6">
            <h3 className="text-lg font-bold text-gray-900 mb-3">Usage</h3>
            <ul className="text-sm text-gray-600 space-y-2">
              <li>• Default: Gradient version</li>
              <li>• Headers: Gradient or Dark</li>
              <li>• Footers: White version</li>
              <li>• Print: Dark version</li>
              <li>• Responsive: Scales perfectly</li>
            </ul>
          </div>
        </div>

        {/* Code Examples */}
        <div className="mt-16 bg-gray-900 rounded-3xl p-8 overflow-x-auto">
          <h2 className="text-2xl font-bold text-white mb-6">Code Examples</h2>
          <div className="space-y-6">
            <div>
              <p className="text-sm text-gray-400 mb-2">Default (Gradient):</p>
              <code className="text-sm text-green-400 font-mono">
                &lt;LibraLogo /&gt;
              </code>
            </div>
            
            <div>
              <p className="text-sm text-gray-400 mb-2">Dark Version:</p>
              <code className="text-sm text-green-400 font-mono">
                &lt;LibraLogo variant="dark" /&gt;
              </code>
            </div>
            
            <div>
              <p className="text-sm text-gray-400 mb-2">White Version:</p>
              <code className="text-sm text-green-400 font-mono">
                &lt;LibraLogo variant="white" /&gt;
              </code>
            </div>

            <div>
              <p className="text-sm text-gray-400 mb-2">With Custom Classes:</p>
              <code className="text-sm text-green-400 font-mono">
                &lt;LibraLogo variant="gradient" className="scale-75" /&gt;
              </code>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
