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
   {
    date: "2025-08-27",
    content: "Dear Bobkowska , another day another adventure. It was nice hearing your voice and seeing you. God i'd forgotten what you sounded like.  The indian food i cooked yesterday left a mark on the wall , and Shawn pointed out to me. Maybe i am clumsy ;(.I have a bunch of house visits , and also need to find a Makelaar they charging me 3999 Jez. I did a lot of research on House hunting , ask me anything. I am still open to going to Poznan, the air show looks fun, haha. Peace. See you soon 💙",
    image: {
      url: new URL('./assets/journal/2025-08-27-01.JPEG', import.meta.url).href,
      caption: "Bobkowska Selfie"
    },
  },
  {
    date: "2025-08-28",
    content: "Dear Bobkowska , hope you are well. Highlight of the day - i worked out with Vlad, he had a really interesting story to tell. His girlfriend is from Ukraine , they have been together for 5 years now. When the war started , his girlfriend was forced to move to the Netherlands. He said , they don't just allow you to cross border in Ukraine as a male in his early 20s. He crossed the border somewhat unofficially to get to the Netherlands, find a job ,reunite with his girlfriend , pretty romantic - (He just crosses the border , but did he make an app for her ? Jez , loser).He also shared a bunch of great restaurants in Warsaw , that he claimed has really good food. We should go there once in Warsaw. See you tomorrow 💙",
    image: {
      url: new URL('./assets/journal/2025-08-28-01.JPEG', import.meta.url).href,
      caption: "Business Call"
    }
  },
];
