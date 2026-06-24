import { useState } from 'react';
import { Loader2 } from 'lucide-react';
import type { ContactTranslations } from '../content/contactTranslations';

const COLOR_FROM  = '#a855f7';
const COLOR_TO    = '#7c3aed';
const CAL_URL     = 'https://cal.com/gixlabs';
const TOTAL_STEPS = 3;

interface FormValues {
  firstName:  string;
  lastName:   string;
  email:      string;
  hasWebsite: string;
  websiteUrl: string;
  service:    string;
  budget:     string;
  message:    string;
}

type FormErrors = Partial<Record<keyof FormValues, string>>;

interface Props { t: ContactTranslations['form']; lang: 'es' | 'en' }

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export default function MultiStepForm({ t, lang }: Props) {
  const [step, setStep]               = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState('');

  const [values, setValues] = useState<FormValues>({
    firstName: '', lastName: '', email: '',
    hasWebsite: '', websiteUrl: '',
    service: '', budget: '', message: '',
  });
  const [errors, setErrors] = useState<FormErrors>({});

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) {
    const { name, value } = e.target;
    setValues(prev => ({ ...prev, [name]: value }));
    if (errors[name as keyof FormValues]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  }

  function validate1(): FormErrors {
    const errs: FormErrors = {};
    if (!values.firstName.trim()) errs.firstName = t.errors.required;
    if (!values.lastName.trim())  errs.lastName  = t.errors.required;
    if (!values.email.trim())     errs.email     = t.errors.required;
    else if (!EMAIL_RE.test(values.email)) errs.email = t.errors.emailInvalid;
    return errs;
  }

  function validate2(): FormErrors {
    const errs: FormErrors = {};
    if (!values.service) errs.service = t.errors.required;
    if (!values.budget)  errs.budget  = t.errors.required;
    return errs;
  }

  function validate3(): FormErrors {
    const errs: FormErrors = {};
    if (!values.message.trim())        errs.message = t.errors.required;
    else if (values.message.trim().length < 20) errs.message = t.errors.messageTooShort;
    return errs;
  }

  function goNext() {
    const errs = step === 1 ? validate1() : step === 2 ? validate2() : validate3();
    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      return;
    }
    setErrors({});
    setStep(s => s + 1);
  }

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    const errs = validate3();
    if (Object.keys(errs).length > 0) { setErrors(errs); return; }

    setIsSubmitting(true);
    setSubmitError('');
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          nombre:      values.firstName,
          apellido:    values.lastName,
          email:       values.email,
          tieneWeb:    values.hasWebsite,
          urlWeb:      values.websiteUrl,
          servicio:    values.service,
          presupuesto: values.budget,
          mensaje:     values.message,
          lang,
        }),
      });
      if (!res.ok) throw new Error('api_error');
      const dest = lang === 'es'
        ? `/gracias/?nombre=${encodeURIComponent(values.firstName)}`
        : `/en/thank-you/?name=${encodeURIComponent(values.firstName)}`;
      window.location.href = dest;
    } catch {
      setSubmitError(t.errorGeneral);
    } finally {
      setIsSubmitting(false);
    }
  }

  const stepLabelText = t.stepLabel
    .replace('{current}', String(step))
    .replace('{total}',   String(TOTAL_STEPS));

  // ── Form ────────────────────────────────────────────────────────────────────
  const inputBase = "w-full px-4 py-3 rounded-xl border text-sm outline-none transition-all duration-200";
  const inputSt   = (field: keyof FormValues) => ({
    background:  'var(--bg)',
    borderColor: errors[field] ? '#f43f5e' : 'var(--border)',
    color:       'var(--text)',
  });
  const labelCls = "block text-sm font-medium mb-1.5";
  const errCls   = "mt-1 text-xs text-red-400";

  return (
    <form onSubmit={onSubmit} noValidate>
      {/* Progress */}
      <div className="mb-6">
        <div className="flex justify-between items-center mb-2">
          <span className="text-xs font-medium" style={{ color: COLOR_FROM }}>{stepLabelText}</span>
          <span className="text-xs" style={{ color: 'var(--text-muted)' }}>
            {Math.round((step / TOTAL_STEPS) * 100)}%
          </span>
        </div>
        <div className="h-1.5 rounded-full overflow-hidden" style={{ background: 'var(--border)' }}>
          <div
            className="h-full rounded-full transition-all duration-500"
            style={{
              width:      `${(step / TOTAL_STEPS) * 100}%`,
              background: `linear-gradient(to right, ${COLOR_FROM}, ${COLOR_TO})`,
            }}
          />
        </div>
      </div>

      {/* Step title */}
      <h3 className="text-lg font-bold mb-5" style={{ color: 'var(--text)' }}>
        {step === 1 ? t.step1.title : step === 2 ? t.step2.title : t.step3.title}
      </h3>

      {/* ── Step 1 ── */}
      {step === 1 && (
        <div className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className={labelCls} style={{ color: 'var(--text)' }}>{t.step1.firstName} *</label>
              <input
                name="firstName" value={values.firstName} onChange={handleChange}
                placeholder={t.step1.firstNamePh}
                className={inputBase} style={inputSt('firstName')}
              />
              {errors.firstName && <p className={errCls}>{errors.firstName}</p>}
            </div>
            <div>
              <label className={labelCls} style={{ color: 'var(--text)' }}>{t.step1.lastName} *</label>
              <input
                name="lastName" value={values.lastName} onChange={handleChange}
                placeholder={t.step1.lastNamePh}
                className={inputBase} style={inputSt('lastName')}
              />
              {errors.lastName && <p className={errCls}>{errors.lastName}</p>}
            </div>
          </div>
          <div>
            <label className={labelCls} style={{ color: 'var(--text)' }}>{t.step1.email} *</label>
            <input
              name="email" type="email" value={values.email} onChange={handleChange}
              placeholder={t.step1.emailPh}
              className={inputBase} style={inputSt('email')}
            />
            {errors.email && <p className={errCls}>{errors.email}</p>}
          </div>
        </div>
      )}

      {/* ── Step 2 ── */}
      {step === 2 && (
        <div className="space-y-5">
          {/* Has website */}
          <div>
            <label className={labelCls} style={{ color: 'var(--text)' }}>{t.step2.hasWebsite}</label>
            <div className="flex gap-3">
              {(['si', 'no'] as const).map(val => {
                const isChecked = values.hasWebsite === val;
                const label     = val === 'si' ? t.step2.yes : t.step2.no;
                return (
                  <label
                    key={val}
                    className="flex-1 flex items-center justify-center gap-2 py-3 rounded-xl border cursor-pointer transition-all duration-200"
                    style={{
                      background:  isChecked ? `${COLOR_FROM}18` : 'var(--bg)',
                      borderColor: isChecked ? COLOR_FROM : 'var(--border)',
                      color:       isChecked ? COLOR_FROM : 'var(--text-muted)',
                    }}
                  >
                    <input
                      type="radio" name="hasWebsite" value={val}
                      checked={isChecked} onChange={handleChange} className="sr-only"
                    />
                    <span className="text-sm font-medium">{label}</span>
                  </label>
                );
              })}
            </div>
          </div>

          {/* URL conditional */}
          {values.hasWebsite === 'si' && (
            <div>
              <label className={labelCls} style={{ color: 'var(--text)' }}>{t.step2.websiteUrl}</label>
              <input
                name="websiteUrl" value={values.websiteUrl} onChange={handleChange}
                placeholder={t.step2.websiteUrlPh}
                className={inputBase} style={inputSt('websiteUrl')}
              />
            </div>
          )}

          {/* Service */}
          <div>
            <label className={labelCls} style={{ color: 'var(--text)' }}>{t.step2.service} *</label>
            <select
              name="service" value={values.service} onChange={handleChange}
              className={inputBase} style={inputSt('service')}
            >
              {t.step2.services.map((s, i) => (
                <option key={i} value={i === 0 ? '' : s} disabled={i === 0}>{s}</option>
              ))}
            </select>
            {errors.service && <p className={errCls}>{errors.service}</p>}
          </div>

          {/* Budget */}
          <div>
            <label className={labelCls} style={{ color: 'var(--text)' }}>{t.step2.budget} *</label>
            <select
              name="budget" value={values.budget} onChange={handleChange}
              className={inputBase} style={inputSt('budget')}
            >
              {t.step2.budgets.map((b, i) => (
                <option key={i} value={i === 0 ? '' : b} disabled={i === 0}>{b}</option>
              ))}
            </select>
            {errors.budget && <p className={errCls}>{errors.budget}</p>}
          </div>
        </div>
      )}

      {/* ── Step 3 ── */}
      {step === 3 && (
        <div className="space-y-4">
          <div>
            <label className={labelCls} style={{ color: 'var(--text)' }}>{t.step3.message} *</label>
            <textarea
              name="message" value={values.message} onChange={handleChange}
              rows={5} placeholder={t.step3.messagePh}
              className={inputBase} style={{ ...inputSt('message'), resize: 'vertical' }}
            />
            {errors.message && <p className={errCls}>{errors.message}</p>}
          </div>
          <p className="text-xs" style={{ color: 'var(--text-muted)' }}>{t.step3.privacy}</p>
        </div>
      )}

      {submitError && (
        <p className="mt-4 text-sm text-red-400 text-center">{submitError}</p>
      )}

      {/* Navigation */}
      <div className={`mt-6 flex gap-3 ${step > 1 ? 'justify-between' : 'justify-end'}`}>
        {step > 1 && (
          <button
            type="button"
            onClick={() => { setErrors({}); setStep(s => s - 1); }}
            className="px-5 py-3 rounded-xl text-sm font-medium border transition-colors duration-200"
            style={{ borderColor: 'var(--border)', color: 'var(--text-muted)' }}
          >
            {t.back}
          </button>
        )}

        {step < TOTAL_STEPS ? (
          <button
            type="button"
            onClick={goNext}
            className="px-6 py-3 rounded-xl text-sm font-semibold text-white transition-all duration-200 hover:-translate-y-0.5"
            style={{ background: `linear-gradient(to right, ${COLOR_FROM}, ${COLOR_TO})` }}
          >
            {t.next}
          </button>
        ) : (
          <button
            type="submit"
            disabled={isSubmitting}
            className="flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold text-white transition-all duration-200 disabled:opacity-60"
            style={{ background: `linear-gradient(to right, ${COLOR_FROM}, ${COLOR_TO})` }}
          >
            {isSubmitting && <Loader2 size={16} className="animate-spin" />}
            {isSubmitting ? t.sending : t.submit}
          </button>
        )}
      </div>
    </form>
  );
}
