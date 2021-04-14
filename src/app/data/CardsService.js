import {httpHelper} from "../helpers/HttpHelper";
import {ReplaySubject} from "rxjs";

const byId = "/meals/id";
const todoUrl = "/cards?tags=1,2";
const inProgressUrl = "/cards?tags=1&size=50";
const blockedUrl = "/cards?tags=1&size=50";
const followUpUrl = "/cards?tags=3&size=50";

class CardsService {

    loadById(id, onLoaded: (data: any) => {}): ReplaySubject {
        return httpHelper.get(byId.replace("id", id), onLoaded);
    }

    loadToDo(onLoaded: (data: any) => {}): ReplaySubject {
        return httpHelper.get(todoUrl, onLoaded);
    }

    loadInProgress(onLoaded: (data: any) => {}): ReplaySubject {
        return httpHelper.get(inProgressUrl, onLoaded);
    }

    loadBlocked(onLoaded: (data: any) => {}): ReplaySubject {
        return httpHelper.get(blockedUrl, onLoaded);
    }

    loadFollowUp(onLoaded: (data: any) => {}): ReplaySubject {
        return httpHelper.get(followUpUrl, onLoaded);
    }
}

export const cardsService: CardsService = new CardsService()