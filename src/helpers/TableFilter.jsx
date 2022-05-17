import { useEffect, useMemo, useState } from 'react';
import Select from 'react-select';

function SelectColumnFilter({
  column: { filterValue, setFilter, preFilteredRows, id },
}) {
  // Calculate the options for filtering
  // using the preFilteredRows

  const [value, setValue] = useState(null);
  useEffect(() => {
    if (filterValue === undefined) {
      setValue(null);
    }
  }, [filterValue]);

  const options = useMemo(() => {
    const options = new Set();
    preFilteredRows.forEach((row) => {
      options.add(row.values[id]);
    });
    return [...options.values()];
  }, [id, preFilteredRows]);

  const newOptions = [];
  options.forEach((element) => {
    if (element === '') {
      newOptions.push({ value: '', label: 'Not filled' });
    } else {
      newOptions.push({ value: element, label: element });
    }
  });
  // Render a multi-select box
  return (
    <>
      <p>{id} :</p>
      <Select
        theme={(theme) => ({
          ...theme,
          borderRadius: 5,
          colors: {
            ...theme.colors,
            primary25: 'lightgray',
            primary: 'lightgray',
          },
        })}
        options={newOptions}
        value={value}
        onChange={(selectedOption) => {
          setValue(selectedOption);
          setFilter(selectedOption?.value || undefined);
        }}
      />
    </>
  );
}

export default SelectColumnFilter;
