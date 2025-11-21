import React from 'react';
import { Outlet, Link, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Sprout, Menu, X } from 'lucide-react';
import LanguageToggle from './LanguageToggle';

const Layout = () => {
  const { t } = useTranslation();
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const isActive = (path) => location.pathname === path;

  const navLinks = [
    { path: '/home', label: t('nav.home') },
    // Add more links here as needed
  ];

  return (
    <div className="min-h-screen flex flex-col bg-earth-50 font-sans text-earth-900">
      {/* Navbar */}
      <nav className="bg-white/80 backdrop-blur-md sticky top-0 z-50 border-b border-earth-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-2 group">
              <div className="bg-crops-100 p-2 rounded-lg group-hover:bg-crops-200 transition-colors">
                <Sprout className="w-6 h-6 text-crops-600" />
              </div>
              <span className="text-xl font-bold text-earth-800 tracking-tight">
                {t('app.title')}
              </span>
            </Link>

            {/* Desktop Nav */}
            <div className="hidden md:flex items-center gap-8">
              <div className="flex items-center gap-6">
                {navLinks.map((link) => (
                  <Link
                    key={link.path}
                    to={link.path}
                    className={`text-sm font-medium transition-colors hover:text-crops-600 ${isActive(link.path) ? 'text-crops-600' : 'text-earth-600'
                      }`}
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
              <div className="h-6 w-px bg-earth-200" />
              <LanguageToggle />
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden flex items-center gap-4">
              <LanguageToggle />
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="p-2 rounded-lg hover:bg-earth-100 text-earth-600 transition-colors"
              >
                {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-earth-100 bg-white">
            <div className="px-4 pt-2 pb-6 space-y-2">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsMenuOpen(false)}
                  className={`block px-4 py-3 rounded-lg text-base font-medium transition-colors ${isActive(link.path)
                      ? 'bg-crops-50 text-crops-700'
                      : 'text-earth-600 hover:bg-earth-50'
                    }`}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Main Content */}
      <main className="flex-grow">
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="bg-earth-900 text-earth-100 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Sprout className="w-6 h-6 text-crops-400" />
                <span className="text-xl font-bold text-white">
                  {t('app.title')}
                </span>
              </div>
              <p className="text-earth-300 text-sm leading-relaxed max-w-xs">
                {t('hero.description')}
              </p>
            </div>

            {/* Add more footer sections if needed */}
          </div>
          <div className="border-t border-earth-800 mt-12 pt-8 text-center text-sm text-earth-400">
            <p>&copy; {new Date().getFullYear()} {t('app.title')}. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
