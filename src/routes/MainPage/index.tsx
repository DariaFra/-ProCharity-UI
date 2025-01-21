// import { ReactNode, Suspense } from 'react'


// import { Form } from '@/components/Form/Form';
import { result } from 'lodash';
import { lazy, Suspense } from 'react';
import { ActionFunctionArgs, Form, LoaderFunctionArgs, useLoaderData } from 'react-router'
import { MainPage } from './mainPage';

const LazyMainPage = lazy(() =>
    import('./mainPage').then(module => ({
        default: module.MainPage
})))


// const MainPage = (
//     props: JSX.IntrinsicAttributes & { children?: React.ReactNode }) => {
//         const data = useLoaderData<LoaderResponse>();
//         // const { Tag = 'form', className, children } = props.formSettings;

//         return (
//             <Suspense fallback={<p>Loading...</p>}>
//                 <LazyMainPage {...props} formSettings={{
//                     Tag: Form,
//                 }} >  
//                   {/* {typeof Tag === 'string' ? (
//                     <Tag className={className}>{children}</Tag>
//                 ) : (
//                     <Tag className={className}>{children}</Tag>
//                 )} */}
//                 </LazyMainPage>
//             </Suspense>
//         )
//     }

async function action({params, request}: ActionFunctionArgs) {
    const data = await request.formData();
    const payload = Object.fromEntries(data.entries()) as object
    return null;
    
}

export type LoaderResponse = Awaited<ReturnType<typeof loader>>

async function loader({params, request}: LoaderFunctionArgs) {
    return Promise.resolve({
        result: 'Ok'
    })
}

export default {
    loader,
    action,
    element: <MainPage />
}