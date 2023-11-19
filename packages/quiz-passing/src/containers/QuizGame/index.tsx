import { FC } from 'react';
import { QuizGameProps } from './interfaces';
import { useQuery } from '@tanstack/react-query';
import { getQuizStateQuery } from './queries/getQuizStateQuery';
import { Starting } from './Starting';
import { Pending } from './Pending';
import { QuizStatus } from '@coreTypes/quriesModels/QuizStatus';
import { Playing } from './Playing';
import { LeaderBoard } from './LeaderBoard';
import { Finishing } from './Finishing';

export const QuizGame: FC<QuizGameProps> = ({ lobbyId }) => {
  const { data, isLoading } = useQuery({
    queryKey: ['quizState', lobbyId],
    queryFn: () => getQuizStateQuery(lobbyId),
    refetchInterval: 1000,
    refetchOnWindowFocus: false,
  });

  if (isLoading || !data) {
    return null;
  }

  const status = data.status;
  const statusViewMap = {
    [QuizStatus.Pending]: <Pending />,
    [QuizStatus.Starting]: (
      <Starting
        pinCode={data.pinCode}
        players={data.players}
        role={data.role}
        playerName={data.playerName}
      />
    ),
    [QuizStatus.Playing]: (
      <Playing currentQuestion={data.currentQuestion} role={data.role} />
    ),
    [QuizStatus.LeaderBoard]: (
      <LeaderBoard
        players={data.players}
        totalQuestions={data.totalQuestions}
        currentQuestion={data.currentQuestion}
        role={data.role}
        playerScore={data.playerScore}
      />
    ),
    [QuizStatus.Finished]: (
      <Finishing role={data.role} players={data.players} />
    ),
  };

  return <main className="h-full w-full">{statusViewMap[status]}</main>;
};
