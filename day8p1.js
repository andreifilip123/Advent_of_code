let content = document.querySelector("pre").textContent.trim().split("\n");
content = content.map((item, index) => `${index} ${item}`)

let doOps = (ops) => {
    let acc = 0
    let usedInstructions = []
    let index = 0
    while (true) {
        if (usedInstructions.find(item => item == index))
            break
        if (/\d+ (acc|jmp|nop) (\+|-)(\d+)/.test(ops[index])) {
            let [, op, sign, value] = /\d+ (acc|jmp|nop) (\+|-)(\d+)/.exec(ops[index])
            usedInstructions.push(index)
            switch (op) {
                case 'acc':
                    if (sign == '+')
                        acc += parseInt(value)
                    else
                        acc -= parseInt(value)
                    index++
                    break;
                case 'jmp':
                    if (sign == '+')
                        index += parseInt(value)
                    else
                        index -= parseInt(value)
                    break;
                case 'nop':
                    index++
                    break;
                default:
                    console.log(`undefined operation: ${op}`)
            }
        }
    }
    console.log(acc)
    return index
}

let opIndex = 0
do {
    if (content[opIndex].indexOf('jmp') !== -1) {
        console.log(`Replacing jmp with nop at ${opIndex}`)
        content[opIndex].replace('jmp', 'nop')
        console.log(doOps(content), content.length - 1)
        if (doOps(content) === content.length - 1) {
            break
        } else {
            content[opIndex].replace('nop', 'jmp')
        }
    } else if (content[opIndex].indexOf('nop') !== -1) {
        console.log(`Replacing nop with jmp at ${opIndex}`)
        content[opIndex].replace('nop', 'jmp')
        console.log(doOps(content), content.length - 1)
        if (doOps(content) === content.length - 1) {
            break
        } else {
            content[opIndex].replace('jmp', 'nop')
        }
    }
    opIndex++
} while (true)
