import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { CheckCircle, ExternalLink, Loader2 } from 'lucide-react';
import type { ContactTranslations } from '../content/contactTranslations';

const COLOR_FROM = '#a855f7';
const COLOR_TO   = '#7c3aed';
const CAL_URL    = 'https://cal.com/gixlabs';
const TOTAL_STEPS = 3;

interface FormValues {
  firstName:  string;
  lastName:   string;
  email:      string;
  hasWebsite: 'si' | 'no' | '';
  websiteUrl: string;
  service:    string;
  budget:     string;
  message:    string;
}

interface Props { t: ContactTranslations['form']; lang: 'es' | 'en' }

export default function MultiStepForm({ t, lang }: Props) {
  const [step, setStep]           = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [submitError, setSubmitError] = useState('');

  const {
    register,
    handleSubmit,
    trigger,
    watch,
    getValues,
    formState: { errors },
  } = useForm<FormValues>({
    defaultValues: {
      firstName: '', lastName: '', email: '',
      hasWebsite: '', websiteUrl: '',
      service: '', budget: '', message: '',
    },
  });

  const hasWebsite = watch('hasWebsite');
  const firstName  = watch('firstName');

  const stepFields: Record<number, (keyof FormValues)[]> = {
    1: ['firstName', 'lastName', 'email'],
    2: ['service', 'budget'],
    3: ['message'],
  };

  async function goNext() {
    const valid = await trigger(stepFields[step]);
    if (valid) setStep(s => s + 1);
  }

  async function onSubmit(data: FormValues) {
    setIsSubmitting(true);
    setSubmitError('');
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          nombre:      data.firstName,
          apellido:    data.lastName,
          email:       data.email,
          tieneWeb:    data.hasWebsite,
          urlWeb:      data.websiteUrl,
          servicio:    data.service,
          presupuesto: data.budget,
          mensaje:     data.message,
          lang,
        }),
      });
      if (!res.ok) throw new Error('api_error');
      setIsSuccess(true);
    } catch {
      setSubmitError(t.errorGeneral);
    } finally {
      setIsSubmitting(false);
    }
  }

  const stepLabelText = t.stepLabel
    .replace('{current}', String(step))
    .replace('{total}', String(TOTAL_STEPS));

  // ── Success screen ──────────────────────────────────────────────────────────
  if (isSuccess) {
    return (
      <div className="text-center py-8 px-6 space-y-6">
        {/* Animated check */}
        <div
          className="w-20 h-20 rounded-full flex items-center justify-center mx-auto"
          style={{ background: `linear-gradient(135deg, ${COLOR_FROM}22, ${COLOR_TO}22)`, border: `2px solid ${COLOR_FROM}55` }}
        >
          <CheckCircle size={40} style={{ color: COLOR_FROM }} className="animate-[check_0.4s_ease-out]" />
        </div>
        <h3 className="text-2xl font-bold" style={{ color: 'var(--text)' }}>
          {t.success.title.replace('{name}', firstName)}
        </h3>
        <p className="text-base" style={{ color: 'var(--text-muted)' }}>{t.success.body}</p>

        {/* Separator */}
        <div className="flex items-center gap-3 py-2">
          <div className="flex-1 h-px" style={{ background: 'var(--border)' }} />
          <span className="text-sm" style={{ color: 'var(--text-muted)' }}>{t.success.separator}</span>
          <div className="flex-1 h-px" style={{ background: 'var(--border)' }} />
        </div>

        {/* Cal.com CTA */}
        <a
          href={CAL_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl font-semibold text-sm text-white transition-all duration-200 hover:-translate-y-0.5"
          style={{
            background: `linear-gradient(to right, ${COLOR_FROM}, ${COLOR_TO})`,
            boxShadow:  `0 8px 25px ${COLOR_FROM}44`,
          }}
        >
          {t.success.calCta}
          <ExternalLink size={15} />
        </a>
        <p className="text-xs" style={{ color: 'var(--text-muted)' }}>{t.success.calNote}</p>
      </div>
    );
  }

  // ── Form ────────────────────────────────────────────────────────────────────
  const inputClass = "w-full px-4 py-3 rounded-xl border text-sm outline-none transition-all duration-200";
  const inputStyle = (hasErr: boolean) => ({
    background:  'var(--bg)',
    borderColor: hasErr ? '#f43f5e' : 'var(--border)',
    color:       'var(--text)',
  });
  const focusStyle = {
    '--tw-ring-color': COLOR_FROM,
  } as React.CSSProperties;
  const labelClass = "block text-sm font-medium mb-1.5";
  const errClass   = "mt-1 text-xs text-red-400";

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate>
      {/* Progress bar */}
      <div className="mb-6">
        <div className="flex justify-between items-center mb-2">
          <span className="text-xs font-medium" style={{ color: COLOR_FROM }}>{stepLabelText}</span>
          <span className="text-xs" style={{ color: 'var(--text-muted)' }}>{Math.round((step / TOTAL_STEPS) * 100)}%</span>
        </div>
        <div className="h-1.5 rounded-full overflow-hidden" style={{ background: 'var(--border)' }}>
          <div
            className="h-full rounded-full transition-all duration-500"
            style={{ width: `${(step / TOTAL_STEPS) * 100}%`, background: `linear-gradient(to right, ${COLOR_FROM}, ${COLOR_TO})` }}
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
              <label className={labelClass} style={{ color: 'var(--text)' }}>{t.step1.firstName} *</label>
              <input
                {...register('firstName', { required: t.errors.required })}
                placeholder={t.step1.firstNamePh}
                className={inputClass}
                style={inputStyle(!!errors.firstName)}
              />
              {errors.firstName && <p className={errClass}>{errors.firstName.message}</p>}
            </div>
            <div>
              <label className={labelClass} style={{ color: 'var(--text)' }}>{t.step1.lastName} *</label>
              <input
                {...register('lastName', { required: t.errors.required })}
                placeholder={t.step1.lastNamePh}
                className={inputClass}
                style={inputStyle(!!errors.lastName)}
              />
              {errors.lastName && <p className={errClass}>{errors.lastName.message}</p>}
            </div>
          </div>
          <div>
            <label className={labelClass} style={{ color: 'var(--text)' }}>{t.step1.email} *</label>
            <input
              {...register('email', {
                required: t.errors.required,
                pattern: { value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, message: t.errors.emailInvalid },
              })}
              type="email"
              placeholder={t.step1.emailPh}
              className={inputClass}
              style={inputStyle(!!errors.email)}
            />
            {errors.email && <p className={errClass}>{errors.email.message}</p>}
          </div>
        </div>
      )}

      {/* ── Step 2 ── */}
      {step === 2 && (
        <div className="space-y-5">
          {/* Has website */}
          <div>
            <label className={labelClass} style={{ color: 'var(--text)' }}>{t.step2.hasWebsite}</label>
            <div className="flex gap-3">
              {(['si', 'no'] as const).map(val => {
                const label = val === 'si' ? t.step2.yes : t.step2.no;
                const checked = hasWebsite === val;
                return (
                  <label
                    key={val}
                    className="flex-1 flex items-center justify-center gap-2 py-3 rounded-xl border cursor-pointer transition-all duration-200"
                    style={{
                      background:  checked ? `${COLOR_FROM}18` : 'var(--bg)',
                      borderColor: checked ? COLOR_FROM : 'var(--border)',
                      color:       checked ? COLOR_FROM : 'var(--text-muted)',
                    }}
                  >
                    <input {...register('hasWebsite')} type="radio" value={val} className="sr-only" />
                    <span className="text-sm font-medium">{label}</span>
                  </label>
                );
              })}
            </div>
          </div>

          {/* URL (conditional) */}
          {hasWebsite === 'si' && (
            <div>
              <label className={labelClass} style={{ color: 'var(--text)' }}>{t.step2.websiteUrl}</label>
              <input
                {...register('websiteUrl')}
                placeholder={t.step2.websiteUrlPh}
                className={inputClass}
                style={inputStyle(false)}
              />
            </div>
          )}

          {/* Service */}
          <div>
            <label className={labelClass} style={{ color: 'var(--text)' }}>{t.step2.service} *</label>
            <select
              {...register('service', { required: t.errors.required, validate: v => v !== t.step2.services[0] || t.errors.required })}
              className={inputClass}
              style={{ ...inputStyle(!!errors.service), paddingRight: '2.5rem' }}
            >
              {t.step2.services.map((s, i) => (
                <option key={i} value={i === 0 ? '' : s} disabled={i === 0}>{s}</option>
              ))}
            </select>
            {errors.service && <p className={errClass}>{errors.service.message}</p>}
          </div>

          {/* Budget */}
          <div>
            <label className={labelClass} style={{ color: 'var(--text)' }}>{t.step2.budget} *</label>
            <select
              {...register('budget', { required: t.errors.required, validate: v => v !== '' || t.errors.required })}
              className={inputClass}
              style={{ ...inputStyle(!!errors.budget), paddingRight: '2.5rem' }}
            >
              {t.step2.budgets.map((b, i) => (
                <option key={i} value={i === 0 ? '' : b} disabled={i === 0}>{b}</option>
              ))}
            </select>
            {errors.budget && <p className={errClass}>{errors.budget.message}</p>}
          </div>
        </div>
      )}

      {/* ── Step 3 ── */}
      {step === 3 && (
        <div className="space-y-4">
          <div>
            <label className={labelClass} style={{ color: 'var(--text)' }}>{t.step3.message} *</label>
            <textarea
              {...register('message', {
                required: t.errors.required,
                minLength: { value: 20, message: t.errors.messageTooShort },
              })}
              rows={5}
              placeholder={t.step3.messagePh}
              className={inputClass}
              style={{ ...inputStyle(!!errors.message), resize: 'vertical' }}
            />
            {errors.message && <p className={errClass}>{errors.message.message}</p>}
          </div>
          <p className="text-xs" style={{ color: 'var(--text-muted)' }}>{t.step3.privacy}</p>
        </div>
      )}

      {/* Error general */}
      {submitError && (
        <p className="mt-4 text-sm text-red-400 text-center">{submitError}</p>
      )}

      {/* Navigation */}
      <div className={`mt-6 flex gap-3 ${step > 1 ? 'justify-between' : 'justify-end'}`}>
        {step > 1 && (
          <button
            type="button"
            onClick={() => setStep(s => s - 1)}
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
