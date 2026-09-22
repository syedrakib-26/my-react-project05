import React from "react";
import { useState } from "react";

import { FaReact, FaVuejs, FaNodeJs, FaJs, FaJava, FaDocker,} from "react-icons/fa";
import { RiSvelteFill, RiNextjsFill } from "react-icons/ri";
import { BiLogoPostgresql, BiLogoTailwindCss, BiLogoTypescript} from "react-icons/bi";
import { DiRedis } from "react-icons/di";
import type { Tech } from "../Type";


interface TechnologycardProps {
  tech: Tech;
  selected: boolean;
  onAdd: () => void;
  small?: boolean;
}
interface TechIconProps {
  tech: Tech;
  small?: boolean;
}

const technologies = [
  {
    id: 1,
    name: "React",
    icon: <FaReact />,
    description:
      "A declarative, component-based JavaScript library for building modern user interfaces.",
    category: "Frontend",
    level: "Beginner-Friendly",
    rating: 4.9,
    badge: "Popular",
    badgeColor: "blue",
  },
  {
    id: 2,
    name: "Vue.js",
    icon: <FaVuejs />,
    description:
      "An approachable, performant, and versatile framework for building web user interfaces.",
    category: "Frontend",
    level: "Beginner-Friendly",
    rating: 4.8,
    badge: "Versatile",
    badgeColor: "green",
  },
  {
    id: 3,
    name: "Svelte",
    icon: <RiSvelteFill />,
    description:
      "Cybernetically enhanced web apps with compile-time reactivity and zero virtual DOM overhead.",
    category: "Frontend",
    level: "Intermediate",
    rating: 4.8,
    badge: "Fast",
    badgeColor: "orange",
  },
  {
    id: 4,
    name: "Next.js",
    icon: <RiNextjsFill />,
    description:
      "The React framework for full-stack web applications with hybrid static & server rendering.",
    category: "Frontend",
    level: "Intermediate",
    rating: 4.9,
    badge: "SSR / Edge",
    badgeColor: "purple",
  },
  {
    id: 5,
    name: "Node.js",
    icon: <FaNodeJs />,
    description:
      "An asynchronous event-driven JavaScript runtime built on Chrome's V8 engine.",
    category: "Backend",
    level: "Intermediate",
    rating: 4.8,
    badge: "Standard",
    badgeColor: "green",
  },
  {
    id: 6,
    name: "PostgreSQL",
    icon: <BiLogoPostgresql />,
    description:
      "A powerful, open-source object-relational database system with proven reliability.",
    category: "Database",
    level: "Intermediate",
    rating: 4.9,
    badge: "Top SQL",
    badgeColor: "blue",
  },
  {
    id: 7,
    name: "Redis",
    icon: <DiRedis />,
    description:
      "In-memory data structure store used as a high-speed database, cache, and message broker.",
    category: "Database",
    level: "Intermediate",
    rating: 4.8,
    badge: "Cache",
    badgeColor: "red",
  },
  {
    id: 8,
    name: "JavaScript",
    icon: <FaJs />,
    description:
      "The versatile, ubiquitous scripting language powering dynamic behavior across the web.",
    category: "Language",
    level: "Beginner-Friendly",
    rating: 4.9,
    badge: "Ubiquitous",
    badgeColor: "yellow",
  },
  {
    id: 9,
    name: "TypeScript",
    icon: <BiLogoTypescript />,
    description:
      "A strongly typed programming language that builds on JavaScript for robust tooling.",
    category: "Language",
    level: "Intermediate",
    rating: 4.9,
    badge: "Essential",
    badgeColor: "blue",
  },
  {
    id: 10,
    name: "Java",
    icon: <FaJava />,
    description:
      "A secure, object-oriented programming language designed for portability and scale.",
    category: "Language",
    level: "Intermediate",
    rating: 4.6,
    badge: "Robust",
    badgeColor: "blue",
  },
  {
    id: 11,
    name: "Tailwind CSS",
    icon: <BiLogoTailwindCss />,
    description:
      "A utility-first CSS framework packed with classes that can be composed to build custom UI.",
    category: "Styling",
    level: "Beginner-Friendly",
    rating: 4.9,
    badge: "Modern",
    badgeColor: "cyan",
  },
  {
    id: 12,
    name: "Docker",
    icon: <FaDocker />,
    description:
      "A platform designed to build, share, and run containerized applications reliably.",
    category: "DevOps",
    level: "Intermediate",
    rating: 4.9,
    badge: "Containers",
    badgeColor: "cyan",
  },
];

const badgeClasses: Record<string, string> = {
  blue: "bg-blue-50 text-blue-500",
  green: "bg-emerald-50 text-emerald-500",
  orange: "bg-orange-50 text-orange-500",
  purple: "bg-purple-50 text-purple-500",
  red: "bg-red-50 text-red-500",
  yellow: "bg-yellow-50 text-yellow-600",
  cyan: "bg-cyan-50 text-cyan-600",
};

const Card = () => {
  const [stack, setStack] = useState<Tech[]>([]);

  const addToStack = (tech: Tech) => {
    if (!tech) {
      return;
    }

    const alreadySelected = stack.some((item) => item.id === tech.id);

    if (alreadySelected) {
      return;
    }

    setStack([...stack, tech]);
  };

  const removeFromStack = (id: number) => {
    setStack(stack.filter((item) => item.id !== id));
  };

  const removeAll = () => {
    setStack([]);
  };

  const isSelected = (id: number) => {
    return stack.some((item) => item.id === id);
  };

  return (
    <div className="min-h-screen bg-white px-5 py-8 md:px-10 lg:px-20">
      <div className="mb-8">
        <h1 className="text-3xl font-bold tracking-tight text-slate-900 md:text-4xl">
          Explore the <span className="text-pink-500">Technologies</span>
        </h1>

        <p className="mt-2 text-sm text-slate-400">
          Pick one technology per category to build your ideal stack.
        </p>
      </div>
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-[1fr_250px]">
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-3">
          {technologies.map((tech) => (
            <TechnologyCard
              key={tech.id}
              tech={tech}
              selected={isSelected(tech.id)}
              onAdd={() => addToStack(tech)}
            />
          ))}
        </div>

        <div className="h-fit rounded-2xl border border-slate-100 bg-white p-4 shadow-sm">
          <h2 className="text-sm font-bold text-slate-900">Your Stack</h2>

          <p className="mb-4 text-xs text-slate-400">
            {stack.length} Technology Selected
          </p>

          <div className="space-y-2">
            {stack.length === 0 ? (
              <div className="rounded-lg border border-dashed border-slate-200 py-8 text-center">
                <p className="text-xs text-slate-400">
                  No technologies selected
                </p>
              </div>
            ) : (
              stack.map((tech) => (
                <div
                  key={tech.id}
                  className="flex items-center justify-between rounded-lg border border-slate-200 px-3 py-3"
                >
                  <div className="flex items-center gap-3">
                    <TechIcon tech={tech} small />

                    <div>
                      <p className="text-xs font-semibold text-slate-700">
                        {tech.name}
                      </p>

                      <p className="text-[10px] text-slate-400">
                        {tech.category}
                      </p>
                    </div>
                  </div>

                  <button
                    onClick={() => removeFromStack(tech.id)}
                    className="text-lg text-slate-400 transition hover:text-red-500"
                  ></button>
                </div>
              ))
            )}
          </div>

          {/* Remove All */}
          <button
            onClick={removeAll}
            disabled={stack.length === 0}
            className={`mt-4 w-full rounded-lg border py-2.5 text-sm font-semibold transition ${
              stack.length === 0 ? "cursor-not-allowed border-slate-100 text-slate-300" : "border-red-200 text-red-500 hover:bg-red-50" }`}> Remove All</button>
        </div>
      </div>
    </div>
  );
};

/* Technology Card */
function TechnologyCard({ tech, selected, onAdd }: TechnologycardProps) {
  return (
    <div
      className={`rounded-2xl border bg-white p-5 shadow-sm transition duration-200 hover:-translate-y-1 hover:shadow-md ${
        selected ? "border-pink-300 ring-1 ring-pink-100" : "border-slate-100"
      }`}
    >
      {/* Top Row */}
      <div className="mb-4 flex items-start justify-between">
        <TechIcon tech={tech} />

        <span
          className={`rounded-full px-2.5 py-1 text-[10px] font-semibold ${
            badgeClasses[tech.badgeColor]
          }`}
        >
          {tech.badge}
        </span>
      </div>

      {/* Name */}
      <h2 className="text-lg font-bold text-slate-800">{tech.name}</h2>

      {/* Description */}
      <p className="mt-2 min-h-[60px] text-xs leading-5 text-slate-400">
        {tech.description}
      </p>

      {/* Info */}
      <div className="mt-4 flex items-center justify-between">
        <span className="rounded bg-slate-50 px-2 py-1 text-[10px] font-medium text-slate-500">
          {tech.category}
        </span>

        <span className="text-[10px] font-medium text-slate-400">
          {tech.level}
        </span>

        <span className="text-xs font-semibold text-slate-600">
          <span className="text-yellow-400">★</span> {tech.rating}
        </span>
      </div>

      {/* Button */}
      <button
        onClick={onAdd}
        disabled={selected}
        className={`mt-4 w-full rounded-lg py-2.5 text-xs font-semibold transition ${
          selected
            ? "cursor-not-allowed bg-slate-200 text-slate-500"
            : "bg-slate-950 text-white hover:bg-slate-800"
        }`}
      >
        {selected ? "Added to Stack" : "Add to Stack"}
      </button>
    </div>
  );
}

/* Technology Icon */
function TechIcon({ tech, small = false }: TechIconProps) {
  const iconSize = small ? "h-8 w-8 text-xs" : "h-9 w-9 text-sm";

  return (
    <div
      className={`flex ${iconSize} items-center justify-center rounded-lg bg-slate-50 font-bold text-slate-700`}
    >
      {tech.icon}
    </div>
  );
}

export default Card;
