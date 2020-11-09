import React, { useState, useEffect } from 'react';
import Search from '../components/Search';
import Categories from '../components/Categories';
import Carousel from '../components/Carousel';
import CarouselItem from '../components/CarouselItem';
import useInitialState from '../hooks/useInitialState'
import '../assets/styles/app.scss';

const API = 'http://localhost:3000/initalState';

const Home = () => {
	const InitialState = useInitialState(API);
	return InitialState.length === 0 ? <h1>Loading... </h1> : ( 
		<>
			<Search />
			{InitialState.mylist.length > 0 && 
				<Categories title="Mi lista">
					<Carousel>
					{InitialState.mylist.map((item) => 
					<CarouselItem key={item.id} {...item} />)}
					</Carousel>
				</Categories>
			}

			<Categories title="Tendencias">
				<Carousel>
					{InitialState.trends.map((item) => <CarouselItem key={item.id} {...item} />)}
					</Carousel>
			</Categories>

			<Categories title="Originales">
				<Carousel>
				{InitialState.originals.map((item) => <CarouselItem key={item.id} {...item} />)}
				</Carousel>
			</Categories>
		</>
	);
}

export default Home;
