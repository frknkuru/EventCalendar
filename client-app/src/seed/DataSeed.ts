import { Activity } from "../app/models/activity";
import { v4 as uuid } from 'uuid';
import ActivityStore from "../app/stores/activityStore";

export default class DataSeed {
    private activityStore: ActivityStore;
    activities: Activity[] = [];

    constructor(activityStore: ActivityStore) {
        this.activityStore = activityStore
        this.activities = [
            {
                id: uuid(),
                title: "Future Activity 1",
                date: "2023-09-22",
                description: "",
                category: "music",
                city: "London",
                venue: "Abraham Streeet"
            },
            {
                id: uuid(),
                title: "Future Activity 2",
                date: "2023-09-16",
                description: "",
                category: "food",
                city: "Liverpool",
                venue: "Lincoln Streeet"
            },
            {
                id: uuid(),
                title: "Future Activity 3",
                date: "2023-09-15",
                description: "",
                category: "travel",
                city: "Liverpool",
                venue: "Lincoln Streeet"
            },
            {
                id: uuid(),
                title: "Future Activity 4",
                date: "2023-09-15",
                description: "",
                category: "film",
                city: "Liverpool",
                venue: "Lincoln Streeet"
            }
        ];
    }

    async seed() {
        for (const activity of this.activities) {
            await this.activityStore.createActivity(activity);
        }
    }
}

