import React from "react";
import SearchBarStyle from "./style.module.css";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DesktopDatePicker } from "@mui/x-date-pickers/DesktopDatePicker";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";

export default function VenueSearchBar() {
  const [value, setValue] = React.useState(new Date("2014-08-18T21:11:54"));

  const handleDateChange = (newValue) => {
    setValue(newValue);
  };

  const [options, setOptions] = React.useState("");

  const handleOptionChange = (event) => {
    setOptions(event.target.value);
  };

  return (
    <div className={SearchBarStyle.venueSearchBarContainer}>
      <TextField className={SearchBarStyle.zipCode} label="*ZIP CODE" />
      <LocalizationProvider
        dateAdapter={AdapterDateFns}
        className={SearchBarStyle.datePicker}
      >
        <DesktopDatePicker
          label="RESERVATION DATE"
          inputFormat="MM/dd/yyyy"
          value={value}
          onChange={handleDateChange}
          renderInput={(params) => <TextField {...params} />}
        />
      </LocalizationProvider>
      <Box className={SearchBarStyle.typeField}>
        <FormControl fullWidth>
          <InputLabel id="venue-type">*TYPE</InputLabel>
          <Select
            labelId="options"
            id="options"
            label="options"
            value={options}
            onChange={handleOptionChange}
          >
            <MenuItem value={"LOUNGE"}>LOUNGE</MenuItem>
            <MenuItem value={"BAR"}>BAR</MenuItem>
            <MenuItem value={"RESTAURANT"}>RESTAURANT</MenuItem>
            <MenuItem value={"BANQUET HALL"}>BANQUET HALL</MenuItem>
          </Select>
        </FormControl>
      </Box>
      <TextField
        className={SearchBarStyle.venueCapacity}
        label="*VENUE CAPACITY"
      />
      <button className={SearchBarStyle.updateButton}>UPDATE</button>
    </div>
  );
}
