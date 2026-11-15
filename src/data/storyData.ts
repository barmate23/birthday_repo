import { StoryMemory, ChatMessage, Chapter } from '../types';

export interface StoryConfig {
  person: {
    fullName: string;
    nickname: string;
    title: string;
    heroSubtitle: string;
    birthdayWishHeading: string;
    birthdayWishMessage: string[];
    proposalIntro: string;
    proposalQuestion: string;
    proposalYesHeading: string;
    proposalYesMessage: string[];
    proposalForeverText: string;
  };
  audio: {
    defaultTitle: string;
    artist: string;
    customAudioUrl?: string; // Optional custom MP3 URL if user wants to replace synthesized piano
  };
  chapters: Chapter[];
  matrimonyStory: {
    heading: string;
    paragraphs: string[];
    chats: ChatMessage[];
    stats: { label: string; value: string }[];
  };
  conversationStory: {
    heading: string;
    paragraphs: string[];
    callLogs: { duration: string; timestamp: string; note: string }[];
  };
  meetingStory: {
    heading: string;
    paragraphs: string[];
    specialMemoryHighlight: string;
    meetings: {
      number: number;
      title: string;
      dateLabel: string;
      locationLabel: string;
      memoryNote: string;
      eyeContactNote: string;
      imageUrl: string;
    }[];
  };
  bondStory: {
    heading: string;
    paragraphs: string[];
    pillars: { title: string; desc: string; icon: string }[];
  };
  supportStory: {
    heading: string;
    paragraphs: string[];
    quoteHighlight: string;
  };
  futureStory: {
    heading: string;
    paragraphs: string[];
    promises: string[];
  };
  galleryMemories: StoryMemory[];
}

export const storyData: StoryConfig = {
  person: {
    fullName: "Shradha Jivane",
    nickname: "Chaku",
    title: "Happy Birthday, My Beautiful Chaku ❤️",
    heroSubtitle: "Some stories are written by destiny. Ours started with a simple connection and slowly became my favourite part of life.",
    birthdayWishHeading: "To My Beautiful Chaku...",
    birthdayWishMessage: [
      "Happy Birthday, Shradha! ❤️",
      "May your life always be filled with happiness, beautiful surprises, endless smiles, and everything your heart wishes for.",
      "Keep smiling, keep shining, and keep being the wonderful person you are.",
      "I feel lucky that our paths crossed and that we got the opportunity to build this beautiful connection.",
      "I hope this is just the beginning of countless birthdays, celebrations, and beautiful memories together.",
      "Lots of love, my Chaku! ❤️"
    ],
    proposalIntro: "After everything we've shared, all the memories we've created, and all the dreams we're waiting to fulfill...",
    proposalQuestion: "Will you be my Valentine? ❤️",
    proposalYesHeading: "YAYYYYY!!! ❤️🥹",
    proposalYesMessage: [
      "I knew there was no better answer!",
      "Here's to our beautiful journey, endless smiles, countless memories, and a lifetime of togetherness.",
      "Happy Birthday once again, my Chaku!",
      "I LOVE YOU! ❤️"
    ],
    proposalForeverText: "From a matrimony connection to a lifetime connection... Our forever starts here. ❤️"
  },
  audio: {
    defaultTitle: "A Thousand Melodies for Chaku",
    artist: "Romantic Piano & Strings Serenade",
  },
  chapters: [
    { id: "hero", number: "00", title: "Celebration" },
    { id: "beginning", number: "01", title: "Matrimony Spark" },
    { id: "conversations", number: "02", title: "Endless Calls" },
    { id: "meetings", number: "03", title: "Two Meetings" },
    { id: "bond", number: "04", title: "Our Bond" },
    { id: "support", number: "05", title: "Standing By Me" },
    { id: "future", number: "06", title: "Waiting For Forever" },
    { id: "wishes", number: "07", title: "Birthday Cake" },
    { id: "gallery", number: "08", title: "Memory Album" },
    { id: "valentine", number: "09", title: "The Question" },
  ],
  matrimonyStory: {
    heading: "Every Beautiful Story Has a Beginning...",
    paragraphs: [
      "Who knew that a simple connection on a matrimony website would become such an important part of my life?",
      "It all started with a small interaction. Slowly, we started talking, understanding each other, and discovering little things about one another.",
      "Those initial conversations gradually became something I started looking forward to every day."
    ],
    chats: [
      { id: "1", sender: "him", text: "Hi Shradha! It was wonderful discovering your profile. Hope you're having a pleasant day 😊", time: "10:14 AM" },
      { id: "2", sender: "her", text: "Hello! Thank you so much. Nice to connect with you here!", time: "11:02 AM" },
      { id: "3", sender: "him", text: "I loved what you wrote about family and what brings you joy. Looking forward to knowing you better.", time: "11:20 AM" },
      { id: "4", sender: "her", text: "Thank you! I'd love to chat more and share our thoughts ✨", time: "11:45 AM" },
      { id: "5", sender: "him", text: "And that's where destiny quietly smiled... ❤️", time: "11:46 AM" }
    ],
    stats: [
      { label: "Where it began", value: "Matrimony Match" },
      { label: "The spark", value: "A Warm First Message" },
      { label: "What it became", value: "My Favorite Story" }
    ]
  },
  conversationStory: {
    heading: "Then Came Those Endless Conversations...",
    paragraphs: [
      "Those simple messages slowly turned into phone calls.",
      "We started sharing our thoughts, laughing together, discussing our lives, and getting to know each other a little more every day.",
      "Without even realizing it, you became someone whose calls and conversations started making my days more beautiful."
    ],
    callLogs: [
      { duration: "01 hr 42 min", timestamp: "Late Evening", note: "Laughing endlessly over the tiniest daily stories" },
      { duration: "02 hr 18 min", timestamp: "Midnight", note: "Sharing childhood dreams and favorite comfort moments" },
      { duration: "03 hr 05 min", timestamp: "Past 2:00 AM", note: "Neither of us wanting to hang up the phone first" }
    ]
  },
  meetingStory: {
    heading: "Two Meetings That I Will Always Remember ❤️",
    paragraphs: [
      "And then came those two beautiful meetings.",
      "I still remember those moments. But there is one thing I can never forget...",
      "You hardly maintained eye contact with me during either of our meetings! 😄❤️",
      "Maybe you were shy, maybe nervous, or maybe you just didn't know what to say.",
      "But those little moments made our meetings even more special.",
      "And today, whenever I remember them, they bring a beautiful smile to my face."
    ],
    specialMemoryHighlight: "That unforgettable, adorable shyness where you looked at everything in the room except directly into my eyes! 😄❤️",
    meetings: [
      {
        number: 1,
        title: "Our Very First Meeting",
        dateLabel: "Meeting #1",
        locationLabel: "A Moment Frozen in Time",
        memoryNote: "Butterflies, warm smiles, and your shy glances that gave away how sweet you are.",
        eyeContactNote: "Eye contact score: 5% (and 100% adorable shyness! 🥰)",
        imageUrl: "/images/shradha-04.jpg"
      },
      {
        number: 2,
        title: "Our Second Meeting",
        dateLabel: "Meeting #2",
        locationLabel: "Growing Closer Each Minute",
        memoryNote: "More comfortable, more laughter, but still that iconic shy glance I cherish so much.",
        eyeContactNote: "Eye contact score: Still shy, still mesmerizing, forever memorable! 😄❤️",
        imageUrl: "/images/shradha-07.jpg"
      }
    ]
  },
  bondStory: {
    heading: "Somewhere Along the Way, You Became My Person...",
    paragraphs: [
      "With every passing day, we started coming closer.",
      "Our conversations became deeper, our understanding became stronger, and our bond became more meaningful.",
      "It was no longer just about talking. It was about caring, understanding, supporting, and being there for each other.",
      "Every little effort, every smile, every conversation, and every moment made me realize how beautiful this connection was becoming."
    ],
    pillars: [
      { title: "Deep Understanding", desc: "Understanding unspoken feelings even before words are spoken.", icon: "Compassion" },
      { title: "Comfort & Joy", desc: "Where being ourselves feels safe, effortless, and full of laughter.", icon: "Smile" },
      { title: "Unconditional Care", desc: "Looking out for each other through every tiny detail of the day.", icon: "Heart" }
    ]
  },
  supportStory: {
    heading: "Your Support Means More Than Words Can Express...",
    paragraphs: [
      "One thing that brought me even closer to you was the way you stood beside me, even before our marriage.",
      "You understood my circumstances, supported me, and continued believing in the journey we were building together.",
      "That means more to me than I can ever explain.",
      "It made me realize that a beautiful relationship is not just about celebrating happy moments. It is also about standing together when life gets challenging.",
      "Thank you for being that person."
    ],
    quoteHighlight: "“A beautiful relationship is not just about celebrating happy moments. It is also about standing together when life gets challenging. Thank you for being that person.”"
  },
  futureStory: {
    heading: "Now, We Are Waiting for Our Forever...",
    paragraphs: [
      "Today, when I look back at our journey, I realize how beautifully everything has unfolded.",
      "From a simple matrimony connection to messages, from messages to calls, from calls to those two memorable meetings, and from those meetings to the beautiful bond we share today.",
      "Now, we are both waiting for that special day when we finally get together forever.",
      "I don't know exactly what the future holds, but I know one thing...",
      "I want to keep discovering life with you, making memories with you, laughing with you, and standing beside you through every chapter of life.",
      "And whenever I look into your eyes, I see a beautiful story where you are looking forward to a future with me too."
    ],
    promises: [
      "To celebrate your every happiness and wipe away every worry",
      "To laugh with you in good times and hold your hand through challenges",
      "To keep falling in love with your shy smile every single day",
      "To build a warm home filled with peace, dreams, and endless love"
    ]
  },
  galleryMemories: [
    {
      id: "mem-1",
      title: "My Beautiful Chaku ❤️",
      date: "Her Special Day",
      location: "In My Heart",
      description: "Celebrating the grace, warmth, and radiance of Shradha on her birthday.",
      imageUrl: "/images/shradha-01.jpg",
      aspect: "portrait",
      tag: "Birthday Queen"
    },
    {
      id: "mem-2",
      title: "Shradha – Always Glowing",
      date: "A Cherished Moment",
      location: "In Every Memory",
      description: "That effortless beauty that makes every moment special.",
      imageUrl: "/images/shradha-02.jpg",
      aspect: "portrait",
      tag: "My Chaku"
    },
    {
      id: "mem-3",
      title: "That Beautiful Smile",
      date: "Every Day",
      location: "Pure Joy",
      description: "The smile that lights up any room and turns any ordinary day into something magical.",
      imageUrl: "/images/shradha-03.jpg",
      aspect: "portrait",
      tag: "My Chaku"
    },
    {
      id: "mem-4",
      title: "First Meeting Magic",
      date: "Meeting #1",
      location: "Our First Encounter",
      description: "The unforgettable meeting where words were sweet and eye contact was adorably scarce! 😄",
      imageUrl: "/images/shradha-04.jpg",
      aspect: "portrait",
      tag: "Milestone"
    },
    {
      id: "mem-5",
      title: "So Much Grace & Warmth",
      date: "A Precious Memory",
      location: "Our Journey",
      description: "Every photograph of you is a reminder of how lucky I am.",
      imageUrl: "/images/shradha-05.jpg",
      aspect: "portrait",
      tag: "My Chaku"
    },
    {
      id: "mem-6",
      title: "Second Meeting Warmth",
      date: "Meeting #2",
      location: "A Deeper Spark",
      description: "Sharing heartfelt stories, easy smiles, and the realization that this was meant to be.",
      imageUrl: "/images/shradha-06.jpg",
      aspect: "portrait",
      tag: "Milestone"
    },
    {
      id: "mem-7",
      title: "Unforgettable You",
      date: "Always",
      location: "My Favourite Memory",
      description: "The kind of person who stays in your heart no matter where life takes you.",
      imageUrl: "/images/shradha-07.jpg",
      aspect: "portrait",
      tag: "My Chaku"
    },
    {
      id: "mem-8",
      title: "Quiet Joy",
      date: "A Beautiful Day",
      location: "Captured in Time",
      description: "There's a quiet happiness in your eyes that makes my world complete.",
      imageUrl: "/images/shradha-08.jpg",
      aspect: "portrait",
      tag: "Together"
    },
    {
      id: "mem-9",
      title: "My Forever Person",
      date: "Today & Always",
      location: "Our Story",
      description: "From a simple connection to becoming each other's favourite person.",
      imageUrl: "/images/shradha-09.jpg",
      aspect: "portrait",
      tag: "Forever"
    },
    {
      id: "mem-10",
      title: "Shradha – Radiant & Real",
      date: "Every Moment",
      location: "In My Eyes",
      description: "Natural, genuine, and beautiful in every single frame.",
      imageUrl: "/images/shradha-10.jpg",
      aspect: "portrait",
      tag: "Birthday Queen"
    },
    {
      id: "mem-11",
      title: "Sweet & Shy",
      date: "One of My Favourites",
      location: "A Shy Glance Captured",
      description: "That adorable shyness I fell in love with right from our first meeting 😄❤️",
      imageUrl: "/images/shradha-11.jpg",
      aspect: "portrait",
      tag: "Milestone"
    },
    {
      id: "mem-12",
      title: "Walking Into Forever",
      date: "Our Dream",
      location: "Waiting for Forever",
      description: "Every step we take is leading us to a beautiful life together.",
      imageUrl: "/images/shradha-12.jpg",
      aspect: "portrait",
      tag: "Forever"
    },
    {
      id: "mem-14",
      title: "My Favourite Chapter",
      date: "Every Day with You",
      location: "In This Beautiful Story",
      description: "You are the most beautiful chapter in the story of my life.",
      imageUrl: "/images/shradha-14.jpg",
      aspect: "portrait",
      tag: "Together"
    },
    {
      id: "mem-15",
      title: "Birthday Memories ❤️",
      date: "November 15, 2026",
      location: "Celebrating You",
      description: "Happy Birthday my beautiful Chaku – may this day be as wonderful as you are!",
      imageUrl: "/images/shradha-15.jpg",
      aspect: "portrait",
      tag: "Birthday Queen"
    }
  ]
};
