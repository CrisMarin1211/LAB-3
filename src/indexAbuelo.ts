import * as MyComponents from './components/indexPadre';
import Mycomponent, { Attribute } from './components/myComponents/myComponents';
import { DataShape, workers } from './data/data';

const filterParUid = (user: DataShape) => {
	console.log(user.id);
	return user.id % 2 == 0;
};

class AppContainer extends HTMLElement {
	myComponents: Mycomponent[] = [];

	constructor() {
		super();
		this.attachShadow({ mode: `open` });

		workers.forEach((user) => {
			const myComponentsCard = this.ownerDocument.createElement(`My-Component`) as Mycomponent;
			myComponentsCard.setAttribute(Attribute.name, user.name);
			myComponentsCard.setAttribute(Attribute.uid, String(user.id));
			myComponentsCard.setAttribute(Attribute.image, user.image);
			myComponentsCard.setAttribute(Attribute.age, String(user.age));
			myComponentsCard.setAttribute(Attribute.gender, user.gender);
			myComponentsCard.setAttribute(Attribute.area, user.jobDetails.area);
			myComponentsCard.setAttribute(Attribute.position, user.jobDetails.position);
			myComponentsCard.setAttribute(Attribute.timeInCompany, String(user.jobDetails.timeInCompany));
			myComponentsCard.setAttribute(Attribute.experience, String(user.jobDetails.experience));

			this.myComponents.push(myComponentsCard);
		});
	}
	connectedCallback() {
		this.render();
	}

	render() {
		if (this.shadowRoot) {
			this.myComponents.forEach((MyComponent) => {
				this.shadowRoot?.appendChild(MyComponent);
			});
		}
	}
}

customElements.define('app-container', AppContainer);
