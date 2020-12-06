let content = document.querySelector('pre').textContent.split('\n')
content = content.map(item => {
    const parts = item.split(' ')
    if (parts.length == 3) {
        const [pos1, pos2] = parts[0].split('-').map(item => parseInt(item))
        return {
            pos1,
            pos2,
            letter: parts[1].slice(0, -1),
            password: parts[2]
        }
    }
})
content.pop()
content.reduce((acc, curr) => {
    const {password, pos1, pos2, letter} = curr
    if ((password.charAt(pos1 - 1) == letter && password.charAt(pos2 - 1) != letter)
        || (password.charAt(pos1 - 1) != letter && password.charAt(pos2 - 1) == letter))
        acc++
    return acc
}, 0)