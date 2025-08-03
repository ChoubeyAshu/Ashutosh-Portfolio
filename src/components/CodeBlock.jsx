import React from "react";

const CodeBlock = () => {
  return (
    <div className="relative bg-[#0f0b34] p-6 rounded-lg w-full lg:w-1/2 shadow-lg transition-transform duration-300 hover:-translate-y-2 hover:-translate-x-1 hover:rotate-1">
      <pre className="text-sm lg:text-base text-gray-300 overflow-x-auto font-mono leading-6">
        <span className="text-[#f9a826]">const</span> ashutosh = {"{"}
        <br />
        {"  "}
        <span className="text-[#f9a826]">name</span>: <span className="text-[#16f2b3]">'Ashutosh Kumar Choubey'</span>,
        <br />
        {"  "}
        <span className="text-[#f9a826]">role</span>: <span className="text-[#16f2b3]">'Full Stack Developer'</span>,
        <br />
        {"  "}
        <span className="text-[#f9a826]">education</span>: <span className="text-[#16f2b3]">'B.Tech, GNIOT'</span>,
        <br />
        {"  "}
        <span className="text-[#f9a826]">skills</span>: {"{"}
        <br />
        {"    "}
        <span className="text-[#f9a826]">frontend</span>: [<span className="text-[#16f2b3]">'React'</span>, <span className="text-[#16f2b3]">'HTML'</span>, <span className="text-[#16f2b3]">'CSS'</span>, <span className="text-[#16f2b3]">'Tailwind'</span>],
        <br />
        {"    "}
        <span className="text-[#f9a826]">backend</span>: [<span className="text-[#16f2b3]">'Node'</span>, <span className="text-[#16f2b3]">'Express'</span>, <span className="text-[#16f2b3]">'MongoDB'</span>, <span className="text-[#16f2b3]">'SQL'</span>],
        <br />
        {"    "}
        <span className="text-[#f9a826]">tools</span>: [<span className="text-[#16f2b3]">'Git'</span>, <span className="text-[#16f2b3]">'Firebase'</span>, <span className="text-[#16f2b3]">'Postman'</span>, <span className="text-[#16f2b3]">'JWT'</span>]
        <br />
        {"  "}
        {"},"}
        <br />
        {"  "}
        <span className="text-[#f9a826]">traits</span>: [<span className="text-[#16f2b3]">'Quick Learner'</span>, <span className="text-[#16f2b3]">'Problem Solver'</span>, <span className="text-[#16f2b3]">'Clean Coder'</span>],
        <br />
        {"  "}
        <span className="text-[#f9a826]">dsaPractice</span>: [<span className="text-[#16f2b3]">'LeetCode'</span>, <span className="text-[#16f2b3]">'GFG'</span>],
        <br />
        {"  "}
        <span className="text-[#f9a826]">hireable</span>: <span className="text-[#16f2b3]">function</span>() {"{"}
        <br />
        {"    "}
        <span className="text-[#f9a826]">return</span> (
        <br />
        {"      "}this.skills.frontend.length &gt;= 3 && <br />
        {"      "}this.skills.backend.includes('Node') && <br />
        {"      "}this.traits.includes('Problem Solver')
        <br />
        {"    "}
        );
        <br />
        {"  "}
        {"}"}
        <br />
        {"};"}
      </pre>
    </div>
  );
};

export default CodeBlock;
