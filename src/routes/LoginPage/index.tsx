import { getLoginDate } from '@/api/loginPage';
import { lazy, Suspense } from 'react'
import { ActionFunctionArgs, LoaderFunctionArgs, redirect } from 'react-router';

const LazyLoginPageDisplay = lazy(() =>
    import('./loginPage').then(module => ({
        default: module.LoginPageDisplay
})))

const LoginPage = (
    props: JSX.IntrinsicAttributes & { children?: React.ReactNode }) => {
        return (
            <Suspense fallback={<p>Loading...</p>}>
                <LazyLoginPageDisplay {...props} />
            </Suspense>
        )
    }

async function action({request}: ActionFunctionArgs) {
    const data = await request.formData();
    const payload = Object.fromEntries(data.entries()) as object;
    return null;        
}

async function loader({params, request}: LoaderFunctionArgs) {
    console.log (request)
    return getLoginDate();
}

export default {
    loader,
	action,
    element: <LoginPage />
}