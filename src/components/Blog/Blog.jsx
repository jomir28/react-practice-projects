import { Link } from 'react-router-dom';
import errimage from '../../assets/404.jpg'

const Blog = ({blog}) => {
	const{cover_image, title, description, readable_publish_date ,id} =blog;
    // console.log(blog)
    return (
		<Link to={`/blog/${id}`} rel="noopener noreferrer" href="#" className="max-w-sm mx-auto group hover:no-underline focus:no-underline  p-2 hover:border-pink-600 bg-gray-600 hover:border-2 hover:scale-105">
		<img role="presentation" className="object-cover w-full rounded h-44 bg-gray-500" src={cover_image ? cover_image:errimage} />
		<div className="p-6 space-y-2">
			<h3 className="text-2xl font-semibold group-hover:underline group-focus:underline">{title}</h3>
			<span className="text-xs">{readable_publish_date}, 2021</span>
			<p>{description}</p>
		</div>
	</Link>
    );
};

export default Blog;