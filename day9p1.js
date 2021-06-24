let numbers = document.querySelector('pre').textContent.trim().split('\n').map(item => parseInt(item))
let findNumbersAddingUpTo = (array, sum) => {
    return array.reduce((acc, item) => {
        let pairItem = array.find(curr => {
            return ((curr + item) == sum && curr !== item)
        })
        if (pairItem) 
            acc = { item, pairItem }
        return acc
    }, undefined)
}
let index = 25
let brokenItems = []
while (index < numbers.length) {
    let {pairItem, item} = findNumbersAddingUpTo(numbers.slice(index - 25, index - 1), numbers[index]) || {}
    console.log(index, numbers[index], pairItem, item, pairItem + item, numbers[index] == (pairItem + item))
    if (pairItem && item)
        index++
    else {
        brokenItems.push(numbers[index])
        index++
    }
        
}
console.log(brokenItems)
