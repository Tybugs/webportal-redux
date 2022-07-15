import { Suspense } from 'react';

// project imports
// eslint-disable-next-line no-unused-vars
import Loader from './Loader';

// ==============================|| LOADABLE - LAZY LOADING ||============================== //

// eslint-disable-next-line no-unused-vars
const Loadable = (Component) => (props) =>
    (
        <Suspense fallback={<Loader />}>
            <Component {...props} />
        </Suspense>
    );

export default Loadable;
