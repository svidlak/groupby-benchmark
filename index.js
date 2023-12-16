const fs = require('fs');

const BENCHMARK_FILE = '1k_birthdates.json';
const SHOULD_LOG_GROUP_RESULTS = false;

const peoplesList = JSON.parse(fs.readFileSync(`${__dirname}/${BENCHMARK_FILE}`, 'utf-8'));

const groupByForLoop = () => {
    console.time('groupByForLoop');
    const peopleGroupedByYearOfBirth = {};

    for (let i = 0; i < peoplesList.length; i++) {
        const person = peoplesList[i];
        const { birth_year } = person;

        if (!peopleGroupedByYearOfBirth[birth_year]) {
            peopleGroupedByYearOfBirth[birth_year] = [];
        }

        peopleGroupedByYearOfBirth[birth_year].push(person);
    }

    console.timeEnd('groupByForLoop');
    logGroupsLength(peopleGroupedByYearOfBirth)
}

const groupByReduce = () => {
    console.time('groupByReduce');

    const peopleGroupedByYearOfBirth = peoplesList.reduce((map, person) => {
        const { birth_year } = person;

        if (!map[birth_year]) {
            map[birth_year] = [];
        }

        map[birth_year].push(person);
        return map;
    }, {});

    console.timeEnd('groupByReduce');
    logGroupsLength(peopleGroupedByYearOfBirth)
}

const groupByForOf = () => {
    console.time('groupByForOf');

    const peopleGroupedByYearOfBirth = {};

    for (let person of peoplesList) {
        const { birth_year } = person;

        if (!peopleGroupedByYearOfBirth[birth_year]) {
            peopleGroupedByYearOfBirth[birth_year] = [];
        }

        peopleGroupedByYearOfBirth[birth_year].push(person);
    }

    console.timeEnd('groupByForOf');
    logGroupsLength(peopleGroupedByYearOfBirth);
}

const forEachGroupBy = () => {
    console.time('forEachGroupBy');

    const map = {};
    peoplesList.forEach(person => {
        const { birth_year } = person;

        if (!map[birth_year]) {
            map[birth_year] = [];
        }

        map[birth_year].push(person);
    })

    console.timeEnd('forEachGroupBy');
    logGroupsLength(map)
}

const objectGroupBy = () => {
    console.time('objectGroupBy');

    const peopleGroupedByYearOfBirth = Object.groupBy(peoplesList, ({ birth_year }) => birth_year);

    console.timeEnd('objectGroupBy');
    logGroupsLength(peopleGroupedByYearOfBirth)
}

const logGroupsLength = (mapObject) => {
    if(!SHOULD_LOG_GROUP_RESULTS) return;

    Object.keys(mapObject).forEach(key => {
        console.log(`${key}: ${mapObject[key].length}`);
    })
}

// groupByForLoop();
// groupByReduce();
// groupByForOf();
// objectGroupBy();
forEachGroupBy();
