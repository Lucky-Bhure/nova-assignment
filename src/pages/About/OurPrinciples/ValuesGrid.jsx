import {
  Glasses,
  HeartHandshake,
  ShieldCheck,
  Hand,
  Infinity,
  HandMetal,
  Square,
  UserCheck,
} from "lucide-react"

const values = [
  {
    title: "Clarity",
    icon: Glasses,
    points: [
      "Communication should reduce confusion, not create it.",
      "Nova exists to simplify expression.",
    ],
  },
  {
    title: "Respect",
    icon: UserCheck,
    points: [
      "Every conversation involves two humans, two stories, two emotional states.",
      "Respect guides everything we design.",
    ],
  },
  {
    title: "Kindness",
    icon: HeartHandshake,
    points: [
      "Small shifts in tone prevent big misunderstandings.",
      "Nova encourages kinder communication everywhere.",
    ],
  },
  {
    title: "Safety",
    icon: ShieldCheck,
    points: [
      "Conversations should never cause emotional harm.",
      "Nova helps users avoid unsafe patterns and interactions.",
    ],
  },
  {
    title: "Autonomy",
    icon: HandMetal,
    points: [
      "People choose how they speak.",
      "Nova suggests, never forces.",
    ],
  },
  {
    title: "Transparency",
    icon: Square,
    points: [
      "Users always know when and how Nova is helping.",
    ],
  },
  {
    title: "Responsibility",
    icon: Hand,
    points: [
      "We take ownership for how our technology influences human interaction.",
    ],
  },
  {
    title: "Inclusivity",
    icon: Infinity,
    points: [
      "Communication norms vary.",
      "Nova is built to adapt across cultures, contexts, and emotional realities.",
    ],
  },
]

const ValuesGrid = () => {
  return (
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {values.map((item, index) => {
          return (
            <div
              key={index}
              className="border border-[#7A7A7A] rounded-lg p-6 flex flex-col gap-4 text-white justify-start items-start"
            >
              <item.icon size={26} />

              <h3 className="text-lg font-medium">{item.title}</h3>

              <ul className="flex flex-col gap-2 pl-4 text-sm text-[#BFBFBF] list-disc text-justify">
                {item.points.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>
            </div>
          )
        })}
      </div>
  )
}
export default ValuesGrid;