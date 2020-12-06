let content = document.querySelector('pre').textContent.trim().split('\n')

let getSeatId = code => {
    let row = code.substring(0, 7);
    let column = code.substring(7, 10);
    let rowBinary = row.replaceAll('B', '1').replaceAll('F', '0');
    rowBinary = parseInt(rowBinary, 2);
    let columnBinary = column.replaceAll('R', '1').replaceAll('L', '0');
    columnBinary = parseInt(columnBinary, 2)
    return rowBinary * 8 + columnBinary
}

let allSeats = content.map(getSeatId)
let sortedSeats = allSeats.sort((a, b) => a-b)
let emptySeat = sortedSeats.find((item, index, array) => {
    if (item - array[index - 1] > 1) {
        return array[index - 1] - 1
    }
    return false
})
console.log(emptySeat - 1)
