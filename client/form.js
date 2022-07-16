import 'date-fns';
import Grid from '@material-ui/core/Grid';
import DateFnsUtils from '@date-io/date-fns';
import {
  MuiPickersUtilsProvider,
  KeyboardTimePicker
} from '@material-ui/pickers';

function Form() {
  const [selectedDate, setSelectedDate] = React.useState(
    new Date("2022-07-14T12:00:00")
  )
  
  const handleDateChange = async (date) => {
    await User.create({name: 'Tom', time: date})
    setSelectedDate(date)

    console.log('test date:', date)
  }
  
return (
    <div className='page'>
      <div className='header'></div>
      <div className='App'>
        <div className='title'>Pick the times that work best for you!</div>
        <FormComponent/>
          <MuiPickersUtilsProvider utils={DateFnsUtils}>
            <Grid container justify='space-around'>
              <KeyboardDatePicker
              disableToolbar
              variant='inline'
              format='MM/dd/yyy'
              margin='normal'
              id='date-picker'
              label='Date Picker'
              value={selectedDate}
              onChange={handleDateChange}
              KeyboardButtonProps={{
                'aria-label': 'change date'
              }}
              />
            </Grid>
          </MuiPickersUtilsProvider>
      </div>
      <div className='secondary'></div>
    </div>
  
  );
}



export default Form;
