function solve (data) {
    if (data.dizziness) {
        data.levelOfHydrated += (0.1 * data.weight) / data.experience;
        data.dizziness = false;
    }

    return data;
}

console.log(solve({ weight: 80,
    experience: 1,
    levelOfHydrated: 0,
    dizziness: true }));

console.log(solve({ weight: 120,
    experience: 20,
    levelOfHydrated: 200,
    dizziness: true }));

console.log(solve({ weight: 95,
    experience: 3,
    levelOfHydrated: 0,
    dizziness: false }));