const findTheOldest = function(people) {

    let newPeople = people.reduce((current, oldest) =>
    {
        currentAge = getAge(current.yearOfBirth , current.yearOfDeath)
        oldestAge = getAge(oldest.yearOfBirth , oldest.yearOfDeath)

        return oldestAge < currentAge ? current : oldest
    }
    )
function getAge (birth , death)
{
    if(!death)
    {
        death = new Date().getFullYear()

    }
    return death - birth
}

return newPeople
};

// Do not edit below this line
module.exports = findTheOldest;
