export function calculateExperience() {
    let startingDate = new Date("6/4/2022");
    let diff = (Date.now() - startingDate) / (1000 * 60 * 60 * 24 * 365);
    return `${Math.floor(diff)}${Math.round(diff) !== Math.floor(diff) && '+'}`;
}