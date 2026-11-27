import { useState } from 'react';
import {
  AlertCircle,
  CheckCircle2,
  RotateCcw,
  ShieldCheck,
  Sparkles,
} from 'lucide-react';
import { AnimatePresence, motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Checkbox } from '@/components/ui/checkbox';
// import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { HOW_TO_ENTER_STEPS } from '../../data/christmasDemoData';
import { RevealFromBottom, StaggerGroup, StaggerItem } from '@/components/ScrollReveal';
import { Input } from '../ui/input';

interface SimulatedFormState {
  fullName: string;
  email: string;
  country: string;
  phone: string;
  isAdult: boolean;
  oneEntryConfirmed: boolean;
  termsAccepted: boolean;
}

const INITIAL_FORM: SimulatedFormState = {
  fullName: '',
  email: '',
  country: '',
  phone: '',
  isAdult: false,
  oneEntryConfirmed: false,
  termsAccepted: false,
};

const ELIGIBLE_REGIONS = [
  'United Kingdom (Demo)',
  'England (Demo)',
  'Scotland (Demo)',
  'Wales (Demo)',
  'Northern Ireland (Demo)',
];

export function HowToEnterAndFormSection() {
  const [form, setForm] = useState<SimulatedFormState>(INITIAL_FORM);
  const [errorMsg, setErrorMsg] = useState<string>('');
  const [receiptCode, setReceiptCode] = useState<string | null>(null);

  const fillSampleEntry = () => {
    setErrorMsg('');
    setReceiptCode(null);
    setForm({
      fullName: 'Alex Taylor (Demo)',
      email: 'alex.demo@example.com',
      country: 'United Kingdom (Demo)',
      phone: '07700 900123 (Sample)',
      isAdult: true,
      oneEntryConfirmed: true,
      termsAccepted: true,
    });
  };

  const resetForm = () => {
    setForm(INITIAL_FORM);
    setErrorMsg('');
    setReceiptCode(null);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setErrorMsg('');

    if (form.fullName.trim().length < 2) {
      setErrorMsg('Please enter a sample name (at least 2 characters) to test the demo form.');
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(form.email.trim())) {
      setErrorMsg('Please enter a valid sample email format (e.g., alex.demo@example.com).');
      return;
    }

    if (!form.country) {
      setErrorMsg('Please select an illustrative country or UK region.');
      return;
    }

    if (!form.isAdult || !form.oneEntryConfirmed || !form.termsAccepted) {
      setErrorMsg('Please tick all three simulated confirmation checkboxes before submitting.');
      return;
    }

    const randomDigits = Math.floor(1000 + Math.random() * 9000);
    setReceiptCode(`DEMO-2026-${randomDigits}`);
  };

  return (
    <section
      id="enter"
      aria-labelledby="how-to-enter-heading"
      className="border-y border-[#e5dfd2] bg-[#f5f2eb] py-16 sm:py-22 lg:py-26"
    >
      <div className="mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-12 lg:gap-14">
          {/* Left: How to Enter 5-step workflow */}
          <div className="lg:col-span-5">
            <RevealFromBottom distance={32}>
              <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#B66D50]">
                How to Participate · Educational Demo
              </p>
              <h2
                id="how-to-enter-heading"
                className="text-balance mt-3 font-display text-[clamp(1.85rem,3vw,2.65rem)] font-extrabold leading-[1.12] tracking-[-0.035em] text-[#1A3150]"
              >
                Five transparent steps,{' '}
                <span className="text-[#8a7040]">zero fees at every stage.</span>
              </h2>
              <p className="mt-4 text-[15px] leading-[1.8] text-[#4a5a6f]">
                This demonstration models a clear, honest entry experience. Participation requires no
                purchase, donation, or fee of any kind.
              </p>
            </RevealFromBottom>

            <StaggerGroup className="mt-8 space-y-4">
              {HOW_TO_ENTER_STEPS.map((item) => (
                <StaggerItem key={item.step}>
                  <div className="flex items-start gap-4 rounded-lg border border-[#e5dfd2] bg-[#FEFDFA] p-4">
                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-md bg-[#1A3150] font-display text-xs font-extrabold tabular-nums text-[#C6B993]">
                      {item.step}
                    </span>
                    <div>
                      <h3 className="font-display text-base font-bold text-[#1A3150]">
                        {item.title}
                      </h3>
                      <p className="mt-1 text-sm leading-[1.65] text-[#4a5a6f]">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </StaggerItem>
              ))}
            </StaggerGroup>

            <RevealFromBottom distance={24} delay={0.14}>
              <div className="mt-6 flex items-start gap-3 rounded-lg border border-[#C6B993] bg-[#1A3150] p-4 text-xs leading-relaxed text-[#FFFEFA]">
                <ShieldCheck className="mt-0.5 h-4 w-4 shrink-0 text-[#C6B993]" aria-hidden="true" />
                <p>
                  <strong className="text-[#C6B993]">Fee-Free Pledge:</strong> There are no entry,
                  claim, delivery, or processing fees. Never share banking logins or security codes.
                </p>
              </div>
            </RevealFromBottom>
          </div>

          {/* Right: Simulated Entry Form */}
          <RevealFromBottom distance={40} delay={0.08} className="lg:col-span-7">
            <Card className="rounded-xl border border-[#DBCEAC] bg-[#FEFDFA] p-6 text-[#17263d] shadow-md ring-0 sm:p-8">
              <CardHeader className="border-b border-[#e5dfd2] p-0 pb-5">
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <div>
                    <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-[#B66D50]">
                      Simulated Entry Form · Demo Only
                    </p>
                    <CardTitle className="mt-1 font-display text-2xl font-extrabold tracking-[-0.025em] text-[#1A3150]">
                      Test the Entry Experience
                    </CardTitle>
                  </div>

                  <Button
                    type="button"
                    variant="outline"
                    onClick={fillSampleEntry}
                    className="h-9 cursor-pointer gap-1.5 rounded border-[#C6B993] bg-[#f5f2eb] px-3.5 text-xs font-bold text-[#1A3150] hover:bg-[#DBCEAC]/50"
                  >
                    <Sparkles className="h-3.5 w-3.5 text-[#B66D50]" aria-hidden="true" />
                    <span>Fill Sample Demo Entry</span>
                  </Button>
                </div>

                <div className="mt-4 flex items-start gap-2.5 rounded-md border border-[#e5dfd2] bg-[#f5f2eb] p-3 text-xs leading-relaxed text-[#4a5a6f]">
                  <AlertCircle
                    className="mt-0.5 h-4 w-4 shrink-0 text-[#B66D50]"
                    aria-hidden="true"
                  />
                  <span>
                    <strong className="text-[#1A3150]">Do not enter real personal details.</strong>{' '}
                    This simulated form runs locally in your browser memory—nothing is saved,
                    transmitted, or billed.
                  </span>
                </div>
              </CardHeader>

              <CardContent className="mt-6 p-0">
                <AnimatePresence mode="wait">
                  {receiptCode ? (
                    <motion.div
                      key="demo-receipt"
                      initial={{ opacity: 0, y: 16 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -12 }}
                      transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
                      className="rounded-lg border border-[#C6B993] bg-[#f5f2eb] p-6"
                    >
                      <div className="flex items-start gap-3">
                        <CheckCircle2
                          className="mt-0.5 h-6 w-6 shrink-0 text-[#B66D50]"
                          aria-hidden="true"
                        />
                        <div>
                          <p className="text-xs font-bold uppercase tracking-[0.16em] text-[#8a7040]">
                            Educational Simulation Complete
                          </p>
                          <h3 className="mt-1 font-display text-xl font-extrabold text-[#1A3150]">
                            Sample Entry Receipt: {receiptCode}
                          </h3>
                          <p className="mt-2 text-sm leading-relaxed text-[#4a5a6f]">
                            Simulated entrant <strong className="text-[#1A3150]">{form.fullName}</strong>{' '}
                            ({form.country}) passed client-side validation. No data was stored or
                            sent to any server, and no fees apply.
                          </p>
                          <Button
                            type="button"
                            onClick={resetForm}
                            className="mt-5 h-10 cursor-pointer gap-2 rounded bg-[#162842] px-5 text-xs font-bold text-[#FFFEFA] hover:bg-[#213C5C]"
                          >
                            <RotateCcw className="h-3.5 w-3.5 text-[#C6B993]" aria-hidden="true" />
                            <span>Reset Demo Form</span>
                          </Button>
                        </div>
                      </div>
                    </motion.div>
                  ) : (
                    <motion.form
                      key="demo-form"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      onSubmit={handleSubmit}
                      noValidate
                      className="space-y-5"
                    >
                      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                        <div>
                          <Label
                            htmlFor="demo-fullname"
                            className="text-xs font-bold uppercase tracking-[0.08em] text-[#1A3150]"
                          >
                            Sample Full Name <span className="text-[#B66D50]">*</span>
                          </Label>
                          <Input
                            id="demo-fullname"
                            type="text"
                            value={form.fullName}
                            onChange={(e) => setForm((p) => ({ ...p, fullName: e.target.value }))}
                            placeholder="e.g., Alex Taylor (Demo)"
                            className="mt-2 h-11 rounded border-[#d6cfc0] bg-[#FFFEFA] px-3.5 text-sm text-[#17263d]"
                          />
                        </div>

                        <div>
                          <Label
                            htmlFor="demo-email"
                            className="text-xs font-bold uppercase tracking-[0.08em] text-[#1A3150]"
                          >
                            Sample Email Address <span className="text-[#B66D50]">*</span>
                          </Label>
                          <Input
                            id="demo-email"
                            type="email"
                            value={form.email}
                            onChange={(e) => setForm((p) => ({ ...p, email: e.target.value }))}
                            placeholder="alex.demo@example.com"
                            className="mt-2 h-11 rounded border-[#d6cfc0] bg-[#FFFEFA] px-3.5 text-sm text-[#17263d]"
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                        <div>
                          <Label
                            htmlFor="demo-country"
                            className="text-xs font-bold uppercase tracking-[0.08em] text-[#1A3150]"
                          >
                            Country / Region <span className="text-[#B66D50]">*</span>
                          </Label>
                          <Select
                            value={form.country}
                            onValueChange={(val) => setForm((p) => ({ ...p, country: val ?? '' }))}
                          >
                            <SelectTrigger
                              id="demo-country"
                              className="mt-2 h-11 w-full rounded border-[#d6cfc0] bg-[#FFFEFA] px-3.5 text-sm text-[#17263d]"
                            >
                              <SelectValue placeholder="Select demo region" />
                            </SelectTrigger>
                            <SelectContent className="rounded-lg border-[#e5dfd2] bg-[#FFFEFA] text-[#17263d]">
                              {ELIGIBLE_REGIONS.map((region) => (
                                <SelectItem key={region} value={region}>
                                  {region}
                                </SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                        </div>

                        <div>
                          <Label
                            htmlFor="demo-phone"
                            className="text-xs font-bold uppercase tracking-[0.08em] text-[#1A3150]"
                          >
                            Sample Phone (Optional)
                          </Label>
                          <Input
                            id="demo-phone"
                            type="tel"
                            value={form.phone}
                            onChange={(e) => setForm((p) => ({ ...p, phone: e.target.value }))}
                            placeholder="07700 900123 (Optional)"
                            className="mt-2 h-11 rounded border-[#d6cfc0] bg-[#FFFEFA] px-3.5 text-sm text-[#17263d]"
                          />
                        </div>
                      </div>

                      <div className="space-y-3 rounded-lg border border-[#e5dfd2] bg-[#f5f2eb]/70 p-4">
                        <div className="flex items-start gap-3">
                          <Checkbox
                            id="demo-age"
                            checked={form.isAdult}
                            onCheckedChange={(checked) =>
                              setForm((p) => ({ ...p, isAdult: checked === true }))
                            }
                            className="mt-0.5 border-[#1A3150]"
                          />
                          <Label
                            htmlFor="demo-age"
                            className="cursor-pointer text-xs leading-relaxed font-medium text-[#17263d]"
                          >
                            I confirm this simulated entrant is 18 years or older.
                          </Label>
                        </div>

                        <div className="flex items-start gap-3">
                          <Checkbox
                            id="demo-one-entry"
                            checked={form.oneEntryConfirmed}
                            onCheckedChange={(checked) =>
                              setForm((p) => ({ ...p, oneEntryConfirmed: checked === true }))
                            }
                            className="mt-0.5 border-[#1A3150]"
                          />
                          <Label
                            htmlFor="demo-one-entry"
                            className="cursor-pointer text-xs leading-relaxed font-medium text-[#17263d]"
                          >
                            I understand this educational demo illustrates a one-entry-per-person
                            rule.
                          </Label>
                        </div>

                        <div className="flex items-start gap-3">
                          <Checkbox
                            id="demo-terms"
                            checked={form.termsAccepted}
                            onCheckedChange={(checked) =>
                              setForm((p) => ({ ...p, termsAccepted: checked === true }))
                            }
                            className="mt-0.5 border-[#1A3150]"
                          />
                          <Label
                            htmlFor="demo-terms"
                            className="cursor-pointer text-xs leading-relaxed font-medium text-[#17263d]"
                          >
                            I acknowledge this is a non-submitting educational simulation with no
                            real prizes, fees, or data storage.
                          </Label>
                        </div>
                      </div>

                      {errorMsg && (
                        <div
                          role="alert"
                          className="rounded border border-[#B66D50] bg-[#B66D50]/10 p-3.5 text-xs font-semibold text-[#7c3f28]"
                        >
                          {errorMsg}
                        </div>
                      )}

                      <div className="flex flex-wrap items-center justify-between gap-4 pt-1">
                        <Button
                          type="submit"
                          className="h-12 cursor-pointer rounded bg-[#162842] px-7 text-sm font-bold text-[#FFFEFA] hover:bg-[#213C5C]"
                        >
                          Simulate Demo Submission
                        </Button>
                        <span className="text-xs text-[#627285]">
                          Client-side simulation only · Zero fees
                        </span>
                      </div>
                    </motion.form>
                  )}
                </AnimatePresence>
              </CardContent>
            </Card>
          </RevealFromBottom>
        </div>
      </div>
    </section>
  );
}
