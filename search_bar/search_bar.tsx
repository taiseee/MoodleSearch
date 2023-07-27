import React from 'react';
import AsyncSelect from 'react-select/async';

interface OptionType {
    value: string;
    label: string;
}

export const SearchBar: React.FC = () => {

    const getOpt = async (inputValue: string): Promise<OptionType[]> => {
        const backet: { [key: string]: string } = await chrome.storage.local.get();

        const options: OptionType[] = Object.keys(backet).map((key) => {
            return { value: key, label: backet[key] }
        });

        const filteredOptions: OptionType[] = options.filter(option => option.label.toLowerCase().includes(inputValue.toLowerCase()));

        // 逆順sort
        filteredOptions.reverse();

        return filteredOptions;
    }

    const openWindow = (event: OptionType) => {
        window.open(`https://moodle.s.kyushu-u.ac.jp/course/view.php?id=${event.value}`, '_self')
    }

    return (
        <div style={{ width: '50vw' }}>
            <AsyncSelect
                placeholder="コースを検索"
                noOptionsMessage={() => "そのようなコースには登録されていません"}
                loadOptions={getOpt}
                isClearable={true}
                onChange={openWindow}
                cacheOptions
                defaultOptions
            />
        </div>
    )
}
