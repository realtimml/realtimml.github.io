import { SiOpencv, SiTailwindcss, SiUltralytics } from 'react-icons/si'
import { TbBrandTypescript, TbLambda } from 'react-icons/tb'
import { DiPython, DiSwift } from 'react-icons/di'
import { LuBrainCircuit } from 'react-icons/lu'
import { FaAws } from 'react-icons/fa'
import {
  RiReactjsLine,
  RiFigmaLine,
  RiCss3Line,
  RiJavascriptLine,
  RiHtml5Line,
} from 'react-icons/ri'

const TAG_ICONS: Record<string, React.ReactNode> = {
  React: <RiReactjsLine className="text-2xl" />,
  TypeScript: <TbBrandTypescript className="text-2xl" />,
  Tailwind: <SiTailwindcss className="text-2xl" />,
  Figma: <RiFigmaLine className="text-2xl" />,
  Swift: <DiSwift className="text-3xl" />,
  HTML: <RiHtml5Line className="text-2xl" />,
  JavaScript: <RiJavascriptLine className="text-2xl" />,
  CSS: <RiCss3Line className="text-2xl" />,
  'HTML/JS/CSS': <RiHtml5Line className="text-2xl" />,
  'AWS Lambda': <TbLambda className="text-2xl" />,
  'AWS Bedrock': <LuBrainCircuit className="text-2xl" />,
  'AWS API Gateway': <FaAws className="text-2xl" />,
  Python: <DiPython className="text-2xl" />,
  OpenCV: <SiOpencv className="text-2xl" />,
  Ultralytics: <SiUltralytics className="text-2xl" />,
  DynamoDB: <FaAws className="text-2xl" />,
}

const pillClassName =
  'flex items-center gap-1.5 border-2 border-[#1e1e1e] rounded-full px-3 py-1 text-xl font-medium text-[#1e1e1e]'

export function TechStackPills({ tags }: { tags: string[] }) {
  if (tags.length === 0) return null

  // Figma layout: first tag on its own row, remaining tags on the row below
  if (tags.length <= 3) {
    return (
      <div className="mt-auto pt-4 flex flex-col items-start gap-2">
        <span className={pillClassName}>
          {TAG_ICONS[tags[0]] ?? null}
          {tags[0]}
        </span>
        {tags.length > 1 && (
          <div className="flex flex-wrap gap-2">
            {tags.slice(1).map((tag) => (
              <span key={tag} className={pillClassName}>
                {TAG_ICONS[tag] ?? null}
                {tag}
              </span>
            ))}
          </div>
        )}
      </div>
    )
  }

  // 4+ tags: all pills wrap naturally based on column width
  return (
    <div className="mt-auto pt-4 flex flex-wrap gap-2">
      {tags.map((tag) => (
        <span key={tag} className={pillClassName}>
          {TAG_ICONS[tag] ?? null}
          {tag}
        </span>
      ))}
    </div>
  )
}
