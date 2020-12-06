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
let filteredByNumberOfFields = passports.filter(item => reqFields.every(field => item[field]))
let filteredPassports = filteredByNumberOfFields.filter(item => {
    const {byr, iyr, eyr, hgt, hcl, ecl, pid} = item
    if (byr.length !== 4 || parseInt(byr) < 1920 || parseInt(byr) > 2003) {
        console.log(`Invalid field, byr:`, byr)
        return false
    }
    if (iyr.length !== 4 || parseInt(iyr) < 2010 || parseInt(iyr) > 2020) {
        console.log(`Invalid field, iyr:`, iyr)
        return false
    }
    if (eyr.length !== 4 || parseInt(eyr) < 2020 || parseInt(eyr) > 2030) {
        console.log(`Invalid field, eyr:`, eyr)
        return false
    }
    if (!hcl.match(/^#[\da-f]{6}$/)) {
        console.log(`Invalid field, hcl:`, hcl)
        return false
    }
    if (!['amb', 'blu', 'brn', 'gry', 'grn', 'hzl', 'oth'].includes(ecl)) {
        console.log(`Invalid field, ecl:`, ecl)
        return false
    }
    if (!pid.match(/^\d{9}$/)) {
        console.log(`Invalid field, pid:`, pid)
        return false
    }
    const height = hgt.match(/(\d+)(in|cm)$/)
    if (!height) {
        console.log(`Invalid field, hgt:`, hgt)
        return false
    }
    const [, value, unit] = height
    if (unit === 'in' && (parseInt(value) < 59 || parseInt(value) > 76)) {
        console.log(`Invalid field inches, hgt:`, hgt)
        return false
    }
    if (unit === 'cm' && (parseInt(value) < 150 || parseInt(value) > 193)) {
        console.log(`Invalid field cm, hgt:`, hgt)
        return false
    }
    return true
})
console.log(filteredPassports.length)