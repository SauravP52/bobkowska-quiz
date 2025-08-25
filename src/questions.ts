export type Question = {
  id: number
  question: string
  choices: string[]
  answer: number
}

export const QUESTIONS: Question[] = [
  {
    id: 1,
    question: 'When did we first meet? 🗓️',
    choices: ['19th Sept', '18th Sept 💙', '20th July', 'Never wanna meet another indian again 🙅‍♀️'],
    answer: 1
  },
  {
    id: 2,
    question: 'What is the most attractive thing about an Indian? 🇮🇳',
    choices: ["Hygiene 🧼", 'Culture 🎉', 'Saurav 😎', 'Food 🍛'],
    answer: 2
  },
  {
    id: 3,
    question: 'Which food tastes the best? 🍽️',
    choices: ['Nepali 🥟', 'Polish 🥟', 'Thai 🍜', 'Vietnamese 🍲'],
    answer: 0
  },
  {
    id: 4,
    question: 'Which of the following does Saurav suffer from? 🤔',
    choices: ['super intelligence 🧠', 'extreme attractiveness 😏', 'athletic fitness 🏃‍♂️', 'all of the above ✨'],
    answer: 3
  },
  {
    id: 5,
    question: 'What is Jagoda"s fav flowers? 💐',
    choices: ["Rose 🌹", "Some flower that looks like Rose 🌸", 'Not Rose Lol',"Cactus 🌵",],
    answer: 2
  },
  {
    id: 6,
    question: 'Why is Saurav sad? 😢',
    choices: ["He can't talk 🤐", "He needs to talk to you 📞", "He needs to see you 👀", 'All of the above 💔'],
    answer: 3
  },
  {
    id: 7,
    question: 'Why did Saurav make this quiz? 📝',
    choices: ['He misses you 💙','He misses you more than you miss missing him 💙', 'He misses you more than you miss missing him more than you miss him 💙', 'All of the above 🫐'],
    answer: 3
  }
]