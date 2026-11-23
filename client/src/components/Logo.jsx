import { useId } from 'react';

/**
 * ZESTORA logo mark: degree ring + "Z" stroke in the brand purple→blue
 * gradient, with a four-point sparkle. Geometry was traced from the master
 * artwork in public/brand/zestora-logo.jpg (1 viewBox unit = 1 source pixel).
 */
export function LogoMark({ size = 36, className = '', title }) {
  // useId keeps gradient ids unique when the mark renders more than once per page.
  const id = useId().replace(/[^a-zA-Z0-9_-]/g, '');
  const zGradient = `zlogo-z-${id}`;
  const sparkGradient = `zlogo-s-${id}`;
  const width = Math.round((size * 208) / 246);

  return (
    <svg
      className={className}
      width={width}
      height={size}
      viewBox="0 0 208 246"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      role={title ? 'img' : undefined}
      aria-hidden={title ? undefined : 'true'}
      focusable="false"
    >
      {title && <title>{title}</title>}
      <defs>
        <linearGradient id={zGradient} gradientUnits="userSpaceOnUse" x1="10" y1="10" x2="196" y2="212">
          <stop offset="0" stopColor="#A855F7" />
          <stop offset="0.55" stopColor="#6366F1" />
          <stop offset="1" stopColor="#3B82F6" />
        </linearGradient>
        <linearGradient id={sparkGradient} gradientUnits="userSpaceOnUse" x1="113" y1="151" x2="204" y2="242">
          <stop offset="0" stopColor="#4F8EF7" />
          <stop offset="1" stopColor="#38BDF8" />
        </linearGradient>
      </defs>
      {/* degree ring */}
      <circle cx="33" cy="33" r="23" stroke={`url(#${zGradient})`} strokeWidth="12" />
      {/* Z stroke */}
      <path
        d="M92 34H181L25 196H76"
        stroke={`url(#${zGradient})`}
        strokeWidth="36"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {/* sparkle */}
      <path
        d="M158.5 151Q168.5 186.5 204 196.5Q168.5 206.5 158.5 242Q148.5 206.5 113 196.5Q148.5 186.5 158.5 151Z"
        fill={`url(#${sparkGradient})`}
      />
    </svg>
  );
}

/** Logo mark + wordmark lockup. `tagline` adds "Artificial Intelligence" beneath the name. */
export default function Brand({ markSize = 34, tagline = false, className = '' }) {
  return (
    <span className={`brand ${className}`.trim()}>
      <LogoMark size={markSize} className="brand-mark" />
      <span className="brand-text">
        <span className="brand-name">ZESTORA</span>
        {tagline && <span className="brand-tagline">Artificial Intelligence</span>}
      </span>
    </span>
  );
}
