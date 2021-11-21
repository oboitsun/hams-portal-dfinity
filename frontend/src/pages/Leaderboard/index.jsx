import React from "react";
import SectionHeaderBackNav from "../../components/SectionHeaderBackNav";
import "./leaderboard.scss";
const leaderboard = [
  { id: 1, userName: "Witch", score: 2000 },
  { id: 2, userName: "Dracula", score: 1500 },
  { id: 3, userName: "Devil", score: 1000 },
  { id: 4, userName: "Crazy Professor", score: 500 },
  { id: 5, userName: "Fish Man ", score: 200 },
  { id: 6, userName: "Ghost", score: 100 },
];
export default function Leaderboard() {
  const userId = 4;
  return (
    <div className="w-full">
      <div className="w-full h-auto relative pb-6">
        <SectionHeaderBackNav pageName="leaderboard" />
      </div>
      <div className="grid grid-cols-1 w-full    border-turf border-2  ">
        <div className=" h-20 grid-custom mx-[30px]">
          <p className="heading ">Rank</p>
          <p className="heading">Name</p>
          <p className="heading">Score</p>
        </div>
        <div className="w-full h-0.5 bg-turf mb-[30px]"></div>
        {leaderboard.map((user, i) => (
          <div
            key={user.id}
            className={`place ${
              userId === user.id ? "user" : "other"
            } grid-custom mx-[30px] bg-black/70 mb-[8px]`}
          >
            <div className="heading">{i + 1}</div>
            <div className="heading capitalize">{user.userName}</div>
            <div className="heading">{user.score}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
