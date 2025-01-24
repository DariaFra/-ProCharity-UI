interface MainData {
    message: string;
}

export const getMainDate = (): Promise<MainData> => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve ({message: 'Main Page'})
        }, 500)    
    });
}
