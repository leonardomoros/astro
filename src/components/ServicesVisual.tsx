import { useEffect, useRef } from 'react';
import { Monitor, TrendingUp, Layers, Mail, BarChart3, Zap, Paintbrush } from 'lucide-react';

const ORBIT_RADIUS = 165;
const HALF_ICON    = 16; // half of 32px rendered icon

const ICONS_CONFIG = [
  { Icon: Monitor,    color: '#a855f7', label: 'Web',   period: 12, startAngle: -90     },
  { Icon: TrendingUp, color: '#10b981', label: 'SEO',   period: 16, startAngle: -38.57  },
  { Icon: Mail,       color: '#f59e0b', label: 'Email', period: 10, startAngle: 12.86   },
  { Icon: BarChart3,  color: '#f43f5e', label: 'Ads',   period: 14, startAngle: 64.29   },
  { Icon: Zap,        color: '#06b6d4', label: 'Speed', period: 18, startAngle: 115.72  },
  { Icon: Layers,     color: '#3b82f6', label: 'Pages', period: 11, startAngle: 167.15  },
  { Icon: Paintbrush, color: '#ec4899', label: 'UX/UI', period: 15, startAngle: 218.58  },
];

const RINGS = [
  { size: 150, opacity: 0.30 },
  { size: 230, opacity: 0.20 },
  { size: 320, opacity: 0.12 },
  { size: 400, opacity: 0.06 },
  { size: 476, opacity: 0.03 },
];

export default function ServicesVisual() {
  const iconRefs = useRef<(HTMLDivElement | null)[]>(
    new Array(ICONS_CONFIG.length).fill(null)
  );

  useEffect(() => {
    let raf: number;
    const start = performance.now();

    const animate = (now: number) => {
      const elapsed = (now - start) / 1000;

      ICONS_CONFIG.forEach(({ period, startAngle }, i) => {
        const el = iconRefs.current[i];
        if (!el) return;
        const angle = startAngle + (elapsed / period) * 360;
        const rad   = (angle * Math.PI) / 180;
        el.style.transform = `translate(${Math.cos(rad) * ORBIT_RADIUS}px, ${Math.sin(rad) * ORBIT_RADIUS}px)`;
      });

      raf = requestAnimationFrame(animate);
    };

    raf = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(raf);
  }, []);

  return (
    <div
      className="relative mx-auto select-none"
      style={{ width: '460px', height: '460px' }}
    >

      {/* ── Concentric rings ── */}
      {RINGS.map(({ size, opacity }) => (
        <div
          key={size}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full pointer-events-none"
          style={{
            width:  `${size}px`,
            height: `${size}px`,
            border: `1px solid rgba(168, 85, 247, ${opacity})`,
          }}
        />
      ))}

      {/* ── Center hub — logo color elements, no container ── */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20">
        <svg viewBox="105 15 285 215" width="80" height="80" aria-hidden="true">
          <path fill="#7c5aa2" d="M220.86,146V99.53H115.71V146Z" />
          <path fill="#d62b84" d="M240.19,20.39l46.2,43.76V176l-46.2,46.19S239.38,20.39,240.19,20.39Z" />
          <polyline fill="#689cd3" points="386.65 155.24 324.48 219.36 272.21 219.36 360.71 127.28" />
        </svg>
      </div>

      {/* ── Orbiting icons — no card box, just icon + color glow ── */}
      {ICONS_CONFIG.map(({ Icon, color, label }, i) => (
        <div
          key={i}
          ref={(el) => { iconRefs.current[i] = el; }}
          className="absolute top-1/2 left-1/2 z-10 flex flex-col items-center gap-1.5"
          style={{
            marginLeft: `-${HALF_ICON}px`,
            marginTop:  `-${HALF_ICON}px`,
            willChange: 'transform',
          }}
        >
          <Icon size={32} strokeWidth={1.5} style={{ color }} />
          <span
            className="text-[9px] font-bold tracking-widest uppercase"
            style={{ color }}
          >
            {label}
          </span>
        </div>
      ))}

    </div>
  );
}
