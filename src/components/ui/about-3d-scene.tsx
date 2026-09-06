"use client"

import React from "react"
import styled from "styled-components"

const StyledWrapper = styled.div`
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  pointer-events: none;
  z-index: 0;
  opacity: 0.22;

  .wrapper {
    width: 100%;
    height: 100%;
    position: relative;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
  }

  .inner {
    --w: 100px;
    --h: 150px;
    --translateZ: calc((var(--w) + var(--h)) + 0px);
    --rotateX: -15deg;
    --perspective: 1000px;
    position: absolute;
    width: var(--w);
    height: var(--h);
    top: 25%;
    left: calc(50% - (var(--w) / 2) - 2.5px);
    z-index: 2;
    transform-style: preserve-3d;
    transform: perspective(var(--perspective));
    animation: rotating 20s linear infinite;
  }

  @keyframes rotating {
    from {
      transform: perspective(var(--perspective)) rotateX(var(--rotateX)) rotateY(0);
    }
    to {
      transform: perspective(var(--perspective)) rotateX(var(--rotateX)) rotateY(1turn);
    }
  }

  .card {
    position: absolute;
    border: 2px solid rgba(var(--color-card), 0.85);
    border-radius: 12px;
    overflow: hidden;
    inset: 0;
    transform: rotateY(calc((360deg / var(--quantity)) * var(--index))) translateZ(var(--translateZ));
    background: rgba(13, 13, 20, 0.45);
    backdrop-filter: blur(6px);
    box-shadow: 0 8px 20px -10px rgba(0, 0, 0, 0.5);
  }

  .img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    background: #0000 radial-gradient(
      circle,
      rgba(var(--color-card), 0.18) 0%,
      rgba(var(--color-card), 0.45) 80%,
      rgba(var(--color-card), 0.75) 100%
    );
    opacity: 0.9;
  }

  @media (max-width: 1024px) {
    opacity: 0.18;
    .inner {
      --w: 85px;
      --h: 125px;
      --translateZ: calc((var(--w) + var(--h)) + 0px);
    }
  }

  @media (max-width: 640px) {
    opacity: 0.14;
    .inner {
      --w: 70px;
      --h: 105px;
      --translateZ: calc((var(--w) + var(--h)) + 0px);
      top: 30%;
    }
  }

  @media (prefers-reduced-motion: reduce) {
    .inner {
      animation-play-state: paused;
    }
  }
`

const decorativeCards = [
  { color: "142,249,252" },
  { color: "142,252,204" },
  { color: "215,252,142" },
  { color: "252,208,142" },
  { color: "252,142,239" },
  { color: "204,142,252" },
  { color: "142,202,252" },
]

export function About3DScene() {
  return (
    <StyledWrapper aria-hidden="true">
      <div className="wrapper">
        <div className="inner" style={{ ["--quantity" as string]: decorativeCards.length } as React.CSSProperties}>
          {decorativeCards.map((card, idx) => (
            <div
              key={idx}
              className="card"
              style={
                {
                  ["--index" as string]: idx,
                  ["--quantity" as string]: decorativeCards.length,
                  ["--color-card" as string]: card.color,
                } as React.CSSProperties
              }
            >
              <div className="img" />
            </div>
          ))}
        </div>
      </div>
    </StyledWrapper>
  )
}

export default About3DScene
