import { ScrollView } from "react-native";
import React, { useState, useEffect } from "react";
import CategoryCard from "./CategoryCard";
import sanityClient from "../sanity";
import { urlfor } from "../sanity";

const Categories = () => {
	const [categories, setCategories] = useState([]);

	useEffect(() => {
		sanityClient
			.fetch(
				`
	 *[_type == "category"]
	`
			)
			.then((data) => {
				setCategories(data);
			});
	}, []);

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
			{categories.map((category) => (
				<CategoryCard
					imgUrl={urlfor(category.image).width(200).url()}
					title={category.name}
				/>
			))}
		</ScrollView>
	);
};

export default Categories;
