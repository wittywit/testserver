import Link from "next/link"

export default function Footer() {
  return (
    <footer className="bg-black text-white py-12 px-4 md:px-6 rounded-t-2xl">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          <div>
            <h3 className="text-lg font-normal mb-4">Resources</h3>
            <ul className="space-y-2">
              {/*  <li>
                <Link href="/download" className="hover:underline">
                  Download
                </Link>
              </li>  */}
              <li>
                <Link href="/games" className="hover:underline">
                  Games
                </Link>
              </li>
              <li>
                <Link href="/workbooks" className="hover:underline">
                  Workbooks
                </Link>
              </li>
              <li>
                <Link href="/catalogue" className="hover:underline">
                  Catalogue
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-normal mb-4">Exhibitions and Events</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/exhibitions" className="hover:underline">
                  Exhibitions
                </Link>
              </li>
              <li>
                <Link href="/calendar" className="hover:underline">
                  Calendar
                </Link>
              </li>
              <li>
                <Link href="/programs" className="hover:underline">
                  Public program
                </Link>
              </li>
              <li>
                <Link href="/digital" className="hover:underline">
                  Digital Content
                </Link>
              </li>
              {/*<li>
                <Link href="/screenings" className="hover:underline">
                  Screenings
                </Link>
              </li>
              <li>
                <Link href="/live" className="hover:underline">
                  Live Events
                </Link>
              </li>
              <li>
                <Link href="/tours" className="hover:underline">
                  Tours
                </Link>
              </li>*/}
              <li>
                <Link href="/lectures" className="hover:underline">
                  Lecture series
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-normal mb-4">Learn</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/workshop" className="hover:underline">
                  Workshops
                </Link>
              </li>
              <li>
                <Link href="/academic" className="hover:underline">
                  Academic Workshop
                </Link>
              </li>
              <li>
                <Link href="/professional" className="hover:underline">
                  Professional Workshop
                </Link>
              </li>
              <li>
                <Link href="/conferences" className="hover:underline">
                  Conferences
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-normal mb-4">Research and Resources</h3>
            <ul className="space-y-2">
              
              <li>
                <Link href="/journal" className="hover:underline">
                  The Studio Poetics Journal
                </Link>
              </li>
              
              
              <li>
                <Link href="/workshops" className="hover:underline">
                  Studio Workshops
                </Link>
              </li>
              
            </ul>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          <div>
            <h3 className="text-lg font-normal mb-4">About</h3>
            <ul className="space-y-2">
              
              <li>
                <Link href="/jobs" className="hover:underline">
                  Jobs
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:underline">
                  Contacts
                </Link>
              </li>
            </ul>
          </div>

          <div className="md:col-span-3">
            <div className="mb-8">
              <h3 className="text-lg font-normal mb-4">We are on socials</h3>
              <div className="flex flex-wrap gap-4">
                <Link
                  href="https://instagram.com"
                  className="rainbow-border-btn border border-white rounded-full px-3 py-1 text-sm hover:bg-white hover:text-black transition-colors"
                >
                  INSTAGRAM
                </Link>
                <Link
                  href="https://facebook.com"
                  className="rainbow-border-btn border border-white rounded-full px-3 py-1 text-sm hover:bg-white hover:text-black transition-colors"
                >
                  FACEBOOK
                </Link>
                <Link
                  href="https://twitter.com"
                  className="rainbow-border-btn border border-white rounded-full px-3 py-1 text-sm hover:bg-white hover:text-black transition-colors"
                >
                  TWITTER
                </Link>
                <Link
                  href="https://youtube.com"
                  className="rainbow-border-btn border border-white rounded-full px-3 py-1 text-sm hover:bg-white hover:text-black transition-colors"
                >
                  YOUTUBE
                </Link>
                <Link
                  href="https://telegram.org"
                  className="rainbow-border-btn border border-white rounded-full px-3 py-1 text-sm hover:bg-white hover:text-black transition-colors"
                >
                  TELEGRAM
                </Link>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-normal mb-4">
                <span className="gradient-text">Experience Reality Reimagined — Discover Glasscape</span>
              </h3>
              <div className="inline-block">
                <Link
                  href="/glasscape"
                  className="rainbow-border-btn border border-white rounded-full px-6 py-2 text-base hover:bg-white hover:text-black transition-colors font-medium"
                >
                  Explore Glasscape
                </Link>
              </div>
              <p className="mt-3 text-gray-400 max-w-xl">
                Step into the extraordinary with our breakthrough holographic technology — where digital art meets
                physical reality in a mesmerizing dance of light and dimension.
              </p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-8 border-t border-gray-800">
          <div>
            <h3 className="text-lg font-normal mb-4">Contact Us</h3>
            <p className="mb-2">Poetics Research and Innovation Studio LLP, India</p>
            <p className="mb-2">hello@poetics.studio</p>
          </div>

          <div>
            <h3 className="text-lg font-normal mb-4">Hours</h3>
            <p className="mb-2">Open Mon-Fri, 09:00–15:00</p>
            {/*<p className="mb-2">Ticket office closes 30 minutes before Studio closing time</p>*/}
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-800 text-sm text-gray-400 flex flex-wrap justify-between gap-4">
          <div className="flex gap-4">
            <Link href="/policies" className="hover:underline">
              Privacy Policies
            </Link>
            <Link href="/license" className="hover:underline">
              License Agreement
            </Link>
          </div>
          <div>© Studio Poetics {new Date().getFullYear()}</div>
          <div>Designed by Studio Poetics</div>
        </div>
      </div>
    </footer>
  )
}
