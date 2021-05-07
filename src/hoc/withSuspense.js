import { Suspense } from 'react';
import Preloader from '../components/common/Preloader/Preloader';

export const WithSuspense = (Component) => {
  return (props) => {
    return (
      <Suspense fallback={<Preloader />}>
        <Component {...props} />
      </Suspense>
    );
  };
};
