import { useState } from 'react';
import {
  Accessibility,
  CalendarDays,
  ChevronLeft,
  ChevronRight,
  Clock3,
  ExternalLink,
  MapPin,
} from 'lucide-react';
import { AnimatePresence, motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { CommunityEvent, DEMO_EVENTS } from '../../data/christmasDemoData';
import { ResilientImage } from '../ResilientImage';
import { RevealFromBottom } from '../ScrollReveal';

export function EventsCarouselSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState<1 | -1>(1);
  const [selectedEvent, setSelectedEvent] = useState<CommunityEvent | null>(null);

  const activeEvent = DEMO_EVENTS[currentIndex];

  const goToIndex = (nextIndex: number) => {
    const normalized = (nextIndex + DEMO_EVENTS.length) % DEMO_EVENTS.length;
    setDirection(nextIndex >= currentIndex ? 1 : -1);
    setCurrentIndex(normalized);
  };

  const handlePrev = () => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev - 1 + DEMO_EVENTS.length) % DEMO_EVENTS.length);
  };

  const handleNext = () => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % DEMO_EVENTS.length);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLElement>) => {
    if (e.key === 'ArrowLeft') {
      handlePrev();
    } else if (e.key === 'ArrowRight') {
      handleNext();
    }
  };

  return (
    <section
      id="events"
      aria-labelledby="events-carousel-heading"
      onKeyDown={handleKeyDown}
      className="bg-[#FFFEFA] py-16 sm:py-22 lg:py-26"
    >
      <div className="mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8">
        <RevealFromBottom distance={32}>
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div className="max-w-2xl">
              <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#B66D50]">
                Community Events Showcase · Mock Schedule
              </p>
              <h2
                id="events-carousel-heading"
                className="text-balance mt-3 font-display text-[clamp(1.85rem,3vw,2.65rem)] font-extrabold leading-[1.12] tracking-[-0.035em] text-[#1A3150]"
              >
                Five seasonal gatherings{' '}
                <span className="text-[#8a7040]">bringing neighbours together.</span>
              </h2>
            </div>

            <div className="flex items-center gap-3">
              <Button
                type="button"
                variant="outline"
                size="icon"
                onClick={handlePrev}
                aria-label="Previous community event"
                className="h-11 w-11 cursor-pointer rounded-full border-[#d6cfc0] bg-[#FEFDFA] text-[#1A3150] hover:border-[#1A3150] hover:bg-[#f5f2eb]"
              >
                <ChevronLeft className="h-5 w-5" aria-hidden="true" />
              </Button>
              <span className="min-w-[60px] text-center font-display text-xs font-bold tabular-nums text-[#4a5a6f]">
                0{currentIndex + 1} / 0{DEMO_EVENTS.length}
              </span>
              <Button
                type="button"
                variant="outline"
                size="icon"
                onClick={handleNext}
                aria-label="Next community event"
                className="h-11 w-11 cursor-pointer rounded-full border-[#d6cfc0] bg-[#FEFDFA] text-[#1A3150] hover:border-[#1A3150] hover:bg-[#f5f2eb]"
              >
                <ChevronRight className="h-5 w-5" aria-hidden="true" />
              </Button>
            </div>
          </div>
        </RevealFromBottom>

        {/* Main Interactive Carousel Stage */}
        <RevealFromBottom distance={38} delay={0.08}>
          <div
            role="region"
            aria-roledescription="carousel"
            aria-label="Upcoming Christmas community events"
            className="mt-10 overflow-hidden rounded-xl border border-[#e5dfd2] bg-[#FEFDFA] shadow-sm"
          >
            <AnimatePresence mode="wait" initial={false}>
              <motion.div
                key={activeEvent.id}
                initial={{ opacity: 0, x: direction * 24 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: direction * -24 }}
                transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
                className="grid grid-cols-1 items-stretch lg:grid-cols-12"
              >
                {/* Slide Photo */}
                <div className="relative bg-[#162842] lg:col-span-7">
                  <ResilientImage
                    src={activeEvent.imageSrc}
                    alt={activeEvent.imageAlt}
                    fallbackTitle={activeEvent.title}
                    className="aspect-[16/9] h-full w-full object-cover object-center lg:min-h-[390px]"
                  />
                </div>

                {/* Slide Details */}
                <div className="flex flex-col justify-between p-6 sm:p-8 lg:col-span-5 lg:p-10">
                  <div>
                    <div className="flex flex-wrap items-center gap-2 text-xs font-bold uppercase tracking-[0.16em] text-[#B66D50]">
                      <span>{activeEvent.category}</span>
                      <span aria-hidden="true" className="text-[#C6B993]">·</span>
                      <span className="text-[#8a7040]">Demo Event</span>
                    </div>

                    <h3 className="mt-3 font-display text-2xl font-extrabold tracking-[-0.025em] text-[#1A3150]">
                      {activeEvent.title}
                    </h3>

                    <div className="mt-5 space-y-2.5 border-y border-[#e5dfd2] py-4 text-sm text-[#4a5a6f]">
                      <div className="flex items-center gap-2.5">
                        <CalendarDays className="h-4 w-4 shrink-0 text-[#B66D50]" aria-hidden="true" />
                        <span className="font-semibold text-[#1A3150]">{activeEvent.date}</span>
                        <span aria-hidden="true">·</span>
                        <span>{activeEvent.time}</span>
                      </div>
                      <div className="flex items-start gap-2.5">
                        <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-[#B66D50]" aria-hidden="true" />
                        <span>{activeEvent.location}</span>
                      </div>
                    </div>

                    <p className="mt-5 text-[15px] leading-[1.75] text-[#4a5a6f]">
                      {activeEvent.summary}
                    </p>
                  </div>

                  <div className="mt-7 flex flex-wrap items-center justify-between gap-4">
                    <Button
                      type="button"
                      onClick={() => setSelectedEvent(activeEvent)}
                      className="h-11 cursor-pointer gap-2 rounded bg-[#162842] px-5 text-xs font-bold text-[#FFFEFA] hover:bg-[#213C5C]"
                    >
                      <span>View Event Details</span>
                      <ExternalLink className="h-3.5 w-3.5 text-[#C6B993]" aria-hidden="true" />
                    </Button>

                    <span className="text-xs font-medium text-[#627285]">
                      {activeEvent.capacityNote}
                    </span>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Interactive Slide Selector Strip */}
          <div className="mt-5 grid grid-cols-2 gap-3 sm:grid-cols-5">
            {DEMO_EVENTS.map((event, idx) => {
              const isActive = idx === currentIndex;
              return (
                <button
                  key={event.id}
                  type="button"
                  onClick={() => goToIndex(idx)}
                  aria-current={isActive ? 'true' : undefined}
                  className={`flex cursor-pointer flex-col justify-between rounded-lg border p-3.5 text-left transition-colors duration-150 ${
                    isActive
                      ? 'border-[#1A3150] bg-[#1A3150] text-[#FFFEFA]'
                      : 'border-[#e5dfd2] bg-[#FEFDFA] text-[#17263d] hover:border-[#C6B993] hover:bg-[#f5f2eb]'
                  }`}
                >
                  <span
                    className={`text-[10px] font-bold uppercase tracking-[0.14em] ${
                      isActive ? 'text-[#C6B993]' : 'text-[#8a7040]'
                    }`}
                  >
                    {event.date}
                  </span>
                  <span className="mt-1.5 line-clamp-2 font-display text-xs font-bold leading-snug">
                    {event.title}
                  </span>
                </button>
              );
            })}
          </div>
        </RevealFromBottom>
      </div>

      {/* shadcn/ui Event Detail Modal */}
      <Dialog
        open={Boolean(selectedEvent)}
        onOpenChange={(open) => {
          if (!open) setSelectedEvent(null);
        }}
      >
        <DialogContent className="max-w-xl rounded-xl border border-[#DBCEAC] bg-[#FFFEFA] p-0 text-[#17263d] sm:max-w-xl">
          {selectedEvent && (
            <>
              <div className="overflow-hidden rounded-t-xl bg-[#162842]">
                <ResilientImage
                  src={selectedEvent.imageSrc}
                  alt={selectedEvent.imageAlt}
                  fallbackTitle={selectedEvent.title}
                  className="aspect-[16/9] w-full object-cover object-center"
                />
              </div>

              <div className="p-6">
                <DialogHeader>
                  <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-[#B66D50]">
                    {selectedEvent.category} · Educational Demo Event
                  </p>
                  <DialogTitle className="mt-1 font-display text-2xl font-extrabold tracking-[-0.025em] text-[#1A3150]">
                    {selectedEvent.title}
                  </DialogTitle>
                  <DialogDescription className="mt-3 text-sm leading-[1.75] text-[#4a5a6f]">
                    {selectedEvent.fullDescription}
                  </DialogDescription>
                </DialogHeader>

                <div className="mt-5 space-y-3 rounded-lg border border-[#e5dfd2] bg-[#f5f2eb] p-4 text-sm text-[#1A3150]">
                  <div className="flex items-center gap-2.5">
                    <CalendarDays className="h-4 w-4 shrink-0 text-[#B66D50]" aria-hidden="true" />
                    <span className="font-semibold">{selectedEvent.date}</span>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <Clock3 className="h-4 w-4 shrink-0 text-[#B66D50]" aria-hidden="true" />
                    <span>{selectedEvent.time}</span>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-[#B66D50]" aria-hidden="true" />
                    <span>{selectedEvent.location}</span>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <Accessibility className="mt-0.5 h-4 w-4 shrink-0 text-[#B66D50]" aria-hidden="true" />
                    <span>{selectedEvent.accessibilityNote}</span>
                  </div>
                </div>

                <DialogFooter className="mt-6 -mx-6 -mb-6 rounded-b-xl border-t border-[#e5dfd2] bg-[#f5f2eb] px-6 py-4">
                  <p className="mr-auto self-center text-xs text-[#627285]">
                    Illustrative event listing for educational demo purposes only.
                  </p>
                  <Button
                    type="button"
                    onClick={() => setSelectedEvent(null)}
                    className="h-10 cursor-pointer rounded bg-[#162842] px-5 text-xs font-bold text-[#FFFEFA] hover:bg-[#213C5C]"
                  >
                    Close Details
                  </Button>
                </DialogFooter>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
}
