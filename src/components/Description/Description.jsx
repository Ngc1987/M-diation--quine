import description from "../../assets/description.jpg";
import "./Description.scss"

const Description = () => {
	return (
		<section className="description" >
			<div className="description__image">
				<img src={description} alt="deux chevaux face à deux personnes" />
				<div className="description__image-layout"></div>
				<div className="description__image-text">
					<h2>Le cheval, un gros animal !</h2>
					<h3>Séances de médiation équine en Vendée</h3>
				</div>
			</div>

			<article className="description__article" >
				<p>
					Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquam eius odio, dolorum rerum necessitatibus esse eaque, soluta nostrum eveniet voluptatum ducimus ea molestiae tenetur temporibus! Temporibus minima culpa error? Corrupti nisi pariatur similique reprehenderit inventore libero at error vitae veniam qui esse magni dolore quod, possimus, ut saepe in quia? Quos incidunt temporibus minima, vitae, facilis labore consequuntur natus esse eius officia possimus, quas voluptatibus? Aliquid distinctio ducimus ratione illum alias amet fuga molestias ea quod accusamus inventore, placeat assumenda possimus incidunt quas magni voluptatem, perspiciatis, modi fugit impedit dicta. Cum reiciendis cumque fuga error dolorem consequatur ratione possimus dolor ipsum optio nihil necessitatibus praesentium eius voluptatum cupiditate architecto, quia sapiente earum in sit! Ipsa nostrum cumque reprehenderit, commodi tempora beatae necessitatibus a omnis placeat dignissimos incidunt et at consectetur asperiores! Molestias, vero velit recusandae repellendus nostrum neque modi autem iure maiores provident fuga, amet sint, perferendis exercitationem culpa dignissimos quod omnis ducimus incidunt animi expedita quo eos rerum. Debitis odio minima, corporis architecto in error recusandae blanditiis porro ab laudantium quam sapiente, exercitationem voluptas modi aperiam consectetur voluptatum perspiciatis a iure facere provident explicabo dolorum vel. Voluptate, voluptatibus dolorem? Nulla natus vel quam! Rerum incidunt facere quas omnis ad!
				</p>
			</article>

		</section>
	)
}

export default Description
