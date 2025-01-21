// import { LoginForm, LoginFormProps } from '@/screens/loginForm/loginForm'
import { LoginForm,LoginFormProps } from '@/screens/loginForm/LoginForm'
import Section from '../../components/Layout/Section/Section'
import { Layout } from "@/ui"

export function LoginPage({ formSettings }: LoginFormProps) {
    return <main>
            <Section>
            <LoginForm formSettings={formSettings}/>
        </Section>
        </main>
}