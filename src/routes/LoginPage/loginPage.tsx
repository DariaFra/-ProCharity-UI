import { LoginForm, LoginFormProps } from '@/screens/loginForm/LoginForm';
import Section from '../../components/Layout/Section/Section';
import clsx from 'clsx';
import styles from './LoginPage.module.scss'
import { useLoaderData } from 'react-router';

export function LoginPageDisplay({ formSettings }: LoginFormProps) {
    const data = useLoaderData();
    return (
        <main  className={clsx(styles.container)}>
            <Section>
                <LoginForm formSettings={formSettings}/>
            </Section>
        </main>
    )
}