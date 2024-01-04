import { useState, ChangeEvent } from "react"
import { capitalise } from '../../utils/stringsUtils';

type Props = {
    autocaps?: boolean;
    isDisabled?: boolean;
    placeholder?: string;
    type?: string;
}

export function InputField({ autocaps = true, isDisabled = false, placeholder, type = 'string' }: Props) {
    const [value, setValue] = useState<string>('');

    function handleChange(e: ChangeEvent<HTMLInputElement>) {
        if (isDisabled) return;
        const val = autocaps ? capitalise(e.target.value) : e.target.value;
        setValue(val);
    }

    const disabledClasses = isDisabled && 'dark:bg-neutral-700 border-neutral-700 shadow-none text-neutral-500';

    return (
        <>
            <input 
                type={ type } 
                value={ value } 
                placeholder={ isDisabled ? '' : placeholder } 
                disabled={ isDisabled } 
                onChange={ handleChange } 
                className={ `w-full p-2 text-sm rounded-md border-[1px] border-dashed shadow-md shadow-black text-neutral-50 dark:bg-neutral-800 ${ disabledClasses }` } />
        </>
    )
}