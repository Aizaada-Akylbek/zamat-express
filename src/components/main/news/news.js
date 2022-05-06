import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import * as React from "react";
import "./news.css";
import imgNews from "../../../assets/img/news.svg";
import api from "../../../services/service";
import { Link } from "react-router-dom";

export default function News() {
	const [news, setNews] = React.useState([]);

	React.useEffect(() => {
		const getOrders = async () => {
			const { data: news } = await api.client.get_news();
			setNews([...news.slice(0, 9)]);
		};
		getOrders();
	}, []);

	return (
		<div className='news-wrap'>
			<Container sx={{ py: 8 }} maxWidth='md'>
				<div className='parent-news'>
					<Typography className='news-name'>Новости</Typography>
					<Grid container spacing={4}>
						{news.map((card, index) => {
							let date = new Date(Date.parse(card.date));
							let options = {
								year: "numeric",
								month: "long",
								day: "numeric",
							};
							let newsDate = date.toLocaleString("ru", options, 'wahhha');
							console.log(newsDate);
							return (
								<Grid
									sx={{ display: "flex", alignItems: "stretch" }}
									item
									key={index}
									xs={12}
									sm={6}
									md={4}>
									<Card
										sx={{
											width: "100%",
											height: "400px",
											display: "flex",
											alignItems: "stretch",
											pt: "32px",
											flexDirection: "column",
										}}>
										<CardMedia
											className='photo-card'
											image={card.img ?? imgNews}
											sx={{
												width: "190px",
												pt: "107px",
												mb: "25px",
												mx: "auto",
											}}
											alt='alt'
										/>
										<CardContent sx={{ flexGrow: 1 }}>
											<Typography
												className='first-line'
												gutterBottom
												variant='h3'
												component='h3'>
												{card.title}
											</Typography>
											<Typography className='second-line'>
												{card.body.length > 15
													? card.body.substring(0, 45) + "..."
													: null}
											</Typography>
											<Typography className='date-line'>{newsDate}</Typography>
											<Link to={`/${card.id}`}>
												<button className='btn-more'>подробнее</button>
											</Link>
										</CardContent>
									</Card>
								</Grid>
							);
						})}
					</Grid>
				</div>
			</Container>
		</div>
	);
}
