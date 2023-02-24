import SkillTree from "./components/SkillTree";
import UnattachedSkills from "./components/UnattachedSkills";

function App() {
  return (
    <div className="fixed w-screen h-screen">
      <UnattachedSkills/>
      <SkillTree/>
    </div>
  );
}

export default App;
