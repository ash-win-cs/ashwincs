import Footer from "../components/footer";
import NavBar from "../components/navbar";
import skillsModel from "../models/skillsModel";

const skills: Array<skillsModel> = [
  { id: 2, skillName: "Angular", score: 8, classification: "Dev" },
  { id: 3, skillName: "React", score: 6, classification: "Dev" },
  { id: 1, skillName: "Javascript", score: 9, classification: "Dev" },
  { id: 5, skillName: "TypeScript", score: 9, classification: "Dev" },
  { id: 4, skillName: "Ionic", score: 7, classification: "Dev" },
  { id: 6, skillName: ".Net", score: 5, classification: "Dev" },
  { id: 6, skillName: "SQL", score: 5, classification: "Dev" },
  { id: 7, skillName: "Git", score: 8, classification: "Other" },
  { id: 8, skillName: "Appium", score: 7, classification: "Test" },
  { id: 9, skillName: "Playwright", score: 7, classification: "Test" },
  { id: 10, skillName: "Robot Framework", score: 9, classification: "Test" },
];
const totalScore: number = 10;

const ProgressBar: React.FC<skillsModel> = ({ id, skillName, score }) => {
  return (
    <div key={id} className="grid grid-cols-6 md:w-[450px] my-1 space-y-1">
      <div className="col-span-2 font-mono capitalize text-ellipsis overflow-hidden whitespace-nowrap">
        {skillName}
      </div>
      <div className="col-span-4 relative w-full h-5 bg-gray-600 rounded-sm">
        <div
          className={`absolute top-0 left-0 h-full bg-gray-300 rounded-sm transition-all duration-300`}
          style={{ width: `${score * totalScore}%` }}
        ></div>
      </div>
    </div>
  );
};

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <NavBar></NavBar>
      <div className="flex-grow mx-5 md:mx-10 mt-20">
        <h1 className="text-5xl font-bold text-headings">Skills</h1>
        <div className="border-t border-zinc-600 py-6 mt-2"></div>
        {skills.map(({ id, skillName, score }) => (
          <ProgressBar
            key={id}
            id={id}
            skillName={skillName}
            score={score}
            classification={""}
          />
        ))}
      </div>
      <div className="flex-grow mx-5 md:mx-10 mt-10">
        <h1 className="text-5xl font-bold text-headings">Experience</h1>
        <div className="border-t border-zinc-600 py-6 mt-2"></div>
      </div>
      <Footer></Footer>
    </div>
  );
}
