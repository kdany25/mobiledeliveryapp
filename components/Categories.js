import { View, Text, ScrollView } from "react-native";
import React from "react";
import CategoryCard from "./CategoryCard";

const Categories = () => {
	return (
		<ScrollView
			contentContainerStyle={{
				paddingHorizontal: 15,
				paddingTop: 10,
			}}
			horizontal
			showsHorizontalScrollIndicator={false}
		>
			{/* Categories Card*/}
			<CategoryCard
				imgUrl="https://links.papareact.com/wru"
				title="testing 01"
			/>
			<CategoryCard
				imgUrl="https://links.papareact.com/wru"
				title="testing 02"
			/>
			<CategoryCard
				imgUrl="https://links.papareact.com/wru"
				title="testing 03"
			/>
      			<CategoryCard
				imgUrl="https://links.papareact.com/wru"
				title="testing 04"
			/>
			<CategoryCard
				imgUrl="https://links.papareact.com/wru"
				title="testing 05"
			/>
			<CategoryCard
				imgUrl="https://links.papareact.com/wru"
				title="testing 07"
			/>
		</ScrollView>
	);
};

export default Categories;
