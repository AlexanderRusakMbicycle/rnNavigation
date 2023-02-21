import React from 'react';
import {useFocusEffect, useNavigation} from '@react-navigation/native';
import {useState} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';

interface SimpleScreenComponentProps {
  name: string;
  next: string | null;
}

export const SimpleScreenComponent = ({
  name,
  next,
}: SimpleScreenComponentProps) => {
  const {navigate} = useNavigation();

  const handleClickHandler = () => {
    next && navigate(next);
  };

  const [time, setTime] = useState(0);

  useFocusEffect(
    React.useCallback(() => {  
        
      let timeout = 0;
      timeout = setTimeout(() => {
        setTime(prev => prev + 1);
      }, 1000);
      return () => {
        clearTimeout(timeout);
      };
    }, [time]),
  );

  return (
    <View style={styles.container}>
      <Text>{name}</Text>
      <TouchableOpacity onPress={handleClickHandler}>
        {!!next ? (
          <View>
            <Text>Go Forward</Text>
          </View>
        ) : null}
      </TouchableOpacity>
      <View>
        <Text>{time} sec on this screen</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ccc',
  },
});
