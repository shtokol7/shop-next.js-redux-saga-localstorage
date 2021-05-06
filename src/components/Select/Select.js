import React, {useState}  from 'react';
import Select from 'react-select';


const SelectCustom = ({
    onChange = () => { },
    isSearchable,
    placeholder,
    className,
    classNamePrefix,
    inputId,
    instanceId
}) => {

    const options = [
        { value: 'Цена по возрастанию', label: 'Цена по возрастанию' },
        { value: 'Цена по убыванию', label: 'Цена по убыванию' },
    ];

    let [selectedOption, setSelectedOption] = useState(null);

    const handleChange = (selectedOption) => {
        setSelectedOption( selectedOption );
        // console.log(`Option selected:`, selectedOption);
        // onChange ? onChange(selectedOption) : true;
        if (onChange){
            onChange(selectedOption)
        }
    };
    

    return (
        <Select
            value={selectedOption}
            onChange={handleChange}
            options={options}
            isSearchable={false}
            placeholder={placeholder}
            className={className}
            classNamePrefix={classNamePrefix}
            // menuIsOpen={true}
            
            inputId={inputId}
            instanceId={instanceId}
        />
    );
}

export default SelectCustom;
/* ссылка на документацию https://react-select.com/home */