class footballTeam {
    constructor(clubName, country) {
        this.clubName = clubName;
        this.country = country;
        this.invitedPlayers = [];
    }

    newAdditions(footballPlayers) {
        let newPlayer = [];
        for (let ele of footballPlayers) {
            let [name, age, value] = ele.split("/");
            let current = this.invitedPlayers.find(p => p.name === name);
            if (!current) {
                let player = {
                    name,
                    age: Number(age),
                    playerValue: Number(value)
                }
                this.invitedPlayers.push(player);
                newPlayer.push(name);
                continue;
            }
            if (current.playerValue < Number(value)) {
                current.playerValue = Number(value);
            }
        }

        return `You successfully invite ${newPlayer.join(", ")}.`;
    }

    signContract(selectedPlayer) {
        let [name, playerOffer] = selectedPlayer.split("/");
        let current = this.invitedPlayers.find(p => p.name === name);
        if (!current) {
            throw new Error(`${name} is not invited to the selection list!`);
        }

        if (playerOffer < current.playerValue) {
            let priceDifference = Math.abs(Number(playerOffer) - current.playerValue);
            throw new Error(`The manager's offer is not enough to sign a contract with ${name}, ${priceDifference} million more are needed to sign the contract!`);
        }

        current.playerValue = "Bought";
        return `Congratulations! You sign a contract with ${name} for ${playerOffer} million dollars.`;
    }

    ageLimit(name, age) {
        let current = this.invitedPlayers.find(p => p.name === name);
        if (!current) {
            throw new Error(`${name} is not invited to the selection list!`);
        }

        if (current.age < Number(age)) {
            let ageDifference = Math.abs(Number(age) - current.age);
            if (ageDifference <= 5) {
                return `${name} will sign a contract for ${ageDifference} years with ${this.clubName} in ${this.country}!`;
            }
            if (ageDifference > 5) {
                return `${name} will sign a full 5 years contract for ${this.clubName} in ${this.country}!`;
            }
        } else {
            return `${name} is above age limit!`;
        }
    }

    transferWindowResult() {
        let res = "Players list:\n";
        this.invitedPlayers.sort((a, b) => a.name.localeCompare(b.name))
            .forEach(p => res += `Player ${p.name}-${p.playerValue}\n`);
        res =  res.substring(0, res.length - 1);
        return res;
    }
}

let fTeam = new footballTeam("Barcelona", "Spain");
console.log(fTeam.newAdditions(["Kylian Mbappé/23/160", "Lionel Messi/35/50", "Pau Torres/25/52"]));
console.log(fTeam.signContract("Kylian Mbappé/240"));
console.log(fTeam.ageLimit("Kylian Mbappé", 30));
console.log(fTeam.transferWindowResult());