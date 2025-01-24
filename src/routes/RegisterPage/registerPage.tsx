import Section from "@/components/Layout/Section/Section"
import { RegisterForm, RegisterFormProps } from "@/screens/registerForm/RegisterForm"
import clsx from "clsx"
import styles from './RegisterPage.module.scss'


export function RegisterPageDisplay({ formSettings }: RegisterFormProps) {
    return (
        <main className={clsx(styles.container)}>
            <Section>
                <RegisterForm formSettings={formSettings}/>
            </Section>
        </main>
        
    )
}