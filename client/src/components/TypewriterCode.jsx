import { useEffect, useMemo, useRef, useState } from 'react';

const CHAR_MS = 20;        // base delay per character
const JITTER_MS = 18;      // random extra delay so it feels hand-typed
const LINE_PAUSE_MS = 220; // pause at the end of each line
const START_DELAY_MS = 600;
const HOLD_MS = 8000;      // how long the finished code stays before looping
const FADE_MS = 350;

/**
 * Flatten lines of tokens into "steps": one per character, plus one per line
 * end. Each line/token records the step index at which it starts so render()
 * can slice the right prefix for any progress value.
 */
function buildPlan(lines) {
  let step = 0;
  const plan = lines.map((line) => {
    const start = step;
    const tokens = (line.tokens || []).map((tok) => {
      const t = { ...tok, start: step };
      step += tok.s.length;
      return t;
    });
    const end = step; // the newline step
    step += 1;
    return { tokens, start, end, pause: line.pause || 0 };
  });
  return { plan, total: step };
}

function renderLines(plan, count, cursor = false) {
  const visible = plan.filter((line) => line.start <= count);
  return visible.map((line, i) => (
    <span className="hero-code-line" key={i}>
      {line.tokens.length === 0 && ' '}
      {line.tokens.map((tok, j) => {
        const shown = Math.max(0, Math.min(tok.s.length, count - tok.start));
        if (shown === 0) return null;
        const text = tok.s.slice(0, shown);
        return tok.t ? <span className={tok.t} key={j}>{text}</span> : text;
      })}
      {/* cursor sits at the end of the line being typed, and stays on the last line once done */}
      {cursor && i === visible.length - 1 && <span className="hero-code-cursor" />}
    </span>
  ));
}

/**
 * Types out syntax-highlighted code line by line, top to bottom.
 * `lines`: [{ tokens: [{ t: 'keyword'|'string'|'func'|'comment'|undefined, s: 'text' }], pause?: ms }]
 */
export default function TypewriterCode({ lines, loop = true, className = '' }) {
  const rootRef = useRef(null);
  const { plan, total } = useMemo(() => buildPlan(lines), [lines]);

  const [reduced] = useState(
    () => typeof window !== 'undefined' && !!window.matchMedia?.('(prefers-reduced-motion: reduce)').matches
  );
  // Without IntersectionObserver support, start straight away.
  const [started, setStarted] = useState(() => typeof IntersectionObserver === 'undefined');
  const [count, setCount] = useState(0);
  const [fading, setFading] = useState(false);

  // Start when the card scrolls into view (it is above the fold on most screens).
  useEffect(() => {
    if (reduced || started) return undefined;
    const el = rootRef.current;
    if (!el) return undefined;
    let timer;
    const io = new IntersectionObserver((entries) => {
      if (entries.some((e) => e.isIntersecting)) {
        io.disconnect();
        timer = setTimeout(() => setStarted(true), START_DELAY_MS);
      }
    }, { threshold: 0.25 });
    io.observe(el);
    return () => { io.disconnect(); clearTimeout(timer); };
  }, [reduced, started]);

  // Advance one step at a time; each render schedules the next.
  useEffect(() => {
    if (reduced || !started) return undefined;

    if (count >= total) {
      if (!loop) return undefined;
      const hold = setTimeout(() => setFading(true), HOLD_MS);
      return () => clearTimeout(hold);
    }

    const line = plan.find((l) => count >= l.start && count <= l.end);
    let delay = CHAR_MS + Math.random() * JITTER_MS;
    if (line && count === line.end) delay = LINE_PAUSE_MS;              // newline step
    if (line && count === line.start && line.pause) delay += line.pause; // extra pause before this line
    const timer = setTimeout(() => setCount((c) => c + 1), delay);
    return () => clearTimeout(timer);
  }, [count, started, reduced, loop, plan, total]);

  // Fade out, then restart from the top.
  useEffect(() => {
    if (!fading) return undefined;
    const timer = setTimeout(() => { setCount(0); setFading(false); }, FADE_MS);
    return () => clearTimeout(timer);
  }, [fading]);

  if (reduced) {
    return <div className="hero-code">{renderLines(plan, Infinity)}</div>;
  }

  const done = count >= total;
  const typing = started && !done && !fading;
  const rootClass = `hero-code hero-code-typewriter${typing ? ' is-typing' : ''}${fading ? ' is-fading' : ''} ${className}`.trim();

  return (
    <div className={rootClass} ref={rootRef}>
      {/* Full code keeps the card at its final height and is what assistive tech reads. */}
      <div className="hero-code-ghost">{renderLines(plan, Infinity)}</div>
      <div className="hero-code-typed" aria-hidden="true">
        {renderLines(plan, count, started)}
      </div>
    </div>
  );
}
