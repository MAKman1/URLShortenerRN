import React, { useEffect } from 'react';
import {
	View, Text
} from 'react-native';
import style from './style';

export const Home = ({ navigation }) => {


	useEffect(() => {

	}, []);

	return (
		<View style={style.container}>
			<Text>{"Hi"}</Text>
		</View>
	);
};
