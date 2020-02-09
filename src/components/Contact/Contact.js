import React from 'react';
import './Contact.css'
import Citizen from '../Svg/Citizen';
import Professional from '../Svg/Professional';

const Contact = ({item}) => {
	const {name, background, rank, professional, phone, email} = item; //destructuring
	return (
		<div className="gallery-item">
			<div className="gallery-item-thumb">
				<div style={{backgroundImage: `url(${background})`}} className="gallery-item-thumb-image"/>
				<div className="item-details">
					{professional ? <Professional/> : <Citizen/>}
					<div className="item-details-text">
						<div className="shown-text">
							<div className="name">{name}</div>
							{getRank(rank)}
							<div>{phone}</div>
							<div>{email}</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

function getRank(rank) {
	const stars = [];
	for (let i = 0; i < rank; i++) {
		stars.push(<img key={i} src="//img.icons8.com/emoji/16/000000/star-emoji.png" alt=""/>
		)
	}
	return stars;
}

export default Contact
