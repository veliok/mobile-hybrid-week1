import React, { useState } from 'react';
import { Text, TextInput, View, StyleSheet } from "react-native";

const HeartRate = () => {
	const [number, setNumber] = useState('');

	const age = Number(number);
	const isValidAge = age >= 0 && age <= 110 && /^[0-9]*$/.test(number);
	const minHeartRate = isValidAge ? Math.round((220 - age) * 0.65) : null;
	const maxHeartRate = isValidAge ? Math.round((220 - age) * 0.85) : null;

	return (
		<View style={styles.container}>
			<Text style={styles.header}>Heart Rate Limits Calculator</Text>
			<Text style={styles.label}>Enter your age:</Text>

			<TextInput 
				style={styles.input}
				onChangeText={setNumber}
				value={number}
				placeholder="age"
				keyboardType="numeric"
				maxLength={3}
			/>

			{!isValidAge && number !== "" && (
				<>
        <Text style={styles.result}>Lower limit: 0 bpm</Text>
				<Text style={styles.result}>Lower limit: 0 bpm</Text>
				<Text style={styles.error}>Invalid input</Text>
				</>
      )}

			{minHeartRate !== null && (
				<Text style={styles.result}>Lower limit: {minHeartRate} bpm</Text>
			)}
			{maxHeartRate !== null && (
				<Text style={styles.result}>Lower limit: {maxHeartRate} bpm</Text>
			)}
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
	},
	header: {
		fontSize: 20,
		fontWeight: 'bold',
		padding: 6,
	},
	label: {
		fontSize: 20,
		padding: 12,
	},
	input: {
		borderWidth: 1,
		borderColor: "#000000ff",
		borderRadius: 8,
		textAlign: 'center',
		minWidth: 100,
		marginBottom: 20
	},
	result: {
		fontSize: 20,
		marginTop: 4,
	},
	error: {
		marginTop: 4,
		color: "#cd112aff",
	}
});

export default HeartRate;