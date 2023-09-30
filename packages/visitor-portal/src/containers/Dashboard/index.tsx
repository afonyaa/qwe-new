import { BrandDescription } from './BrandDescription';
import { mainWrapperClasses } from './styles';
import { Auth } from './Auth';

export const Dashboard = () => {
  return (
    <main className={mainWrapperClasses}>
      <BrandDescription />
      <Auth />
    </main>
  );
};
