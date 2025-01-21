interface LoginData {
    message: string;
}

export const getLogingDate = (): Promise<LoginData> => {
    return Promise.resolve({
        message: 'Login Page'
    })
}