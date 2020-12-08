let content = document.querySelector('pre').textContent.trim().split('\n')
let mappedBags = content.reduce((acc,curr) => {
    if(curr.match(/(.*) bags contain/)) {
        let str = curr
        let nextMatch, times, nextColor
        let [fullMatch, color] = str.match(/(.*) bags contain/)
        acc[color] = {}
        str = str.slice(fullMatch.length)
        do {
            if (str.match(/(\d+) ([\w ]+) bags?/)) {
                [nextMatch, times, nextColor] = str.match(/(\d+) ([\w ]+) bags?/)
                acc[color][nextColor] = parseInt(times)
                str = str.slice(nextMatch.length)
            } else {
                nextColor = false
            }
        } while (!!nextColor)
    }
    return acc
}, {})

findItemsContainingColor = (array, color) => {
    let items = []
    for (let key in array) {
        if (mappedBags[key][color])
            items.push(key)
    }
    return items
}

let checkedColors = []

let recursiveSearch = colors => {
    if (Array.isArray(colors) && colors.length == 0)
        return
    colors.map(color => {
        let colorsFound = findItemsContainingColor(mappedBags, color)
        checkedColors.push(...colorsFound)
        recursiveSearch(colorsFound)
    })
}
recursiveSearch(['shiny gold'])
checkedColors = [...new Set(checkedColors)]