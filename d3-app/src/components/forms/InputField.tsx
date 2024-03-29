import { useState, ChangeEvent } from "react"
import { toTitleCase } from '../../utils/stringsUtils';

type Props = {
    titlecase?: boolean;
    isDisabled?: boolean;
    isRequired?: boolean;
    placeholder?: string;
    type?: string;
}

export function InputField({ titlecase = true, isDisabled = false, isRequired = false, placeholder, type = 'string' }: Props) {
    const [value, setValue] = useState<string>('');
    const [isValid, setIsValid] = useState<boolean>(true);

    function handleChange(e: ChangeEvent<HTMLInputElement>) {
        if (isDisabled) return;
        if (isRequired) !e.target.value ? setIsValid(false) : setIsValid(true);  

        const val = titlecase ? toTitleCase(e.target.value) : e.target.value;
        setValue(val);
    }

    const baseClasses = 'w-full p-2 text-sm rounded-md border-[1px] shadow-md shadow-black text-neutral-50 dark:bg-neutral-800';
    const disabledClasses = isDisabled && 'dark:bg-neutral-700 border-neutral-700 shadow-none text-neutral-500';
    const requiredClasses = !isValid && !isDisabled && 'border-red-600 border-solid text-red-600';

    return (
        <>
            <input 
                type={ type } 
                value={ value } 
                placeholder={ isDisabled ? '' : placeholder } 
                disabled={ isDisabled } 
                onChange={ handleChange } 
                onBlur={ handleChange }
                className={ `${baseClasses} ${ isRequired ? requiredClasses : 'border-dashed'} ${ disabledClasses }` } />
        </>
    )
}