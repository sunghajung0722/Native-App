import React, { useState } from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import {
  MultiselectDropdown,
} from 'sharingan-rn-modal-dropdown';

export const data = [
  {
    value: '1',
    label: 'Incomplete',
  },
  {
    value: '2',
    label: 'Completed',
  },
];


const Greetings = () => {

  const [valueMS, setValueMS] = useState<string[]>([]);

  const onChangeMS = (value: string[]) => {
    setValueMS(value);
  };

  return (
    <View
      style={{
        flexDirection: 'column',
        height: '100%',
      }}
    >
      <ScrollView >
        <View style={styles.container}>
          <MultiselectDropdown
            label="Status"
            data={data}
            chipType="outlined"
            value={valueMS}
            onChange={onChangeMS}

          />
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: 30,
    marginLeft: 20,
    marginRight: 20,
    flex: 1,
  },
  buttonView: {
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'row',
    marginTop: 10,
  },
});


export default Greetings;