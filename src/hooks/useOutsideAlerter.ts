import { useEffect } from 'react';

// Hook that detects clicks outside of the passed ref (dropdown component structure)
// Used to close the dropdows on those clics (Just to have a good UX)
export const useOutsideAlerter = (ref: React.RefObject<HTMLDivElement>, callback: () => void): void => {
    useEffect(() => {
        //Alert if clicked on outside of element
        const handleClickOutside = (event: any) => {
            if (ref.current && !ref.current.contains(event.target)) {
                callback();
            }
        };

        document.addEventListener('mousedown', handleClickOutside);

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [ref]);
};
