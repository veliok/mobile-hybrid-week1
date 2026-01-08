import React, { useState } from 'react';
import { Text, TextInput, View, StyleSheet } from "react-native";

const HeartRate = () => {
	const [number, setNumber] = useState('');

	const age = Number(number);
	const isValidAge = age >= 1 && age <= 110 && /^[0-9]*$/.test(number);
	const minHeartRate = isValidAge ? Math.round((220 - age) * 0.65) : 0;
	const maxHeartRate = isValidAge ? Math.round((220 - age) * 0.85) : 0;

	return (
		<View style={styles.container}>
			<Text style={styles.header}>Heart Rate Limits Calculator</Text>
			<Text style={styles.label}>Enter your age:</Text>

			<TextInput
				style={styles.input}
				onChangeText={setNumber}
				value={number}
				placeholder="age"
				placeholderTextColor={'gray'}
				keyboardType="numeric"
				maxLength={3}
			/>

			<Text style={styles.result}>Lower limit: {minHeartRate} bpm</Text>
			<Text style={styles.result}>Upper limit: {maxHeartRate} bpm</Text>

			{!isValidAge && number !== "" && (
				<>
					<Text style={styles.error}>Invalid input</Text>
				</>
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
		height: 30,
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