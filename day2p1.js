let content = document.querySelector('pre').textContent.split('\n')
content = content.map(item => {
    const parts = item.split(' ')
    if (parts.length == 3) {
        const [min, max] = parts[0].split('-').map(item => parseInt(item))
        return {
            min,
            max,
            letter: parts[1].slice(0, -1),
            password: parts[2]
        }
    }
})
content.pop()
content.reduce((acc, curr) => {
    const letterCount = curr.password.split('').filter(letter => letter == curr.letter).length
    if (letterCount >= curr.min && letterCount <= curr.max)
        acc++
    return acc
}, 0)