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
import Button from "@mui/material/Button";

export default function VenueSearchBar() {
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
          renderInput={(params) => <TextField {...params} />}
        />
      </LocalizationProvider>
      <Box className={SearchBarStyle.typeField}>
        <FormControl fullWidth>
          <InputLabel id="venue-type">*TYPE</InputLabel>
          <Select labelId="options" id="options" label="options">
            <MenuItem>LOUNGE</MenuItem>
            <MenuItem>BAR</MenuItem>
            <MenuItem>RESTAURANT</MenuItem>
            <MenuItem>BANQUET HALL</MenuItem>
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
