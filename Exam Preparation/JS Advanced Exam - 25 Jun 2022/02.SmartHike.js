class SmartHike {
    constructor(username) {
        this.username = username;
        this.goals = {};
        this.listOfHikes = [];
        this.resources = 100;
    }

    addGoal(peak, altitude) {
        if (this.goals.hasOwnProperty(peak)) {
            return `${peak} has already been added to your goals`;
        }

        this.goals[peak] = altitude;
        return `You have successfully added a new goal - ${peak}`;
    }

    hike(peak, time, difficultyLevel) {
        if (!this.goals.hasOwnProperty(peak)) {
            throw new Error(`${peak} is not in your current goals`);
        }

        if (this.resources <= 0) {
            throw new Error("You don't have enough resources to start the hike");
        }
        let usedResourses = time * 10;
        let difference = this.resources - usedResourses;
        if (difference < 0) {
            return "You don't have enough resources to complete the hike";
        }

        this.resources -= usedResourses;
        let currentHike = {
            peak,
            time,
            difficultyLevel
        };
        this.listOfHikes.push(currentHike);
        return `You hiked ${peak} peak for ${time} hours and you have ${this.resources}% resources left`
    }

    rest(time) {
        let addResources = time * 10;
        if (this.resources + addResources >= 100) {
            this.resources = 100;
            return "Your resources are fully recharged. Time for hiking!";
        } else {
            this.resources += addResources;
            return `You have rested for ${time} hours and gained ${addResources}% resources`;
        }
    }

    showRecord(criteria) {

        if (!this.listOfHikes.length) {
            return `${this.username} has not done any hiking yet`;
        }

        if (criteria === "all") {
            let buff = "All hiking records:\n";
            this.listOfHikes
            .forEach(h => buff += `${this.username} hiked ${h.peak} for ${h.time} hours\n`);
            buff = buff.substring(0, buff.length - 1);
            return buff;
        }

        let hikeByCriteria = this.listOfHikes
            .filter(a => a.difficultyLevel === criteria)
            .sort((a,b) => a.time - b.time)[0];

        if (!hikeByCriteria) {
            return `${this.username} has not done any ${criteria} hiking yet`;
        }

        return `${this.username}'s best ${criteria} hike is ${hikeByCriteria.peak} peak, for ${hikeByCriteria.time} hours`;
    }
}

const user = new SmartHike('Vili');
user.addGoal('Musala', 2925);
user.hike('Musala', 8, 'hard');
console.log(user.showRecord('easy'));
user.addGoal('Vihren', 2914);
user.hike('Vihren', 4, 'hard');
console.log(user.showRecord('hard'));
user.addGoal('Rui', 1706);
user.hike('Rui', 3, 'easy');
console.log(user.showRecord('all'));
