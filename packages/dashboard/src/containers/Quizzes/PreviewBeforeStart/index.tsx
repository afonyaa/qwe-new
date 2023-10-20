import { FC } from 'react';

export const PreviewBeforeStart: FC = () => {
  return (
    <div className="h-full flex flex-col">
      <div className="font-bold text-3xl">
        <h1>React</h1>
        <hr className="my-3" />
      </div>
      <div className="grow overflow-y-auto"></div>
      <div className="overflow-hidden font-semibold text-xl text-slate-200 bg-purple-950 opacity-70 rounded-md">
        <div className="p-2 flex rounded-md justify-center items-center backdrop-blur-md w-full h-full">
          Start!
        </div>
      </div>
    </div>
  );
};
