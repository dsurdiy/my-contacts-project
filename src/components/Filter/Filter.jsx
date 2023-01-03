import PropTypes from 'prop-types';
import { FilterInput } from './Filter.styled';

export const Filter = ({ value, onChange }) => {
  return (
    <FilterInput
      type="text"
      name="filter"
      placeholder="Search..."
      value={value}
      onChange={onChange}
    />
  );
};

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};
