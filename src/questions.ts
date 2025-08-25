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
    choices: ['19th May', '18th May 💙', '20th July', 'Never wanna meet another indian again 🙅‍♀️'],
    answer: 1
  },
  {
    id: 2,
    question: 'What is the first thing i stole from you? 🤭',
    choices: ["Power bank", 'Australian Tshirt', 'White Tshirt', 'Your Heart'],
    answer: 1
  },
  {
    id: 3,
    question: 'First thing you gave me? 🍫',
    choices: ['Twix Bar', 'Heartbreak', 'Kiss', 'Compliment'],
    answer: 3
  },
  {
    id: 4,
    question: 'Which kids likes me the most? 🥰',
    choices: ['Bianca', 'Tosha', 'Lonya', 'They all hate you'],
    answer: 0
  },
  {
    id: 5,
    question: 'What is the first food we had together? 💐',
    choices: ["Pizza", "Pasta", 'Bitterballen',"Sandwitch",],
    answer: 2
  },
  {
    id: 6,
    question: 'Which came first the Chicken or the Egg?',
    choices: ["Egg", "Chicken", "I don't care", 'Saurav 😢'],
    answer: 3
  },
  {
    id: 7,
    question: 'What is my youtube channel name? 📺',
    choices: ["madwomen", "madwomen122399", "aggh i can't seem to find, you're invisible", 'jagodumb'],
    answer: 2
  },
  {
    id: 8,
    question: 'What is the first gift you recieved from me 📺',
    choices: ["Pokemon Eevee", "Dissapointment", "Nike Hat", 'Socks'],
    answer: 1
  },
  {
    id: 9,
    question: 'Why did Saurav make this quiz? 📝',
    choices: ['He misses you 💙','He misses you more than you miss missing him 💙', 'He misses you more than you miss missing him more than you miss him 💙', 'All of the above 🫐'],
    answer: 3
  }
]