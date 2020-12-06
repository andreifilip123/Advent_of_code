let content = document.querySelector('pre').textContent.trim().split('\n\n')
let passports = content.map(item => {
    const fields = item.split('\n').join(',').split(' ').join(',').split(',')
    let itemObj = fields.reduce((acc, curr) => {
        const [key, value] = curr.split(':')
        acc[key] = value
        return acc
    }, {})
    return itemObj
})
const reqFields = ['byr', 'iyr', 'eyr', 'hgt', 'hcl', 'ecl', 'pid']
let filteredPassports = passports.filter(item => reqFields.every(field => item[field]))
console.log(filteredPassports.length)