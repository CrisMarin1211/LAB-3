export enum Attribute {
	'name' = `name`,
	'uid' = `uid`,
	'image' = `image`,
	'age' = `age`,
	'gender' = `gender`,
	'area' = `area`,
	'position' = `position`,
	'timeInCompany' = `timeInCompany`,
	'experience' = `experience`,
}

class Mycomponent extends HTMLElement {
	name?: string;
	uid?: number;
	image?: string;
	age?: number;
	gender?: string;
	area?: string;
	position?: string;
	timeInCompany?: number;
	experience?: number;

	constructor() {
		super(); // always call super() first in the ctor.
		this.attachShadow({ mode: 'open' });
	}

	static get observedAttributes() {
		const attrs: Record<Attribute, null> = {
			name: null,
			uid: null,
			image: null,
			age: null,
			gender: null,
			area: null,
			position: null,
			timeInCompany: null,
			experience: null,
		};
		return Object.keys(attrs);
	}

	attributeChangedCallback(propName: Attribute, oldValue: string | undefined, newValue: string | undefined) {
		switch (propName) {
			case Attribute.uid:
				this.uid = newValue ? Number(newValue) : undefined;
				break;

			case Attribute.age:
				this.age = newValue ? Number(newValue) : undefined;
				break;

			case Attribute.timeInCompany:
				this.timeInCompany = newValue ? Number(newValue) : undefined;
				break;

			case Attribute.experience:
				this.experience = newValue ? Number(newValue) : undefined;
				break;

			default:
				this[propName] = newValue;
				break;
		}

		this.render();
	}
	connectedCallback() {
		this.render();
	}

	render() {
		if (this.shadowRoot) {
			this.shadowRoot.innerHTML = `
   <section>
   <h1>${this.name}</h1>
   <p>${this.uid}</p>
   <img src="${this.image}" alt="">
   </section>
   `;
		}
	}
}

export default Mycomponent;
customElements.define('my-component', Mycomponent);
