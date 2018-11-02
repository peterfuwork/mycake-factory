import { observable, computed, action, decorate } from "mobx";
import { observer } from "mobx-react";

class Store {
    cakes = [];
    votes = [];
    header = 'stuff';

    getCakes = (cakes) => { this.cakes.push(cakes) }

    // increment = () => { this.count++ }
    // addThing = (item) => { this.favoriteThings.push(this.newFavoriteThing) }
    // processWord = (val) => {
    //     this.newFavoriteThing = val;
    //     console.log(this.newFavoriteThing);

    // }
    //fetch request
}

decorate(Store, {
    cakes: observable,
    votes: observable,
    header: observable
});


export default new Store();