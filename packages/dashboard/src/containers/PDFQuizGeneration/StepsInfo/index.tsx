import { FC } from 'react';

export const StepsInfo: FC = () => {
  return (
    <div className="stats-vertical shadow hidden md:stats">
      <div className="stat place-items-center">
        <div className="stat-title">Choose</div>
        <div className="stat-value text-secondary">PDF</div>
        <div className="stat-desc text-secondary">20MB max</div>
      </div>
      <div className="stat place-items-center">
        <div className="stat-title">Preview</div>
        <div className="stat-desc text-center">
          Check text content of pdf <br />
          Edit, if necessary
        </div>
      </div>
      <div className="stat place-items-center">
        <div className="stat-title">Generate</div>
        <div className="stat-desc text-center">
          Click <strong>"Generate quiz"</strong>
          <br />
          It will make quiz for you
        </div>
        <div className="stat-desc text-secondary">20 questions max</div>
      </div>
    </div>
  );
};
