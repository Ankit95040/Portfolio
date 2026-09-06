"use client"

import * as React from "react"

type HeartFavoriteProps = {
  ariaLabel?: string
  defaultChecked?: boolean
}

export function HeartFavorite({ ariaLabel = "Like", defaultChecked = false }: HeartFavoriteProps) {
  const [checked, setChecked] = React.useState(defaultChecked)
  const id = React.useId()

  return (
    <label
      htmlFor={id}
      className="heart-container"
      onClick={(e) => e.stopPropagation()}
      onMouseDown={(e) => e.stopPropagation()}
      style={{ pointerEvents: "auto" } as React.CSSProperties}
    >
      <input
        id={id}
        type="checkbox"
        className="checkbox"
        checked={checked}
        onChange={(e) => setChecked(e.target.checked)}
        aria-label={ariaLabel}
        onClick={(e) => e.stopPropagation()}
      />
      <div className="svg-container" style={{ pointerEvents: "none" } as React.CSSProperties}>
        {/* outline heart */}
        <svg
          className="svg-outline"
          viewBox="0 0 24 24"
          width="24"
          height="24"
          aria-hidden="true"
        >
          <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
        </svg>
        {/* filled heart */}
        <svg
          className="svg-filled"
          viewBox="0 0 24 24"
          width="24"
          height="24"
          aria-hidden="true"
        >
          <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
        </svg>
        {/* celebrate burst - larger heart that scales and fades */}
        <svg
          className="svg-celebrate"
          viewBox="0 0 24 24"
          width="24"
          height="24"
          aria-hidden="true"
        >
          <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
        </svg>
      </div>
      <style>{`
        .heart-container {
          --heart-color: rgb(255, 91, 137);
          position: relative;
          width: 50px;
          height: 50px;
          transition: .3s;
          display: inline-block;
        }
        @media (max-width: 380px) {
          .heart-container {
            width: 42px;
            height: 42px;
          }
        }
        .heart-container .checkbox {
          position: absolute;
          width: 100%;
          height: 100%;
          opacity: 0;
          z-index: 20;
          cursor: pointer;
        }
        .heart-container .svg-container {
          width: 100%;
          height: 100%;
          display: flex;
          justify-content: center;
          align-items: center;
        }
        .heart-container .svg-outline,
        .heart-container .svg-filled {
          fill: var(--heart-color);
          position: absolute;
        }
        .heart-container .svg-outline {
          fill: none;
          stroke: var(--heart-color);
          stroke-width: 2;
          stroke-linecap: round;
          stroke-linejoin: round;
        }
        .heart-container .svg-filled {
          animation: keyframes-svg-filled 1s;
          display: none;
        }
        .heart-container .svg-celebrate {
          position: absolute;
          animation: keyframes-svg-celebrate .5s;
          animation-fill-mode: forwards;
          display: none;
          stroke: var(--heart-color);
          fill: var(--heart-color);
          stroke-width: 2px;
        }
        .heart-container .checkbox:checked ~ .svg-container .svg-filled {
          display: block;
        }
        .heart-container .checkbox:checked ~ .svg-container .svg-celebrate {
          display: block;
        }
        /* hide outline when checked */
        .heart-container .checkbox:checked ~ .svg-container .svg-outline {
          display: none;
        }
        @keyframes keyframes-svg-filled {
          0% {
            transform: scale(0);
          }
          25% {
            transform: scale(1.2);
          }
          50% {
            transform: scale(1);
            filter: brightness(1.5);
          }
        }
        @keyframes keyframes-svg-celebrate {
          0% {
            transform: scale(0);
          }
          50% {
            opacity: 1;
            filter: brightness(1.5);
          }
          100% {
            transform: scale(1.4);
            opacity: 0;
            display: none;
          }
        }
      `}</style>
    </label>
  )
}

export default HeartFavorite
