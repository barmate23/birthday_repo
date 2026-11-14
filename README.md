# A Birthday Love Story – Shradha Jivane ❤️ (Chaku)

A premium, cinematic, romantic, fully responsive website celebrating the birthday of **Shradha Jivane**, lovingly known as **"Chaku"**.

---

## ✨ Features & Story Chapters

1. **Cinematic Birthday Landing Page**
   - Full-screen hero with 3D interactive heart rendered in Three.js (pulses with a realistic heartbeat).
   - Prominent, glowing framed portrait of Shradha.
   - Floating rose petals, golden sparkles, and romantic ambient lighting.
   - "Let's Relive Our Story ❤️" smooth scroll trigger.

2. **Chapter 01: Matrimony Spark**
   - *“Every Beautiful Story Has a Beginning...”*
   - Simulated matrimony match interface with animated chat bubbles, timestamped timeline, and the first conversation that started it all.

3. **Chapter 02: Endless Conversations**
   - *“Then Came Those Endless Conversations...”*
   - Interactive smartphone call mockup with live audio waveforms, call durations, and memories of talking until past 2:00 AM.

4. **Chapter 03: Two Meetings & The Shy Glances**
   - *“Two Meetings That I Will Always Remember ❤️”*
   - Highlights the unforgettable, adorable detail: *“You hardly maintained eye contact with me during either of our meetings! 😄❤️”*
   - Interactive **3D flipping memory cards** for Meeting #1 and Meeting #2 with photo reveals and the playful *“Eye Contact Scorecard”*.

5. **Chapter 04: Our Bond Became Stronger**
   - *“Somewhere Along the Way, You Became My Person...”*
   - Animated glowing energy line connecting two hearts across space.
   - The three foundational pillars of the relationship: Deep Understanding, Comfort & Joy, and Unconditional Care.

6. **Chapter 05: You Stood By Me**
   - *“Your Support Means More Than Words Can Express...”*
   - Warm golden lighting and cinematic typography highlighting how she stood by him even before marriage, understood his circumstances, and believed in their journey together.

7. **Chapter 06: Waiting For Forever**
   - *“Now, We Are Waiting for Our Forever...”*
   - Deep starry night sky with two destined stars converging in the cosmos.
   - 3D cosmic heart and heartfelt lifetime promises.

8. **Chapter 07: Birthday Wishes & Interactive Cake**
   - *“To My Beautiful Chaku...”*
   - Full heartfelt birthday letter.
   - **Interactive 3D Birthday Cake**: Flickering candle flames that can be blown out by clicking **“Blow Out The Candles 🎂”**, triggering smoke particles, audio whoosh, fairy chimes, and confetti!

9. **Chapter 08: Memory Keepsake Album (Photo Gallery)**
   - 3D Polaroid-style memory cards with paper tape accents and handwritten-style captions.
   - Filter by categories (*Birthday Queen*, *Milestone*, *Together*, *Forever*).
   - Click-to-expand high-resolution **Lightbox modal** with dates and locations.

10. **Chapter 09: The Final Surprise – Valentine Proposal**
    - High-stakes romantic proposal section with glowing red/pink gradients:
      *“Will you be my Valentine? ❤️”*
    - **Stationary YES Button**: Explodes into full-screen heart confetti, plays celebration audio fanfare, and displays a heartwarming victory card: *“YAYYYYY!!! ❤️🥹 I knew there was no better answer!”*
    - **Playful Runaway NO Button**: Smoothly evades mouse hover, clicks, and mobile touches using spring physics while staying within the visible screen, displaying cute teasing messages (*“Nice try, Chaku! 😄”*, *“No is not an option! 🥰”*).

11. **Romantic Audio Engine**
    - Built-in Web Audio API synthesizer that plays gentle romantic piano and ambient string chords continuously with zero external audio dependencies.
    - Sound effects for blowing candles and the proposal celebration.
    - Persistent floating glassmorphism music pill with equalizer visualizer, volume slider, and custom MP3 support.

---

## 🚀 Running the Project

### Development Server:
```bash
npm run dev
```
Open [http://localhost:5173](http://localhost:5173) in your browser.

### Production Build:
```bash
npm run build
npm run preview
```

---

## 📸 Customizing Photographs & Content

All content is centralized in **`src/data/storyData.ts`**:

1. **Replace Photos**:
   - Save your actual photos of Shradha and both of you inside `public/images/` (e.g. `public/images/shradha-portrait.jpg`, `public/images/meeting1.jpg`, etc.).
   - In `src/data/storyData.ts`, update `imageUrl` fields in `storyData.meetingStory.meetings` and `storyData.galleryMemories` to point to `/images/your-photo-name.jpg`.

2. **Add Your Favorite Song**:
   - Place an MP3 file in `public/music.mp3`.
   - In `src/data/storyData.ts`, set `audio.customAudioUrl: '/music.mp3'`.
