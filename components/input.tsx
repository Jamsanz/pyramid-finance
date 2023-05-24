import { View, StyleSheet, TextInput, TextInputProps } from 'react-native'
import React, { forwardRef } from 'react';

interface InputProps extends TextInputProps {
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  helperText?: string;
  isInvalid?: boolean;
  isRequired?: boolean;
}

const Input = ({ leftIcon, rightIcon, ...props }: InputProps, ref: React.LegacyRef<TextInput> | undefined) => {
  return (
    <View style={styles.container}>
      {/* conditionally rendered left Icon */}
      {leftIcon && <View> {leftIcon} </View>}

      <TextInput
        style={[styles.input, props.style]}
        placeholderTextColor={"#767676"}
        {...props}
        ref={ref}
      />

      {/* conditionally rendered right Icon */}
      {rightIcon && <View> {rightIcon} </View>}
    </View>
  )
}

export default forwardRef(Input);

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: '#F5F5F5',
    paddingVertical: 11,
    paddingHorizontal: 18,
    columnGap: 17,
    borderRadius: 8
  },
  input: {
    flex: 1,
    fontSize: 14
  }
});