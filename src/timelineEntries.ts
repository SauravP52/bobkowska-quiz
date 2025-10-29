export interface TimelineEntry {
  content: string;
  image?: {
    url: string;
    caption?: string;
  };
}

export interface TimelineCategory {
  destination: string;
  date: string;
  entries: TimelineEntry[];
}

export const TIMELINE_CATEGORIES: TimelineCategory[] = [
  {
    destination: "Krakow",
    date: "2025-06-25",
    entries: [
      {
        content: "Our first breakfast together, you also got to see how clumsy I am with the fork and the knife.",
        image: {
          url: new URL('./assets/timelines/Krakov-1.JPEG', import.meta.url).href,
          caption: "Breakfast at Krakow"
        }
      },
      {
        content: "You took me to the famous lake in Krakow, Zakrzówek. I took out a 0 Euro note for you , you were like -> stop giving money to me like this , people are going to notice and judge XD",
        image: {
          url: new URL('./assets/timelines/Krakov-2.JPEG', import.meta.url).href,
          caption: "Walk around Zakrzówek"
        }
      },
      {
        content: "Who's this hotty ? It was a bit cold and windy that day, things can get sensitive , you trying your best to be non-chanlant but still posing",
        image: {
          url: new URL('./assets/timelines/Krakov-3.JPEG', import.meta.url).href,
          caption: "Who's this hotty?"
        }
      },
       {
        content: "You hate taking selfies for sure?",
        image: {
          url: new URL('./assets/timelines/Krakov-4.JPEG', import.meta.url).href,
          caption: "Selfie timee?"
        }
      },
      {
        content: "More food... how do you stay so lean and still eat that much ;(. The food was really really good and the artists were playing really good music, loved the folk music",
        image: {
          url: new URL('./assets/timelines/Krakov-5.JPEG', import.meta.url).href,
          caption: "Selfie timee?"
        }
      },
      {
        content: "We watched the amazing 14 peaks documentary that day, i hope i was able to convince you of my unrivalled himalayan bloddline ;)",
        image: {
          url: new URL('./assets/timelines/Krakov-6.JPEG', import.meta.url).href,
          caption: "More Krakov"
        }
      },
      {
        content: "Pretty Bobkowska , posing with the signs of her family name.",
        image: {
          url: new URL('./assets/timelines/Krakov-7.JPEG', import.meta.url).href,
          caption: "Selfie timee?"
        }
      },
      {
        content: "If i guessed the guy's name right, i would have gotten a kiss from you. Too bad he looks more like a disney prince and less like the musical genius Chopin. Hate you Chopin </3",
        image: {
          url: new URL('./assets/timelines/Krakov-8.JPEG', import.meta.url).href,
          caption: "Selfie timee?"
        }
      }
    ]
  },
  {
    destination: "Amsterdam",
    date: "2025-07-13",
    entries: [
      {
        content: "They are not roses, i swearrrrrrr",
        image: {
          url: new URL('./assets/timelines/Amsterdam-1.JPEG', import.meta.url).href,
          caption: "Roses ?"
        }
      },
      {
        content: "The most beautiful thing i have never seen",
        image: {
          url: new URL('./assets/timelines/Amsterdam-2.JPEG', import.meta.url).href,
          caption: "Cutekowska"
        }
      },
      {
        content: "Stray Kids in the houseeeeee, you were so happy that day. I still remember how you were jumping and screaming when they came on stage. However i am still your favourite Asian... Screw Felix and Hyunjin ;)",
        image: {
          url: new URL('./assets/timelines/Amsterdam-3.JPEG', import.meta.url).href,
          caption: "Stray Kids in the houseeeeee"
        }
      },
      {
        content: "Oopsieeee Castle De Haar was closed!! Atleast we got some decent pictures that day. Saving Utrecht for another day",
        image: {
          url: new URL('./assets/timelines/Amsterdam-4.JPEG', import.meta.url).href,
          caption: "Utrecked"
        }
      },
      {
        content: "Pretty hands !! Mineeee not yours , silly",
        image: {
          url: new URL('./assets/timelines/Amsterdam-5.JPEG', import.meta.url).href,
         
        } 
      },
      {
        content: "More hand holding, i go where you go :)",
        image: {
          url: new URL('./assets/timelines/Amsterdam-6.JPEG', import.meta.url).href,
          caption: "Follow me"
        } 
      },
      {
        content: "Cooking like a chef, I'm a five star Michelin.",
        image: {
          url: new URL('./assets/timelines/Amsterdam-7.JPEG', import.meta.url).href,
          caption: "Michelin Recommended ? Michelin Star ?"
        }
      },
      {
        content: "The most goated picture of you.",
        image: {
          url: new URL('./assets/timelines/Amsterdam-8.JPEG', import.meta.url).href,
          caption: "Goated"
        } 
      },
      {
        content: "We laugh, we cry and we happy.",
        image: {
          url: new URL('./assets/timelines/Amsterdam-9.JPEG', import.meta.url).href,
          caption: "Rollercoaster of emotions"
        } 
      },
      {
        content: "Bobkowska the f1 driver from Poland",
        image: {
          url: new URL('./assets/timelines/Amsterdam-10.JPEG', import.meta.url).href,
          caption: "Harsimar: Who's your favourite f1 team? Jagoda: Umm Poland i guess?"
        } 
      },
      {
        content: "I am scared she'll push me off the swing",
        image: {
          url: new URL('./assets/timelines/Amsterdam-11.JPEG', import.meta.url).href,
          caption: "Swingingggg in <3"
        } 
      }
    ]
  },
  {
    destination: 'Luzino',
    date: '2025-07-15',
    entries: [
      {
        content: 'We had the best polish food in gdansk , your boss almost caught us sneaking into the office shhhh.',
        image: {
          url: new URL('./assets/timelines/Luzino-1.jpg', import.meta.url).href,
          caption: 'Food with cutie'
        }
      },
      {
        content: 'Sunshine on my shoulders makes me happy.',
        image: {
          url: new URL('./assets/timelines/Luzino-2.jpg', import.meta.url).href,
          caption: 'My Sunshine'
        }
      },
      {
        content: 'Perks of being small, you easily fit into small spaces.',
        image: {
          url: new URL('./assets/timelines/Luzino-3.jpg', import.meta.url).href,
          caption: 'Sleepover'
        }
      },
      {
        content: 'All it takes is some ice-cream to love an Indian.',
        image: {
          url: new URL('./assets/timelines/Luzino-4.jpg', import.meta.url).href,
          caption: 'Kids love me'
        }
      },
      {
        content: 'Cuteness overloaded',
        image: {
          url: new URL('./assets/timelines/Luzino-5.jpg', import.meta.url).href,
          caption: 'Lovely Bianca <3'
        }
      },
      {
        content: '5 Bucks for cutting your hair.',
        image: {
          url: new URL('./assets/timelines/Luzino-6.jpg', import.meta.url).href,
          caption: 'Hair dresser'
        }
      },
      {
        content: 'On our way to the beach.',
        image: {
          url: new URL('./assets/timelines/Luzino-7.jpg', import.meta.url).href,
          caption: 'Sad eyes'
        }
      },
      {
        content: 'I punch cute',
        image: {
          url: new URL('./assets/timelines/Luzino-8.jpg', import.meta.url).href,
          caption: 'She scored 400 points'
        }
      },
      {
        content: 'Ocean eyes selfie',
        image: {
          url: new URL('./assets/timelines/Luzino-9.jpg', import.meta.url).href,
          caption: 'Selfie by the sea'
        }
      },
      {
        content: 'I have absssss.',
        image: {
          url: new URL('./assets/timelines/Luzino-10.jpg', import.meta.url).href,
          caption: '6-pack abs'
        }
      },
      {
        content: 'She"s iconic.',
        image: {
          url: new URL('./assets/timelines/Luzino-11.jpg', import.meta.url).href,
          caption: '#slavicbeauty'
        }
      },
      {
        content: 'Look at the way she looks at me <3',
        image: {
          url: new URL('./assets/timelines/Luzino-12.jpg', import.meta.url).href,
          caption: 'She"s gonna kill me'
        }
      },
      {
        content: 'And then she drives me home.',
        image: {
          url: new URL('./assets/timelines/Luzino-13.jpg', import.meta.url).href,
          caption: 'Sad puppy face...'
        }
      }
    ]
  }
]