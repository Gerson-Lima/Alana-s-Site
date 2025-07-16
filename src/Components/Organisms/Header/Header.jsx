import { Fragment, useState, useEffect } from 'react';
import { Dialog, DialogPanel, Transition } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import Logo from '../../../assets/Logo.svg';
import './Header.css';

const navigation = [
  { name: 'Início', href: '#home' },
  { name: 'Projetos', href: '#projects' },
  { name: 'Sobre mim', href: '#about' },
  { name: 'Como funciona', href: '#steps' },
  { name: 'Contato', href: '#contact' },
];

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`
        fixed inset-x-0 top-0 z-50 transition-colors duration-300
        ${scrolled ? 'bg-white shadow' : 'bg-transparent'}
      `}
    >
      <nav
        aria-label="Global"
        className="flex items-center justify-between p-6 xl:px-0 sm:px-11 max-w-7xl mx-auto"
      >
        {/* LOGO */}
        <div className="flex md:flex-1">
          <a href="/">
            <img
              alt="Logo"
              src={Logo}
              className="xl:h-[4.5rem] sm:h-12 w-auto"
              style={{
                imageRendering: '-webkit-optimize-contrast',
                transform: 'translateZ(0)',
              }}
            />
          </a>
        </div>

        {/* BOTÃO HAMBURGUER */}
        <div className="flex lg:hidden">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(true)}
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
          >
            <Bars3Icon aria-hidden="true" className="size-6" />
          </button>
        </div>

        {/* ITENS MENU DESKTOP */}
        <div className="hidden navlinks lg:flex lg:gap-x-12 uppercase font-primary">
          {navigation.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className={`text-lg font-semibold transition-colors duration-300 ${
                scrolled ? 'text-gray-900' : 'text-[#202020]'
              }`}
            >
              {item.name}
            </a>
          ))}
        </div>
      </nav>

      {/* MENU MOBILE */}
      <Transition show={mobileMenuOpen} as={Fragment}>
        <Dialog as="div" className="lg:hidden relative z-50" onClose={setMobileMenuOpen}>
          {/* Overlay */}
          <Transition.Child
            as={Fragment}
            enter="transition-opacity ease-linear duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="transition-opacity ease-linear duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black/30" />
          </Transition.Child>

          {/* Sliding Panel */}
          <Transition.Child
            as={Fragment}
            enter="transition ease-out duration-300"
            enterFrom="translate-x-full"
            enterTo="translate-x-0"
            leave="transition ease-in duration-200"
            leaveFrom="translate-x-0"
            leaveTo="translate-x-full"
          >
            <DialogPanel className="fixed inset-y-0 right-0 w-3/4 overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
              <div className="flex items-center justify-between">
                <a href="/" className="-m-1.5 p-1.5">
                  <img
                    alt="Logo"
                    src={Logo}
                    className="xl:h-[4.5rem] sm:h-12 w-auto"
                  />
                </a>
                <button
                  type="button"
                  onClick={() => setMobileMenuOpen(false)}
                  className="-m-2.5 rounded-md p-2.5 text-gray-700"
                >
                  <XMarkIcon aria-hidden="true" className="size-6 mr-5" />
                </button>
              </div>
              <div className="mt-6 flow-root font-primary">
                <div className="-my-6 divide-y divide-gray-500/10">
                  <div className="space-y-2 py-6">
                    {navigation.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        onClick={() => setMobileMenuOpen(false)}
                        className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold text-secondary hover:bg-primary"
                      >
                        {item.name}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </DialogPanel>
          </Transition.Child>
        </Dialog>
      </Transition>
    </header>
  );
}
