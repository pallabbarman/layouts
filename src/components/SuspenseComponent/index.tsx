import CircularProgress from 'components/CircularProgress';
import { Suspense, type ComponentType } from 'react';

const SuspenseComponent =
    <P extends object>(Component: ComponentType<P>) =>
    (props: P) => (
        <Suspense fallback={<CircularProgress />}>
            <Component {...props} />
        </Suspense>
    );

export default SuspenseComponent;
