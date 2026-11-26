import { useState } from 'react';
import { Gift, Menu, Sparkles, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { DEMO_NAV_LINKS, DEMO_ORG } from '../../data/christmasDemoData';

interface DemoNavbarProps {
  onTryEntryClick: () => void;
}

export function DemoNavbar({ onTryEntryClick }: DemoNavbarProps) {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    setMobileOpen(false);
    if (href.startsWith('#')) {
      const target = document.querySelector(href);
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <div id="top">
      {/* Educational Demo Top Strip */}
      <div className="bg-[#162842] text-[#DBCEAC]">
        <div className="mx-auto flex min-h-[34px] max-w-[1200px] flex-wrap items-center justify-between gap-2 px-4 py-1.5 text-[10px] font-bold tracking-[0.15em] sm:px-6 lg:px-8">
          <span>{DEMO_ORG.demoBanner}</span>
          <span className="inline-flex items-center gap-1.5 tracking-[0.08em] text-[#C6B993]">
            <Sparkles className="h-3.5 w-3.5" aria-hidden="true" />
            <span>{DEMO_ORG.location}</span>
          </span>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <header className="relative z-30 border-b border-[#e5dfd2] bg-[#FFFEFA]">
        <div className="mx-auto flex h-[80px] max-w-[1200px] items-center justify-between gap-6 px-4 sm:px-6 lg:px-8">
          <a
            href="#top"
            onClick={() => setMobileOpen(false)}
            className="inline-flex shrink-0 items-center gap-3 text-[#1A3150] focus-visible:rounded"
          >
            <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#1A3150] text-[#C6B993]">
              <Gift className="h-5 w-5" aria-hidden="true" />
            </span>
            <span className="font-display text-base font-extrabold tracking-tight text-[#1A3150] whitespace-nowrap sm:text-lg">
              Community Giving Foundation — UK
            </span>
          </a>

          <button
            type="button"
            className="inline-flex h-11 w-11 items-center justify-center rounded text-[#1A3150] lg:hidden"
            aria-label={mobileOpen ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={mobileOpen}
            onClick={() => setMobileOpen((prev) => !prev)}
          >
            {mobileOpen ? (
              <X className="h-6 w-6" aria-hidden="true" />
            ) : (
              <Menu className="h-6 w-6" aria-hidden="true" />
            )}
          </button>

          <nav
            aria-label="Primary navigation"
            className="hidden items-center gap-6 text-[13px] font-semibold text-[#4a5a6f] lg:flex"
          >
            {DEMO_NAV_LINKS.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={(e) => handleLinkClick(e, item.href)}
                className="whitespace-nowrap shrink-0 border-b-2 border-transparent py-1 transition-colors duration-150 hover:border-[#C6B993] hover:text-[#1A3150]"
              >
                {item.label}
              </a>
            ))}

            <Button
              type="button"
              onClick={onTryEntryClick}
              className="h-10 cursor-pointer whitespace-nowrap shrink-0 rounded bg-[#162842] px-5 text-xs font-bold text-[#FFFEFA] hover:bg-[#213C5C]"
            >
              Try Demo Entry
            </Button>
          </nav>
        </div>

        {/* Mobile Drawer */}
        {mobileOpen && (
          <nav
            aria-label="Mobile navigation"
            className="border-t border-[#e5dfd2] bg-[#FFFEFA] px-4 py-4 shadow-lg lg:hidden"
          >
            <div className="flex flex-col gap-1">
              {DEMO_NAV_LINKS.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={(e) => handleLinkClick(e, item.href)}
                  className="flex min-h-[44px] items-center rounded px-3 text-sm font-semibold text-[#4a5a6f] transition-colors hover:bg-[#f5f2eb] hover:text-[#1A3150]"
                >
                  {item.label}
                </a>
              ))}
              <Button
                type="button"
                onClick={() => {
                  setMobileOpen(false);
                  onTryEntryClick();
                }}
                className="mt-2 h-11 w-full cursor-pointer rounded bg-[#162842] text-sm font-bold text-[#FFFEFA] hover:bg-[#213C5C]"
              >
                Try Demo Entry
              </Button>
            </div>
          </nav>
        )}
      </header>
    </div>
  );
}
