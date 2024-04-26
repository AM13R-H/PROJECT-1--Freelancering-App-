import DatePicker from 'react-multi-date-picker';

function DatePickerField({ label, date, setDate }) {
  return (
    <div>
      <span>{label}</span>
      <DatePicker
        containerClassName="w-full"
        inputClass="w-full"
        calendarPosition="bottom-center"
        value={date}
        onChange={() => setDate(date)}
        format='YYYY/MM/DD'
        // calendar="persian"
        // locale={"persian_fa"}
      />
    </div>
  );
}

export default DatePickerField;
