import React, { useState, useRef } from 'react';
import confetti from 'canvas-confetti';
import { Heart, Sparkles, X } from 'lucide-react';
import { ThreeHeart } from '../ThreeHeart';
import { audioEngine } from '../../utils/audio';
import { storyData } from '../../data/storyData';

const teasingMessages = [
  "Nice try, Chaku! 😄",
  "There's only one right answer! 🥰",
  "No is not an option for destiny! ❤️",
  "Look over there 👉 YES ❤️ is waiting!",
  "Haha, you can't catch this button! 😜",
  "Our story was meant to be YES! ✨"
];

export const ValentineProposalSection: React.FC = () => {
  const { person } = storyData;
  const containerRef = useRef<HTMLDivElement>(null);
  const yesButtonRef = useRef<HTMLButtonElement>(null);
  const noButtonRef = useRef<HTMLButtonElement>(null);

  const [noPosition, setNoPosition] = useState<{ x: number; y: number }>({ x: 0, y: 0 });
  const [toastMessage, setToastMessage] = useState<string | null>(null);
  const [hasSaidYes, setHasSaidYes] = useState(false);
  const [toastIndex, setToastIndex] = useState(0);

  // Runaway NO button logic
  const moveNoButton = () => {
    if (hasSaidYes) return;

    if (!containerRef.current) return;
    const containerRect = containerRef.current.getBoundingClientRect();

    // Available space inside container bounds
    const maxX = Math.min(containerRect.width * 0.35, 240);
    const maxY = Math.min(containerRect.height * 0.25, 180);

    // Pick random offsets ensuring it avoids the center YES button area
    let newX = (Math.random() * 2 - 1) * maxX;
    let newY = (Math.random() * 2 - 1) * maxY;

    // Ensure it doesn't stay too close to 0,0
    if (Math.abs(newX) < 40) newX = newX < 0 ? -90 : 90;
    if (Math.abs(newY) < 30) newY = newY < 0 ? -60 : 60;

    setNoPosition({ x: newX, y: newY });

    // Show next playful message
    setToastMessage(teasingMessages[toastIndex % teasingMessages.length]);
    setToastIndex(prev => prev + 1);
  };

  const handleYesClick = () => {
    setHasSaidYes(true);
    audioEngine.playCelebrationSound();

    // Trigger full screen celebratory confetti & heart bursts
    const end = Date.now() + 3.5 * 1000;
    const colors = ['#e11d48', '#fb7185', '#d4af37', '#ffffff', '#ff1493'];

    const frame = () => {
      confetti({
        particleCount: 8,
        angle: 60,
        spread: 55,
        origin: { x: 0, y: 0.7 },
        colors: colors
      });
      confetti({
        particleCount: 8,
        angle: 120,
        spread: 55,
        origin: { x: 1, y: 0.7 },
        colors: colors
      });

      if (Date.now() < end) {
        requestAnimationFrame(frame);
      }
    };
    frame();
  };

  return (
    <section
      id="valentine"
      ref={containerRef}
      className="relative min-h-screen py-24 px-4 sm:px-6 flex flex-col items-center justify-center text-center overflow-hidden bg-gradient-to-b from-burgundy-950 via-burgundy-900 to-[#28050e]"
    >
      {/* Passionate Red & Pink Ambient Orbs */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-rose-600/25 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-80 h-80 bg-rose-500/20 rounded-full blur-[100px] pointer-events-none" />

      <div className="relative z-10 max-w-4xl mx-auto flex flex-col items-center">
        {/* Surprise Prelude Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-rose-950/90 border border-rose-500/40 text-rose-300 text-xs sm:text-sm font-medium tracking-wide mb-6 animate-pulse">
          <Heart className="w-4 h-4 text-rose-500 fill-rose-500" />
          <span>The Ultimate Question</span>
          <Sparkles className="w-4 h-4 text-champagne-400" />
        </div>

        {/* 3D Heart Centerpiece */}
        <div className="my-2">
          <ThreeHeart size="md" interactive={true} />
        </div>

        {/* Proposal Intro Text */}
        <p className="font-serif italic text-lg sm:text-xl md:text-2xl text-rose-200/90 max-w-2xl mb-4 leading-relaxed font-light">
          "{person.proposalIntro}"
        </p>

        {/* Big Romantic Proposal Question */}
        <h2 className="font-serif text-4xl sm:text-6xl md:text-7xl font-bold text-white mb-10 leading-tight">
          Will you be my{' '}
          <span className="text-rose-gradient rose-glow block sm:inline font-script text-5xl sm:text-7xl md:text-8xl">
            Valentine?
          </span>{' '}
          <span className="text-rose-500 inline-block animate-bounce">❤️</span>
        </h2>

        {/* Interactive Buttons Container */}
        <div className="relative w-full max-w-md min-h-[140px] flex items-center justify-center gap-6 mt-4">
          {/* YES Button (Always Stationary, Visible, Clickable) */}
          <button
            ref={yesButtonRef}
            onClick={handleYesClick}
            className="group relative z-20 px-10 py-5 rounded-full bg-gradient-to-r from-rose-600 via-rose-500 to-rose-600 hover:from-rose-500 hover:to-rose-400 text-white font-serif text-xl sm:text-2xl font-bold tracking-wide shadow-[0_0_35px_rgba(225,29,72,0.7)] hover:shadow-[0_0_50px_rgba(225,29,72,0.9)] hover:scale-110 active:scale-95 transition-all duration-300 border-2 border-rose-300/40 flex items-center gap-3"
          >
            <Heart className="w-7 h-7 text-white fill-white group-hover:scale-125 transition duration-300" />
            <span>YES ❤️</span>
            <Sparkles className="w-5 h-5 text-champagne-300 animate-spin-slow" />
          </button>

          {/* NO Button (Playfully Runs Away on Hover/Touch/Click) */}
          <button
            ref={noButtonRef}
            onMouseEnter={moveNoButton}
            onTouchStart={(e) => {
              e.preventDefault();
              moveNoButton();
            }}
            onClick={(e) => {
              e.preventDefault();
              moveNoButton();
            }}
            style={{
              transform: `translate3d(${noPosition.x}px, ${noPosition.y}px, 0)`,
              transition: 'transform 0.25s cubic-bezier(0.34, 1.56, 0.64, 1)',
            }}
            className="relative z-10 px-8 py-4 rounded-full bg-burgundy-900/80 hover:bg-burgundy-800 text-rose-200/90 font-serif text-lg font-medium border border-rose-500/30 shadow-md select-none cursor-pointer flex items-center gap-2 will-change-transform"
          >
            <span>NO 🙈</span>
          </button>
        </div>

        {/* Playful Teasing Toast when she attempts to click NO */}
        {toastMessage && (
          <div className="mt-4 px-4 py-2 rounded-full bg-burgundy-900/90 border border-champagne-400/40 text-xs sm:text-sm text-champagne-300 animate-bounce shadow-lg">
            {toastMessage}
          </div>
        )}
      </div>

      {/* YES Celebration Modal / Reveal Overlay */}
      {hasSaidYes && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-fade-in cursor-pointer"
          onClick={() => setHasSaidYes(false)}
        >
          <div
            className="relative max-w-2xl w-full rounded-[36px] glass-card-gold p-8 sm:p-12 text-center border-2 border-champagne-400/60 shadow-[0_0_80px_rgba(225,29,72,0.6)] overflow-hidden cursor-default"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close button */}
            <button
              onClick={() => setHasSaidYes(false)}
              className="absolute top-4 right-4 w-9 h-9 rounded-full bg-burgundy-950/80 text-rose-300 hover:text-white flex items-center justify-center border border-white/20 transition"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Glowing Hearts Header */}
            <div className="w-20 h-20 rounded-full bg-gradient-to-tr from-rose-600 to-champagne-400 p-[2px] mx-auto mb-6 shadow-[0_0_30px_rgba(212,175,55,0.6)] animate-bounce">
              <div className="w-full h-full rounded-full bg-burgundy-950 flex items-center justify-center">
                <Heart className="w-10 h-10 text-rose-500 fill-rose-500" />
              </div>
            </div>

            <h3 className="font-serif text-4xl sm:text-5xl font-bold text-white mb-4">
              {person.proposalYesHeading}
            </h3>

            <div className="space-y-3 font-serif text-rose-100 text-lg sm:text-xl leading-relaxed mb-6">
              {person.proposalYesMessage.map((msg, idx) => (
                <p
                  key={idx}
                  className={
                    idx === person.proposalYesMessage.length - 1
                      ? 'font-bold text-2xl sm:text-3xl text-rose-gradient rose-glow pt-2'
                      : 'font-light'
                  }
                >
                  {msg}
                </p>
              ))}
            </div>

            {/* Couple Photo Display */}
            <div className="relative my-6 w-full max-w-sm mx-auto h-52 sm:h-64 rounded-2xl overflow-hidden border-2 border-champagne-400/40 shadow-xl">
              <img
                src="/images/birth.jpg"
                alt="Us Together"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-burgundy-950/90 via-transparent to-transparent flex items-end justify-center p-3">
                <span className="font-script text-2xl text-champagne-200">
                  Two hearts, one lifetime ❤️
                </span>
              </div>
            </div>

            {/* Final Highlight Quote */}
            <div className="p-4 rounded-2xl bg-burgundy-900/80 border border-champagne-400/30 text-champagne-300 text-sm sm:text-base font-serif italic">
              "{person.proposalForeverText}"
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
