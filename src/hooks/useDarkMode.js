import { useLocalStorage } from './useLocalStorage';
import { useEffect } from 'react'

export const useDarkMode = (key) => {

    const [value, setValue] = useLocalStorage(key)

    useEffect(() => {

        if(value === true){
        document.body.classList.add('dark-mode')
        } else {
            document.body.classList.remove('dark-mode')
        }

    }, [value, setValue]); 

    return [value, setValue]

}