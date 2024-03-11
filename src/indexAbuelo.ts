import { workers } from './data/data';
import './components/indexPadre';
import MyComponent, { Attribute } from './components/myComponents/myComponents';
import { string } from '../../../node_modules/mathjs/types/index';
import Mycomponent from './components/myComponents/myComponents';

class AppContainer extends HTMLElement {
	myComponents: MyComponent[] = [];

	constructor() {
		super();
		this.attachShadow({ mode: `open` });

		workers.forEach((user) => {
			const myComponentsCard = this.ownerDocument.createElement(`My-Component`) as MyComponent;
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
