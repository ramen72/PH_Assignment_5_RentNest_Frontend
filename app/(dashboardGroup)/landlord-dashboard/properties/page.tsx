import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Home, ArrowRight } from "lucide-react";

export default function Page() {
  return (
    <main className="min-h-screen bg-linear-to-br from-slate-900 to-slate-800">
      {/* Navigation */}
      <nav className="bg-white/5 backdrop-blur-md border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 py-4 sm:px-6 lg:px-8 flex items-center justify-between">
          <div className="flex items-center gap-2 text-white">
            <Home className="w-6 h-6" />
            <span className="text-xl font-bold">RentHub</span>
          </div>
          <Link href="/properties">
            <Button variant="ghost" className="text-white hover:bg-white/10">
              View Properties
            </Button>
          </Link>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="max-w-7xl mx-auto px-4 py-20 sm:px-6 lg:px-8">
        <div className="text-center space-y-6">
          <h1 className="text-5xl md:text-6xl font-bold text-white leading-tight">
            Find Your Perfect <span className="text-blue-400">Home</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Discover a wide range of rental properties with modern amenities,
            trusted landlords, and flexible terms.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
            <Link href="/properties">
              <Button
                size="lg"
                className="bg-blue-600 hover:bg-blue-700 text-white gap-2"
              >
                Browse Properties
                <ArrowRight className="w-5 h-5" />
              </Button>
            </Link>
            <Button
              size="lg"
              variant="outline"
              className="border-white/20 text-white hover:bg-white/10"
            >
              Learn More
            </Button>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-20">
          <div className="bg-white/5 backdrop-blur border border-white/10 rounded-xl p-6 text-center">
            <div className="text-4xl font-bold text-blue-400">250+</div>
            <p className="text-gray-300 mt-2">Available Properties</p>
          </div>
          <div className="bg-white/5 backdrop-blur border border-white/10 rounded-xl p-6 text-center">
            <div className="text-4xl font-bold text-blue-400">5K+</div>
            <p className="text-gray-300 mt-2">Happy Renters</p>
          </div>
          <div className="bg-white/5 backdrop-blur border border-white/10 rounded-xl p-6 text-center">
            <div className="text-4xl font-bold text-blue-400">50+</div>
            <p className="text-gray-300 mt-2">Verified Landlords</p>
          </div>
        </div>
      </div>
    </main>
  );
}
