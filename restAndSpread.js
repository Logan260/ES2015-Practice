1. const filterOutOdds = (...arguments) => arguments.filter(v => v % 2 === 0)

2. const findMin = (...arguments) => Math.min(...arguments)

3. const mergeObjects = (obj1, obj2) => ({...obj1, ...obj2})

4. const doubleAndReturnArgs = (arr, ...arguments) => [...arr, ...arguments.map(v => v * 2)]

5. const removeRandom = items => {
    let index = Math.floor(Math.random() * items.length);
    return [...items.slice(0, index), ...items.slice(index + 1)];
}

6. const arrs = (array1, array2) => {
    return [...array1, ...array2];
}

7. const addKeyValue = (obj, key, val) => {
    let newObj = {...obj}
    newObj[key] = val;
    return newObj;
}

8. const removeKeys = (obj, key) => {
    let newObj = {...obj}
    newObj[key] =val;
    return newObj;
}

9. const combine = (obj1, obj2) =>{
    return {...obj1, ...obj2};
}

10. const update = (obj, key, val) => {
    let newObj = {...obj}
    newObj[key] = val;
    return newObj;
}