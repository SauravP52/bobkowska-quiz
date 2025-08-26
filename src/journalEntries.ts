interface JournalEntry {
  date: string;
  content: string;
  image?: {
    url: string;
    caption?: string;
  };
}

export const JOURNAL_ENTRIES: JournalEntry[] = [
  {
    date: "2025-08-26",
    content: "Dear Bobkowska , it's kinda lonely here without you. Jez, i do want to hear your stupid jokes and make controversial statements. Fun day at work, got lot of uber swags - can't complain. Used AI at work as always. Today we had indian food in the office. They also celebrated my 5 years uberversary. Jez, am i too old for this? Also i signed up for a ADHD test with a therapist on Friday. She's Indian so cheaper and affordable , XD. Also i will be running and going to the gym today(With Vlad), and play some games with Shawn. This app is going to be continually updated with a lot of features , haha you lucky. Hope you don't kill yourself of boredom. Miss you loads 💙",
    image: {
      url: new URL('./assets/journal/2025-08-26-01.JPEG', import.meta.url).href,
      caption: "Uberversaries"
    }
  },
];
