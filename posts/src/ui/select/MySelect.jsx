const MySelect = ({ options, defaultValue, value, onChange, ...props }) => {
  return (
    <select
      {...props}
      className="select"
      value={value}
      onChange={(e) => onChange(e.target.value)}
    >
      <option disabled value="">
        {defaultValue}
      </option>
      {options.map((option) => {
        return (
          <option key={option.id} value={option.value}>
            {option.name}
          </option>
        );
      })}
    </select>
  );
};

export default MySelect;
