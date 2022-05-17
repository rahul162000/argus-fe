/* eslint-disable jsx-a11y/img-redundant-alt */
import React from "react";
import { API } from "../api";

const Imagehelper = ({param, id }) => {
	let imageUrl = id
		? `${API}/${param}/get-photo/${id}`
		: "";
	return (
		<div className='' style = {
			{

			}
		}> 
			<img
				src={imageUrl}
				alt='photo'
			/>
		</div>
	);
};

export default Imagehelper;
