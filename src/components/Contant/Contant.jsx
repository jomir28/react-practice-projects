import { useLoaderData } from "react-router-dom";

const Contant = () => {
    const details = useLoaderData()
    const{cover_image, title, description, readable_publish_date ,id} =details;
    return (
        <div className=" mx-auto group hover:no-underline focus:no-underline  p-2 hover:border-pink-600  hover:border-2 border-gray-500 border-2">
		<img role="presentation" className="object-cover w-full rounded h-44 bg-gray-500" src={cover_image} />
		<div className="p-6 space-y-2">
			<h3 className="text-2xl font-semibold group-hover:underline group-focus:underline">{title}</h3>
			<span className="text-xs">{readable_publish_date}, 2021</span>
			<p>{description}</p>
		</div>
	</div>
    );
};

export default Contant;