
import { getRegisterDate } from '@/api/registerPage';
import { lazy, Suspense } from 'react';
import { ActionFunctionArgs, LoaderFunctionArgs } from 'react-router';

const LazyRegisterPageDisplay= lazy(() =>
    import('./registerPage').then(module => ({
        default: module.RegisterPageDisplay
})))

const RegisterPage = (
    props: JSX.IntrinsicAttributes & { children?: React.ReactNode }) => {
        return (
            <Suspense fallback={<p>Loading...</p>}>
                <LazyRegisterPageDisplay {...props} />
            </Suspense>
        )
    }

async function action({request}: ActionFunctionArgs) {
    const data = await request.formData();
    const payload = Object.fromEntries(data.entries()) as object;
    return null;     
}

async function loader({params, request}: LoaderFunctionArgs) {
    return getRegisterDate();
}

export default {
    loader,
	action,
    element: <RegisterPage />
}

