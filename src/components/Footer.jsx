import React from 'react';
import {
	FacebookShareButton,
	FacebookIcon,
	TwitterShareButton,
	TwitterIcon,
	RedditShareButton,
	RedditIcon,
	LinkedinShareButton,
	LinkedinIcon,
} from 'react-share';

export default function Footer() {
   return (
		<div className='footer'>
			<div className='container'>
				<div className='row inner-wrapper'>
					<div className='col-lg-4 col-md-6 col-sm-6'>
						<div className='d-flex'>
							<p>2021 Web-Vision. #017</p>
						</div>
						<div className='d-flex'>
							<>India</>
						</div>
						<div className='d-flex'>
							<a href='tel:901-425-5525'>(901)-525-5525</a>
						</div>
						<div className='d-flex'>
							<a href='mailto:mdbdrrhm@gmail.com'>
								XXXXXX@mail.com
							</a>
						</div>
					</div>
					<div className='col-lg-3 col-md-2 col-sm-6'>
						<div className='row'>
							<div className='col'>
								<a className='footer-nav' href="{null}">Home</a>
								<br />
								<a className='footer-nav' href="{null}">About</a>
								<br />
								<a className='footer-nav' href="{null}">Services</a>
							</div>
							<div className='col'>
							
								<a className='footer-nav' href="{null}">Contacts</a>
							</div>
						</div>
					</div>

					<div className='col-lg-5 col-md-5 col-sm-6 align-items-center'>
						<div className='d-flex justify-content-center'>
							<FacebookShareButton
								url={'https://www.facebook.com'}
								quote={'FullStack Developer'}
								hashtag='#javascript'
							>
								<FacebookIcon className='mx-3' size={36} />
							</FacebookShareButton>
							<TwitterShareButton
								url={'https://twitter.com'}
								quote={'FullStack Developer'}
								hashtag='#javascript'
							>
								<TwitterIcon className='mx-3' size={36} />
							</TwitterShareButton>
							<RedditShareButton
								url={'https://www.reddit.com'}
								quote={'FullStack Developer'}
								hashtag='#javascript'
							>
								<RedditIcon className='mx-3' size={36} />
							</RedditShareButton>
							<LinkedinShareButton
								url={'https://www.linkedin.com'}
								quote={'FullStack Developer'}
								hashtag='#javascript'
							>
								<LinkedinIcon className='mx-3' size={36} />
							</LinkedinShareButton>
						</div>
						<p className='pt-3 text-center'>
							Copyright&copy;
							{new Date().getFullYear()}&nbsp;New Horizon
						</p>
					</div>
				</div>
			</div>
		</div>
	);
};