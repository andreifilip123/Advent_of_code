let treesOnSlope = (right, down) => {
    let content = document.querySelector('pre').textContent.trim().split('\n')
    content.map(row => row.split(''))
    let i = down, j = right, treeCount = 0
    while (i < content.length) {
        if(j >= content[0].length)
            j -= content[0].length
        if (content[i][j] == '#')
            treeCount++
        i += down
        j += right
    }
    return treeCount
}
let slopes = [
    { right: 1, down: 1 },
    { right: 3, down: 1 },
    { right: 5, down: 1 },
    { right: 7, down: 1 },
    { right: 1, down: 2 },
]
slopes.reduce((acc, item) => {
    return acc * treesOnSlope(item['right'], item['down'])
}, 1)