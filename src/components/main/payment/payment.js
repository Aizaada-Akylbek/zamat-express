import React from 'react';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import './payment.css';
import payLogoElsom from '../../../assets/img/elsom.svg';
import payLogoBalance from '../../../assets/img/balance.svg';
import payLogoO from '../../../assets/img/o.svg';
import payLogoVisa from '../../../assets/img/visa.svg';
import payLogoMbank from '../../../assets/img/m-bank.svg';

const Payment = () => {
	return (
		<div className='payment'>
			<Container
				maxWidth='lg'
				component='payment'
				sx={{
					mt: 8,
					py: [2, 8],
				}}>
				<div className='parent-payment'>
					<Grid
						id='payment-container'
						container
						spacing={2}
						justifyContent='space-between'>
						<Grid item xs={12}>
							<ul>
								<li className='payment-upper'>Способы оплаты</li>
								<li className='payment-bottom'>
									Оплачивайте услуги удобным способом
								</li>
							</ul>
						</Grid>
						<Grid id='payment-balance' item xs={2}>
							<ul>
								<li className='payment-logo'>
									<img src={payLogoBalance} alt='alt' />
								</li>
								<li className='payment-tel'>+996 (500) 005 006</li>
							</ul>
						</Grid>
						<Grid id='payment-elsom' item xs={2}>
							<ul>
								<li className='payment-logo'>
									<img src={payLogoElsom} alt='alt' />
								</li>
								<li className='payment-tel'>+996 (500) 005 006</li>
							</ul>
						</Grid>
						<Grid id='payment-o' item xs={2}>
							<ul>
								<li className='payment-logo'>
									<img src={payLogoO} alt='alt' />
								</li>
								<li className='payment-tel'>+996 (500) 005 006</li>
							</ul>
						</Grid>
						<Grid id='payment-visa' item xs={2}>
							<ul>
								<li className='payment-logo'>
									<img src={payLogoVisa} alt='alt' />
								</li>
								<li className='payment-tel'>+996 (500) 005 006</li>
							</ul>
						</Grid>
						<Grid id='payment-mbank' item xs={2}>
							<ul>
								<li className='payment-logo'>
									<img src={payLogoMbank} alt='alt' />
								</li>
								<li className='payment-tel'>+996 (500) 005 006</li>
							</ul>
						</Grid>
					</Grid>
				</div>
			</Container>
		</div>
	);
};
export default Payment;
