export default function NorthJerseyPlumbing() {
  const services = [
    {
      title: 'Emergency Plumbing',
      desc: 'Fast and reliable emergency plumbing services available when you need them most.',
    },
    {
      title: 'Drain Cleaning',
      desc: 'Professional drain cleaning and clog removal for homes and businesses.',
    },
    {
      title: 'Water Heater Repair',
      desc: 'Installation, maintenance, and repair of water heaters and heating systems.',
    },
    {
      title: 'Pipe Repair',
      desc: 'Leak detection, pipe replacement, and complete plumbing repairs.',
    },
  ];

  const reviews = [
    {
      name: 'Michael R.',
      text: 'Very professional and arrived quickly. Fixed our leaking pipe the same day.',
    },
    {
      name: 'Sarah T.',
      text: 'Great service and fair pricing. Highly recommended for plumbing repairs.',
    },
    {
      name: 'David L.',
      text: 'Excellent emergency service. Friendly team and quality work.',
    },
  ];

  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans">
      {/* Navbar */}
      <header className="w-full bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
          <div>
            <h1 className="text-2xl font-bold text-blue-900">
              North Jersey Plumbing
            </h1>
          </div>

          <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
            <a href="#home" className="hover:text-blue-700">Home</a>
            <a href="#services" className="hover:text-blue-700">Services</a>
            <a href="#contact" className="hover:text-blue-700">Contact</a>
          </nav>

          <button className="bg-blue-900 text-white px-5 py-2 rounded-xl hover:bg-blue-800 transition-all">
            Call Now
          </button>
        </div>
      </header>

      {/* Hero */}
      <section
        id="home"
        className="relative overflow-hidden bg-gradient-to-r from-sky-100 to-cyan-200"
      >
        <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>

        <div className="max-w-7xl mx-auto px-6 py-24 grid lg:grid-cols-2 gap-12 items-center relative z-10">
          <div>
            <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full mb-6 shadow-md">
              <span className="w-2 h-2 bg-green-500 rounded-full"></span>
              <p className="text-sm font-semibold text-slate-700">
                Available 24/7 Emergency Services
              </p>
            </div>

            <h2 className="text-5xl md:text-7xl font-black leading-[1.05] text-slate-900 mb-6">
              Trusted Plumbing
              <span className="block text-blue-700">Experts in North Jersey</span>
            </h2>

            <p className="text-slate-700 text-lg md:text-xl mb-8 max-w-xl leading-relaxed">
              Fast, reliable, and affordable plumbing & heating solutions for residential and commercial properties.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-10">
              <button className="bg-blue-900 text-white px-8 py-4 rounded-2xl font-bold hover:bg-blue-800 transition-all shadow-2xl text-lg">
                Schedule Service
              </button>

              <button className="bg-white text-slate-900 border border-slate-200 px-8 py-4 rounded-2xl font-bold hover:bg-slate-100 transition-all text-lg shadow-md">
                Learn More
              </button>
            </div>

            <div className="flex flex-wrap gap-6 text-sm font-medium text-slate-700">
              <div className="flex items-center gap-2">
                <span className="text-green-600">✔</span>
                Licensed & Insured
              </div>

              <div className="flex items-center gap-2">
                <span className="text-green-600">✔</span>
                Same-Day Service
              </div>

              <div className="flex items-center gap-2">
                <span className="text-green-600">✔</span>
                5-Star Reviews
              </div>
            </div>
          </div>

          <div className="relative flex justify-center">
            <div className="absolute -top-8 -left-8 bg-white rounded-3xl shadow-2xl p-4 hidden md:block">
              <p className="text-sm font-semibold text-slate-500 mb-1">
                Customer Rating
              </p>
              <div className="flex items-center gap-2">
                <span className="text-yellow-500 text-xl">★★★★★</span>
                <span className="font-bold text-slate-900">4.9/5</span>
              </div>
            </div>

            <img
              src="https://images.unsplash.com/photo-1585704032915-c3400ca199e7?q=80&w=1200&auto=format&fit=crop"
              alt="Plumber"
              className="relative z-10 w-full max-w-xl rounded-[40px] shadow-[0_30px_80px_rgba(0,0,0,0.25)] object-cover border-8 border-white"
            />

            <div className="absolute -bottom-8 right-0 bg-blue-900 text-white rounded-3xl p-6 shadow-2xl hidden md:block">
              <p className="text-4xl font-black">15+</p>
              <p className="text-sm uppercase tracking-wide text-white/80">
                Years Experience
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h3 className="text-4xl font-bold mb-4">Why Choose Us</h3>
          <p className="text-slate-600 max-w-2xl mx-auto mb-14">
            Reliable plumbing and heating services backed by experience, quality workmanship, and customer satisfaction.
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-8 rounded-3xl shadow-lg border border-slate-100">
              <div className="text-5xl mb-4">🔧</div>
              <h4 className="text-2xl font-semibold mb-3">Professional Service</h4>
              <p className="text-slate-600">
                Experienced technicians delivering high-quality plumbing solutions.
              </p>
            </div>

            <div className="p-8 rounded-3xl shadow-lg border border-slate-100">
              <div className="text-5xl mb-4">⏰</div>
              <h4 className="text-2xl font-semibold mb-3">24/7 Emergency</h4>
              <p className="text-slate-600">
                Quick response emergency plumbing services available anytime.
              </p>
            </div>

            <div className="p-8 rounded-3xl shadow-lg border border-slate-100">
              <div className="text-5xl mb-4">⭐</div>
              <h4 className="text-2xl font-semibold mb-3">Trusted Reviews</h4>
              <p className="text-slate-600">
                Hundreds of satisfied customers across North Jersey.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-14">
            <h3 className="text-4xl font-bold mb-4">Our Services</h3>
            <p className="text-slate-600 max-w-2xl mx-auto">
              Complete plumbing and heating services for homes and businesses.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white rounded-3xl p-8 shadow-md hover:shadow-2xl transition-all"
              >
                <div className="text-4xl mb-4">🛠️</div>
                <h4 className="text-2xl font-semibold mb-3">{service.title}</h4>
                <p className="text-slate-600">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <img
              src="https://images.unsplash.com/photo-1620626011761-996317b8d101?q=80&w=1200&auto=format&fit=crop"
              alt="Plumbing Service"
              className="rounded-3xl shadow-2xl"
            />
          </div>

          <div>
            <p className="text-blue-700 font-semibold uppercase tracking-wide mb-3">
              About Us
            </p>

            <h3 className="text-5xl font-bold mb-6 leading-tight">
              Professional Plumbing & Heating Services
            </h3>

            <p className="text-slate-600 text-lg mb-8">
              We provide trusted plumbing and heating solutions with fast response times, transparent pricing, and expert workmanship.
            </p>

            <button className="bg-blue-900 text-white px-7 py-3 rounded-2xl font-semibold hover:bg-blue-800 transition-all shadow-lg">
              Get Quote
            </button>
          </div>
        </div>
      </section>

      {/* Reviews */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-14">
            <h3 className="text-4xl font-bold mb-4">Customer Reviews</h3>
            <p className="text-slate-600 max-w-2xl mx-auto">
              See what our customers say about our plumbing services.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {reviews.map((review, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-3xl shadow-lg"
              >
                <div className="text-yellow-500 text-xl mb-4">★★★★★</div>
                <p className="text-slate-600 mb-6">“{review.text}”</p>
                <h4 className="font-bold text-lg">{review.name}</h4>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-20 bg-blue-900 text-white">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h3 className="text-5xl font-bold mb-6">
            Need Emergency Plumbing Help?
          </h3>

          <p className="text-white/80 text-lg max-w-2xl mx-auto mb-10">
            Contact North Jersey Plumbing today for fast, reliable, and affordable plumbing services.
          </p>

          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <button className="bg-white text-blue-900 px-8 py-4 rounded-2xl font-bold hover:bg-slate-100 transition-all">
              Call Us Now
            </button>

            <button className="border border-white px-8 py-4 rounded-2xl font-bold hover:bg-white hover:text-blue-900 transition-all">
              Request Quote
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-950 text-white py-8">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <div>
            <h4 className="text-xl font-bold">North Jersey Plumbing</h4>
            <p className="text-slate-400 text-sm mt-1">
              Professional Plumbing & Heating Services
            </p>
          </div>

          <div className="text-slate-400 text-sm">
            © 2026 North Jersey Plumbing. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}
