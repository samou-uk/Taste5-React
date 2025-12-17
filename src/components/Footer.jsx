import { Link } from 'react-router-dom'

function Footer() {
  return (
    <footer className="bg-[#3a2214] border-t border-[#4a2c18] text-neutral-200">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 pb-24 sm:pb-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div className="space-y-4">
            <div className="flex flex-col gap-2 items-start">
              <img 
                src="/assets/taste5.png" 
                alt="Taste5" 
                className="h-12 w-auto object-contain max-w-[200px] brightness-0 invert" 
              />
              <p className="text-xs font-light tracking-wider uppercase text-neutral-200/80">
                Five Senses. One Taste.
              </p>
            </div>
            <p className="text-sm text-neutral-200/80 leading-relaxed">
              A new bakery and store opening soon at 132 Friar Street, Reading.
              Experience the perfect blend of flavors that awaken all your senses.
            </p>
          </div>

          <div>
            <h3 className="font-semibold mb-4 text-white">Quick Links</h3>
            <ul className="space-y-2">
              {[
                { path: '/', label: 'Home' },
                { path: '/about', label: 'About' },
                { path: '/menu', label: 'Menu' },
                { path: '/contact', label: 'Contact' },
                { path: '/privacy', label: 'Privacy Policy' },
                { path: '/terms', label: 'Terms & Conditions' },
              ].map(({ path, label }) => (
                <li key={path}>
                  <Link 
                    to={path} 
                    className="text-sm text-neutral-200/80 hover:text-white transition-colors"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4 text-white">Location</h3>
            <p className="text-sm text-neutral-200/80 leading-relaxed">
              132 Friar Street<br />
              Reading, Berkshire<br />
              RG1 1EP
            </p>
          </div>

          <div>
            <h3 className="font-semibold mb-4 text-white">Contact</h3>
            <p className="text-sm text-neutral-200/80 leading-relaxed">
              <a href="mailto:hello@taste5.co.uk" className="hover:text-white transition-colors">
                hello@taste5.co.uk
              </a>
            </p>
          </div>
        </div>

        <div className="pt-8 border-t border-[#4a2c18]">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-neutral-300">
              &copy; {new Date().getFullYear()} Taste5 Ltd. All rights reserved.
            </p>
            <div className="hidden md:flex gap-6">
              <Link to="/privacy" className="text-sm text-neutral-200/80 hover:text-white transition-colors">
                Privacy Policy
              </Link>
              <Link to="/terms" className="text-sm text-neutral-200/80 hover:text-white transition-colors">
                Terms & Conditions
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
