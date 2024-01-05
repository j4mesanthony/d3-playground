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

    function handleChange(e: ChangeEvent<HTMLInputElement>) {
        if (isDisabled) return;
        const val = titlecase ? toTitleCase(e.target.value) : e.target.value;
        setValue(val);
    }

    const disabledClasses = isDisabled && 'dark:bg-neutral-700 border-neutral-700 shadow-none text-neutral-500';

    const requiredClasses = isRequired && !isDisabled && 'border-red-600 border-solid text-red-600';

    return (
        <>
            <input 
                type={ type } 
                value={ value } 
                placeholder={ isDisabled ? '' : placeholder } 
                disabled={ isDisabled } 
                onChange={ handleChange } 
                className={ `w-full p-2 text-sm rounded-md border-[1px] shadow-md shadow-black text-neutral-50 dark:bg-neutral-800 ${ isRequired ? requiredClasses : 'border-dashed'} ${ disabledClasses }` } />
        </>
    )
}