import { useEffect, useState } from "react";
import { toast } from "react-toastify";


import { FaReact, FaVuejs, FaNodeJs, FaJs, FaJava, FaDocker,} from "react-icons/fa";
import { RiSvelteFill, RiNextjsFill } from "react-icons/ri";
import { BiLogoPostgresql, BiLogoTailwindCss, BiLogoTypescript} from "react-icons/bi";
import { DiRedis } from "react-icons/di";
import { CiStar } from "react-icons/ci";

import type { Tech } from "../Type";



const icons ={
  React:<FaReact />,
  "Vue.js": <FaVuejs />,
  Svelte: <RiSvelteFill />,
  "Next.js":<RiNextjsFill />,
  "Node.js":<FaNodeJs />,
  PostgreSQL: <BiLogoPostgresql />,
  Redis:<DiRedis />,
  JavaScript: <FaJs />,
  TypeScript: <BiLogoTypescript />,
  Java: <FaJava />,
  TailwindCSS: <BiLogoTailwindCss />,
  Docker: <FaDocker />,

};




interface TechnologyCardProps {
  tech: Tech;
  selected: boolean;
  onAdd: () => void;
  small?: boolean;
}
interface TechIconProps {
  tech: Tech;
  small?: boolean;
}


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

  const [technologies, setTechnologies] = useState<Tech[]>([]);


useEffect(() => {
  fetch("/data.json")
    .then((res) => res.json())
    .then((data) => setTechnologies(data));
}, []);

  const addToStack = (tech: Tech) => {
    if (!tech) {
      return;
    }

    const alreadySelected = stack.some((item) => item.id === tech.id);

    if (alreadySelected) {
        toast.warning(`${tech.name} is already selected!`);
      return;
    }

    setStack([...stack, tech]);
    toast.success(`${tech.name} added to your stack!`);
  };



  const removeFromStack = (id: number) => {
    const removedTech = stack.find(
    (item) => item.id === id
  );
    setStack(stack.filter((item) => item.id !== id));


  if (removedTech) {
    toast.info(`${removedTech.name} removed from your stack.`);
  
}
};



const removeAll = () => {
     if (stack.length === 0) {
    toast.warning("Your stack is already empty!");
    return;
  }

  setStack([]);

  toast.info("All technologies removed.");
};



const isSelected = (id: number) => {
    return stack.some((item) => item.id === id);
};




  return (

    <div className="min-h-screen bg-white px-5 py-8 md:px-10 lg:px-20">

      <div className="mb-6">
        <h1 className="text-3xl font-bold tracking-tight text-slate-900 md:text-4xl">
          Explore the <span className="text-pink-500">Technologies</span> </h1>

        <p className="mt-2 text-sm text-slate-400"> Pick one technology per category to build your ideal stack. </p>

      </div>
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-[1fr_250px]">
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-3">
          
          {technologies.map((tech) => (
            <TechnologyCard key={tech.id} tech={tech}  selected={isSelected(tech.id)}
              onAdd={() => addToStack(tech)} />
     ))}
        </div>


        <div className="h-fit rounded-2xl border border-slate-100 bg-white p-4 shadow-sm">
          <h2 className="text-sm font-bold text-slate-900">Your Stack</h2>

          <p className="mb-4 text-xs text-slate-400">
            {stack.length} Technology Selected </p>


          <div className="space-y-2">
            {stack.length === 0 ? (
              <div className="rounded-lg border border-dashed border-slate-200 py-8 text-center">
                <p className="text-xs text-slate-400"> No technologies selected </p>
            </div>


            ) : (
              stack.map((tech) => (
                <div key={tech.id}
                  className="flex items-center justify-between rounded-lg border border-slate-200 px-3 py-3">
                  <div className="flex items-center gap-3">

                    <TechIcon tech={tech} small />

                    <div>
                      <p className="text-xs font-semibold text-slate-700"> {tech.name} </p>

                      <p className="text-[10px] text-slate-400"> {tech.category} </p>

                    </div>

                  </div>

                  <button onClick={() => removeFromStack(tech.id)} className="text-lg text-slate-400 transition hover:text-red-600"> </button>

                 <button onClick={() => removeFromStack(tech.id)} className="text-lg text-slate-400 transition hover:text-red-500"
                    title={`Remove ${tech.name}`}> × </button>

                </div>


              ))


            )}


          </div>

          <button
            onClick={removeAll} disabled={stack.length === 0} className={`mt-4 w-full rounded-lg border py-2.5 text-sm font-semibold transition ${stack.length === 0 ? "cursor-not-allowed border-slate-100 text-slate-300" : "border-red-200 text-red-500 hover:bg-red-50" }`}> Remove All  </button>


        </div>

      </div>


    </div>


  );

};





function TechnologyCard({ tech, selected, onAdd }: TechnologyCardProps) {

  return (
    <div className={`rounded-2xl border bg-white p-5 shadow-sm transition duration-200 hover:-translate-y-1 hover:shadow-md ${
        selected ? "border-pink-300 ring-1 ring-pink-100" : "border-slate-100"}`}>

      <div className="mb-4 flex items-start justify-between">

        <TechIcon tech={tech} />

        <span className={`rounded-full px-2.5 py-1 text-[10px] font-semibold ${badgeClasses[tech.badgeColor]}`}> {tech.badge}</span>
      
      </div>


      <h2 className="text-lg font-bold text-slate-900">{tech.name}</h2>

      <p className="mt-2 min-h-10 text-xs leading-5 text-stone-700"> {tech.description} </p>

      <div className="mt-4 flex items-center justify-between">

        <span className="rounded bg-slate-50 px-2 py-1 text-[10px] font-medium text-slate-700"> {tech.category} </span>

        <span className="text-[10px] font-medium text-slate-600"> {tech.level}
        </span>

        <span className="flex items-center gap-1 text-xs font-semibold text-slate-600">

          <CiStar className="text-base text-yellow-500 "/> 

          <span>{tech.rating}</span>
        </span>
      </div>


      <button
        onClick={onAdd} disabled={selected}
        className={`mt-4 w-full rounded-lg py-2.5 text-xs font-semibold transition ${selected ? "cursor-not-allowed bg-slate-200 text-slate-500" : "bg-slate-950 text-white hover:bg-slate-800" }`}>

        {selected ? "Added to Stack" : "Add to Stack"}

      </button>

    </div>
  );

}




function TechIcon({ tech, small = false }: TechIconProps) {
  const iconSize = small ? "h-8 w-8 text-xs" : "h-9 w-9 text-sm";

  return (
    <div className={`flex ${iconSize} items-center justify-center rounded-lg bg-slate-50 font-bold text-slate-700`}>
      {icons[tech.name as keyof typeof icons]}

  
    </div>
  );
}

export default Card;
