import { PrizePlaceIdx } from '@containers/QuizGame/LeaderBoard/interfaces';
import { FC } from 'react';
import { LeadersTableProps } from './interfaces';
import goldMedal from './assets/medal-badge-prize-svgrepo-com.svg';
import silverMedal from './assets/medal-silver-badge-svgrepo-com.svg';
import bronzeMedal from './assets/medal-bronze-prize-svgrepo-com.svg';

export const LeadersTable: FC<LeadersTableProps> = ({ players }) => {
  const placeMedalIconMap: Record<PrizePlaceIdx, string> = {
    0: goldMedal,
    1: silverMedal,
    2: bronzeMedal,
  };

  return (
    <table className="text-left w-full mt-4 w-[512px]">
      <thead className="bg-slate-4 flex p-4 justify-center text-white w-full">
        <tr className="flex w-full">
          <th className=" w-1/2">Player</th>
          <th className=" w-1/2">Score</th>
        </tr>
      </thead>
      <tbody
        className="flex bg-slate-6  flex-col items-center overflow-y-scroll w-full"
        style={{ height: 512 }}
      >
        {players.map((player, index) => (
          <tr className="flex w-full mb-4">
            <td className="p-4 w-1/2">{player.name}</td>
            <td className="py-4 w-1/2 flex items-center gap-4">
              <span>{player.points}</span>
              {index < 3 && (
                <img
                  src={placeMedalIconMap[index as PrizePlaceIdx]}
                  alt="medal"
                  className="w-8"
                />
              )}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};
