import { useState } from 'react'
import { Dialog, DialogPanel } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import Logo from '../../../assets/Logo.svg'
import './Header.css';

const navigation = [
  { name: 'Início', href: '#' },
  { name: 'Projetos', href: '#' },
  { name: 'Sobre mim', href: '#' },
  { name: 'Serviços', href: '#' },
  { name: 'Contato', href: '#' },
]

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="absolute inset-x-24 sm:inset-x-0 top-0 z-50 max-w-7xl mx-auto">
      <nav aria-label="Global" className="flex items-center justify-between p-6 xl:px-0 sm:px-11">

        {/* LOGO */}
        <div className="flex md:flex-1">
          <a href="#">
            <img
              alt="Logo"
              src={Logo}
              className="xl:h-[4.5rem] sm:h-12 w-auto"
              style={{
                imageRendering: '-webkit-optimize-contrast',
                transform: 'translateZ(0)', // Força re-renderização
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

        {/* ITENS MENU */}
        <div className="hidden navlinks lg:flex lg:gap-x-12 uppercase font-primary">
          {navigation.map((item) => (
            <a key={item.name} href={item.href} className="text-lg font-semibold text-gray-900">
              {item.name}
            </a>
          ))}
        </div>
      </nav>

      {/* MENU MOBILE */}
      <Dialog open={mobileMenuOpen} onClose={setMobileMenuOpen} className="lg:hidden">
        <div className="fixed inset-0 z-50" />
        <DialogPanel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <a href="#" className="-m-1.5 p-1.5">
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
              <XMarkIcon aria-hidden="true" className="size-6" />
            </button>
          </div>
          <div className="mt-6 flow-root font-primary">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                {navigation.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold text-secondary hover:bg-primary"
                  >
                    {item.name}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </DialogPanel>
      </Dialog>
    </header>
  );
}