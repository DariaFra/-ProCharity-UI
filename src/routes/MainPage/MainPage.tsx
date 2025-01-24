import Section from '@/components/Layout/Section/Section';
import { Button } from '@/components/Common/Action/action';
import { Modal, Trigger } from '@/components/Layout/Modal/modal';
import { FormProps } from 'react-router';
import { Card } from '@/components/Layout/Card/Card';
import { RegisterForm } from '@/screens/registerForm/RegisterForm';
import { LoginForm } from '@/screens/loginForm/LoginForm';
import clsx from 'clsx';
import styles from './MainPage.module.scss'
import { useState } from 'react';

export type MainPageProps = {
    className?: string,
    formSettings?: Omit<FormProps, 'children'>
};

export function MainPageDisplay({ className, formSettings }: MainPageProps) {
  const [isLoginOpen, setIsLoginOpen] = useState(false)
  
  return (
  <main className={clsx(styles.container, className)}>
    <Section>
            <Trigger modal={
              <Modal isOpen={isLoginOpen} onClose={()=> setIsLoginOpen(false)}>
                <Card>
                    <LoginForm formSettings={formSettings} />
                </Card>
            </Modal>}>
            
            <Button variant='link' onClick={()=> setIsLoginOpen(true)}>Sing In</Button>
            </Trigger>

            <Trigger modal={<Modal isOpen={false} onClose={() => console.log('Modal closed')}>
                <Card>
                    <RegisterForm formSettings={formSettings} />
                </Card>
            </Modal>}>
            <Button variant='link'>Sing Up</Button>
            </Trigger>
        </Section> 
        </main>
    )
}