import React from 'react';
import AsyncSelect from 'react-select/async';

interface OptionType {
    value: string;
    label: string;
}

export const SearchBar: React.FC = () => {

    const getCourse = async (inputValue: string): Promise<OptionType[]> => {
        const backet: { [key: string]: string } = await chrome.storage.local.get();

        const options: OptionType[] = Object.keys(backet).map((key) => {
            return { value: key, label: backet[key] }
        });

        const filteredOptions: OptionType[] = options.filter(option => option.label.toLowerCase().includes(inputValue.toLowerCase()));

        return filteredOptions;
    }

    const promiseOptions = (inputValue: string) =>
        new Promise<OptionType[]>(resolve => {
            resolve(getCourse(inputValue));
        });

    const openWindow = (event: OptionType) => {
        window.open(`https://moodle.s.kyushu-u.ac.jp/course/view.php?id=${event.value}`, '_self')
    }

    return (
        <div style={{ width: '50vw' }}>
            <AsyncSelect
                placeholder="コースを検索"
                noOptionsMessage={() => "そのようなコースには登録されていません"}
                loadOptions={promiseOptions}
                isClearable={true}
                onChange={openWindow}
                cacheOptions
                defaultOptions
            />
        </div>
    )
}
