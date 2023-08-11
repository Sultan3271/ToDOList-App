import React, { useState } from "react";
import { Button, Text, TextInput, View } from "react-native";


const Example = () => {
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const [isTimePickerVisible, setTimePickerVisibility] = useState(false);
  const [DATE, setDATE]= useState("");
  const [Time, setTime]= useState("");
  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };
  const showTimePicker = () => {
    setTimePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
    setTimePickerVisibility(false)
  };

  const handleConfirmDate = (date) => {
    const formattedDate = `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`;
    setDATE(formattedDate);
    hideDatePicker();
  };
  
  const formatTime = (time) => {
    const hours = time.getHours();
    const minutes = time.getMinutes();
    const period = hours >= 12 ? 'PM' : 'AM';
    const formattedHours = hours % 12 === 0 ? 12 : hours % 12;
    const formattedMinutes = minutes < 10 ? `0${minutes}` : minutes;
    return `${formattedHours}:${formattedMinutes} ${period}`;
  };
  const handleConfirmTime = (time) => {
    const formattedTime = formatTime(time);
    setTime(formattedTime);
    hideDatePicker();
  };

  return (
    <View>
      <Button title="Show Date Picker" onPress={showDatePicker} />
      <DateTimePickerModal
        isVisible={isDatePickerVisible}
        mode="date"
        onConfirm={handleConfirmDate}
        onCancel={hideDatePicker}
      />
      {/* <Button title="Show Time Picker" onPress={showTimePicker} /> */}
      <TextInput value={Time} placeholder="Time..."  style={{borderWidth:2,}}>

      </TextInput>
      <TextInput onFocus={showTimePicker}  placeholder="Time..."  style={{borderWidth:2,}}>

      </TextInput>
      <DateTimePickerModal
      style={{marginTop:20,}}
        isVisible={isTimePickerVisible}
        mode="time"
        onConfirm={handleConfirmTime}
        onCancel={hideDatePicker}
      />
      <Text>
        {DATE}
      </Text>
      <Text>
        {Time}
      </Text>
    </View>
  );
};

export default Example;