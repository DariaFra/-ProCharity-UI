
import { getMainDate } from '@/api/mainPage';
import { lazy, Suspense } from 'react';
import { ActionFunctionArgs, Form, LoaderFunctionArgs, useLoaderData } from 'react-router'

const LazyMainPageDisplay = lazy(() =>
    import('./MainPage').then(module => ({
        default: module.MainPageDisplay
})))


const MainPage = (
    props: JSX.IntrinsicAttributes & { children?: React.ReactNode }) => {

        return (
            <Suspense fallback={<p>Loading...</p>}>
                 <LazyMainPageDisplay {...props} />
            </Suspense>
        )
    }

// async function action({params, request}: ActionFunctionArgs) {
//     const data = await request.formData();
//     const payload = Object.fromEntries(data.entries()) as object;
//     return null;
// }


async function loader({params, request}: LoaderFunctionArgs) {
    return getMainDate();
}

export default {
    loader,
    element: <MainPage />
}