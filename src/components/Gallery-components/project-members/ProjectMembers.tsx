import Card from "./Card";

type Member = {
  name: string;
  stack: string;
};

const ProjectMembers = () => {
  const card: Member[] = [
    { name: "Helen Oyilawu", stack: "Frontend Developer" },
    { name: "Veronica Oyilawu", stack: "Product design" },
    { name: "Aladi Oyilawu", stack: "Backend Developer" },
    { name: "Helen Oyilawu", stack: "Frontend Developer" },
  ];

  return (
    <div className="mt-32 w-full md:px-8 px-3 flex items-center justify-center flex-col">
      <h2 className="text-yellow-400 uppercase font-bold">Committee Members</h2>
      <h2 className="md:text-5xl font-bold capitalize text-gray-800 mb-5 text-3xl text-center">
        Project Team Members
      </h2>

      <div className="md:w-[90%] w-[100%] flex flex-wrap p-3 md:gap-7 gap-4 items-center justify-center mb-5">
        {card.map((member, i) => (
          <Card key={i} name={member.name} stack={member.stack} />
        ))}
      </div>
    </div>
  );
};

export default ProjectMembers;
